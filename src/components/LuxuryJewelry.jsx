import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LuxuryProductCard from "./LuxuryProductCard";
import { products } from "../data/products";

const tabs = [
  { key: "new", label: "New Arrived" },
  { key: "featured", label: "Featured" },
  { key: "sale", label: "On Sale" },
];

export default function LuxuryJewelry() {
  const [active, setActive] = useState("new");
  const activeTabs = tabs.filter((t) => products.some((p) => p.tags?.includes(t.key)));
  const items = products.filter((p) => p.tags?.includes(active)).slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <h2 className="font-display text-4xl text-pearl">Luxury Jewelry</h2>
        <div className="mt-6 flex justify-center gap-8">
          {activeTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`relative pb-2 text-xs uppercase tracking-[0.15em] transition-colors ${
                active === tab.key ? "text-pearl" : "text-mist hover:text-pearl"
              }`}
            >
              {tab.label}
              {active === tab.key && (
                <motion.span
                  layoutId="luxury-tab-underline"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-gold"
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        key={active}
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
        className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4"
      >
        {items.map((p) => (
          <motion.div
            key={p.id}
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <LuxuryProductCard product={p} />
          </motion.div>
        ))}
        {items.length === 0 && (
          <p className="col-span-full text-center text-mist">No pieces in this selection yet.</p>
        )}
      </motion.div>

      <div className="mt-10 text-center">
        <Link to="/shop" className="btn-outline-dark inline-block px-8 py-3 text-xs uppercase tracking-wider">
          View All Jewelry
        </Link>
      </div>
    </section>
  );
}
