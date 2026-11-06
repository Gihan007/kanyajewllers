import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroImage, lifestyleImage } from "../data/products";

export default function StoryBrand() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const insetY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-sm"
        >
          <img src={lifestyleImage} alt="KANYÃ craftsmanship" className="w-full rounded-sm object-cover" />
          <motion.img
            src={heroImage}
            alt="KANYÃ detail"
            style={{ y: insetY }}
            className="absolute -bottom-10 -left-10 hidden w-40 rounded-sm border-4 border-sand object-cover shadow-xl sm:block"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Our Story</p>
          <h2 className="mt-3 font-display text-4xl text-pearl sm:text-5xl">Story of the Brand</h2>
          <p className="mt-6 max-w-md text-mist">
            We're passionate about creating beautiful, high-quality jewellery that reflects your unique
            style. Every piece is hand-finished using ethically sourced materials, designed to be worn
            today and passed down tomorrow.
          </p>
          <p className="mt-6 font-display text-xl italic text-pearl">Not trends. Timeless, only.</p>
          <Link to="/about" className="btn-outline-dark mt-8 inline-block px-8 py-3 text-xs uppercase tracking-wider">
            Read More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
