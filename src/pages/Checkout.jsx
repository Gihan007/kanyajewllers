import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, MessageCircle, Check, FileDown } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatPrice, getProductById } from "../data/products";
import { store, bankConfigured, cardEnabled, ordersOpen } from "../config";
import { downloadOrderSlipPdf } from "../lib/orderSlipPdf";

const inputClass =
  "w-full rounded-lg border border-ink/16 bg-panel px-4 py-3 text-sm text-pearl placeholder:text-mist/50 outline-none focus:border-gold";

const LAST_ORDER_KEY = "kanya-last-order";

const makeOrderNumber = () => {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `KJ-${String(d.getFullYear()).slice(2)}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${rand}`;
};

const whatsappUrl = (order) => {
  const lines = [
    `*New order ${order.orderNumber}*`,
    `Name: ${order.customer.name}`,
    `Phone: ${order.customer.phone}`,
    ...(order.customer.email ? [`Email: ${order.customer.email}`] : []),
    `Address: ${order.customer.address}, ${order.customer.city}${order.customer.postalCode ? " " + order.customer.postalCode : ""}`,
    `Payment: ${order.payment}`,
    "",
    "Items:",
    ...order.items.map((i) => `${i.qty} x ${i.name} - ${formatPrice(i.lineTotal)}`),
    "",
    `Subtotal: ${formatPrice(order.subtotal)}`,
    `Shipping: ${order.shipping === 0 ? "Free" : formatPrice(order.shipping)}`,
    `*Total: ${formatPrice(order.total)}*`,
    ...(order.customer.notes ? [`Notes: ${order.customer.notes}`] : []),
  ];
  return `https://wa.me/${store.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(lines.join("\n"))}`;
};

function sendToSheet(order) {
  if (!store.orderEndpoint) return;
  fetch(store.orderEndpoint, {
    method: "POST",
    mode: "no-cors",
    keepalive: true,
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(order),
  }).catch(() => {
    // WhatsApp is the backup channel if the sheet cannot be reached
  });
}

// Card payments: the Google script checks the prices and signs the payment, then the customer is sent to PayHere.
async function startCardPayment(order) {
  const res = await fetch(store.orderEndpoint, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ ...order, action: "payhere-start" }),
  });
  const data = await res.json();
  if (!data.ok) throw new Error(data.error || "Could not start the payment");
  return data;
}

