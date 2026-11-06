import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

const inputClass =
  "w-full rounded-lg border border-ink/16 bg-panel px-4 py-3 text-sm text-pearl placeholder:text-mist/50 outline-none focus:border-gold";

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [placing, setPlacing] = useState(false);

  const shipping = subtotal > 5000 || subtotal === 0 ? 0 : 350;
  const total = subtotal + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlacing(true);
    // Placeholder checkout flow — wire this up to a real payment gateway (e.g. Stripe) when ready.
    setTimeout(() => {
      clearCart();
      navigate("/", { state: { orderPlaced: true } });
    }, 1200);
  };

  if (items.length === 0 && !placing) {
    return (
      <div className="bg-aurora flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-4xl text-pearl">Nothing to check out</h1>
        <p className="mt-3 text-mist">Your bag is empty.</p>
      </div>
    );
  }

  return (
    <div className="bg-aurora min-h-screen">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-5 lg:px-10">
        <form onSubmit={handleSubmit} className="space-y-10 lg:col-span-3">
          <h1 className="font-display text-4xl text-pearl">Checkout</h1>

          <section>
            <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Contact</h2>
            <input required type="email" placeholder="Email address" className={inputClass} />
          </section>

          <section>
            <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Shipping Address</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="First name" className={inputClass} />
              <input required placeholder="Last name" className={inputClass} />
              <input required placeholder="Address" className={`sm:col-span-2 ${inputClass}`} />
              <input required placeholder="City" className={inputClass} />
              <input required placeholder="Postal code" className={inputClass} />
              <input required placeholder="Country" className={inputClass} />
              <input required placeholder="Phone" className={inputClass} />
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
              <Lock size={14} /> Payment
            </h2>
            <div className="glass space-y-4 rounded-xl border border-ink/16 p-5">
              <p className="text-xs text-mist">
                Payment processing is a placeholder for this demo — no card data is collected or charged.
                Connect a provider like Stripe to accept real payments.
              </p>
              <input disabled placeholder="Card number" className={`${inputClass} opacity-50`} />
              <div className="grid grid-cols-2 gap-4">
                <input disabled placeholder="MM / YY" className={`${inputClass} opacity-50`} />
                <input disabled placeholder="CVC" className={`${inputClass} opacity-50`} />
              </div>
            </div>
          </section>

          <button
            type="submit"
            disabled={placing}
            className="btn-dark w-full py-4 text-sm uppercase tracking-wider disabled:opacity-60"
          >
            {placing ? "Placing Order…" : `Place Order — ${formatPrice(total)}`}
          </button>
        </form>

        <aside className="glass h-fit rounded-2xl border border-ink/16 p-6 lg:col-span-2">
          <h2 className="font-display text-2xl text-pearl">Order Summary</h2>
          <div className="mt-6 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="text-sm text-pearl">{item.name}</p>
                  <p className="text-xs text-mist">Qty {item.qty}</p>
                </div>
                <p className="text-sm text-pearl">{formatPrice(item.price * item.qty)}</p>
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
