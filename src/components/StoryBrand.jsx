import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function StoryBrand() {

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-sm"
        >
          <img src="/photos/story-pearl.jpg" alt="KANYA pearl pendant" className="w-full rounded-sm object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Our Story</p>
          <h2 className="mt-3 font-display text-4xl text-pearl sm:text-5xl">Rooted in Earth, Built for your Everyday</h2>
          <div className="mt-6 max-w-lg space-y-4 text-mist">
            <p>
              The story of KANYA begins with a pursuit of quiet luxury; pieces that carry warmth, organic
              texture, and a grounded bohemian soul without the noise. We search out artisans and master
              makers across borders, hand-selecting minimalist silhouettes and raw elements that catch the
              light effortlessly against skin and linen.
            </p>
            <p>
              We believe your favorite pieces shouldn't live in a box waiting for a special occasion; They
              belong to your story right now. Crafted to weather the texture of real life from quiet morning
              coffee rituals to sunlit afternoons and late-night conversations- KANYA is made to endure,
              keeping its polish as it absorbs your memories.
            </p>
            <p>
              It is a carefully curated wardrobe of metal and stone, chosen to stay with you through every
              season, whispering a story of quiet resilience and timeless grace.
            </p>
            <p>Slow-sourced, effortlessly strong, and entirely yours.</p>
          </div>
          <p className="mt-6 font-display text-xl italic text-pearl">Built to stay, designed to live in</p>
          <Link to="/about" className="btn-outline-dark mt-8 inline-block px-8 py-3 text-xs uppercase tracking-wider">
            Read More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
