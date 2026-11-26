import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import Seo from "../components/Seo";
import { allProducts, categories, styles } from "../data/products";

const sorters = {
  featured: (a, b) => Number(b.featured) - Number(a.featured),
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
};

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const activeCategory = params.get("category") || "All";
  const source = params.get("source") || "all";
  const activeStyle = styles.find((s) => s.key === params.get("style"));
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let list = [...allProducts];
    if (source === "qimati") list = list.filter((p) => Boolean(p.originalPrice));
    if (activeStyle) list = list.filter((p) => p.style === activeStyle.key);
    if (activeCategory !== "All") {
      const singular = activeCategory.toLowerCase().replace(/s$/, "");
      list = list.filter((p) => p.category.toLowerCase().includes(singular));
    }
    return list.sort(sorters[sort]);
  }, [activeCategory, activeStyle, sort, source]);

  const clearStyle = () => {
    params.delete("style");
    setParams(params, { replace: true });
  };

  const setCategory = (c) => {
    if (c === "All") {
      params.delete("category");
    } else {
      params.set("category", c);
    }
    setParams(params, { replace: true });
  };

  const seoTitle = activeCategory === "All"
    ? "Shop Jewellery Online in Sri Lanka | KANYÃ"
    : `Buy ${activeCategory} Online in Sri Lanka | KANYÃ`;
  const seoDescription = activeCategory === "All"
    ? "Browse KANYÃ's full collection of waterproof, tarnish-free stainless steel jewellery — rings, necklaces, earrings, bracelets and anklets, delivered island-wide in Sri Lanka."
    : `Shop ${activeCategory.toLowerCase()} online in Sri Lanka from KANYÃ. Waterproof, tarnish-free stainless steel with 18k PVD gold finish, delivered island-wide.`;

  return (
    <div className="bg-aurora min-h-screen">
      <Seo title={seoTitle} description={seoDescription} path={activeCategory === "All" ? "/shop" : `/shop?category=${activeCategory}`} />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">
            {activeStyle ? activeStyle.label : "The Collection"}
            {activeStyle && (
              <button onClick={clearStyle} className="ml-4 normal-case tracking-normal text-mist underline hover:text-pearl">
                Show all styles
              </button>
            )}
          </p>
          <h1 className="mt-2 font-display text-5xl text-pearl">{activeCategory === "All" ? "Shop Jewellery" : activeCategory}</h1>
          <p className="mt-3 max-w-2xl text-sm text-mist">{filtered.length.toLocaleString("en-IN")} designs available</p>
        </motion.div>

        {activeCategory === "All" && (
          <div className="mt-8 flex flex-wrap gap-2">
            {[{ key: "all", label: "All products" }, { key: "qimati", label: "Full imported catalogue" }].map((option) => <button key={option.key} onClick={() => { if (option.key === "all") params.delete("source"); else params.set("source", option.key); setParams(params); }} className={`rounded-full border px-4 py-2 text-xs uppercase tracking-wider ${source === option.key ? "border-gold bg-gold/10 text-gold" : "border-ink/16 text-mist"}`}>{option.label}</button>)}
          </div>
        )}

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                  activeCategory === c
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-ink/16 text-mist hover:border-ink/40 hover:text-pearl"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full rounded-full border border-ink/16 bg-panel px-4 py-2.5 text-xs uppercase tracking-wider text-mist outline-none focus:border-gold sm:w-auto"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <div className="mt-4 text-sm text-mist">Showing {filtered.length.toLocaleString("en-IN")} products</div>
        <div className="mt-4 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-20 text-center text-mist">
            {activeStyle ? `The ${activeStyle.label} collection is coming soon.` : "No pieces found in this category yet."}
          </p>
        )}
      </div>
    </div>
  );
}
