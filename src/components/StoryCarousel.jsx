import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { products, formatPrice } from "../data/products";

export default function StoryCarousel() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <motion.div
        className="mb-10 flex flex-wrap items-end justify-between gap-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Personalize</p>
          <h2 className="mt-2 font-display text-4xl text-pearl">Build Your Story</h2>
          <p className="mt-2 max-w-md text-sm text-mist">
            Layer pieces, mix metals, and add initials or birthstones to make it unmistakably yours.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/16 text-mist transition-colors hover:border-gold hover:text-gold"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/16 text-mist transition-colors hover:border-gold hover:text-gold"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>

      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            className="card-hover group w-64 flex-shrink-0 overflow-hidden rounded-2xl border border-ink/14 bg-panel"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold/80">{p.category}</p>
              <h3 className="mt-1 font-display text-lg text-pearl">{p.name}</h3>
              <p className="mt-1 text-sm text-mist">From {formatPrice(p.price)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
