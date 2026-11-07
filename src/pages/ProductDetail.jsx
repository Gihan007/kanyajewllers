import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, ShieldCheck, Truck, Undo2 } from "lucide-react";
import { getProductById, products, formatPrice } from "../data/products";
import { store } from "../config";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-32 text-center">
        <p className="font-display text-3xl text-pearl">Piece not found</p>
        <Link to="/shop" className="mt-6 inline-block text-gold underline-grow">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="bg-aurora">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <nav className="mb-10 text-xs uppercase tracking-wider text-mist">
          <Link to="/shop" className="inline-block py-2 hover:text-gold">Shop</Link> / <span className="text-pearl">{product.category}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="glass overflow-hidden rounded-2xl border border-ink/16 p-2">
              <img
                src={product.gallery[activeImage]}
                alt={product.name}
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
            </div>
            <div className="mt-4 flex gap-3">
              {product.gallery.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`h-20 w-20 overflow-hidden rounded-lg border-2 transition-colors ${
                    activeImage === i ? "border-gold" : "border-ink/16"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{product.category}</p>
            <h1 className="mt-2 font-display text-4xl text-pearl sm:text-5xl">{product.name}</h1>
            <p className="mt-4 text-2xl text-pearl">{formatPrice(product.price)}</p>
            <p className="mt-2 text-sm text-mist">{product.material}</p>
            <p className="mt-6 max-w-lg leading-relaxed text-mist">{product.description}</p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center border border-ink/22">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="p-3 text-mist hover:text-gold"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center text-pearl">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="p-3 text-mist hover:text-gold"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              <button onClick={handleAdd} className="btn-dark flex-1 py-3.5 text-sm uppercase tracking-wider">
                {added ? "Added to Bag ✓" : "Add to Bag"}
              </button>
            </div>

            <div className="mt-10 space-y-3 border-t border-ink/16 pt-6 text-sm text-mist">
              <div className="flex items-center gap-3"><Truck size={16} className="text-gold" /> Free shipping on orders over {formatPrice(store.shipping.freeOver)}</div>
              <div className="flex items-center gap-3"><Undo2 size={16} className="text-gold" /> 30-day returns</div>
              <div className="flex items-center gap-3"><ShieldCheck size={16} className="text-gold" /> Lifetime warranty &amp; care</div>
            </div>
          </motion.div>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="mb-8 font-display text-3xl text-pearl">You May Also Like</h2>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
