import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "../data/products";

const banners = [
  {
    label: "Collection",
    title: "Stacking Rings",
    to: "/shop?category=Rings",
    image: products.find((p) => p.category === "Rings")?.image,
  },
  {
    label: "Collection",
    title: "Layered Necklaces",
    to: "/shop?category=Necklaces",
    image: products.find((p) => p.category === "Necklaces")?.image,
  },
  {
    label: "Collection",
    title: "Studs & Statement Earrings",
    to: "/shop?category=Earrings",
    image: products.find((p) => p.category === "Earrings")?.image,
  },
];

export default function CollectionBanners() {
  return (
    <section className="border-b border-ink/10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-3">
        {banners.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className={i !== banners.length - 1 ? "border-b border-ink/10 sm:border-b-0 sm:border-r" : ""}
          >
            <Link to={b.to} className="group flex items-center gap-5 px-8 py-8 transition-colors duration-500 hover:bg-cream/40">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border border-ink/10 transition-transform duration-500 group-hover:rotate-3">
                <img
                  src={b.image}
                  alt={b.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold">{b.label}</p>
                <h3 className="mt-1 font-display text-xl text-pearl">{b.title}</h3>
                <span className="underline-grow mt-2 inline-flex items-center gap-1 text-xs uppercase tracking-wider text-mist group-hover:text-pearl">
                  Shop Now <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
