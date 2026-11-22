import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";

const badgeStyles = {
  new: "bg-ink text-sand",
  featured: "bg-gold text-ink",
  sale: "bg-pearl text-sand",
};

export default function LuxuryProductCard({ product }) {
  const { addItem } = useCart();
  const navigate = useNavigate();

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

      <div className="p-4 sm:p-5">
        <p className="text-[10px] uppercase tracking-[0.15em] text-mist">
          {product.category} / Fine Jewelry
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="mt-1.5 font-display text-lg text-pearl">{product.name}</h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-mist">{product.description}</p>
        <div className="mt-3 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex flex-wrap items-baseline gap-x-2 whitespace-nowrap">
            <span className="text-base text-pearl">{formatPrice(product.price)}</span>
          </p>
          <button
            type="button"
            onClick={() => {
              if (product.options?.some((option) => option.values?.length > 1)) navigate(`/product/${product.id}`);
              else if (!product.variants?.length || product.variants.some((variant) => variant.available)) {
                const available = product.variants?.find((variant) => variant.available);
                addItem(available ? { ...product, cartKey: `${product.id}:${available.id}`, variantId: available.id, variantTitle: available.title } : product);
              }
            }}
            disabled={product.variants?.length > 0 && !product.variants.some((variant) => variant.available)}
            className="whitespace-nowrap py-1 text-[11px] uppercase tracking-wider text-gold underline-grow"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}
