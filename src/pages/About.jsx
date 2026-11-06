import { motion } from "framer-motion";
import { lifestyleImage } from "../data/products";

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
          Crafted at the edge of <span className="text-gradient-gold italic">tradition and tomorrow</span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-mist"
        >
          KANYÃ was founded on a simple idea: fine jewellery shouldn't feel like it belongs to the past.
          Every piece we make blends time-honoured craftsmanship with a modern, minimal design language —
          built for the way people actually live, move, and shine today.
        </motion.p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 sm:grid-cols-3 lg:px-10">
        {[
          {
            title: "Ethically Sourced",
            desc: "Every gemstone and metal is traceable, certified, and responsibly obtained.",
          },
          {
            title: "Made to Order",
            desc: "Most pieces are crafted in small batches to reduce waste and maximize quality.",
          },
          {
            title: "Built to Last",
            desc: "Lifetime warranty on craftsmanship, with free resizing and cleaning.",
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
              src={lifestyleImage}
              alt="KANYÃ studio"
              className="rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">The Studio</p>
              <h2 className="mt-3 font-display text-3xl text-pearl">
                Designed digitally, finished by hand.
              </h2>
              <p className="mt-4 text-mist">
                Our team works between 3D modeling software and the bench — prototyping in the digital
                space, then handcrafting every final piece with traditional goldsmithing techniques.
                It's this balance of futuristic process and timeless skill that defines everything we make.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
