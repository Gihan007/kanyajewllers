import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

function QtyStepper({ item, updateQty }) {
  return (
    <div className="flex items-center border border-ink/22">
      <button onClick={() => updateQty(item.id, item.qty - 1)} className="p-2.5 text-mist hover:text-gold" aria-label="Decrease">
        <Minus size={14} />
      </button>
      <span className="w-8 text-center text-pearl">{item.qty}</span>
      <button onClick={() => updateQty(item.id, item.qty + 1)} className="p-2.5 text-mist hover:text-gold" aria-label="Increase">
        <Plus size={14} />
      </button>
    </div>
  );
}

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
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10">
        <h1 className="font-display text-4xl text-pearl">Your Bag</h1>

        <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
          {items.map((item) => (
            <div key={item.id} className="glass rounded-2xl border border-ink/16 p-4">
              <div className="flex gap-4">
                <img src={item.image} alt={item.name} className="h-20 w-20 flex-shrink-0 rounded-xl object-cover sm:h-24 sm:w-24" />

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-display text-lg leading-snug text-pearl">{item.name}</p>
                      <p className="mt-1 text-sm text-mist">{formatPrice(item.price)}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="-mr-2 -mt-2 flex-shrink-0 p-2 text-mist hover:text-red-400 sm:hidden"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3 sm:hidden">
                    <QtyStepper item={item} updateQty={updateQty} />
                    <p className="text-pearl">{formatPrice(item.price * item.qty)}</p>
                  </div>
                </div>

                <div className="hidden items-center gap-5 sm:flex">
                  <QtyStepper item={item} updateQty={updateQty} />
                  <p className="w-24 text-right text-pearl">{formatPrice(item.price * item.qty)}</p>
                  <button onClick={() => removeItem(item.id)} className="p-1 text-mist hover:text-red-400" aria-label={`Remove ${item.name}`}>
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-stretch gap-4 sm:mt-12 sm:items-end">
          <div className="flex w-full justify-between text-mist sm:w-72">
            <span>Subtotal</span>
            <span className="text-pearl">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex w-full justify-between text-xs text-mist sm:w-72">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <Link
            to="/checkout"
            className="btn-dark flex w-full items-center justify-center gap-2 py-3.5 text-sm uppercase tracking-wider sm:w-72"
          >
            Checkout <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
