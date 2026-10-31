export interface JournalArticle {
  id: string;
  categoryTag: string;
  theme: string;
  readTime: string;
  issue: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  date: string;
  paragraphs: string[];
  pullQuote?: string;
  keyInsights: string[];
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'scent-of-siddhartha',
    categoryTag: 'Botanical Lore',
    theme: 'Ancient Agronomy',
    readTime: '5 Min Read',
    issue: 'Issue IV • Terroir & Seed Heritage',
    title: 'The Scent of Siddhartha: Rediscovering the Fragrant Heritage of Kala Namak Rice',
    excerpt: 'Tracing how Buddhist pilgrims carried this medicinal grain along trade corridors, preserving its fragile germline for two millennia across the Himalayan Terai.',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqUGSM3nP30YmmV4aAlXQiDgeSBLVNC9fEtIPf_8A8Uf3XDtD3jMDEfylTvXinap0tcoz59Ua4WbOk_KYNL4h36fYFuv8UGnsGBmP2sLKcCYamTjfVD1gjyDNr5-TJbVRjtOYlWAyQW3b4V6Aav-dzWd_COMtWnmgMUwbRfOY83jOIQ5piBuFstGf4R__gi4eT45sgV4_pJnV2A5bnOJ6-dsEPZKOHaVl4pwID60RWxDtyeD1-H--K',
    author: 'Curatorial Agronomy Desk',
    date: 'Autumn Harvest 2025',
    pullQuote: 'When Gautama Buddha broke his severe ascetic penance at Kapilavastu, villagers offered him a steaming bowl of kheer made from this specific black-husked grain.',
    paragraphs: [
      'In the quiet villages of Siddharthnagar, where the foothills of the Himalayas begin their gentle rise into southern Nepal, mornings arrive shrouded in cool alluvial mist. Here, small-holder farming families still cultivate Kala Namak, an ancient rice variety whose ancestry stretches uninterrupted for over 2,500 years.',
      'According to regional folklore, when Gautama Buddha broke his severe ascetic penance at Kapilavastu, villagers offered him a steaming bowl of kheer made from this specific black-husked grain. In blessing the village, he supposedly infused the seed with a miraculous floral perfume, saying: "Wherever this seed travels, its scent will recall this morning of enlightenment."',
      'Unlike high-yielding hybrid rices bred for uniformity and accelerated cropping, Kala Namak resists industrial fertilizers. If over-fertilized with synthetic nitrogen, the tall slender stalks grow top-heavy and topple before maturity. It demands patience: a 150-day growing cycle that drinks in the monsoon rains of July and August before ripening beneath the calm golden sunshine of late October.',
      'In the kitchen, the true magic of Kala Namak reveals itself. The dark, charcoal-hued husk is winnowed away to expose a glistening pearl-grey kernel. As it simmers in a clay pot, the kitchen fills with an aroma evocative of wild jasmine and warm basmati, but with a deeper, earthier undertone. The cooked grain remains remarkably soft, fluffy, and completely separated—a triumph of ancient seed selection.'
    ],
    keyInsights: [
      'Protected under Geographical Indication (GI) status in Eastern Uttar Pradesh.',
      'Naturally low glycemic index compared to polished commercial white rice varieties.',
      'Contains four times more iron and double the zinc of standard long-grain rice.',
      'Cultivated by multi-generational farming cooperatives dedicated to heirloom germline preservation.'
    ]
  },
  {
    id: 'mustard-crucible',
    categoryTag: 'Culinary Craft',
    theme: 'Hearth Traditions',
    readTime: '4 Min Read',
    issue: 'Issue IV • Hearth Traditions',
    title: 'Cold-Pressed Traditions: Why the Mustard Crucible Remains the Heart of the Indian Hearth',
    excerpt: 'Understanding the chemistry behind allyl isothiocyanate and why gentle wood expelling creates an aroma impossible to replicate in industrial refining.',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4J_sG2p-aPc_C__ClWshSl8PF48EYGqC_1NqyzBKf-o9X27_8Urrv3hAIRei2EZ-d7spFAOAc7l82X5gORBnZcyxIOosdHMvDNiFJ2juus005BBDNthnt8s-rvfMZmSawskRJXh5R-iKqZV7jC5rQ2ukZeQZfU-MmKEmg-q5uEUQ030VululA1Xq59twJxepFapGJnrntD_9rTYdOrOOOi1pC7nwPxov3WAVabYvRixuzxmqkVxun',
    author: 'Culinary Heritage Council',
    date: 'Monsoon Pressing 2025',
    pullQuote: 'The wooden rotary expeller does not crush; it massages the seed at sub-40°C temperatures, preserving volatile essence and restorative qualities.',
    paragraphs: [
      'In traditional northern and eastern Indian homes, winter commences with the golden glow of freshly pressed mustard oil. Across Uttar Pradesh, Bengal, Bihar, and Rajasthan, heavy iron kadhais simmer with aromatic mustard oil heated until its sharp pungent vapour mellows into a buttery, nut-sweet depth.',
      'Modern industrial refining treats seed oil with high-heat steam, chemical degumming, and caustic soda to create a clear, odorless liquid. But in doing so, it strips away the soul of the seed. Authentic mustard oil derives its character from sinigrin and the natural enzyme myrosinase, which unite during wooden pressing to yield allyl isothiocyanate—the compound responsible for its pungent kick and famed digestive warmth.',
      'At Chhoti Tokri, our brown mustard seeds are pressed in heavy rosewood kolhus operating at just 12 revolutions per minute. The slow rotation avoids thermal damage. The raw oil is settled by gravity alone through linen screens, emerging rich, viscous, and luminous with natural amber carotene.',
      'Whether poured raw over hot steamed rice with green chillies, used to cure sun-dried mango pickles, or smoked to a pale haze before searing whole spices, authentic cold-pressed mustard oil is not just a cooking fat—it is an aromatic cornerstone of Indian culinary identity.'
    ],
    keyInsights: [
      'Single cold extraction below 40°C ensures no structural trans-fat formation.',
      'Natural high smoke point of 250°C makes it extraordinarily versatile for roasting and searing.',
      'Rich in natural omega-3 and omega-6 fatty acids with inherent antimicrobial properties.',
      'Retains deep earthy amber color and characteristic pungent aroma prized by gastronomy masters.'
    ]
  },
  {
    id: 'wild-flora-golden-dew',
    categoryTag: 'Micro-Ecosystems',
    theme: 'Wild Foraging',
    readTime: '6 Min Read',
    issue: 'Issue IV • Botanical Sanctuaries',
    title: 'Wild Flora & Golden Dew: Following Indigenous Honey Harvests Across the Sholas',
    excerpt: 'Ascending the canopy with Kurumba wild gatherers who maintain symbiotic dialogues with giant rock bees across protected biosphere reserves.',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXr5mE9wUqIwB2PWvm5NsmCJpEe1qFjE2eghNTrSPGLRf3kgxDJmID91C7z7I3KYDbCSpEA-boz_4Qro4iw0tfRdkdDlWE97QxfColkFtHVBHcvRRbBCr5VW7e0St6Bh1ze87CzZFFZY9Gdz4I6LFxVjEVCEcltZvNOBC5J0SWUzqAP7J_-O2JRJGJKmtYNTf0EVHHPMaYOGEy5hyEEGCjmDbw3a7Qu8hR0wPX6hpKZgXxMt_OlEQM',
    author: 'Botanical Ecology Liaison',
    date: 'Post-Monsoon Bloom 2025',
    pullQuote: 'The Kurumba gatherers never take the entire comb. They leave behind the brood chamber and a third of the honey to sustain the colony through the winter.',
    paragraphs: [
      'High in the misty escarpments of the Nilgiri Biosphere, where stunted montane evergreen shola forests meet wind-swept rolling grasslands, the air smells of moss, wild cinnamon, and damp lichen. Here lives Apis dorsata—the giant Himalayan rock bee—one of the fiercest and most prolific pollinators on planet Earth.',
      'Building massive single-comb nests on sheer granite cliffs and tall ancient terminalia trees, these wild bees forage across hundreds of species of untouched mountain blossoms. Because the forest blooms in succession—from the mass flowering of wild strobilanthes to purple rhododendrons and wild eucalyptus—the honey produced here possesses an extraordinary depth of flavor.',
      'For centuries, the indigenous Kurumba and Kattunayakan tribes have harvested this honey through sacred rituals. Ascending dizzying cliff faces at dusk using hand-woven rattan ladders, they chant hymns of gratitude to the forest spirit. They harvest only the surplus honey chamber, leaving the brood comb untouched so the swarm remains intact.',
      'Unlike commercial honey heated to prevent crystallization and filtered of all pollen, Chhoti Tokri wild forest honey is raw and unfiltered. It contains visible flecks of wild pollen, royal jelly, and active enzymes. Each spoonful offers a living map of the ancient Western Ghats canopy.'
    ],
    keyInsights: [
      'Raw, unpasteurized and unheated honey with complete enzymatic vitality.',
      'Multifloral composition sourced from medicinal forest wildflowers and high-canopy trees.',
      'Sustainable non-destructive harvesting respecting wild bee colonies and biosphere ecology.',
      'Naturally crystallizes over time into a velvety, creamy spread—the undeniable hallmark of purity.'
    ]
  }
];
