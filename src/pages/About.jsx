import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <div className="bg-aurora">
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
        <motion.p initial="hidden" animate="show" variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-gold">
          Our Story
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mt-4 font-display text-5xl text-pearl sm:text-6xl"
        >
          Crafted for the <span className="text-gradient-gold italic">modern minimalist.</span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-mist"
        >
          KANYA was founded on a simple idea: everyday luxury shouldn't be fragile. Every piece we curate
          blends a clean, modern aesthetic with waterproof, tarnish-free 316L stainless steel—built for the
          way you actually live, move, and shine every day.
        </motion.p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 sm:grid-cols-3 lg:px-10">
        {[
          {
            title: "Curated Drops",
            desc: "Sourced in small, intentional batches to ensure unique pieces and zero unnecessary waste.",
          },
          {
            title: "Waterproof & Tarnish-Free",
            desc: "Crafted from durable 316L stainless steel designed to withstand water, sweat, and daily wear without losing its shine.",
          },
          {
            title: "Effortless Everyday",
            desc: "Lightweight, skin-friendly, and versatile pieces made to transition seamlessly from morning coffee to evening plans.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl border border-ink/16 p-7"
          >
            <h3 className="font-display text-xl text-pearl">{item.title}</h3>
            <p className="mt-3 text-sm text-mist">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      <section className="border-t border-ink/10 bg-obsidian">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-2">
            <img
              src="/photos/about-rope.jpg"
              alt="KANYA rings on rope"
              className="aspect-[4/5] w-full rounded-2xl object-cover object-[50%_60%]"
            />
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">The Philosophy</p>
              <h2 className="mt-3 font-display text-3xl text-pearl">
                Jewelry that keeps up with you.
              </h2>
              <p className="mt-4 text-mist">
                We believe you shouldn't have to take your jewelry off before stepping into the shower,
                heading to the gym, or diving into a busy day. By focusing on durable 316L stainless steel
                with a warm, earthy luxury finish, KANYA brings you effortless staple pieces you can
                literally live in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
