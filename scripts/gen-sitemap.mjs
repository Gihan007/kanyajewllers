// Writes public/sitemap.xml from the live site routes and the current product catalogue.
import fs from "node:fs";
import { allProducts, categories } from "../src/data/products.js";

const SITE_URL = "https://kanyajewellers.com";
const today = new Date().toISOString().slice(0, 10);

const staticUrls = [
  { path: "/", priority: "1.0" },
  { path: "/shop", priority: "0.9" },
  { path: "/about", priority: "0.6" },
  { path: "/contact", priority: "0.5" },
  { path: "/build-your-story", priority: "0.5" },
  { path: "/shipping-returns", priority: "0.5" },
  { path: "/care-guide", priority: "0.5" },
];

const categoryUrls = categories
  .filter((c) => c !== "All")
  .map((c) => ({ path: `/shop?category=${c}`, priority: "0.7" }));

const productUrls = allProducts.map((p) => ({ path: `/product/${p.id}`, priority: "0.6" }));

const urls = [...staticUrls, ...categoryUrls, ...productUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.path.replace(/&/g, "&amp;")}</loc>
    <lastmod>${today}</lastmod>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync("public/sitemap.xml", xml);
console.log(`sitemap.xml written with ${urls.length} URLs (${productUrls.length} products)`);
