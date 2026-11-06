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
    "id": "kan-006",
    "name": "Pink Blossom Rotating Ring",
    "category": "Rings",
    "price": 1190,
    "material": "Gold Plated",
    "image": "/products/kan-006-1.jpg",
    "gallery": [
      "/products/kan-006-1.jpg",
      "/products/kan-006-2.jpg",
      "/products/kan-006-3.jpg"
    ],
    "description": "A delicate pink stone blooms at the centre of this adjustable, rotating gold ring.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-007",
    "name": "Evil Eye Wrap Ring",
    "category": "Rings",
    "price": 990,
    "material": "Silver Plated",
    "image": "/products/kan-007-1.jpg",
    "gallery": [
      "/products/kan-007-1.jpg",
      "/products/kan-007-2.jpg",
      "/products/kan-007-3.jpg"
    ],
    "description": "A silver-tone wrap ring with an evil-eye motif and tiny crystals, adjustable to fit.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-008",
    "name": "Zigzag Gold Ring",
    "category": "Rings",
    "style": "tarnish",
    "price": 990,
    "material": "Gold Plated Stainless Steel, Anti-Tarnish",
    "image": "/products/kan-008-1.jpg",
    "gallery": [
      "/products/kan-008-1.jpg",
      "/products/kan-008-2.jpg",
      "/products/kan-008-3.jpg"
    ],
    "description": "A clean zigzag band in gold tone, an adjustable everyday ring that stacks well.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-009",
    "name": "Bamboo Double Band Ring",
    "category": "Rings",
    "style": "tarnish",
    "price": 1000,
    "material": "Gold Plated Stainless Steel, Anti-Tarnish",
    "image": "/products/kan-009-1.jpg",
    "gallery": [
      "/products/kan-009-1.jpg",
      "/products/kan-009-2.jpg",
      "/products/kan-009-3.jpg"
    ],
    "description": "Two slim bamboo-textured bands joined in one adjustable gold ring.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-010",
    "name": "Curve Wrap Gold Ring",
    "category": "Rings",
    "style": "tarnish",
    "price": 1000,
    "material": "Gold Plated Stainless Steel, Anti-Tarnish",
    "image": "/products/kan-010-1.jpg",
    "gallery": [
      "/products/kan-010-1.jpg",
      "/products/kan-010-2.jpg",
      "/products/kan-010-3.jpg"
    ],
    "description": "A smooth, sweeping wrap in polished gold tone, adjustable for an easy fit.",
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
    "id": "kan-015",
    "name": "Interlocked Hoop Earrings",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1000,
    "material": "Gold Plated Stainless Steel, Anti-Tarnish",
    "image": "/products/kan-015-1.jpg",
    "gallery": [
      "/products/kan-015-1.jpg",
      "/products/kan-015-2.jpg",
      "/products/kan-015-3.jpg"
    ],
    "description": "Two interlocking gold hoops in a lightweight, anti-tarnish finish.",
    "featured": false,
    "tags": [
      "new"
    ]
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
    "id": "kan-022",
    "name": "Onyx Disc Gold Bangle",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1100,
    "material": "Gold Plated Stainless Steel, Anti-Tarnish",
    "image": "/products/kan-022-1.jpg",
    "gallery": [
      "/products/kan-022-1.jpg",
      "/products/kan-022-2.jpg",
      "/products/kan-022-3.jpg"
    ],
    "description": "A gold bangle with polished black discs and a hinged clasp.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-023",
    "name": "Orchid Statement Cuff",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1400,
    "material": "Gold Stainless Steel",
    "image": "/products/kan-023-1.jpg",
    "gallery": [
      "/products/kan-023-1.jpg",
      "/products/kan-023-2.jpg",
      "/products/kan-023-3.jpg"
    ],
    "description": "A sculpted orchid cuff in warm gold tone, designed as the one statement piece.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-024",
    "name": "Onyx Dial Gold Bangle",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1100,
    "material": "Gold Plated Stainless Steel, Anti-Tarnish",
    "image": "/products/kan-024-1.jpg",
    "gallery": [
      "/products/kan-024-1.jpg",
      "/products/kan-024-2.jpg",
      "/products/kan-024-3.jpg"
    ],
    "description": "A hinged gold bangle set with a black dial and fine crystal accents.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-025",
    "name": "Spiral Sculpt Cuff",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1400,
    "material": "Gold Stainless Steel",
    "image": "/products/kan-025-1.jpg",
    "gallery": [
      "/products/kan-025-1.jpg",
      "/products/kan-025-2.jpg",
      "/products/kan-025-3.jpg"
    ],
    "description": "A sculptural spiral cuff with bold curves in polished gold tone.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-026",
    "name": "Solitaire Chain Bracelet",
    "category": "Bracelets",
    "price": 1000,
    "material": "Gold Plated",
    "image": "/products/kan-026-1.jpg",
    "gallery": [
      "/products/kan-026-1.jpg",
      "/products/kan-026-2.jpg",
      "/products/kan-026-3.jpg"
    ],
    "description": "A fine gold chain bracelet with a single crystal solitaire and an adjustable clasp.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-027",
    "name": "Tulip Gemstone Bracelet",
    "category": "Bracelets",
    "price": 1250,
    "material": "Gold Plated, Multicolour Stones",
    "image": "/products/kan-027-1.jpg",
    "gallery": [
      "/products/kan-027-1.jpg",
      "/products/kan-027-2.jpg",
      "/products/kan-027-3.jpg"
    ],
    "description": "Pastel stones set in a leaf-like vine, in gold-plated metal.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-028",
    "name": "Evil Eye Charm Cuff",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1450,
    "material": "Gold Plated Stainless Steel, Anti-Tarnish",
    "image": "/products/kan-028-1.jpg",
    "gallery": [
      "/products/kan-028-1.jpg",
      "/products/kan-028-2.jpg",
      "/products/kan-028-3.jpg"
    ],
    "description": "An open gold cuff with evil-eye charms and crystal spacers.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-029",
    "name": "Nail Gold Bangle",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 900,
    "material": "Gold Plated Stainless Steel, Anti-Tarnish",
    "image": "/products/kan-029-1.jpg",
    "gallery": [
      "/products/kan-029-1.jpg",
      "/products/kan-029-2.jpg",
      "/products/kan-029-3.jpg"
    ],
    "description": "A slim nail-shaped bangle in gold tone with a smooth hinged closure.",
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
    "id": "kan-031",
    "name": "Baguette Charm Chain Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1200,
    "material": "Gold Plated Stainless Steel, Anti-Tarnish",
    "image": "/products/kan-031-1.jpg",
    "gallery": [
      "/products/kan-031-1.jpg",
      "/products/kan-031-2.jpg",
      "/products/kan-031-3.jpg"
    ],
    "description": "A long gold chain with scattered baguette crystal charms.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-032",
    "name": "Hoop Pendant Layered Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1050,
    "material": "Gold Plated Stainless Steel, Anti-Tarnish",
    "image": "/products/kan-032-1.jpg",
    "gallery": [
      "/products/kan-032-1.jpg",
      "/products/kan-032-2.jpg",
      "/products/kan-032-3.jpg"
    ],
    "description": "Two layered gold chains finished with a polished hoop pendant.",
    "featured": false,
    "tags": []
  },
  {
    "id": "kan-033",
    "name": "Flat Snake Chain Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1000,
    "material": "Gold Plated, Anti-Tarnish",
    "image": "/products/kan-033-1.jpg",
    "gallery": [
      "/products/kan-033-1.jpg",
      "/products/kan-033-2.jpg",
      "/products/kan-033-3.jpg"
    ],
    "description": "A flat snake chain with a smooth, liquid drape against the collarbone.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-034",
    "name": "Triple Layer Chain Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1400,
    "material": "Gold Plated Stainless Steel, Anti-Tarnish",
    "image": "/products/kan-034-1.jpg",
    "gallery": [
      "/products/kan-034-1.jpg",
      "/products/kan-034-2.jpg",
      "/products/kan-034-3.jpg"
    ],
    "description": "Three fine chains layered in one necklace for an effortless, curated look.",
    "featured": true,
    "tags": [
      "featured"
    ]
  },
  {
    "id": "kan-035",
    "name": "Curve Bar Gold Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 950,
    "material": "Gold Plated Stainless Steel, Anti-Tarnish",
    "image": "/products/kan-035-1.jpg",
    "gallery": [
      "/products/kan-035-1.jpg",
      "/products/kan-035-2.jpg",
      "/products/kan-035-3.jpg"
    ],
    "description": "A slim sculpted bar curving along the collarbone on a delicate chain.",
    "featured": false,
    "tags": [
      "new"
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
  }
];

export const heroImage = img("1697380582263-ba9f5ef8cefa", 900, 1100);
export const lifestyleImage = img("1610214354095-684029c14300", 800, 900);
export const ringsHeroImage = img("1551346261-e19dd7ae9587", 900, 1100);

export const getProductById = (id) => products.find((p) => p.id === id);
