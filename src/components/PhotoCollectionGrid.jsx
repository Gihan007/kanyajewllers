import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tiles = [
  { title: "Luminous Chains & Dainty Drops", cta: "Shop Necklaces", to: "/shop?category=Necklaces", image: "/photos/necklaces.jpg", pos: "50% 38%" },
  { title: "Sculpted Gold & Whispering Bands", cta: "Shop Rings", to: "/shop?category=Rings", image: "/photos/tile-rings.jpg", pos: "50% 50%" },
  { title: "Botanical Grace & Subtle Glimmers", cta: "Shop Earrings", to: "/shop?category=Earrings", image: "/photos/tile-earrings.jpg", pos: "50% 50%" },
];

export default function PhotoCollectionGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3">
      {tiles.map((tile, i) => (
        <motion.div
          key={tile.title}
          initial={{ opacity: 0, clipPath: "inset(12% 0 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to={tile.to} className="group relative block aspect-[4/3] overflow-hidden sm:aspect-[3/4]">
            <img
              src={tile.image}
              alt={tile.title}
              loading="lazy"
              style={{ objectPosition: tile.pos }}
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/80" />
            <div className="absolute inset-x-0 bottom-8 flex translate-y-3 flex-col items-center text-center transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="px-6 font-display text-2xl text-sand">{tile.title}</h3>
              <span className="btn-outline-light mt-4 px-6 py-2 text-xs uppercase tracking-wider">{tile.cta}</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
