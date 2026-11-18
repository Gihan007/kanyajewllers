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
      "/products/kan-058-2.jpg"
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
      "/products/kan-059-2.jpg"
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
      "/products/kan-060-2.jpg"
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
      "/products/kan-062-2.jpg"
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
      "/products/kan-063-1.jpg"
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
      "/products/kan-064-1.jpg"
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
      "/products/kan-065-2.jpg"
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
      "/products/kan-066-1.jpg"
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
      "/products/kan-067-2.jpg"
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
      "/products/kan-068-1.jpg"
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
      "/products/kan-069-2.jpg"
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
      "/products/kan-071-2.jpg"
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
      "/products/kan-072-1.jpg"
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
      "/products/kan-073-2.jpg"
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
      "/products/kan-074-2.jpg"
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
    "name": "Zola Polished Band",
    "category": "Rings",
    "style": "tarnish",
    "price": 1360,
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
    "name": "Veda Sculpted Band",
    "category": "Rings",
    "style": "tarnish",
    "price": 1450,
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
  },
  {
    "id": "kan-092",
    "name": "Isla Liquid Ring",
    "category": "Rings",
    "style": "tarnish",
    "price": 1250,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-092-1.jpg",
    "gallery": [
      "/products/kan-092-1.jpg"
    ],
    "description": "Isla Liquid Ring, a stainless steel ring with an anti-tarnish finish, made for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-093",
    "name": "Saffron Multi-Band Ring",
    "category": "Rings",
    "style": "tarnish",
    "price": 1350,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-093-1.jpg",
    "gallery": [
      "/products/kan-093-1.jpg"
    ],
    "description": "Saffron Multi-Band Ring, a stainless steel ring with an anti-tarnish finish, made for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-094",
    "name": "Terra Ripple Open Ring",
    "category": "Rings",
    "style": "tarnish",
    "price": 1350,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-094-1.jpg",
    "gallery": [
      "/products/kan-094-1.jpg"
    ],
    "description": "Terra Ripple Open Ring, a stainless steel ring with an anti-tarnish finish, made for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-095",
    "name": "Vela Ring",
    "category": "Rings",
    "style": "tarnish",
    "price": 1360,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-095-1.jpg",
    "gallery": [
      "/products/kan-095-1.jpg"
    ],
    "description": "Vela Ring, a stainless steel ring with an anti-tarnish finish, made for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-096",
    "name": "Clover Muse",
    "category": "Rings",
    "style": "tarnish",
    "price": 1650,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-096-1.jpg",
    "gallery": [
      "/products/kan-096-1.jpg"
    ],
    "description": "Clover Muse, a stainless steel ring with an anti-tarnish finish, made for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-097",
    "name": "Amora Ring",
    "category": "Rings",
    "style": "tarnish",
    "price": 1450,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-097-1.jpg",
    "gallery": [
      "/products/kan-097-1.jpg"
    ],
    "description": "Amora Ring, a stainless steel ring with an anti-tarnish finish, made for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-098",
    "name": "Solene Ring",
    "category": "Rings",
    "style": "tarnish",
    "price": 1450,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-098-1.jpg",
    "gallery": [
      "/products/kan-098-1.jpg"
    ],
    "description": "Solene Ring, a stainless steel ring with an anti-tarnish finish, made for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-099",
    "name": "Zaria Ring",
    "category": "Rings",
    "style": "tarnish",
    "price": 1450,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-099-1.jpg",
    "gallery": [
      "/products/kan-099-1.jpg"
    ],
    "description": "Zaria Ring, a stainless steel ring with an anti-tarnish finish, made for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-100",
    "name": "Lumi Hoops",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1450,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-100-1.jpg",
    "gallery": [
      "/products/kan-100-1.jpg"
    ],
    "description": "Lumi Hoops, anti-tarnish stainless steel earrings that are light and easy to wear daily.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-101",
    "name": "Petal Drop",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1490,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-101-1.jpg",
    "gallery": [
      "/products/kan-101-1.jpg"
    ],
    "description": "Petal Drop, anti-tarnish stainless steel earrings that are light and easy to wear daily.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-102",
    "name": "Solstice Drops",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1690,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-102-1.jpg",
    "gallery": [
      "/products/kan-102-1.jpg"
    ],
    "description": "Solstice Drops, anti-tarnish stainless steel earrings that are light and easy to wear daily.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-103",
    "name": "Barely There Hoops",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1590,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-103-1.jpg",
    "gallery": [
      "/products/kan-103-1.jpg"
    ],
    "description": "Barely There Hoops, anti-tarnish stainless steel earrings that are light and easy to wear daily.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-104",
    "name": "Auralis Hoops",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1590,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-104-1.jpg",
    "gallery": [
      "/products/kan-104-1.jpg"
    ],
    "description": "Auralis Hoops, anti-tarnish stainless steel earrings that are light and easy to wear daily.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-105",
    "name": "Everglow Hoops",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1590,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-105-1.jpg",
    "gallery": [
      "/products/kan-105-1.jpg"
    ],
    "description": "Everglow Hoops, anti-tarnish stainless steel earrings that are light and easy to wear daily.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-106",
    "name": "Zola Sleek Cuff",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 2050,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-106-1.jpg",
    "gallery": [
      "/products/kan-106-1.jpg"
    ],
    "description": "Zola Sleek Cuff, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-107",
    "name": "Kira Hammered Bangle",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 2050,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-107-1.jpg",
    "gallery": [
      "/products/kan-107-1.jpg"
    ],
    "description": "Kira Hammered Bangle, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-108",
    "name": "Nala Polished Cuff",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 2050,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-108-1.jpg",
    "gallery": [
      "/products/kan-108-1.jpg"
    ],
    "description": "Nala Polished Cuff, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-109",
    "name": "Lira Dainty Link",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 2150,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-109-1.jpg",
    "gallery": [
      "/products/kan-109-1.jpg"
    ],
    "description": "Lira Dainty Link, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-110",
    "name": "Thalassa Wave Chain",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1350,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-110-1.jpg",
    "gallery": [
      "/products/kan-110-1.jpg"
    ],
    "description": "Thalassa Wave Chain, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-111",
    "name": "Ember Petite Link",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1790,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-111-1.jpg",
    "gallery": [
      "/products/kan-111-1.jpg"
    ],
    "description": "Ember Petite Link, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-112",
    "name": "Nova Gold Strand",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1890,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-112-1.jpg",
    "gallery": [
      "/products/kan-112-1.jpg"
    ],
    "description": "Nova Gold Strand, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-113",
    "name": "Rhea Minimalist Chain",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1790,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-113-1.jpg",
    "gallery": [
      "/products/kan-113-1.jpg"
    ],
    "description": "Rhea Minimalist Chain, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-114",
    "name": "Veda Thread Bracelet",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1550,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-114-1.jpg",
    "gallery": [
      "/products/kan-114-1.jpg"
    ],
    "description": "Veda Thread Bracelet, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-115",
    "name": "Maya Chic Link",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1450,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-115-1.jpg",
    "gallery": [
      "/products/kan-115-1.jpg"
    ],
    "description": "Maya Chic Link, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-116",
    "name": "Orla Gleam Bracelet",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1790,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-116-1.jpg",
    "gallery": [
      "/products/kan-116-1.jpg"
    ],
    "description": "Orla Gleam Bracelet, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-117",
    "name": "Sora Fine Link",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1250,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-117-1.jpg",
    "gallery": [
      "/products/kan-117-1.jpg"
    ],
    "description": "Sora Fine Link, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-118",
    "name": "Calla Meadow Bangle",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1790,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-118-1.jpg",
    "gallery": [
      "/products/kan-118-1.jpg"
    ],
    "description": "Calla Meadow Bangle, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-119",
    "name": "Astra Bracelet",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1890,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-119-1.jpg",
    "gallery": [
      "/products/kan-119-1.jpg"
    ],
    "description": "Astra Bracelet, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-120",
    "name": "Elara Bracelet",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1790,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-120-1.jpg",
    "gallery": [
      "/products/kan-120-1.jpg"
    ],
    "description": "Elara Bracelet, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-121",
    "name": "Gemora Bracelet",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1560,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-121-1.jpg",
    "gallery": [
      "/products/kan-121-1.jpg"
    ],
    "description": "Gemora Bracelet, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-122",
    "name": "Flora Belle Bracelet",
    "category": "Bracelets",
    "style": "tarnish",
    "price": 1650,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-122-1.jpg",
    "gallery": [
      "/products/kan-122-1.jpg"
    ],
    "description": "Flora Belle Bracelet, an anti-tarnish stainless steel bracelet that stays bright with everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-123",
    "name": "Solara Duo",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1890,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-123-1.jpg",
    "gallery": [
      "/products/kan-123-1.jpg"
    ],
    "description": "Solara Duo, an anti-tarnish stainless steel necklace that is light on the neck for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-124",
    "name": "Rosé Stardust",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 2250,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-124-1.jpg",
    "gallery": [
      "/products/kan-124-1.jpg"
    ],
    "description": "Rosé Stardust, an anti-tarnish stainless steel necklace that is light on the neck for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-125",
    "name": "Golden Dune",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1560,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-125-1.jpg",
    "gallery": [
      "/products/kan-125-1.jpg"
    ],
    "description": "Golden Dune, an anti-tarnish stainless steel necklace that is light on the neck for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-126",
    "name": "Celestial Dew",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1960,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-126-1.jpg",
    "gallery": [
      "/products/kan-126-1.jpg"
    ],
    "description": "Celestial Dew, an anti-tarnish stainless steel necklace that is light on the neck for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-127",
    "name": "Amber Bloom",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1560,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-127-1.jpg",
    "gallery": [
      "/products/kan-127-1.jpg"
    ],
    "description": "Amber Bloom, an anti-tarnish stainless steel necklace that is light on the neck for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-128",
    "name": "Moonlit Pearl",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1890,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-128-1.jpg",
    "gallery": [
      "/products/kan-128-1.jpg"
    ],
    "description": "Moonlit Pearl, an anti-tarnish stainless steel necklace that is light on the neck for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-129",
    "name": "Solstice Glow",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1460,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-129-1.jpg",
    "gallery": [
      "/products/kan-129-1.jpg"
    ],
    "description": "Solstice Glow, an anti-tarnish stainless steel necklace that is light on the neck for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-130",
    "name": "Meadow Whisper",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 2150,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-130-1.jpg",
    "gallery": [
      "/products/kan-130-1.jpg"
    ],
    "description": "Meadow Whisper, an anti-tarnish stainless steel necklace that is light on the neck for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-131",
    "name": "Terra Pearl",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 2150,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-131-1.jpg",
    "gallery": [
      "/products/kan-131-1.jpg"
    ],
    "description": "Terra Pearl, an anti-tarnish stainless steel necklace that is light on the neck for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-132",
    "name": "Perla Anklet",
    "category": "Anklets",
    "style": "tarnish",
    "price": 2150,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-132-1.jpg",
    "gallery": [
      "/products/kan-132-1.jpg"
    ],
    "description": "Perla Anklet, an anti-tarnish stainless steel anklet for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-133",
    "name": "Sienna Chain Anklet",
    "category": "Anklets",
    "style": "tarnish",
    "price": 1450,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-133-1.jpg",
    "gallery": [
      "/products/kan-133-1.jpg"
    ],
    "description": "Sienna Chain Anklet, an anti-tarnish stainless steel anklet for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-134",
    "name": "Dewdrop Anklet",
    "category": "Anklets",
    "style": "tarnish",
    "price": 1750,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-134-1.jpg",
    "gallery": [
      "/products/kan-134-1.jpg"
    ],
    "description": "Dewdrop Anklet, an anti-tarnish stainless steel anklet for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-135",
    "name": "Café Link Anklet",
    "category": "Anklets",
    "style": "tarnish",
    "price": 1450,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-135-1.jpg",
    "gallery": [
      "/products/kan-135-1.jpg"
    ],
    "description": "Café Link Anklet, an anti-tarnish stainless steel anklet for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-136",
    "name": "Golden Raindrops Anklet",
    "category": "Anklets",
    "style": "tarnish",
    "price": 1550,
    "material": "Stainless Steel, Gold Finish",
    "image": "/products/kan-136-1.jpg",
    "gallery": [
      "/products/kan-136-1.jpg"
    ],
    "description": "Golden Raindrops Anklet, an anti-tarnish stainless steel anklet for everyday wear.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-137",
    "name": "Celeste Star",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1190,
    "material": "Stainless Steel, Silver Finish, Clear Stone",
    "image": "/products/kan-137-1.jpg",
    "gallery": [
      "/products/kan-137-1.jpg"
    ],
    "description": "Celeste Star, anti-tarnish stainless steel earrings with clear sparkling stones in a silver finish.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-138",
    "name": "Celeste Bloom",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1390,
    "material": "Stainless Steel, Silver Finish, Clear Stone",
    "image": "/products/kan-138-1.jpg",
    "gallery": [
      "/products/kan-138-1.jpg"
    ],
    "description": "Celeste Bloom, anti-tarnish stainless steel earrings with clear sparkling stones in a silver finish.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-139",
    "name": "Celeste Teardrop",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1490,
    "material": "Stainless Steel, Silver Finish, Clear Stone",
    "image": "/products/kan-139-1.jpg",
    "gallery": [
      "/products/kan-139-1.jpg"
    ],
    "description": "Celeste Teardrop, anti-tarnish stainless steel earrings with clear sparkling stones in a silver finish.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-140",
    "name": "Flora Star",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1190,
    "material": "Stainless Steel, Gold Finish, Clear Stone",
    "image": "/products/kan-140-1.jpg",
    "gallery": [
      "/products/kan-140-1.jpg"
    ],
    "description": "Flora Star, anti-tarnish stainless steel earrings with clear sparkling stones in a gold finish.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-141",
    "name": "Daisy Muse",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1390,
    "material": "Stainless Steel, Gold Finish, Clear Stone",
    "image": "/products/kan-141-1.jpg",
    "gallery": [
      "/products/kan-141-1.jpg"
    ],
    "description": "Daisy Muse, anti-tarnish stainless steel earrings with clear sparkling stones in a gold finish.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-142",
    "name": "Pearl Dew",
    "category": "Earrings",
    "style": "tarnish",
    "price": 1490,
    "material": "Stainless Steel, Gold Finish, Clear Stone",
    "image": "/products/kan-142-1.jpg",
    "gallery": [
      "/products/kan-142-1.jpg"
    ],
    "description": "Pearl Dew, anti-tarnish stainless steel earrings with clear sparkling stones in a gold finish.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-144",
    "name": "Celia Zircon Petal Ring",
    "category": "Rings",
    "style": "tarnish",
    "price": 2260,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish, Zircon",
    "image": "/products/kan-144-1.jpg",
    "gallery": [
      "/products/kan-144-1.jpg"
    ],
    "description": "An adjustable flower ring with sparkling zircon petals in a gold finish.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-145",
    "name": "Marigold Tassel Drop",
    "category": "Earrings",
    "style": "tarnish",
    "price": 790,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish, Marquise Zirconia",
    "image": "/products/kan-145-1.jpg",
    "gallery": [
      "/products/kan-145-1.jpg",
      "/products/kan-145-2.jpg",
      "/products/kan-145-3.jpg"
    ],
    "description": "Hollow circle studs with a delicate chain tassel and marquise zirconia drop.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-146",
    "name": "Seraphina Pearl Huggie",
    "category": "Earrings",
    "style": "tarnish",
    "price": 660,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish, Shell Pearl, Zircon",
    "image": "/products/kan-146-1.jpg",
    "gallery": [
      "/products/kan-146-1.jpg",
      "/products/kan-146-2.jpg",
      "/products/kan-146-3.jpg"
    ],
    "description": "Gold huggie hoops with a shell pearl drop crowned by tiny zircon stones.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-147",
    "name": "Cherry Blossom Chain",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1790,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish, Cubic Zirconia",
    "image": "/products/kan-147-1.jpg",
    "gallery": [
      "/products/kan-147-1.jpg",
      "/products/kan-147-2.jpg",
      "/products/kan-147-3.jpg"
    ],
    "description": "A dainty beaded chain hung with clear cubic zirconia cherry charms.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-148",
    "name": "Rhinestone Spacer Necklace",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 2260,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish, Rhinestone",
    "image": "/products/kan-148-1.jpg",
    "gallery": [
      "/products/kan-148-1.jpg",
      "/products/kan-148-2.jpg",
      "/products/kan-148-3.jpg"
    ],
    "description": "A classic pendant necklace with rhinestones and smooth gold spacer beads.",
    "featured": false,
    "tags": [
      "new"
    ]
  },
  {
    "id": "kan-149",
    "name": "Zircon Round Solitaire Chain",
    "category": "Necklaces",
    "style": "tarnish",
    "price": 1660,
    "material": "Stainless Steel, 18K Gold Finish, Anti-Tarnish, White Zircon",
    "image": "/products/kan-149-1.jpg",
    "gallery": [
      "/products/kan-149-1.jpg",
      "/products/kan-149-2.jpg"
    ],
    "description": "A fine gold chain with a single round white zircon solitaire pendant.",
    "featured": false,
    "tags": [
      "new"
    ]
  }
];

