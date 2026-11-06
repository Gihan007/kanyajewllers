import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

export default function Cart() {
  const { items, updateQty, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-aurora flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-4xl text-pearl">Your bag is empty</h1>
        <p className="mt-3 text-mist">Discover pieces designed to catch the light.</p>
        <Link to="/shop" className="btn-dark mt-8 inline-flex items-center gap-2 px-7 py-3.5 text-sm uppercase tracking-wider">
          Shop Now <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-aurora min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <h1 className="font-display text-4xl text-pearl">Your Bag</h1>

        <div className="mt-10 space-y-5">
          {items.map((item) => (
            <div key={item.id} className="glass flex items-center gap-5 rounded-2xl border border-ink/16 p-4">
              <img src={item.image} alt={item.name} className="h-24 w-24 rounded-xl object-cover" />
              <div className="flex-1">
                <p className="font-display text-lg text-pearl">{item.name}</p>
                <p className="mt-1 text-sm text-mist">{formatPrice(item.price)}</p>
              </div>
              <div className="flex items-center border border-ink/22">
                <button onClick={() => updateQty(item.id, item.qty - 1)} className="p-2.5 text-mist hover:text-gold" aria-label="Decrease">
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center text-pearl">{item.qty}</span>
                <button onClick={() => updateQty(item.id, item.qty + 1)} className="p-2.5 text-mist hover:text-gold" aria-label="Increase">
                  <Plus size={14} />
                </button>
              </div>
              <p className="w-20 text-right text-pearl">{formatPrice(item.price * item.qty)}</p>
              <button onClick={() => removeItem(item.id)} className="text-mist hover:text-red-400" aria-label="Remove">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-end gap-4">
          <div className="flex w-full max-w-sm justify-between text-mist sm:w-72">
            <span>Subtotal</span>
            <span className="text-pearl">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex w-full max-w-sm justify-between text-xs text-mist sm:w-72">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <Link
            to="/checkout"
            className="btn-dark flex w-full max-w-sm items-center justify-center gap-2 py-3.5 text-sm uppercase tracking-wider sm:w-72"
          >
            Checkout <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
