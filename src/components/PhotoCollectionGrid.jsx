import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { lifestyleImage, heroImage, ringsHeroImage } from "../data/products";

const tiles = [
  { title: "Vogue Collection", to: "/shop?category=Necklaces", image: lifestyleImage },
  { title: "Timeless Vintage", to: "/shop?category=Rings", image: ringsHeroImage },
  { title: "Celestial Earrings", to: "/shop?category=Earrings", image: heroImage },
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
          <Link to={tile.to} className="group relative block aspect-[3/4] overflow-hidden">
            <img
              src={tile.image}
              alt={tile.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/80" />
            <div className="absolute inset-x-0 bottom-8 flex translate-y-3 flex-col items-center text-center transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="font-display text-2xl text-sand">{tile.title}</h3>
              <span className="btn-outline-light mt-4 px-6 py-2 text-xs uppercase tracking-wider">Shop Now</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
