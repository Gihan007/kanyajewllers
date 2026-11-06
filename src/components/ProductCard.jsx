import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Plus } from "lucide-react";
import { formatPrice } from "../data/products";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="card-hover group relative overflow-hidden rounded-2xl border border-ink/14 bg-panel">
      <Link to={`/product/${product.id}`} className="relative block aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {product.gallery?.[1] && (
          <img
            src={product.gallery[1]}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
      </Link>
      <button
        type="button"
        onClick={() => addItem(product)}
        aria-label={`Add ${product.name} to cart`}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink/70 text-gold opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 hover:bg-gold hover:text-ink"
      >
        <Plus size={18} />
      </button>

      <div className="p-5">
        <p className="text-[11px] uppercase tracking-[0.2em] text-gold/80">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="mt-1 font-display text-xl text-pearl">{product.name}</h3>
        </Link>
        <p className="mt-1 text-sm text-mist">{product.material}</p>
        <p className="mt-3 text-base text-pearl">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}
