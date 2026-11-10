import { motion } from "framer-motion";
import { Gem, PenLine, Sparkles } from "lucide-react";
import StoryCarousel from "../components/StoryCarousel";

const steps = [
  { icon: Gem, title: "Choose Your Pieces", desc: "Start with a foundational everyday staple—a sleek minimalist chain or a sculptural ring designed to withstand daily wear." },
  { icon: PenLine, title: "Personalize", desc: "Layer different lengths and weights. Mix textures to transition seamlessly from a quiet morning look to an evening statement." },
  { icon: Sparkles, title: "Wear Your Story", desc: "Tarnish-free, waterproof, and made for the modern minimalist. Live in your jewelry, wherever your day takes you." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

export default function BuildYourStory() {
  return (
    <div className="bg-aurora">
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Styling &amp; Curation</p>
            <h1 className="mt-3 font-display text-5xl text-pearl sm:text-6xl">Build Your Story</h1>
            <p className="mt-6 max-w-md text-mist">
              Every meaningful collection starts with a single piece. Layer our waterproof 316L
              stainless steel chains, stack delicate rings, and mix textures to curate a look that is
              entirely, effortlessly yours.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="glass overflow-hidden rounded-[2rem] border border-ink/10 p-3"
          >
            <img src="/photos/build-ribbon.jpg" alt="Build your story" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-obsidian">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-3 lg:px-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="text-center"
            >
              <s.icon className="mx-auto text-gold" size={28} />
              <h3 className="mt-4 font-display text-xl text-pearl">{s.title}</h3>
              <p className="mt-2 text-sm text-mist">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <StoryCarousel />
    </div>
  );
}
