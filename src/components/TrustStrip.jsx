import { motion } from "framer-motion";
import { Truck, ShieldCheck, Headset, Gem } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Delivery" },
  { icon: ShieldCheck, label: "Money Back Guarantee" },
  { icon: Headset, label: "24/7 Support" },
  { icon: Gem, label: "High Quality" },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-ink/10 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4 lg:px-10">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -2 }}
            className="flex items-center justify-center gap-3 sm:justify-start"
          >
            <motion.span
              initial={{ scale: 0.6, rotate: -12 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 + i * 0.1 }}
              className="inline-flex"
            >
              <item.icon className="text-gold" size={22} />
            </motion.span>
            <span className="text-xs uppercase tracking-wider text-pearl">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
