import { motion } from "framer-motion";
import Seo from "../components/Seo";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const tips = [
  {
    heading: "Everyday Water & Moisture",
    body: "Built to handle daily handwashing and light moisture. To preserve mirror shine for years, remove your pieces before swimming in chlorinated pools, ocean water, or showering.",
  },
  {
    heading: "Perfumes, Lotions & Soaps",
    body: "Apply fragrances, body lotions, and hair products first and let them dry before putting on your jewelry. Avoid direct contact with harsh soaps or household cleaners.",
  },
  {
    heading: "Workouts & Heavy Activity",
    body: "Take pieces off before intense gym sessions or heavy lifting to prevent sweat buildup and accidental scratches.",
  },
  {
    heading: "Gentle Cleaning",
    body: "After wear, wipe your jewelry softly with a clean, dry microfiber cloth to remove natural skin oils and dust. Avoid abrasive cloths or chemical jewelry dips.",
  },
  {
    heading: "Safe Storage",
    body: "Keep each piece tucked inside its soft KANYA pouch when not in use to prevent tangling and surface friction.",
  },
];

export default function CareGuide() {
  return (
    <div className="bg-aurora">
      <Seo
        title="Jewellery Care Guide — Keep Your KANYÃ Pieces Glowing"
        description="How to care for your waterproof, tarnish-free KANYÃ jewellery: cleaning, storage and everyday wear tips for stainless steel pieces in Sri Lanka's climate."
        path="/care-guide"
      />
      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <motion.p initial="hidden" animate="show" variants={fadeUp} className="text-center text-xs uppercase tracking-[0.2em] text-gold">
          Keep It Glowing
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mt-4 text-center font-display text-5xl text-pearl sm:text-6xl"
        >
          Caring for Your KANYA Pieces
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-center text-mist"
        >
          Every KANYA design is crafted from fine stainless steel with an 18k PVD gold plating and a
          protective E-coating layer — engineered to be water-resistant, hypoallergenic, and
          tarnish-free for everyday living. A few simple habits will keep your pieces glowing season
          after season:
        </motion.p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.heading}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl border border-ink/16 p-6"
            >
              <h3 className="text-sm uppercase tracking-wider text-gold">{tip.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{tip.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-14 rounded-2xl border border-gold/30 bg-gold/5 p-6"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Good to Know</p>
          <h3 className="mt-3 text-sm uppercase tracking-wider text-pearl">Why Stainless Steel May Attract a Magnet</h3>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            Genuine stainless steel (particularly 304 grade) can develop a slight magnetic pull during
            precision shaping and polishing. This is a completely normal physical property of
            cold-worked stainless steel and does not affect its rust-proof, anti-tarnish quality.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
