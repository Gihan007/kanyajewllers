import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const giftTiers = [
  { label: "Under Rs. 1,000", filter: (p) => p.price < 1000 },
  { label: "Rs. 1,000 – 3,000", filter: (p) => p.price >= 1000 && p.price <= 3000 },
  { label: "Rs. 3,000+", filter: (p) => p.price > 3000 },
];

export default function Gifting() {
  return (
    <div className="bg-aurora min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Gifting</p>
          <h1 className="mt-3 font-display text-5xl text-pearl">A Gift Worth Keeping</h1>
          <p className="mx-auto mt-5 max-w-xl text-mist">
            From milestone celebrations to everyday thank-yous, find a piece that says more than words —
            gift-wrapped and ready, with a handwritten note on request.
          </p>
        </motion.div>

        {giftTiers.map((tier, ti) => {
          const items = products.filter(tier.filter);
          if (items.length === 0) return null;
          return (
            <div key={tier.label} className="mt-16">
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: ti * 0.05 }}
                className="mb-6 font-display text-2xl text-pearl"
              >
                {tier.label}
              </motion.h2>
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {items.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
