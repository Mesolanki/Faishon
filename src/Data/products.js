export const PRODUCTS = [
  { 
    id: 1, 
    name: "Aero-Shell Parka", 
    price: 420, 
    category: "Outerwear", 
    tech: "Graphene-Lite", 
    img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1200",
    additional_images: [
      "https://images.unsplash.com/photo-1544022613-e87cd75aeb7c?q=80&w=1200",
      "https://images.unsplash.com/photo-1539533377285-bb41e5c4f39a?q=80&w=1200",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200"
    ],
    description: "The Aero-Shell Parka is the pinnacle of urban exploration gear. Featuring a Graphene-Lite membrane, it offers unparalleled thermal regulation.",
    tech_details: "Engineered with a proprietary Graphene-infused membrane, the Aero-Shell Parka provides active thermal regulation by distributing heat across the garment's surface. The 3-layer laminate construction ensures complete water resistance while maintaining a breathability rating of 20,000g/m².",
    specs: ["Waterproof Zippers", "Magnetic Closures", "Internal Carry Straps", "Graphene-Lite Fabric"],
    features: [
      { name: "Thermal Sync", description: "Real-time heat distribution via graphene lattice." },
      { name: "Aqua-Shield", description: "100% waterproof YKK zippers and sealed seams." },
      { name: "Modular Carry", description: "Internal sling system for hands-free transport." }
    ],
    materials: "65% Graphene-Poly, 35% Recycled Nylon"
  },
  { 
    id: 2, 
    name: "Void-Knit Sweater", 
    price: 180, 
    category: "Tops", 
    tech: "Thermal-Sync", 
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200",
    additional_images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200"
    ],
    description: "Engineered for mid-layer performance, the Void-Knit Sweater utilizes Thermal-Sync microfibers to trap heat.",
    tech_details: "The Void-Knit uses a high-density 3D knitting process that creates micro-pockets of air, providing superior insulation without adding weight. The Thermal-Sync fibers are treated with a moisture-wicking finish to ensure comfort during high-output activities.",
    specs: ["3D Knit Construction", "Seamless Design", "Moisture Wicking", "Thumb-loop Cuffs"],
    features: [
      { name: "Micro-Pockets", description: "Traps air for exceptional warmth-to-weight ratio." },
      { name: "Ergo-Fit", description: "Seamless construction for zero chafing." },
      { name: "Dry-Flow", description: "Rapid moisture transport system." }
    ],
    materials: "90% Merino Tech, 10% Elastane"
  },
  { 
    id: 3, 
    name: "Phase-Shift Cargo", 
    price: 290, 
    category: "Bottoms", 
    tech: "Liquid-Repel", 
    img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200",
    additional_images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1200",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1200"
    ],
    description: "The Phase-Shift Cargo pants offer modular utility for the high-performance lifestyle.",
    tech_details: "Constructed from a 4-way stretch double weave fabric with a DWR (Durable Water Repellent) finish, these cargos are designed for maximum mobility. The 'Phase-Shift' technology refers to the modular pocket configuration that can be adjusted based on carry requirements.",
    specs: ["12 Pockets", "Articulated Knees", "Liquid-Repel Coating", "Modular Attachment Points"],
    features: [
      { name: "Omni-Store", description: "12 strategically placed utility pockets." },
      { name: "Flex-Move", description: "4-way stretch for unrestricted motion." },
      { name: "Repel-G", description: "Advanced liquid and stain resistance." }
    ],
    materials: "92% Nylon, 8% Spandex"
  },
  { 
    id: 4, 
    name: "Neural-Mesh Cap", 
    price: 65, 
    category: "Accessories", 
    tech: "Bio-Cool", 
    img: "https://assets.lummi.ai/assets/Qmb7zXebvkeJoF9FnxwesJdjfHa96G4mf7orkMdmM9MfJc?auto=format&w=800",
    additional_images: [
      "https://assets.lummi.ai/assets/Qmc9VfE6LzM5WreL3j3L5s99y8y1Nf3u6XkR7pDk6WvB7r?auto=format&w=800"
    ],
    description: "A low-profile cap designed for maximum ventilation with Bio-Cool active cooling.",
    tech_details: "The Neural-Mesh panels are laser-cut for precision airflow. The headband features Bio-Cool technology, a phase-change material that absorbs heat from the skin and releases it, keeping you significantly cooler than traditional caps.",
    specs: ["Mesh Ventilation", "Adjustable Toggle", "Reflective Branding", "Quick-dry Material"],
    features: [
      { name: "Laser-Air", description: "Precision-cut ventilation zones." },
      { name: "PCM Cooling", description: "Active heat absorption technology." },
      { name: "Night-Viz", description: "3M reflective hits for safety." }
    ],
    materials: "100% Recycled Poly-Mesh"
  },
  { 
    id: 5, 
    name: "Cipher Boots", 
    price: 550, 
    category: "Footwear", 
    tech: "Carbon-Base", 
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200",
    additional_images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1200"
    ],
    description: "The Cipher Boots combine rugged durability with high-tech Carbon-Base energy return.",
    tech_details: "Featuring a full-length carbon fiber plate embedded in a high-rebound Nitrogen-infused midsole, the Cipher Boots provide exceptional energy return with every step. The upper is made from abrasion-resistant Cordura and reinforced with TPU overlays for extreme durability.",
    specs: ["Vibram Outsole", "Carbon-fiber Plate", "Waterproof Leather", "Quick-lace System"],
    features: [
      { name: "Force-Drive", description: "Carbon plate for explosive energy return." },
      { name: "Vibram-X", description: "Mega-grip compound for all-terrain traction." },
      { name: "Shield-Toe", description: "Reinforced TPU protection." }
    ],
    materials: "Cordura, TPU, Carbon Fiber, Nitrile Rubber"
  },
  { 
    id: 6, 
    name: "Iso-Puffer Vest", 
    price: 210, 
    category: "Outerwear", 
    tech: "Aero-Gel", 
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200",
    additional_images: [
      "https://images.unsplash.com/photo-1545591302-d5f6179136c2?q=80&w=1200"
    ],
    description: "Lightweight yet incredibly warm, featuring Aero-Gel insulation.",
    tech_details: "Utilizing NASA-developed Aero-Gel insulation, this vest provides the highest warmth-to-weight ratio of any material known to man. The 10D recycled ripstop shell is treated with a silicone coating for windproofing and water resistance.",
    specs: ["Aero-Gel Insulation", "Windproof Overlay", "Zip Pockets", "Packs into Pocket"],
    features: [
      { name: "Space-Tech", description: "Aero-Gel insulation for extreme cold." },
      { name: "Ultra-Light", description: "Weighs less than 200 grams." },
      { name: "Compact-Hub", description: "Folds into its own internal pocket." }
    ],
    materials: "10D Ripstop Nylon, Aero-Gel Synthetic Down"
  },
  { 
    id: 7, 
    name: "Ion-Drive Shell", 
    price: 480, 
    category: "Outerwear", 
    tech: "Electro-Shield", 
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200",
    additional_images: [
      "https://images.unsplash.com/photo-1544022613-e87cd75aeb7c?q=80&w=1200"
    ],
    description: "A high-performance rain shell with electromagnetic closures.",
    tech_details: "The Ion-Drive Shell uses an Electro-Shield membrane that actively repels water droplets using a low-voltage electrostatic charge. The integrated magnetic zippers provide a seamless, click-lock closure experience even in the heaviest storms.",
    specs: ["Electrostatic DWR", "Magnetic Zippers", "Laser-Cut Vents", "Reinforced Shoulders"],
    features: [
      { name: "Static-Repel", description: "Active droplet repulsion via charging." },
      { name: "Click-Lock", description: "Magnetically aligned storm closures." },
      { name: "Storm-Vis", description: "High-contrast internal lining for emergencies." }
    ],
    materials: "Solid-State Poly, Electro-Nylon"
  },
  { 
    id: 8, 
    name: "Shadow-Mesh T", 
    price: 95, 
    category: "Tops", 
    tech: "Silver-Thread", 
    img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200",
    additional_images: [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200"
    ],
    description: "Breathable base layer with anti-microbial silver threading.",
    tech_details: "Engineered for daily high-output activities, the Shadow-Mesh T features X-Static silver fibers woven directly into the fabric. This provides permanent anti-odor protection and regulates body temperature during intense movement.",
    specs: ["Flatlock Seams", "Silver-Thread Tech", "Mesh Zone Ventilation", "Scalloped Hem"],
    features: [
      { name: "X-Static", description: "Permanent anti-odor and heat regulation." },
      { name: "Breathe-Lite", description: "Laser-cut ventilation in sweat zones." },
      { name: "Ergo-Knit", description: "Anatomically mapped compression fit." }
    ],
    materials: "88% Recycled Poly, 12% X-Static Silver"
  },
  { 
    id: 9, 
    name: "Kinetic Joggers", 
    price: 245, 
    category: "Bottoms", 
    tech: "Flex-Pivot", 
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200",
    additional_images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200"
    ],
    description: "Articulated joggers with multi-axis flexibility.",
    tech_details: "The Kinetic Joggers features a Flex-Pivot knee construction that allows for 360-degree movement without fabric bunching. Built from an abrasion-resistant double-weave fabric, these are designed for both urban and rugged environments.",
    specs: ["Articulated Knees", "Stretch-Grip Cuffs", "Dual Utility Zips", "Water-Repellent Layer"],
    features: [
      { name: "360-Pivot", description: "Advanced knee articulation for high mobility." },
      { name: "Tough-Weave", description: "Extreme abrasion resistance (level 9)." },
      { name: "Drop-Lock", description: "Secure magnetic phone pocket." }
    ],
    materials: "Nylon-Cordura Blend, Spandex"
  },
  { 
    id: 10, 
    name: "Quantum Slides", 
    price: 120, 
    category: "Footwear", 
    tech: "Fluid-Core", 
    img: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1200",
    additional_images: [
      "https://images.unsplash.com/photo-1533681478291-0ad0c691245a?q=80&w=1200"
    ],
    description: "Recovery footwear with liquid-infused cushioning.",
    tech_details: "Designed for post-operation recovery, the Quantum Slides use a proprietary Fluid-Core midsole that adapts its density based on your foot's pressure points. The anti-slip outsole provides traction on any sleek surface.",
    specs: ["Fluid-Density Foam", "Ergonomic Arch Support", "Anti-Slip Rubber", "Odor-Resistant Footbed"],
    features: [
      { name: "Morph-Fit", description: "Adapts to your foot's unique pressure map." },
      { name: "Cloud-Walk", description: "90% more energy absorption than standard EVA." },
      { name: "Grip-Seal", description: "Max traction on wet urban surfaces." }
    ],
    materials: "Liquid-Silicon, Recycled Foam"
  },
  { 
    id: 11, 
    name: "Neural Pack 20L", 
    price: 310, 
    category: "Accessories", 
    tech: "Link-Panel", 
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200",
    additional_images: [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1200"
    ],
    description: "Modular carry system with integrated device link.",
    tech_details: "The Neural Pack is the ultimate urban companion. It features an integrated Link-Panel that allows you to connect your devices to high-capacity internal power banks seamlessly. The modular front grid allows for customizable storage configurations.",
    specs: ["20L Capacity", "Padded Laptop Sleeve", "Waterproof Shell", "Modular PALs Grid"],
    features: [
      { name: "Power-Bridge", description: "Integrated charging ports in straps." },
      { name: "Grid-System", description: "Fully customizable external carry." },
      { name: "Safe-Lock", description: "RFID-blocking internal compartment." }
    ],
    materials: "1000D Cordura, Waterproof PET"
  },
  { 
    id: 12, 
    name: "Tactic Gloves", 
    price: 135, 
    category: "Accessories", 
    tech: "Carbon-Link", 
    img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1200",
    additional_images: [
      "https://images.unsplash.com/photo-1533519159938-160534853276?q=80&w=1200"
    ],
    description: "Touch-sensitive gloves with carbon-fiber protection.",
    tech_details: "Designed for high-speed operation, the Tactic Gloves feature a Carbon-Link shell over the knuckles for maximum protection. The fingertips are woven with conductive silver fibers for seamless interaction with touch-screens in cold environments.",
    specs: ["Carbon-Fiber Plate", "Conductive Fingertips", "Silicone Grip Palm", "Velcro Wrist Strap"],
    features: [
      { name: "Force-Shell", description: "Level-1 knuckle impact protection." },
      { name: "Sync-Touch", description: "Precision touch-screen compatibility." },
      { name: "Grip-Max", description: "Superior friction on smooth surfaces." }
    ],
    materials: "Goatskin Leather, Carbon Fiber, Spandex"
  },
];

export const CATEGORIES = ["All", "Outerwear", "Tops", "Bottoms", "Footwear", "Accessories"];