export const heroImage = img("1697380582263-ba9f5ef8cefa", 900, 1100);
export const lifestyleImage = img("1610214354095-684029c14300", 800, 900);
export const ringsHeroImage = img("1551346261-e19dd7ae9587", 900, 1100);

import qimatiCatalog from "../../public/qimati-catalog.json";
import qimatiVariants from "../../public/qimati-variants.json";

const rejectedImageFiles = new Set([
  "kan-058-3.jpg", "kan-059-3.jpg", "kan-060-3.jpg", "kan-062-3.jpg",
  "kan-063-2.jpg", "kan-064-2.jpg", "kan-065-3.jpg", "kan-066-2.jpg",
  "kan-067-3.jpg", "kan-068-2.jpg", "kan-069-3.jpg", "kan-071-3.jpg",
  "kan-072-2.jpg", "kan-073-3.jpg", "kan-074-3.jpg",
]);

const removeRejectedImages = (product) => {
  const gallery = product.gallery.filter((image) => !rejectedImageFiles.has(image.split("/").pop()));
  return { ...product, gallery, image: gallery[0] || product.image };
};
const removedProductIds = new Set(["kan-106", "kan-107", "kan-141"]);
const manuallyRemovedQimatiIds = new Set([
  "bracelet-kada-713", "bracelet-kada-712", "bracelet-kada-711", "bracelet-kada-710", "bracelet-kada-709",
  "bracelet-kada-705-small", "chain-bracelet-714", "chain-bracelet-713", "chain-bracelet-712",
  "chain-bracelet-711", "chain-bracelet-706", "chain-bracelet-705", "chain-bracelet-704", "chain-bracelet-688",
  "bracelet-kada-696", "bracelet-kada-688-regular", "bracelet-kada-673", "bracelet-kada-672", "bracelet-kada-664",
  "bracelet-kada-660-small", "bracelet-kada-659-small", "bracelet-kada-656-small", "bracelet-kada-655-small",
  "bracelet-kada-653-small", "bracelet-kada-646", "bracelet-kada-642-small", "bracelet-kada-641-small",
  "bracelet-kada-638-small", "bracelet-kada-635", "bracelet-kada-633-small", "bracelet-kada-632-small",
  "bracelet-kada-631", "bracelet-kada-620", "bracelet-kada-618", "bracelet-kada-609", "bracelet-kada-587",
  "bracelet-kada-580", "bracelet-kada-561", "bracelet-kada-560", "bracelet-kada-557",
  "necklace-1453", "necklace-1452", "necklace-1695", "necklace-1599", "necklace-1468", "necklace-1457",
  "necklace-1970", "necklace-1969", "necklace-2068", "necklace-2112", "necklace-2109", "necklace-2108",
  "necklace-2107",
  "bracelet-kada-717", "bracelet-kada-715", "bracelet-kada-714",
]);
const excludedCategories = new Set(["Nose Pin", "Brooch", "Hand Chains", "Waist Chains", "Watches", "Bags", "Hair Accessories", "Indian Jewellery", "Boxes & Displays"]);
const legacyProducts = products.flatMap((product) => {
  if (removedProductIds.has(product.id)) return [];
  // Use KANYA's own product stock data only; entries without available variants display "Sold Out".
  if (!product.variants?.length || !product.variants.every((variant) => variant.available)) return [];
  const cleaned = removeRejectedImages(product);
  return [cleaned];
});

export const allProducts = [...legacyProducts, ...qimatiCatalog.filter((q) => {
  const variants = qimatiVariants[q.id]?.variants || q.variants || [];
  return !products.some((p) => p.id === q.id) && !manuallyRemovedQimatiIds.has(q.id) && !excludedCategories.has(q.category) && variants.length > 0 && variants.every((variant) => variant.available);
}).map((p) => ({ ...p, fallbackImage: p.image, variants: qimatiVariants[p.id]?.variants || [], options: qimatiVariants[p.id]?.options || [] }))];
export const getProductById = (id) => allProducts.find((p) => p.id === id);
