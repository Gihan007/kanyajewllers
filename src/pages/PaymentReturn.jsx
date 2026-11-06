import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MessageCircle, Check, Loader2, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { store } from "../config";

const waLink = (orderNumber) =>
  `https://wa.me/${store.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi, I just paid for order ${orderNumber}.`)}`;

export default function PaymentReturn() {
  const [params] = useSearchParams();
  const orderNumber = params.get("order") || "";
  const { clearCart } = useCart();
  const [status, setStatus] = useState("checking");
  const tries = useRef(0);

  // The customer finished at PayHere, so the bag can be emptied.
  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // PayHere tells our Google script the result a few seconds after the customer returns, so ask for it.
  useEffect(() => {
    if (!orderNumber || !store.orderEndpoint) return undefined;
    let stop = false;
    const check = async () => {
      try {
        const res = await fetch(`${store.orderEndpoint}?order=${encodeURIComponent(orderNumber)}`);
        const data = await res.json();
        if (stop) return;
        if (data.status === "Paid") return setStatus("paid");
        if (data.status === "Payment failed" || data.status === "Cancelled") return setStatus("failed");
      } catch {
        // keep trying
      }
      tries.current += 1;
      if (tries.current >= 15) return setStatus("pending");
      setTimeout(check, 3000);
    };
    check();
    return () => {
      stop = true;
    };
  }, [orderNumber]);

  const views = {
    checking: { icon: <Loader2 size={28} className="animate-spin" />, title: "Confirming your payment…", body: "This usually takes a few seconds. Please keep this page open." },
    paid: { icon: <Check size={28} />, title: "Payment received. Thank you!", body: `Your order ${orderNumber} is paid and we will pack it soon. We will message you on WhatsApp with the delivery details.` },
    pending: { icon: <Loader2 size={28} />, title: "We are still confirming your payment", body: `Your order is ${orderNumber}. If you were charged, we will confirm it by WhatsApp shortly. You do not need to pay again.` },
    failed: { icon: <X size={28} />, title: "The payment was not completed", body: "You were not charged. You can go back and try again, or choose bank transfer." },
  };
  const view = views[status];

  return (
    <div className="bg-aurora min-h-[70vh]">
      <div className="mx-auto max-w-xl px-6 py-24 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">{view.icon}</span>
        <h1 className="mt-6 font-display text-4xl text-pearl">{view.title}</h1>
        <p className="mt-4 text-mist">{view.body}</p>
        {orderNumber && status !== "failed" && (
          <a
            href={waLink(orderNumber)}
            target="_blank"
            rel="noreferrer"
            className="btn-dark mt-8 inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm uppercase tracking-wider"
          >
            <MessageCircle size={18} /> Message us on WhatsApp
          </a>
        )}
        <div className="mt-8">
          <Link to={status === "failed" ? "/checkout" : "/shop"} className="text-xs uppercase tracking-[0.2em] text-mist underline hover:text-pearl">
            {status === "failed" ? "Back to checkout" : "Continue shopping"}
          </Link>
        </div>
      </div>
    </div>
  );
}
