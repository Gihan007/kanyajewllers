// Product photos live in /public/products. Prices are in LKR.
export const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets", "Anklets"];

export const styles = [
  { key: "bohemian", label: "Bohemian" },
  { key: "tarnish", label: "Anti-Tarnish & Stainless Steel" },
];

export const formatPrice = (n) => `Rs. ${n.toLocaleString("en-LK")}`;

const img = (id, w = 800, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const products = [
  {
    "id": "kan-001",
    "name": "Mehroon Ruby Oxidised Ring",
    "category": "Rings",
    "price": 4300,
    "material": "Oxidised Silver Finish, Glass Stone",
    "image": "/products/kan-001-1.jpg",
    "gallery": [
      "/products/kan-001-1.jpg",
      "/products/kan-001-2.jpg",
      "/products/kan-001-3.jpg"
    ],
    "description": "A statement oxidised ring with a deep ruby-red centre stone and fine filigree edging.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-002",
    "name": "Turquoise Sun Filigree Ring",
    "category": "Rings",
    "price": 4000,
    "material": "Oxidised Silver Finish, Turquoise-colour Stone",
    "image": "/products/kan-002-1.jpg",
    "gallery": [
      "/products/kan-002-1.jpg",
      "/products/kan-002-2.jpg",
      "/products/kan-002-3.jpg"
    ],
    "description": "Turquoise set in a sunburst of oxidised filigree: bold, bohemian and easy to style.",
    "featured": true,
    "tags": [
      "featured"
    ]
  },
  {
    "id": "kan-003",
    "name": "Trio Gold Stacking Rings",
    "category": "Rings",
    "price": 2550,
    "material": "Gold Plated",
    "image": "/products/kan-003-1.jpg",
    "gallery": [
      "/products/kan-003-1.jpg",
      "/products/kan-003-2.jpg",
      "/products/kan-003-3.jpg"
    ],
    "description": "Three stacking gold rings in textured, twisted and plain bands, made to be mixed and worn together. Set of 3.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-004",
    "name": "Cocktail Stone Ring Set",
    "category": "Rings",
    "price": 4150,
    "material": "Gold Plated, Stones",
    "image": "/products/kan-004-1.jpg",
    "gallery": [
      "/products/kan-004-1.jpg",
      "/products/kan-004-2.jpg",
      "/products/kan-004-3.jpg"
    ],
    "description": "Three adjustable cocktail rings with polished stones for a layered look in seconds. Set of 3.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-005",
    "name": "Rose Gold Chain-Link Ring",
    "category": "Rings",
    "price": 5950,
    "material": "Rose Gold Plated Brass",
    "image": "/products/kan-005-1.jpg",
    "gallery": [
      "/products/kan-005-1.jpg",
      "/products/kan-005-2.jpg",
      "/products/kan-005-3.jpg"
    ],
    "description": "A sculpted chain-link band in rose gold tone with an adjustable open back.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-011",
    "name": "Sunburst Oxidised Studs",
    "category": "Earrings",
    "price": 5000,
    "material": "Oxidised Silver Finish",
    "image": "/products/kan-011-1.jpg",
    "gallery": [
      "/products/kan-011-1.jpg",
      "/products/kan-011-2.jpg",
      "/products/kan-011-3.jpg"
    ],
    "description": "Round oxidised studs with a sunburst pattern and fine beaded detail.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-012",
    "name": "Rose Quartz Pearl Jhumka",
    "category": "Earrings",
    "price": 6000,
    "material": "Oxidised Silver Finish, Rose Quartz-colour Stone",
    "image": "/products/kan-012-1.jpg",
    "gallery": [
      "/products/kan-012-1.jpg",
      "/products/kan-012-2.jpg",
      "/products/kan-012-3.jpg"
    ],
    "description": "Rose quartz-colour drops above oxidised jhumka bells finished with tiny pearl beads.",
    "featured": true,
    "tags": [
      "featured"
    ]
  },
  {
    "id": "kan-013",
    "name": "Leaf Midnight Drop Earrings",
    "category": "Earrings",
    "price": 5100,
    "material": "Fabric, Oxidised Silver Finish",
    "image": "/products/kan-013-1.jpg",
    "gallery": [
      "/products/kan-013-1.jpg",
      "/products/kan-013-2.jpg",
      "/products/kan-013-3.jpg"
    ],
    "description": "Black fabric half-moons with silver oxidised leaf charms, light and expressive.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-014",
    "name": "Crescent Jhumka Earrings",
    "category": "Earrings",
    "price": 6000,
    "material": "Oxidised Silver Finish",
    "image": "/products/kan-014-1.jpg",
    "gallery": [
      "/products/kan-014-1.jpg",
      "/products/kan-014-2.jpg",
      "/products/kan-014-3.jpg"
    ],
    "description": "A crescent jhumka with oxidised silver detailing, made to frame the face.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-016",
    "name": "Circle Oxidised Open Cuff",
    "category": "Bracelets",
    "price": 4000,
    "material": "Oxidised Silver Finish",
    "image": "/products/kan-016-1.jpg",
    "gallery": [
      "/products/kan-016-1.jpg",
      "/products/kan-016-2.jpg",
      "/products/kan-016-3.jpg"
    ],
    "description": "An open oxidised cuff with engraved circle ends, adjustable around the wrist.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-017",
    "name": "Onyx Dot Oxidised Cuff",
    "category": "Bracelets",
    "price": 4000,
    "material": "Oxidised Silver Finish",
    "image": "/products/kan-017-1.jpg",
    "gallery": [
      "/products/kan-017-1.jpg",
      "/products/kan-017-2.jpg",
      "/products/kan-017-3.jpg"
    ],
    "description": "A slim oxidised cuff finished with black stone ends.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-018",
    "name": "Ruby Blossom Gold Cuff",
    "category": "Bracelets",
    "price": 5500,
    "material": "Gold Plated, Stones",
    "image": "/products/kan-018-1.jpg",
    "gallery": [
      "/products/kan-018-1.jpg",
      "/products/kan-018-2.jpg",
      "/products/kan-018-3.jpg"
    ],
    "description": "A gold cuff with ruby-red blossoms, opening to slide on easily.",
    "featured": true,
    "tags": [
      "featured"
    ]
  },
  {
    "id": "kan-019",
    "name": "Pearl Drop Gold Cuff",
    "category": "Bracelets",
    "price": 5000,
    "material": "Gold Plated, Pearl-effect Bead",
    "image": "/products/kan-019-1.jpg",
    "gallery": [
      "/products/kan-019-1.jpg",
      "/products/kan-019-2.jpg",
      "/products/kan-019-3.jpg"
    ],
    "description": "An open gold cuff ending in a soft pearl drop.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-020",
    "name": "Coral Shell Chip Necklace",
    "category": "Necklaces",
    "price": 1200,
    "material": "Natural Shell",
    "image": "/products/kan-020-1.jpg",
    "gallery": [
      "/products/kan-020-1.jpg"
    ],
    "description": "A relaxed strand of natural shell chips in blush and ivory, made for warm days.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-021",
    "name": "Cowrie Charm Bracelet",
    "category": "Bracelets",
    "price": 2150,
    "material": "Cowrie Shell, Metal",
    "image": "/products/kan-021-1.jpg",
    "gallery": [
      "/products/kan-021-1.jpg",
      "/products/kan-021-2.jpg",
      "/products/kan-021-3.jpg"
    ],
    "description": "A beaded bracelet with natural cowrie shells and a charm drop, adjustable with a chain.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-030",
    "name": "Pearl Disc Layered Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 2550,
    "material": "Gold Plated, Anti-Tarnish",
    "image": "/products/kan-030-1.jpg",
    "gallery": [
      "/products/kan-030-1.jpg",
      "/products/kan-030-2.jpg",
      "/products/kan-030-3.jpg"
    ],
    "description": "Two fine chains layered with pearl-white disc pendants, ready to wear as is.",
    "featured": true,
    "tags": [
      "featured"
    ]
  },
  {
    "id": "kan-036",
    "name": "Floral Gold Anklet",
    "category": "Anklets",
    "price": 2450,
    "material": "Gold Polish",
    "image": "/products/kan-036-1.jpg",
    "gallery": [
      "/products/kan-036-1.jpg"
    ],
    "description": "A gold anklet with black floral stone charms and a traditional finish.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-037",
    "name": "Classic Gold Band Ring",
    "category": "Rings",
    "style": "tarnish",
    "price": 1000,
    "material": "304 Stainless Steel, Gold Finish",
    "image": "/products/kan-037-1.jpg",
    "gallery": [
      "/products/kan-037-1.jpg"
    ],
    "description": "A slim polished band in warm gold, made for everyday wear and easy stacking.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-038",
    "name": "Duo Stone Open Ring",
    "category": "Rings",
    "style": "tarnish",
    "price": 2100,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-038-1.jpg",
    "gallery": [
      "/products/kan-038-1.jpg"
    ],
    "description": "An open ring pairing a clear oval stone with a deep red pear-cut stone.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-039",
    "name": "Crystal Ear Jacket Studs",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1000,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-039-1.jpg",
    "gallery": [
      "/products/kan-039-1.jpg"
    ],
    "description": "A crystal stud with a second stone that peeks out below the lobe.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-040",
    "name": "Crystal Arc Huggie Earrings",
    "category": "Earrings",
    "style": "tarnish",
    "price": 990,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-040-1.jpg",
    "gallery": [
      "/products/kan-040-1.jpg"
    ],
    "description": "Polished gold huggies with a row of crystals along the lower curve.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-041",
    "name": "Pave Square Huggie Earrings",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1190,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-041-1.jpg",
    "gallery": [
      "/products/kan-041-1.jpg"
    ],
    "description": "Compact square huggies covered in three rows of sparkling crystals.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-042",
    "name": "Swirl Sculpt Earrings",
    "category": "Earrings",
    "style": "tarnish",
    "price": 990,
    "material": "304 Stainless Steel, Gold Finish",
    "image": "/products/kan-042-1.jpg",
    "gallery": [
      "/products/kan-042-1.jpg"
    ],
    "description": "Bold, glossy gold swirls on a post back, light enough for all-day wear.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-043",
    "name": "Nautilus Shell Statement Earrings",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1000,
    "material": "304 Stainless Steel, Gold Finish",
    "image": "/products/kan-043-1.jpg",
    "gallery": [
      "/products/kan-043-1.jpg"
    ],
    "description": "Ridged spiral shell studs in high-shine gold, made to be noticed.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-044",
    "name": "Wave Trio Bangle Set",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1350,
    "material": "304 Stainless Steel, Gold Finish",
    "image": "/products/kan-044-1.jpg",
    "gallery": [
      "/products/kan-044-1.jpg"
    ],
    "description": "Three smooth, gently waved gold bangles to wear together or apart. Set of 3.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-045",
    "name": "Seashell Starfish Cuff",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1150,
    "material": "304 Stainless Steel, Gold Finish",
    "image": "/products/kan-045-1.jpg",
    "gallery": [
      "/products/kan-045-1.jpg"
    ],
    "description": "An open cuff with a textured shell and two starfish on twisted bands.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-046",
    "name": "Sunburst Statement Cuff",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1450,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-046-1.jpg",
    "gallery": [
      "/products/kan-046-1.jpg"
    ],
    "description": "A radiant sun at the centre of an open cuff, flanked by crystal medallions.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-047",
    "name": "Twisted Knot Open Cuff",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1250,
    "material": "304 Stainless Steel, Gold Finish",
    "image": "/products/kan-047-1.jpg",
    "gallery": [
      "/products/kan-047-1.jpg"
    ],
    "description": "A clean open cuff with sculpted twists and a long oval centre.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-048",
    "name": "Triple Bezel Drop Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1400,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-048-1.jpg",
    "gallery": [
      "/products/kan-048-1.jpg"
    ],
    "description": "Two fine chains set with three bezel crystals, ending in a long drop.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-049",
    "name": "Ruby Tulip Pendant Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1350,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-049-1.jpg",
    "gallery": [
      "/products/kan-049-1.jpg"
    ],
    "description": "A delicate tulip pendant with a ruby-red bud and emerald-green leaves.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-050",
    "name": "Teardrop Crystal Solitaire Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1250,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-050-1.jpg",
    "gallery": [
      "/products/kan-050-1.jpg"
    ],
    "description": "A single teardrop crystal on a fine gold chain that sits at the collarbone.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-051",
    "name": "Clover and Pearl Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1350,
    "material": "304 Stainless Steel, Gold Finish, Pearl-effect Bead",
    "image": "/products/kan-051-1.jpg",
    "gallery": [
      "/products/kan-051-1.jpg"
    ],
    "description": "A polished gold clover with a black centre stone, paired with a soft pearl.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-052",
    "name": "Marquise Leaf Pendant Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1250,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-052-1.jpg",
    "gallery": [
      "/products/kan-052-1.jpg"
    ],
    "description": "Two marquise crystals form a small leaf on a fine box chain.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-053",
    "name": "Halo Teardrop Pendant Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1550,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-053-1.jpg",
    "gallery": [
      "/products/kan-053-1.jpg"
    ],
    "description": "A teardrop crystal ringed with tiny stones, hanging from a round crystal.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-054",
    "name": "Rosebud Station Chain Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1450,
    "material": "304 Stainless Steel, Gold Finish",
    "image": "/products/kan-054-1.jpg",
    "gallery": [
      "/products/kan-054-1.jpg"
    ],
    "description": "Tiny gold rosebuds spaced along a fine chain for a light, romantic look.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-055",
    "name": "Bezel Crystal Station Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 3650,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-055-1.jpg",
    "gallery": [
      "/products/kan-055-1.jpg"
    ],
    "description": "Crystals set evenly along the chain with a long centre drop.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-056",
    "name": "Fan Halo Pendant Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 2800,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-056-1.jpg",
    "gallery": [
      "/products/kan-056-1.jpg"
    ],
    "description": "A fan-shaped pendant outlined in crystals around a bright centre stone.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-057",
    "name": "Graduated Crystal Drop Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1450,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-057-1.jpg",
    "gallery": [
      "/products/kan-057-1.jpg"
    ],
    "description": "Three crystals that grow in size on a slim paperclip chain.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-058",
    "name": "Amara Roman Bangle",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1690,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish",
    "image": "/products/kan-058-1.jpg",
    "gallery": [
      "/products/kan-058-1.jpg",
      "/products/kan-058-2.jpg",
      "/products/kan-058-3.jpg"
    ],
    "description": "A gold bangle cut with Roman-numeral detailing, a quiet, graphic everyday piece.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-059",
    "name": "Celia Zircon Bangle",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1750,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish, Zircon",
    "image": "/products/kan-059-1.jpg",
    "gallery": [
      "/products/kan-059-1.jpg",
      "/products/kan-059-2.jpg",
      "/products/kan-059-3.jpg"
    ],
    "description": "A slim gold bangle set with sparkling zircon stones.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-060",
    "name": "Flora Pink Tulip Bracelet",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1890,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish, Stones",
    "image": "/products/kan-060-1.jpg",
    "gallery": [
      "/products/kan-060-1.jpg",
      "/products/kan-060-2.jpg",
      "/products/kan-060-3.jpg"
    ],
    "description": "Tulip blooms in soft pink stones on a gold-finish bracelet.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-061",
    "name": "Astra Zircon Bangle",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 2050,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish, Zircon",
    "image": "/products/kan-061-1.jpg",
    "gallery": [
      "/products/kan-061-1.jpg",
      "/products/kan-061-2.jpg",
      "/products/kan-061-3.jpg"
    ],
    "description": "A statement gold bangle lined with zircon stones.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-062",
    "name": "Flora Purple Tulip Bracelet",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1890,
    "material": "Stainless Steel, Anti-Tarnish, Stones",
    "image": "/products/kan-062-1.jpg",
    "gallery": [
      "/products/kan-062-1.jpg",
      "/products/kan-062-2.jpg",
      "/products/kan-062-3.jpg"
    ],
    "description": "Tulips in pink, purple and white stones on a silver-tone bracelet.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-063",
    "name": "Triple Layer Snake Chain",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 2350,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish",
    "image": "/products/kan-063-1.jpg",
    "gallery": [
      "/products/kan-063-1.jpg",
      "/products/kan-063-2.jpg"
    ],
    "description": "Three snake chains layered in one necklace for an effortless, curated look.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-064",
    "name": "Celia Clover Stone Chain",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1890,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish, Stone Beads",
    "image": "/products/kan-064-1.jpg",
    "gallery": [
      "/products/kan-064-1.jpg",
      "/products/kan-064-2.jpg"
    ],
    "description": "Clover charms and stone beads on a fine gold chain.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-065",
    "name": "Astra Layered Charm Chain",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1790,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish",
    "image": "/products/kan-065-1.jpg",
    "gallery": [
      "/products/kan-065-1.jpg",
      "/products/kan-065-2.jpg",
      "/products/kan-065-3.jpg"
    ],
    "description": "Two layered chains with geometric charms.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-066",
    "name": "Astra Interlocked Ring Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 2150,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish, Stones",
    "image": "/products/kan-066-1.jpg",
    "gallery": [
      "/products/kan-066-1.jpg",
      "/products/kan-066-2.jpg"
    ],
    "description": "Interlocked rings set with Roman numerals and stones.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-067",
    "name": "Kira Geometric Charm Chain",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1950,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish",
    "image": "/products/kan-067-1.jpg",
    "gallery": [
      "/products/kan-067-1.jpg",
      "/products/kan-067-2.jpg",
      "/products/kan-067-3.jpg"
    ],
    "description": "Square geometric charms spaced along a gold chain.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-068",
    "name": "Zola Y-Drop Minimalist Chain",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1650,
    "material": "316L Stainless Steel, Gold Finish, Anti-Tarnish",
    "image": "/products/kan-068-1.jpg",
    "gallery": [
      "/products/kan-068-1.jpg",
      "/products/kan-068-2.jpg"
    ],
    "description": "A minimalist Y-shaped drop on a slim chain.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-069",
    "name": "Iris Bamboo Bar Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1690,
    "material": "316L Stainless Steel, Gold Finish, Anti-Tarnish",
    "image": "/products/kan-069-1.jpg",
    "gallery": [
      "/products/kan-069-1.jpg",
      "/products/kan-069-2.jpg",
      "/products/kan-069-3.jpg"
    ],
    "description": "An irregular bamboo-textured bar on a snake chain.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-070",
    "name": "Astra Multi-Color Charm Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1790,
    "material": "316L Stainless Steel, Anti-Tarnish, Stones",
    "image": "/products/kan-070-1.jpg",
    "gallery": [
      "/products/kan-070-1.jpg",
      "/products/kan-070-2.jpg",
      "/products/kan-070-3.jpg"
    ],
    "description": "Multicolour stone charms on a fine chain.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-071",
    "name": "Saffron Multi-Layer Chain Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1690,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish",
    "image": "/products/kan-071-1.jpg",
    "gallery": [
      "/products/kan-071-1.jpg",
      "/products/kan-071-2.jpg",
      "/products/kan-071-3.jpg"
    ],
    "description": "Several fine chains layered in a single necklace.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-072",
    "name": "Seraphina Pearl Charm Chain",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1890,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish, Pearl-effect Bead",
    "image": "/products/kan-072-1.jpg",
    "gallery": [
      "/products/kan-072-1.jpg",
      "/products/kan-072-2.jpg"
    ],
    "description": "Pearl charms along a gold chain.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-073",
    "name": "Solana Silver Snake Anklet",
    "category": "Anklets",
    "style": "tarnish",
    "price": 1390,
    "material": "Stainless Steel, Silver Colour, Anti-Tarnish",
    "image": "/products/kan-073-1.jpg",
    "gallery": [
      "/products/kan-073-1.jpg",
      "/products/kan-073-2.jpg",
      "/products/kan-073-3.jpg"
    ],
    "description": "A sleek silver-tone snake-chain anklet.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-074",
    "name": "Sienna Snake Bead Anklet",
    "category": "Anklets",
    "style": "tarnish",
    "price": 1550,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish",
    "image": "/products/kan-074-1.jpg",
    "gallery": [
      "/products/kan-074-1.jpg",
      "/products/kan-074-2.jpg",
      "/products/kan-074-3.jpg"
    ],
    "description": "A dual-layer snake-chain anklet with bead detail.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-075",
    "name": "Sienna Sleek Band",
    "category": "Rings",
    "style": "tarnish",
    "price": 1390,
    "material": "304 Stainless Steel, Gold Finish",
    "image": "/products/kan-075-1.jpg",
    "gallery": [
      "/products/kan-075-1.jpg"
    ],
    "description": "A smooth, slim gold band, made to be worn alone or stacked.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-076",
    "name": "Rhea Minimalist Ring",
    "category": "Rings",
    "style": "tarnish",
    "price": 1250,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-076-1.jpg",
    "gallery": [
      "/products/kan-076-1.jpg"
    ],
    "description": "An open gold ring with a bead end and a single emerald-green teardrop crystal, adjustable to fit.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-077",
    "name": "Kira Hammered Ring",
    "category": "Rings",
    "style": "tarnish",
    "price": 1250,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-077-1.jpg",
    "gallery": [
      "/products/kan-077-1.jpg"
    ],
    "description": "A fine twisted-rope band holding one oval crystal in a four-claw setting.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-078",
    "name": "Veda Sculpted Band",
    "category": "Rings",
    "style": "tarnish",
    "price": 1450,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-078-1.jpg",
    "gallery": [
      "/products/kan-078-1.jpg"
    ],
    "description": "A sculpted open ring that wraps between a clear oval crystal and a ruby-red teardrop.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-079",
    "name": "Zola Polished Band",
    "category": "Rings",
    "style": "tarnish",
    "price": 1360,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-079-1.jpg",
    "gallery": [
      "/products/kan-079-1.jpg"
    ],
    "description": "A polished gold band set with three crystals: two round and a teardrop in the centre.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-080",
    "name": "Nova Minimalist Stud",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1150,
    "material": "304 Stainless Steel, Gold Finish",
    "image": "/products/kan-080-1.jpg",
    "gallery": [
      "/products/kan-080-1.jpg"
    ],
    "description": "A sculpted gold swirl earring on a post, bold and smooth with no extra detail.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-081",
    "name": "Celeste Geo Stud",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1550,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-081-1.jpg",
    "gallery": [
      "/products/kan-081-1.jpg"
    ],
    "description": "Slim gold huggie hoops with a curved row of small crystals along the base.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-082",
    "name": "Zephyr Delicate Stud",
    "category": "Earrings",
    "style": "tarnish",
    "price": 2150,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-082-1.jpg",
    "gallery": [
      "/products/kan-082-1.jpg"
    ],
    "description": "A double-band earring that pairs a smooth gold curve with a crystal-pave one.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-083",
    "name": "Luna Dewdrop Chain",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 2250,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-083-1.jpg",
    "gallery": [
      "/products/kan-083-1.jpg"
    ],
    "description": "A single teardrop crystal hanging from a fine gold chain.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-084",
    "name": "Celeste Horizon Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1450,
    "material": "304 Stainless Steel, Gold Finish",
    "image": "/products/kan-084-1.jpg",
    "gallery": [
      "/products/kan-084-1.jpg"
    ],
    "description": "Two gold chains layered together: a flat herringbone and a slim snake chain.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-085",
    "name": "Amber Dawn Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1590,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-085-1.jpg",
    "gallery": [
      "/products/kan-085-1.jpg"
    ],
    "description": "An emerald-green rectangular crystal pendant with three small green accents.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-086",
    "name": "Meadow Gold Strand",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 2250,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-086-1.jpg",
    "gallery": [
      "/products/kan-086-1.jpg"
    ],
    "description": "A gold chain strung with round crystals and finished with a drop at the centre.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-087",
    "name": "Iris Dusk Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1760,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-087-1.jpg",
    "gallery": [
      "/products/kan-087-1.jpg"
    ],
    "description": "A fan-shaped pendant outlined in tiny crystals around a round centre stone.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-088",
    "name": "Solana Vine Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 2150,
    "material": "304 Stainless Steel, Gold Finish, Crystal",
    "image": "/products/kan-088-1.jpg",
    "gallery": [
      "/products/kan-088-1.jpg"
    ],
    "description": "Two marquise crystals joined like leaves on a slim box chain.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-089",
    "name": "Marigold Petal Chain",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1750,
    "material": "304 Stainless Steel, Gold Finish, Pearl-effect Bead",
    "image": "/products/kan-089-1.jpg",
    "gallery": [
      "/products/kan-089-1.jpg"
    ],
    "description": "A four-petal gold flower with a black centre stone, paired with a single pearl bead.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-090",
    "name": "Saffron Dainty Anklet",
    "category": "Anklets",
    "style": "tarnish",
    "price": 1750,
    "material": "304 Stainless Steel, Gold Finish",
    "image": "/products/kan-090-1.jpg",
    "gallery": [
      "/products/kan-090-1.jpg"
    ],
    "description": "A gold paperclip-link anklet with a few textured links, light and easy to wear daily.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-091",
    "name": "Amber Dew Anklet",
    "category": "Anklets",
    "style": "tarnish",
    "price": 1550,
    "material": "304 Stainless Steel, Gold Finish, Pearl-effect Bead",
    "image": "/products/kan-091-1.jpg",
    "gallery": [
      "/products/kan-091-1.jpg"
    ],
    "description": "A delicate anklet of small pearl-effect beads alternating with gold balls.",
    "featured": false,
    "tags": [
      "new"
    ]
  }
];

export const heroImage = img("1697380582263-ba9f5ef8cefa", 900, 1100);
export const lifestyleImage = img("1610214354095-684029c14300", 800, 900);
export const ringsHeroImage = img("1551346261-e19dd7ae9587", 900, 1100);

export const getProductById = (id) => products.find((p) => p.id === id);
