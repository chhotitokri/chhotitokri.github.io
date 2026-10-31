export interface Provision {
  id: string;
  name: string;
  frenchName?: string;
  category: 'rice' | 'oils' | 'honey' | 'spices' | 'fruits';
  monographNumber: string;
  terroirBadge: string;
  terroirRegion: string;
  shortDescription: string;
  frenchShortDescription?: string;
  fullStory: string;
  frenchFullStory?: string;
  specificationTag: string;
  mainImage: string;
  gallery: {
    title: string;
    label: string;
    url: string;
    caption: string;
  }[];
  specs: {
    productName: string;
    origin: string;
    variety: string;
    packFormats: string;
    storage: string;
    ingredients: string;
  };
  cultivationPoints: {
    title: string;
    description: string;
    icon: string;
  }[];
  culinaryPairings: {
    title: string;
    description: string;
  }[];
}

export const PROVISIONS: Provision[] = [
  {
    id: 'kala-namak-rice',
    name: 'Kala Namak Rice',
    frenchName: 'Riz Kala Namak Grand Cru',
    category: 'rice',
    monographNumber: 'Monograph #01',
    terroirBadge: 'Buddha Rice • GI Terroir',
    terroirRegion: 'Terai Belt, Siddharthnagar, Uttar Pradesh',
    shortDescription: 'The legendary scented rice cherished since the Shakya republic. Distinct black husk encases a pearl grain that unfurls an extraordinary jasmine-like aroma and soft, non-sticky dining texture.',
    frenchShortDescription: "Riz aromatique d'exception cultivé depuis deux millénaires dans la plaine du Terai. Son écorce sombre révèle un grain perlé au parfum envoûtant de jasmin.",
    fullStory: "Grown along the fertile alluvial plains of eastern Uttar Pradesh, particularly in and around the historic Siddharthnagar region near the Nepal border, Kala Namak rice carries generations of agricultural heritage. Revered in Buddhist lore as a blessed grain gifted by Gautama Buddha, its distinctive dark inky husk encloses a slender pale grain known for its gentle natural fragrance, delicate elongation, and soft, non-sticky dining texture.",
    frenchFullStory: "Cultivé le long des plaines alluviales fertiles de l'est de l'Uttar Pradesh, le riz Kala Namak perpétue deux millénaires de tradition agronomique. Révéré dans la tradition bouddhiste, il exhale à la cuisson une fragrance florale incomparable.",
    specificationTag: 'Aromatic Grade • Raw Aged',
    mainImage: '/assets/aistudio/Image_6_e62c1819.jpeg',
    gallery: [
      {
        title: 'Plate I • Raw Husk & Grain Anatomy',
        label: 'Raw Grain',
        url: '/assets/aistudio/Image_6_e62c1819.jpeg',
        caption: 'Heirloom Kala Namak rice grains in artisanal clay vessel showing distinctive charcoal husks and pearlescent slender kernels.'
      },
      {
        title: 'Plate II • Steamed Culinary Presentation',
        label: 'Cooked Plate',
        url: '/assets/aistudio/Image_5_6e446d7b.jpeg',
        caption: 'Cooked aromatic Kala Namak rice served in a handcrafted clay bowl with desi cow ghee, tempering herbs, and regional brass tableware.'
      },
      {
        title: 'Plate III • Himalayan Terai Alluvial Belt',
        label: 'Terroir',
        url: '/assets/aistudio/Image_1_f5962f74.jpeg',
        caption: 'Golden morning light sweeping across northern Indian agricultural paddy fields during the traditional autumn harvest.'
      }
    ],
    specs: {
      productName: 'Kala Namak Rice (Buddha Rice)',
      origin: 'Siddharthnagar, Uttar Pradesh, India',
      variety: 'Indigenous Heirloom Aromatic Oryza sativa',
      packFormats: '500 g & 1 kg Luxury Cartons / 25 kg Jute Export Sacks',
      storage: 'Store in airtight container in a cool, dry pantry away from direct moisture.',
      ingredients: '100% Pure Heirloom Kala Namak Rice Grains (Raw Aged, Non-Polished)'
    },
    cultivationPoints: [
      {
        title: 'Seasonal Cultivation',
        description: 'Cultivated in strict alignment with the south-west monsoon rains, allowing the grain panicles to ripen slowly in the temperate autumn sun.',
        icon: 'water_drop'
      },
      {
        title: 'Himalayan Alluvial Soils',
        description: 'Nourished by the mineral-rich sediment carried by snow-fed Himalayan streams through northern Uttar Pradesh terroirs.',
        icon: 'grass'
      },
      {
        title: 'Gentle Low-Friction Milling',
        description: 'Carefully dehusked on small-batch stone mills to preserve the essential oil layer, natural nutrient profile, and fragile floral volatiles.',
        icon: 'agriculture'
      }
    ],
    culinaryPairings: [
      {
        title: 'Steamed with Desi Ghee',
        description: 'Simmer gently in fresh spring water and fold through a teaspoon of cultured A2 cow ghee and sea salt to highlight the grain’s natural floral aroma.'
      },
      {
        title: 'Fragrant Pulao & Awadhi Khichdi',
        description: 'Its non-sticky grain separation makes it ideal for delicate Awadhi saffron pulao, gentle winter khichdi, and slow-braised festive dishes.'
      },
      {
        title: 'With Regional Dals & Curries',
        description: 'A sublime companion to yellow tadka dal, slow-simmered Kashmiri morel curries, and spiced coastal broths.'
      }
    ]
  },
  {
    id: 'mustard-oil',
    name: 'Traditional Mustard Oil',
    frenchName: 'Huile de Moutarde Pressée à Froid',
    category: 'oils',
    monographNumber: 'Monograph #02',
    terroirBadge: 'First Cold Extraction',
    terroirRegion: 'Chambal Valley & Rajasthan',
    shortDescription: 'Extracted via slow wooden rotary presses from small-batch brown mustard seeds. Unrefined and minimally settled, preserving its iconic sharp pungency, high smoke point, and restorative character.',
    frenchShortDescription: 'Extraite sur meule de bois traditionnelle kachi ghani. Non raffinée, elle offre une vivacité et un piquant incomparables pour les cuissons de haute gastronomie.',
    fullStory: 'In the arid, sun-baked landscape of the Chambal Valley and eastern Rajasthan, heirloom Brassica juncea seeds have been cultivated for centuries. Our mustard oil is pressed through traditional wooden rotary expellers (Kohlu) at cold temperatures under 40°C. This gentle physical method retains the precious natural allyl isothiocyanate compound that gives the oil its legendary pungency and golden viscosity.',
    frenchFullStory: 'Dans la vallée du Chambal, les graines de moutarde brune sont cueillies à maturité puis pressées à froid sur des moulins en bois séculaires.',
    specificationTag: 'Wooden Kolhu • Unfiltered',
    mainImage: '/assets/aistudio/Image_14_1eae4f68.jpeg',
    gallery: [
      {
        title: 'Plate I • First Press Cold Extraction',
        label: 'Golden Pour',
        url: '/assets/aistudio/Image_14_1eae4f68.jpeg',
        caption: 'Warm golden stream of slow-pressed artisanal mustard oil pouring into an antique flacon surrounded by whole brown brassica seeds.'
      },
      {
        title: 'Plate II • The Hearth Kitchen',
        label: 'Culinary Craft',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4J_sG2p-aPc_C__ClWshSl8PF48EYGqC_1NqyzBKf-o9X27_8Urrv3hAIRei2EZ-d7spFAOAc7l82X5gORBnZcyxIOosdHMvDNiFJ2juus005BBDNthnt8s-rvfMZmSawskRJXh5R-iKqZV7jC5rQ2ukZeQZfU-MmKEmg-q5uEUQ030VululA1Xq59twJxepFapGJnrntD_9rTYdOrOOOi1pC7nwPxov3WAVabYvRixuzxmqkVxun',
        caption: 'Cast iron cookware and warm aromatic mustard oil in a traditional northern Indian culinary kitchen.'
      }
    ],
    specs: {
      productName: 'Kachi Ghani Cold-Pressed Mustard Oil',
      origin: 'Chambal Valley, Rajasthan / Madhya Pradesh border',
      variety: 'Heirloom Native Brown Mustard (Brassica juncea)',
      packFormats: '500 ml & 1 Litre Amber Glass Bottles / 5L Food-grade Tins',
      storage: 'Store in cool ambient pantry away from direct solar radiation.',
      ingredients: '100% Single-Origin Cold-Pressed Mustard Seed Oil'
    },
    cultivationPoints: [
      {
        title: 'Wood Expeller (Kolhu)',
        description: 'Single slow mechanical pressing without hydraulic heating, chemical solvents, or artificial refining agents.',
        icon: 'settings_slow_motion'
      },
      {
        title: 'High Smoke Point',
        description: 'Unrefined natural smoke point of ~250°C, making it exceptional for flash-tempering, deep pan roasts, and marinades.',
        icon: 'local_fire_department'
      },
      {
        title: 'Natural Anti-Microbial Properties',
        description: 'Rich in natural glucosinolates and essential fatty acids that have safeguarded Indian pickles and cures for centuries.',
        icon: 'verified_user'
      }
    ],
    culinaryPairings: [
      {
        title: 'Bengali Fish & Mustard Maach',
        description: 'The irreplaceable foundation of Shorshe Ilish, Macher Jhol, and roasted pumpkin curries.'
      },
      {
        title: 'Pickling & Seasonal Achaar',
        description: 'Cures raw green mangoes, whole red chillies, and winter root vegetables into shelf-stable culinary condiments.'
      },
      {
        title: 'Rustic Sautéing & Tadka',
        description: 'Smoked lightly until wispy, then tempered with panch phoron for greens, lentils, and roasted potatoes.'
      }
    ]
  },
  {
    id: 'forest-honey',
    name: 'Pure Forest Honey',
    frenchName: 'Miel Sauvage des Forêts Vierges',
    category: 'honey',
    monographNumber: 'Monograph #03',
    terroirBadge: 'Wild Multi-Flora Nectar',
    terroirRegion: 'Western Ghats & Shola Tracts',
    shortDescription: 'Naturally gathered by indigenous tribal apiarists from blooming high-altitude wildflowers. Unheated, raw, and gravity-strained, retaining pure pollen grains, deep amber notes, and active enzymes.',
    frenchShortDescription: 'Récolté par les tribus indigènes dans les sanctuaires écologiques des Ghats occidentaux. Brut, non chauffé et chargé de pollens rares.',
    fullStory: 'Harvested in the cloud-forests of the Nilgiri Biosphere and deep Western Ghats, this wild multifloral honey is foraged by wild giant rock bees (Apis dorsata). Indigenous gatherers from the Kurumba and Kattunayakan communities scale ancient hardwood canopies using hand-knotted forest vines. The nectar incorporates blossoms of medicinal wild flora, eucalyptus, and rare kurunji flowers.',
    frenchFullStory: 'Ce nectar précieux provient des ruches sauvages perchées sur les falaises sacrées des monts Nilgiri. Les artisans récoltants préservent les équilibres biologiques.',
    specificationTag: 'Unheated • Raw Enriched',
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRMNCHio2-Pz0ll6QIO-nmWZTfLbcyHHzQgu83go3sA0u6SP33qL7epfupnEYLqz2PtWgB-z3HZKOv3HAR4OOnBUGCNQ4MoDpo1LZRhtXVgUTA63B3Tg68gKpJMySda6GZh8O3R4CL2yM9Dm5di3Km30LzIpdAbILhE0KQwbwHa4Oi738G-elHFIGjnYSSEWyrxkOea9FlfI4HvbNO7rYlX6PozqH99wt3v6vkxTSecqPMMFks2LxT',
    gallery: [
      {
        title: 'Plate I • Amber Wild Nectar',
        label: 'Apothecary Jar',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRMNCHio2-Pz0ll6QIO-nmWZTfLbcyHHzQgu83go3sA0u6SP33qL7epfupnEYLqz2PtWgB-z3HZKOv3HAR4OOnBUGCNQ4MoDpo1LZRhtXVgUTA63B3Tg68gKpJMySda6GZh8O3R4CL2yM9Dm5di3Km30LzIpdAbILhE0KQwbwHa4Oi738G-elHFIGjnYSSEWyrxkOea9FlfI4HvbNO7rYlX6PozqH99wt3v6vkxTSecqPMMFks2LxT',
        caption: 'Unfiltered raw forest honey catching morning sunlight alongside natural honeycomb and wooden dipper.'
      },
      {
        title: 'Plate II • The Shola Mist Canopy',
        label: 'Wild Ecosystem',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXr5mE9wUqIwB2PWvm5NsmCJpEe1qFjE2eghNTrSPGLRf3kgxDJmID91C7z7I3KYDbCSpEA-boz_4Qro4iw0tfRdkdDlWE97QxfColkFtHVBHcvRRbBCr5VW7e0St6Bh1ze87CzZFFZY9Gdz4I6LFxVjEVCEcltZvNOBC5J0SWUzqAP7J_-O2JRJGJKmtYNTf0EVHHPMaYOGEy5hyEEGCjmDbw3a7Qu8hR0wPX6hpKZgXxMt_OlEQM',
        caption: 'Misty blue Shola valleys in the Nilgiri biosphere reserve where native flora flourishes untouched.'
      }
    ],
    specs: {
      productName: 'Raw Single-Origin Wild Forest Honey',
      origin: 'Nilgiri Biosphere Reserve & Western Ghats, India',
      variety: 'Multifloral Wild Forest (Apis dorsata forage)',
      packFormats: '350 g & 700 g Heavyweight Ceramic & Glass Apothecary Jars',
      storage: 'Room temperature; avoid refrigeration. Crystallization is a natural mark of raw purity.',
      ingredients: '100% Raw Unpasteurized Wild Forest Honey'
    },
    cultivationPoints: [
      {
        title: 'Gentle Gravity Straining',
        description: 'Never micro-filtered or heat-treated; strained purely through natural organic muslin to keep living enzymes and bee pollen intact.',
        icon: 'filter_alt'
      },
      {
        title: 'Tribal Stewardship',
        description: 'Harvested in partnership with forest tribes who follow sustainable harvesting cycles leaving sufficient honey for hive regeneration.',
        icon: 'handshake'
      },
      {
        title: 'Complex Botanical Terroir',
        description: 'Tasting notes shift with each seasonal bloom from deep molasses and forest resin to wildflower caramel and woody spice.',
        icon: 'spa'
      }
    ],
    culinaryPairings: [
      {
        title: 'Artisanal Cheeses & Curds',
        description: 'Drizzles over aged pecorino, fresh buffalo mozzarella, or thick Greek-style hung curd with toasted pistachios.'
      },
      {
        title: 'Morning Teas & Herbal Infusions',
        description: 'Stirred into single-estate Darjeeling teas or warm tulsi infusions after cooling slightly.'
      },
      {
        title: 'Pastry & Savoury Glazes',
        description: 'Brings botanical depth to roasted winter squashes, duck breast reductions, and sourdough tartines.'
      }
    ]
  },
  {
    id: 'turmeric',
    name: 'Sun-Dried Turmeric',
    frenchName: 'Curcuma Séché au Soleil',
    category: 'spices',
    monographNumber: 'Monograph #04',
    terroirBadge: 'High Curcumin Selection',
    terroirRegion: 'Lakadong & Waigaon Heritage',
    shortDescription: 'Selected for exceptional natural curcumin concentrations. Traditionally sun-cured on open slate courtyards and stone-pulverized at low friction to preserve fragile essential volatile oils.',
    frenchShortDescription: 'Curcuma précieux de la variété Lakadong, réputé pour sa concentration exceptionnelle en curcumine (7,5%) et son éclat vermillon.',
    fullStory: 'From the rain-drenched valleys of the Jaintia Hills in Meghalaya and ancestral soil pockets in Waigaon, our turmeric rhizomes are cultivated without synthetic fertilizers. The cool mountain air and organic forest humus foster an extraordinary curcumin potency reaching between 7.2% and 8%. Sun-cured on woven slate terraces, the rhizomes retain their aromatic volatile turmerones.',
    frenchFullStory: 'Récolté à flanc de colline dans le Meghalaya, ce curcuma sauvage est lentement séché sur nattes de bambou.',
    specificationTag: 'Stone Milled • 7.5% Curcumin',
    mainImage: '/assets/aistudio/Image_18_2f75cd1c.jpeg',
    gallery: [
      {
        title: 'Plate I • Terraced Powder & Sun-Cured Rhizomes',
        label: 'Pure Spice',
        url: '/assets/aistudio/Image_18_2f75cd1c.jpeg',
        caption: 'Stone-ground golden-orange turmeric powder displayed beside whole sun-cured mother roots on raw jute.'
      }
    ],
    specs: {
      productName: 'High-Potency Lakadong Turmeric Powder',
      origin: 'Jaintia Hills, Meghalaya & Waigaon, Maharashtra, India',
      variety: 'Curcuma longa (Lakadong Heirloom Strain)',
      packFormats: '250 g & 500 g Foil-Lined Archival Tins',
      storage: 'Keep sealed in dark, cool conditions to preserve active curcumin compounds.',
      ingredients: '100% Pure Ground Lakadong Turmeric Root'
    },
    cultivationPoints: [
      {
        title: '7.5% Natural Curcumin',
        description: 'Triple the concentration of commercial commodity turmeric, granting intense botanical hue and therapeutic potency.',
        icon: 'stars'
      },
      {
        title: 'Slow Stone Pulverization',
        description: 'Milled at sub-45°C friction temperatures to ensure natural aromatic terpenes do not evaporate during processing.',
        icon: 'circle'
      },
      {
        title: 'Unadulterated Zero-Additive',
        description: 'Free of lead chromate, cornstarch fillers, or synthetic dyes. Laboratory certified for pure botanical lineage.',
        icon: 'verified'
      }
    ],
    culinaryPairings: [
      {
        title: 'Golden Milk & Golden Broths',
        description: 'Whisked with hot milk, black pepper, and crushed green cardamom for the iconic nourishing golden elixir.'
      },
      {
        title: 'Heirloom Sabzis & Lentil Stews',
        description: 'A pinch creates vibrant saffron clarity and deep earthy warmth in everyday north Indian home cooking.'
      },
      {
        title: 'Pickling Marinades & Ferments',
        description: 'Vitalizing colour and natural preservation in fresh ginger-turmeric brines and vegetable krauts.'
      }
    ]
  },
  {
    id: 'dehydrated-fruits',
    name: 'Sun-Ripened Dehydrated Fruits',
    frenchName: 'Fruits Séchés au Soleil Équitable',
    category: 'fruits',
    monographNumber: 'Monograph #05',
    terroirBadge: 'Zero Refined Additives',
    terroirRegion: 'Konkan Coast & Nilgiris',
    shortDescription: 'Seasonal Indian mangoes, Queen pineapples, and mountain fruits sliced at the exact peak of brix maturity. Gently dehydrated at low thermal velocity to lock in tartness, fiber, and sunlit color.',
    frenchShortDescription: 'Mangues Alphonso et ananas Queen cueillis à parfaite maturité, séchés doucement à basse température sans sucre ajouté.',
    fullStory: 'Tree-ripened Alphonso and Ratnagiri mangoes, sweet Queen pineapples from Assam, and wild mountain figs are gathered at the zenith of their natural sugar cycle. Without sulfur dioxide, preservatives, or added refined syrups, they undergo gentle solar dehydration in hygienic thermal chambers that evaporate moisture while concentrating intense fruit essence.',
    frenchFullStory: 'Les fruits les plus gorgés de soleil d’Inde du Sud, séchés sans aucun additif pour une concentration maximale des saveurs.',
    specificationTag: 'Pure Botanical Sweetness',
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm9dKT7JSA1UbB0_L4PaIuFPnKC865gvcdN1xp7521Gc-Gp0AesAU05cqVgpcnc-NcbxjtY0aie6hsU3rSzya8xuvH69kp9XOtumqCDxrOGf5PeBpAcj3lbQFJ7m-u7etsqP_2dZkcrwNHd3_GnR3BIddkArQXL4B5zvDF1QPGeqWUudtCsiZySfnimEKWIrguu3x4puVtOt3FKDR2wZD3pmLxlrbHqSj4qjyIiFWXndDwD5sLwLRn',
    gallery: [
      {
        title: 'Plate I • Sunlit Orchard Harvest',
        label: 'Dried Fruits',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm9dKT7JSA1UbB0_L4PaIuFPnKC865gvcdN1xp7521Gc-Gp0AesAU05cqVgpcnc-NcbxjtY0aie6hsU3rSzya8xuvH69kp9XOtumqCDxrOGf5PeBpAcj3lbQFJ7m-u7etsqP_2dZkcrwNHd3_GnR3BIddkArQXL4B5zvDF1QPGeqWUudtCsiZySfnimEKWIrguu3x4puVtOt3FKDR2wZD3pmLxlrbHqSj4qjyIiFWXndDwD5sLwLRn',
        caption: 'Golden Alphonso mango ribbons and dehydrated pineapples resting on antique deckle-edged paper.'
      }
    ],
    specs: {
      productName: 'Solar Dehydrated Peak-Season Fruits',
      origin: 'Konkan Coast (Maharashtra) & Foothills of Nilgiris',
      variety: 'Alphonso Mango, Queen Pineapple, Wild Figs',
      packFormats: '150 g & 300 g Resealable Matte Craft Pouches',
      storage: 'Keep in dry, ambient conditions away from heat and direct sunlight.',
      ingredients: '100% Single-Ingredient Fruit (Zero Added Sugar, Non-Sulfured)'
    },
    cultivationPoints: [
      {
        title: 'Tree-Ripened Brix Selection',
        description: 'Picked strictly upon natural branch maturity when natural fructose, aromas, and pectin are at their sweetest.',
        icon: 'wb_sunny'
      },
      {
        title: 'Low Thermal Dehydration',
        description: 'Moisture extracted under 48°C to retain raw enzymatic integrity, bright fruit color, and chewable fiber.',
        icon: 'air'
      },
      {
        title: 'Zero Chemical Treatment',
        description: 'Never treated with sulfur dioxide for bleaching, synthetic citric acid, or glucose washes.',
        icon: 'eco'
      }
    ],
    culinaryPairings: [
      {
        title: 'Gastronomy & Charcuterie Boards',
        description: 'An elegant counterpoint to washed-rind cheeses, cured meats, and roasted walnuts.'
      },
      {
        title: 'Artisan Baking & Confectionery',
        description: 'Folded into brioche loaves, sourdough bannetons, or soaked in aged rum for holiday cakes.'
      },
      {
        title: 'Everyday Wholesome Nourishment',
        description: 'Clean pocket snack for active travel, tea rituals, or morning granola bowls.'
      }
    ]
  }
];
