import { useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { store } from "../config";

// Floating chat shortcut. Hidden on checkout-type pages and on product pages (where the sticky bar sits).
export default function WhatsAppButton() {
  const { pathname } = useLocation();
  if (!store.whatsappNumber) return null;
  if (pathname.startsWith("/checkout") || pathname.startsWith("/payment-return")) return null;

  const onProduct = pathname.startsWith("/product/");
  const digits = store.whatsappNumber.replace(/\D/g, "");
  const text = encodeURIComponent("Hi KANYA, I have a question about your jewellery.");

  return (
    <a
      href={`https://wa.me/${digits}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`fixed right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 ${
        onProduct ? "bottom-24 lg:bottom-5" : "bottom-5"
      }`}
    >
      <MessageCircle size={24} />
    </a>
  );
}
