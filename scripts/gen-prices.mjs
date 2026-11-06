// Writes public/prices.json so the order script can double-check every card payment amount against the real prices.
import fs from "node:fs";
import { products } from "../src/data/products.js";
import { store } from "../src/config.js";

const prices = Object.fromEntries(products.map((p) => [p.id, p.price]));
fs.writeFileSync("public/prices.json", JSON.stringify({ prices, shipping: store.shipping }));
console.log(`prices.json written for ${products.length} products`);