function submitToPayHere(order, data) {
  const [firstName, ...rest] = order.customer.name.split(" ");
  const fields = {
    merchant_id: data.merchantId,
    return_url: `${window.location.origin}/payment-return?order=${encodeURIComponent(order.orderNumber)}`,
    cancel_url: `${window.location.origin}/checkout`,
    notify_url: store.orderEndpoint,
    order_id: data.orderId,
    items: `KANYA order ${order.orderNumber}`,
    currency: data.currency,
    amount: data.amount,
    first_name: firstName,
    last_name: rest.join(" ") || "-",
    email: order.customer.email,
    phone: order.customer.phone,
    address: order.customer.address,
    city: order.customer.city,
    country: "Sri Lanka",
    hash: data.hash,
  };
  const form = document.createElement("form");
  form.method = "POST";
  form.action = store.payhere.sandbox ? "https://sandbox.payhere.lk/pay/checkout" : "https://www.payhere.lk/pay/checkout";
  Object.entries(fields).forEach(([name, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  });
  document.body.appendChild(form);
  form.submit();
}

function Confirmation({ order }) {
  const bank = order.payment === "Bank transfer";
  const [pdfBusy, setPdfBusy] = useState(false);
  const downloadPdf = async () => {
    setPdfBusy(true);
    try {
      await downloadOrderSlipPdf(order);
    } finally {
      setPdfBusy(false);
    }
  };
  return (
    <div className="bg-aurora min-h-[70vh]">
      <div className="mx-auto max-w-2xl px-6 py-20 text-center lg:px-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Check size={28} />
        </span>
        <h1 className="mt-6 font-display text-4xl text-pearl">Thank you, {order.customer.name.split(" ")[0]}</h1>
        <p className="mt-3 text-mist">
          Your order <span className="font-medium text-pearl">{order.orderNumber}</span> has been recorded.
        </p>

        <div className="mt-8 rounded-2xl border border-ink/16 bg-panel p-6 text-left">
          <p className="text-sm text-pearl">
            <span className="text-gold">Next step:</span> tap the button below and press <strong>Send</strong> in
            WhatsApp so we can confirm your order. If WhatsApp did not open on its own, use the button.
          </p>
          <a
            href={whatsappUrl(order)}
            target="_blank"
            rel="noreferrer"
            className="btn-dark mt-5 flex w-full items-center justify-center gap-2 py-3.5 text-sm uppercase tracking-wider"
          >
            <MessageCircle size={18} /> Send order on WhatsApp
          </a>
          <button
            type="button"
            onClick={downloadPdf}
            disabled={pdfBusy}
            className="btn-outline-dark mt-3 flex w-full items-center justify-center gap-2 py-3.5 text-sm uppercase tracking-wider disabled:opacity-60"
          >
            <FileDown size={18} /> {pdfBusy ? "Preparing PDF…" : "Download order slip (PDF)"}
          </button>
        </div>

        {bank && (
          <div className="mt-6 rounded-2xl border border-ink/16 bg-panel p-6 text-left">
            <h2 className="text-xs uppercase tracking-[0.2em] text-gold">Pay by bank transfer</h2>
            <p className="mt-3 text-sm text-mist">
              Please transfer <span className="text-pearl">{formatPrice(order.total)}</span> and send us the payment
              slip on WhatsApp. Use <span className="text-pearl">{order.orderNumber}</span> as the reference. We
              pack your order after the payment is confirmed.
            </p>
            <dl className="mt-4 grid grid-cols-[8rem_1fr] gap-y-2 text-sm">
              <dt className="text-mist">Bank</dt>
              <dd className="text-pearl">{store.bank.bankName}</dd>
              <dt className="text-mist">Account name</dt>
              <dd className="text-pearl">{store.bank.accountName}</dd>
              <dt className="text-mist">Account number</dt>
              <dd className="text-pearl">{store.bank.accountNumber}</dd>
              {store.bank.branch && (
                <>
                  <dt className="text-mist">Branch</dt>
                  <dd className="text-pearl">{store.bank.branch}</dd>
                </>
              )}
            </dl>
          </div>
        )}

        <Link to="/shop" className="mt-10 inline-block text-xs uppercase tracking-[0.2em] text-mist underline hover:text-pearl">
          Continue shopping
        </Link>
      </div>
    </div>
  );
}

export default function Checkout() {
  const { items, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", city: "", postalCode: "", notes: "", website: "" });
  const [payment, setPayment] = useState(bankConfigured ? "Bank transfer" : "Online card payment");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [placed, setPlaced] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem(LAST_ORDER_KEY));
    } catch {
      return null;
    }
  });

  // Always charge today's catalogue price, never a price saved earlier in the browser.
  const lines = items.map((i) => {
    const unitPrice = getProductById(i.id)?.price ?? i.price;
    return { ...i, unitPrice, lineTotal: unitPrice * i.qty };
  });
  const subtotal = lines.reduce((sum, l) => sum + l.lineTotal, 0);
  const shipping = subtotal === 0 || subtotal >= store.shipping.freeOver ? 0 : store.shipping.fee;
  const total = subtotal + shipping;

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting || !ordersOpen) return;
    setError("");
    setSubmitting(true);

    if (form.website) {
      // hidden field filled in: a bot, pretend success
      clearCart();
      setSubmitting(false);
      return;
    }

    const order = {
      siteKey: store.siteKey,
      orderNumber: makeOrderNumber(),
      createdAt: new Date().toISOString(),
      customer: {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        address: form.address.trim(),
        city: form.city.trim(),
        postalCode: form.postalCode.trim(),
        notes: form.notes.trim(),
      },
      payment,
      items: lines.map((l) => ({ id: l.id, name: l.name, qty: l.qty, unitPrice: l.unitPrice, lineTotal: l.lineTotal })),
      subtotal,
      shipping,
      total,
    };

    if (payment === "Online card payment") {
      try {
        const data = await startCardPayment(order);
        try {
          sessionStorage.setItem(LAST_ORDER_KEY, JSON.stringify(order));
        } catch {
          // ignore storage errors
        }
        submitToPayHere(order, data); // leaves the site; the cart stays until the customer comes back paid
      } catch {
        setError("We could not start the card payment. Please try again, or choose bank transfer.");
        setSubmitting(false);
      }
      return;
    }

    sendToSheet(order);
    window.open(whatsappUrl(order), "_blank");
    try {
      sessionStorage.setItem(LAST_ORDER_KEY, JSON.stringify(order));
    } catch {
      // ignore storage errors
    }
    clearCart();
    setPlaced(order);
    setSubmitting(false);
    window.scrollTo({ top: 0 });
  };

  if (placed && items.length === 0) return <Confirmation order={placed} />;

  if (items.length === 0) {
    return (
      <div className="bg-aurora flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-4xl text-pearl">Nothing to check out</h1>
        <p className="mt-3 text-mist">Your bag is empty.</p>
        <Link to="/shop" className="btn-dark mt-8 inline-block px-7 py-3.5 text-sm uppercase tracking-wider">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-aurora min-h-screen">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-5 lg:px-10">
        <form onSubmit={handleSubmit} className="space-y-10 lg:col-span-3">
          <h1 className="font-display text-4xl text-pearl">Checkout</h1>

          {!ordersOpen && (
            <p className="rounded-lg border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-pearl">
              Online ordering is opening soon. Please check back shortly.
            </p>
          )}

          <section>
            <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Your details</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Full name" autoComplete="name" value={form.name} onChange={set("name")} className={`sm:col-span-2 ${inputClass}`} />
              <input
                required
                type="tel"
                placeholder="Phone / WhatsApp number"
                autoComplete="tel"
                pattern="[0-9+\s\-]{9,16}"
                title="Enter a phone number with at least 9 digits"
                value={form.phone}
                onChange={set("phone")}
                className={inputClass}
              />
              <input
                type="email"
                required={payment === "Online card payment"}
                placeholder={payment === "Online card payment" ? "Email (needed for card payment)" : "Email (optional)"}
                autoComplete="email"
                value={form.email}
                onChange={set("email")}
                className={inputClass}
              />
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Delivery address</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Address" autoComplete="street-address" value={form.address} onChange={set("address")} className={`sm:col-span-2 ${inputClass}`} />
              <input required placeholder="City" autoComplete="address-level2" value={form.city} onChange={set("city")} className={inputClass} />
              <input placeholder="Postal code (optional)" autoComplete="postal-code" value={form.postalCode} onChange={set("postalCode")} className={inputClass} />
              <textarea placeholder="Notes for your order (optional)" rows={3} value={form.notes} onChange={set("notes")} className={`sm:col-span-2 ${inputClass}`} />
            </div>
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={form.website}
              onChange={set("website")}
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
              <Lock size={14} /> Payment
            </h2>
            <div className="space-y-3">
              <label
                className={`flex items-start gap-3 rounded-xl border p-4 ${
                  bankConfigured ? "cursor-pointer" : "opacity-50"
                } ${payment === "Bank transfer" ? "border-gold bg-gold/5" : "border-ink/16"}`}
              >
                <input type="radio" name="payment" disabled={!bankConfigured} checked={payment === "Bank transfer"} onChange={() => setPayment("Bank transfer")} className="mt-1 accent-[var(--color-gold)]" />
                <span>
                  <span className="block text-sm text-pearl">Bank transfer</span>
                  <span className="block text-xs text-mist">
                    {bankConfigured ? "You get our bank details after placing the order. We pack once your payment slip is confirmed." : "Coming soon"}
                  </span>
                </span>
              </label>
              <label
                className={`flex items-start gap-3 rounded-xl border p-4 ${
                  cardEnabled ? "cursor-pointer" : "opacity-50"
                } ${payment === "Online card payment" ? "border-gold bg-gold/5" : "border-ink/16"}`}
              >
                <input type="radio" name="payment" disabled={!cardEnabled} checked={payment === "Online card payment"} onChange={() => setPayment("Online card payment")} className="mt-1 accent-[var(--color-gold)]" />
                <span>
                  <span className="block text-sm text-pearl">Online card payment</span>
                  <span className="block text-xs text-mist">{cardEnabled ? "Pay securely by card." : "Coming soon"}</span>
                </span>
              </label>
            </div>
          </section>

          {error && <p className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

          <button
            type="submit"
            disabled={submitting || !ordersOpen}
            className="btn-dark w-full py-4 text-sm uppercase tracking-wider disabled:opacity-60"
          >
            {submitting ? "Placing Order…" : `Place Order — ${formatPrice(total)}`}
          </button>
          <p className="-mt-6 text-center text-xs text-mist">
            {payment === "Online card payment"
              ? "You will be taken to PayHere to pay securely by card."
              : "After you place the order, WhatsApp opens with your order details. Press Send to confirm it."}
          </p>
        </form>

        <aside className="glass h-fit rounded-2xl border border-ink/16 p-6 lg:col-span-2">
          <h2 className="font-display text-2xl text-pearl">Order Summary</h2>
          <div className="mt-6 space-y-4">
            {lines.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="text-sm text-pearl">{item.name}</p>
                  <p className="text-xs text-mist">Qty {item.qty}</p>
                </div>
                <p className="text-sm text-pearl">{formatPrice(item.lineTotal)}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2 border-t border-ink/16 pt-4 text-sm">
            <div className="flex justify-between text-mist">
              <span>Subtotal</span>
              <span className="text-pearl">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-mist">
              <span>Shipping</span>
              <span className="text-pearl">{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
            </div>
            <div className="flex justify-between pt-2 text-base font-medium text-pearl">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
