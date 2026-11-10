import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, ShieldCheck, Truck, Undo2, ZoomIn } from "lucide-react";
import Lightbox from "../components/Lightbox";
import { useToast } from "../context/ToastContext";
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
  const [viewer, setViewer] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const addRef = useRef(null);
  const toast = useToast();

  // Show the sticky bottom bar once the main "Add to Bag" button has scrolled out of view.
  useEffect(() => {
    const check = () => {
      const el = addRef.current;
      if (el) setShowBar(el.getBoundingClientRect().bottom < 0);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [id]);

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
    toast({ title: "Added to bag", text: `${product.name}${qty > 1 ? ` × ${qty}` : ""}`, image: product.image });
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
            <button
              type="button"
              onClick={() => setViewer(true)}
              aria-label={`Open ${product.name} photos full screen`}
              className="glass group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-ink/16 p-2"
            >
              <img
                src={product.gallery[activeImage]}
                alt={product.name}
                className="aspect-[4/5] w-full rounded-xl bg-line/40 object-cover"
              />
              <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1.5 text-[11px] uppercase tracking-wider text-sand backdrop-blur">
                <ZoomIn size={13} /> Zoom
              </span>
            </button>
            <div className="mt-4 flex gap-3">
              {product.gallery.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  aria-label={`Show photo ${i + 1}`}
                  aria-pressed={activeImage === i}
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

              <button ref={addRef} onClick={handleAdd} className="btn-dark flex-1 py-3.5 text-sm uppercase tracking-wider">
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

      {viewer && (
        <Lightbox
          images={product.gallery}
          index={activeImage}
          alt={product.name}
          onChange={setActiveImage}
          onClose={() => setViewer(false)}
        />
      )}

      {/* Sticky bar for phones: keeps price and Add to Bag in reach while reading */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/16 bg-panel/95 px-4 py-3 backdrop-blur transition-transform duration-300 lg:hidden ${
          showBar ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!showBar}
      >
        <div className="mx-auto flex max-w-xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm text-pearl">{product.name}</p>
            <p className="text-sm text-mist">{formatPrice(product.price)}</p>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            tabIndex={showBar ? 0 : -1}
            className="btn-dark px-6 py-3 text-xs uppercase tracking-wider"
          >
            {added ? "Added ✓" : "Add to Bag"}
          </button>
        </div>
      </div>
    </div>
  );
}
