import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

const badgeStyles = {
  new: "bg-ink text-sand",
  featured: "bg-gold text-ink",
  sale: "bg-pearl text-sand",
};

export default function LuxuryProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group border border-ink/10 bg-panel transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_18px_40px_-18px_rgba(47,66,55,0.35)]">
      <Link to={`/product/${product.id}`} className="relative block aspect-square overflow-hidden bg-cream">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tags?.length > 0 && (
          <div className="absolute left-3 top-3 flex gap-1.5">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${badgeStyles[tag]}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>

      <div className="p-5">
        <p className="text-[10px] uppercase tracking-[0.15em] text-mist">
          {product.category} / Fine Jewelry
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="mt-1.5 font-display text-lg text-pearl">{product.name}</h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-mist">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <p className="flex items-baseline gap-2">
            <span className="text-base text-pearl">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-mist line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </p>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="text-[11px] uppercase tracking-wider text-gold underline-grow"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}
