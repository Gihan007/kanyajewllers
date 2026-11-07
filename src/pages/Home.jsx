import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, MotionConfig, useScroll, useTransform } from "framer-motion";
import CollectionBanners from "../components/CollectionBanners";
import TrustStrip from "../components/TrustStrip";
import LuxuryJewelry from "../components/LuxuryJewelry";
import StoryBrand from "../components/StoryBrand";
import PhotoCollectionGrid from "../components/PhotoCollectionGrid";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" } }),
};

const ease = [0.22, 1, 0.36, 1];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.35 } },
};

const rise = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease } },
};

const lineReveal = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1, ease } },
};

export default function Home() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // iOS only autoplays when `muted` is a real HTML attribute; React sets only the property.
    v.muted = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    // Low Power Mode / data saver can block autoplay: start on the first touch or scroll instead.
    const events = ["touchstart", "click", "scroll"];
    const kick = () => {
      tryPlay();
      events.forEach((e) => window.removeEventListener(e, kick));
    };
    events.forEach((e) => window.addEventListener(e, kick, { passive: true }));
    return () => events.forEach((e) => window.removeEventListener(e, kick));
  }, []);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <MotionConfig reducedMotion="user">
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="relative h-[85vh] min-h-[640px] w-full">
          <motion.div style={{ y: imageY }} className="absolute inset-x-0 -top-[6%] h-[112%]">
            <motion.video
              ref={videoRef}
              poster="/videos/hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={false}
              disablePictureInPicture
              disableRemotePlayback
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6 }}
              className="h-full w-full object-cover"
            >
              <source src="/videos/hero-mobile.mp4" media="(max-width: 767px)" type="video/mp4" />
              <source src="/videos/hero.mp4" type="video/mp4" />
            </motion.video>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/35 to-ink/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

          <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-16 lg:px-16 lg:pb-20">
            <motion.div
              style={{ y: contentY, opacity: contentOpacity }}
              variants={stagger}
              initial="hidden"
              animate="show"
              className="max-w-lg"
            >
              <motion.div variants={rise} className="flex items-center gap-4">
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease }}
                  className="h-px w-12 origin-left bg-gold-soft"
                />
                <p className="text-xs uppercase tracking-[0.3em] text-gold-soft">New Collection</p>
              </motion.div>
              <h1 className="mt-4 font-display text-5xl leading-[1.05] text-sand sm:text-6xl">
                <span className="block overflow-hidden pb-1">
                  <motion.span variants={lineReveal} className="block">Earthbound</motion.span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <motion.span variants={lineReveal} className="block italic">Elegance</motion.span>
                </span>
              </h1>
              <motion.p variants={rise} className="mt-6 max-w-md text-sand/80">
                Discover pieces shaped by warm, natural tones and quiet craftsmanship — jewellery
                made to feel like it was always yours.
              </motion.p>
              <motion.div variants={rise}>
                <Link
                  to="/shop"
                  className="group mt-9 inline-flex items-center gap-3 rounded-full border border-sand/70 px-9 py-3.5 text-xs uppercase tracking-wider text-sand transition-colors duration-300 hover:bg-sand hover:text-ink"
                >
                  Explore
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
              aria-hidden="true"
            >
              <span className="text-[9px] uppercase tracking-[0.3em] text-sand/60">Scroll</span>
              <span className="relative block h-10 w-px overflow-hidden bg-sand/25">
                <motion.span
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-sand"
                />
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <CollectionBanners />
      <TrustStrip />
      <LuxuryJewelry />
      <StoryBrand />
      <PhotoCollectionGrid />

      {/* CTA banner */}
      <section className="relative overflow-hidden border-t border-ink/10 bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-4xl text-pearl sm:text-5xl">
              Designed to be worn. <span className="text-gradient-gold italic">Made to last.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-mist">
              Join our list for early access to limited drops and private studio events.
            </p>
            <Link
              to="/shop"
              className="btn-dark mt-8 inline-block px-9 py-3.5 text-xs uppercase tracking-wider"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </MotionConfig>
  );
}
