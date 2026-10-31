import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Compass, Check, ChevronRight } from 'lucide-react';
import { PROVISIONS, Provision } from '../data/provisions';
import { assetUrl } from '../lib/assets';

interface ProductDetailPageProps {
  productId: string;
  onBack: () => void;
  onSelectProduct: (id: string) => void;
  onOpenEnquiry: () => void;
  lang: 'en' | 'fr';
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productId,
  onBack,
  onSelectProduct,
  onOpenEnquiry,
  lang,
}) => {
  const product = PROVISIONS.find((p) => p.id === productId) || PROVISIONS[0];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Companion products (excluding the current one)
  const companionProducts = PROVISIONS.filter((p) => p.id !== product.id).slice(0, 4);

  const currentGalleryItem = product.gallery[activeImageIndex] || product.gallery[0] || {
    title: 'Plate I • Archival Study',
    label: 'Primary Asset',
    url: product.mainImage,
    caption: product.shortDescription
  };

  return (
    <div className="w-full pt-20 bg-[#F8F5EC] min-h-screen flex flex-col">
      {/* Top Archival Foliate Breadcrumb & Status Ribbon */}
      <section className="w-full bg-[#EADFC9]/50 py-3.5 px-4 sm:px-8 lg:px-12 border-b border-[#EADFC9]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <nav className="flex items-center gap-2 text-[#4A554E]">
            <button
              onClick={onBack}
              className="hover:text-[#174D32] transition-colors cursor-pointer flex items-center gap-1 font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? 'Accueil' : 'Home'}</span>
            </button>
            <span className="text-[#B88A3B] opacity-60">/</span>
            <button
              onClick={onBack}
              className="hover:text-[#174D32] transition-colors cursor-pointer"
            >
              {lang === 'fr' ? 'Nos Produits' : 'Our Products'}
            </button>
            <span className="text-[#B88A3B] opacity-60">/</span>
            <span className="text-[#174D32] font-semibold">{product.name}</span>
          </nav>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88A3B]"></span>
            <span className="uppercase tracking-widest text-[#7E5707] font-semibold text-[11px]">
              {product.terroirBadge}
            </span>
          </div>
        </div>
      </section>

      {/* Section 1: Hero Monograph Presentation */}
      <section className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Visual Curation Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Focal Hero Frame */}
            <div className="relative bg-[#FFFFFF] rounded-xl overflow-hidden group shadow-[0_4px_24px_rgba(26,36,30,0.06)] border border-[#EADFC9]">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#F4EFE6]">
                <img
                  src={assetUrl(currentGalleryItem.url)}
                  alt={currentGalleryItem.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = assetUrl(product.mainImage);
                  }}
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-[#FFFFFF]/90 backdrop-blur-xs px-3.5 py-1.5 rounded text-[11px] uppercase tracking-widest text-[#1B241E] font-medium shadow-xs">
                {currentGalleryItem.title}
              </div>
            </div>

            {/* Thumbnail Dossier Selectors */}
            {product.gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {product.gallery.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative rounded-lg overflow-hidden aspect-[4/3] bg-[#F4EFE6] focus:outline-none transition-all cursor-pointer border ${
                      activeImageIndex === idx
                        ? 'border-[#174D32] ring-2 ring-[#174D32]/30 shadow-xs'
                        : 'border-[#EADFC9] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={assetUrl(item.url)}
                      alt={item.label}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = assetUrl(product.mainImage);
                      }}
                    />
                    <div className="absolute bottom-1.5 left-1.5 text-[10px] text-[#F8F5EC] bg-[#174D32]/85 px-1.5 py-0.5 rounded tracking-wider uppercase font-semibold">
                      {item.label}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Micro-Lot Harvest Citation */}
            <div className="p-4 bg-[#EADFC9]/40 rounded-lg flex items-start gap-3 text-[#4A554E] text-xs border border-[#EADFC9]">
              <ShieldCheck className="w-4 h-4 text-[#B88A3B] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                All photography depicted represents verified agricultural micro-lot harvests and documentary botanical records from northern India's alluvial terroirs.
              </p>
            </div>
          </div>

          {/* Right Column: Curatorial Monograph Dossier */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#B88A3B] text-[11px] uppercase tracking-widest font-semibold">
                HERITAGE ARCHIVAL MONOGRAPH
              </span>
              <span className="text-[#EADFC9]">•</span>
              <span className="text-[#B88A3B] text-[11px] uppercase tracking-widest">
                {product.terroirRegion.split(',')[0]}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#00351E] tracking-tight mb-4">
              {product.name}
            </h1>

            <p className="text-[#4A554E] text-base leading-relaxed mb-6 font-normal">
              {product.fullStory}
            </p>

            {/* Spec Feature Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFFFF] border border-[#EADFC9] rounded-full text-[#1B241E] text-xs uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88A3B]"></span>
                Single-Origin
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFFFF] border border-[#EADFC9] rounded-full text-[#1B241E] text-xs uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#174D32]"></span>
                Heirloom Variety
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFFFF] border border-[#EADFC9] rounded-full text-[#1B241E] text-xs uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#727E77]"></span>
                Zero Additives
              </span>
            </div>

            {/* Product Overview Box */}
            <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#EADFC9] shadow-xs mb-6">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-[#B88A3B] text-[18px]">spa</span>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#00351E]">
                  Curatorial Overview
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed">
                An authentic heritage provision cherished for its distinctive aroma and uncompromising quality. For retail packs, food service supply, or trade dossiers, connect with our desk below.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#174D32] hover:bg-[#00351E] text-[#F8F5EC] text-xs uppercase tracking-widest font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
              >
                {lang === 'fr' ? 'Demande Commerciale' : 'Business Enquiries'}
              </button>
              <a
                href="#product-story"
                className="inline-flex items-center justify-center gap-2 text-[#174D32] hover:text-[#B88A3B] text-xs uppercase tracking-widest font-semibold transition-colors py-2"
              >
                <span>{lang === 'fr' ? 'Lire la Monographie' : 'Explore Its Story'}</span>
                <ArrowRight className="w-4 h-4 text-[#B88A3B]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Folio Divider Motif */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-center gap-4 text-[#B88A3B]/40">
        <div className="h-[1px] w-full bg-[#EADFC9]"></div>
        <span className="text-xs uppercase tracking-widest whitespace-nowrap text-[#B88A3B] font-semibold">
          ORIGIN & HERITAGE
        </span>
        <div className="h-[1px] w-full bg-[#EADFC9]"></div>
      </div>

      {/* Section 2: Product Story */}
      <section className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto py-12 lg:py-16" id="product-story">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Editorial Prose */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-[#B88A3B] font-semibold">
              ORIGIN & HERITAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#00351E] tracking-tight">
              A Harvest with a Distinctive Heritage
            </h2>
            <div className="space-y-4 text-base text-[#4A554E] leading-relaxed">
              <p>
                Grown in traditional agricultural belts and nurtured through natural weather cycles, {product.name} reflects centuries of indigenous agricultural mastery. Each lot is gathered in close coordination with multigenerational farming families who preserve native seed biodiversity.
              </p>
              <p>
                Unlike mass commodity agriculture, no chemical ripening agents or artificial polishing are employed. The natural textures, volatile essential compounds, and rich aromas are shielded through patient low-temperature handling and careful hermetic packaging.
              </p>
            </div>

            <div className="mt-4 p-4 bg-[#FFFFFF] rounded-xl border border-[#EADFC9] shadow-xs flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[#B88A3B]">
                <Compass className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-semibold">
                  Regional Provenance Note
                </span>
              </div>
              <p className="text-xs text-[#4A554E] leading-relaxed">
                Sourced from {product.terroirRegion}. We coordinate with regional partners to certify genuine origin, purity, and sustainable farmgate practices.
              </p>
            </div>
          </div>

          {/* Right Narrative Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl shadow-xs border border-[#EADFC9]">
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-5 bg-[#F4EFE6]">
                <img
                  src={assetUrl(product.mainImage)}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[11px] uppercase tracking-widest text-[#B88A3B] font-semibold block mb-1">
                PRODUCT HIGHLIGHT
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#00351E] mb-2 font-bold">
                {product.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed mb-4">
                {product.shortDescription}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-[#EADFC9] text-[11px] text-[#727E77] uppercase tracking-wider font-medium">
                <span>TERROIR: {product.terroirRegion.split(',')[0]}</span>
                <span>HARVEST 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Technical Product Information & Specification Folio */}
      <section className="w-full bg-[#EADFC9]/30 py-14 lg:py-20 border-y border-[#EADFC9]">
        <div className="px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B88A3B] font-semibold">
                SPECIFICATIONS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#00351E] mt-1">
                Product Information
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFFFFF] rounded-full text-xs text-[#7E5707] tracking-wider uppercase border border-[#EADFC9] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#B88A3B]"></span>
              Dossier specifications for culinary reference
            </div>
          </div>

          {/* Specification Grid */}
          <div className="bg-[#FFFFFF] rounded-2xl shadow-xs border border-[#EADFC9] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#EADFC9]">
              {/* Left Column */}
              <div className="p-6 sm:p-8 flex flex-col gap-6">
                <div className="flex flex-col gap-1 pb-4 border-b border-[#EADFC9]/70">
                  <span className="text-[11px] uppercase tracking-widest text-[#B88A3B] font-semibold">
                    Product Name
                  </span>
                  <p className="font-serif text-xl text-[#00351E] font-bold">
                    {product.specs.productName}
                  </p>
                  <span className="text-xs text-[#727E77]">Traditional Single-Origin Provision</span>
                </div>

                <div className="flex flex-col gap-1 pb-4 border-b border-[#EADFC9]/70">
                  <span className="text-[11px] uppercase tracking-widest text-[#B88A3B] font-semibold">
                    Origin & Terroir
                  </span>
                  <p className="text-sm font-semibold text-[#1B241E]">{product.specs.origin}</p>
                  <span className="text-xs text-[#727E77] italic">
                    Harvest lot traceable down to primary cultivator clusters.
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[11px] uppercase tracking-widest text-[#B88A3B] font-semibold">
                    Botanical Variety
                  </span>
                  <p className="text-sm font-semibold text-[#1B241E]">{product.specs.variety}</p>
                  <span className="text-xs text-[#727E77]">Pure heirloom lineage selections.</span>
                </div>
              </div>

              {/* Right Column */}
              <div className="p-6 sm:p-8 flex flex-col gap-6">
                <div className="flex flex-col gap-1 pb-4 border-b border-[#EADFC9]/70">
                  <span className="text-[11px] uppercase tracking-widest text-[#B88A3B] font-semibold">
                    Planned Pack Formats
                  </span>
                  <p className="text-sm font-semibold text-[#1B241E]">{product.specs.packFormats}</p>
                  <span className="text-xs text-[#727E77]">Retail cartons, chef formats & export bulk sacks.</span>
                </div>

                <div className="flex flex-col gap-1 pb-4 border-b border-[#EADFC9]/70">
                  <span className="text-[11px] uppercase tracking-widest text-[#B88A3B] font-semibold">
                    Storage Instructions
                  </span>
                  <p className="text-sm font-semibold text-[#1B241E]">{product.specs.storage}</p>
                  <span className="text-xs text-[#727E77]">Maintain in cool, dry conditions away from pests.</span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[11px] uppercase tracking-widest text-[#B88A3B] font-semibold">
                    Ingredients & Purity
                  </span>
                  <p className="text-sm font-semibold text-[#1B241E]">{product.specs.ingredients}</p>
                  <span className="text-xs text-[#727E77] italic">
                    100% pure ingredient with zero synthetic fillers or additives.
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F5EC] px-6 py-3 text-center border-t border-[#EADFC9]">
              <p className="text-[11px] uppercase tracking-widest text-[#727E77]">
                Technical specifications provided for culinary evaluation and wholesale dossiers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: From Farm to Table (Terroir Documentary) */}
      <section className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto py-14 lg:py-20">
        <div className="flex flex-col gap-2 mb-8">
          <span className="text-xs uppercase tracking-widest text-[#B88A3B] font-semibold">
            TERROIR & CULTIVATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#00351E] tracking-tight">
            From Farm to Table
          </h2>
          <p className="text-base text-[#4A554E] max-w-3xl leading-relaxed">
            Carefully cultivated in northern India's alluvial river plains and sun-drenched hill slopes, our harvests benefit from natural seasonal rains, nutrient-rich soils, and gentle handling.
          </p>
        </div>

        {/* Scenic Landscape Banner */}
        <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-[#F4EFE6] shadow-sm mb-10 border border-[#EADFC9]">
          <img
            src={assetUrl('/assets/aistudio/Image_1_f5962f74.jpeg')}
            alt="Agricultural harvest in India"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00351E]/70 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-[#F8F5EC]">
            <span className="text-xs uppercase tracking-widest text-[#FFDEAD] font-semibold block mb-1">
              Field Study & Cultivation
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#F8F5EC]">
              Sustained by seasonal monsoons and ancient agrarian rhythms
            </p>
          </div>
        </div>

        {/* Terroir Three-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.cultivationPoints.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#FFFFFF] rounded-xl border border-[#EADFC9] shadow-xs flex flex-col gap-2"
            >
              <span className="material-symbols-outlined text-[#B88A3B] text-[24px]">
                {pt.icon}
              </span>
              <h3 className="font-serif text-xl text-[#00351E] font-bold mt-1">
                {pt.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed">
                {pt.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: How It Is Enjoyed */}
      <section className="w-full bg-[#EADFC9]/30 py-14 lg:py-20 border-t border-[#EADFC9]">
        <div className="px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Visual: Cooked Culinary Plate */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4EFE6] shadow-[0_4px_24px_rgba(26,36,30,0.08)] border border-[#EADFC9]">
                <img
                  src={assetUrl(product.gallery[1]?.url || product.mainImage)}
                  alt="Culinary preparation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-[#727E77] uppercase tracking-wider font-medium">
                <span>CULINARY STUDY: AUTHENTIC DISH</span>
                <span>TRADITIONAL TERRACOTTA & BRASS</span>
              </div>
            </div>

            {/* Right Prose & Suggestions */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-[#B88A3B] font-semibold">
                CULINARY INSPIRATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#00351E] tracking-tight">
                How to Enjoy
              </h2>
              <p className="text-base text-[#4A554E] leading-relaxed">
                Made for quiet daily comfort as well as festive culinary centerpieces, our provisions carry a depth of flavor that speaks directly of their soil origin.
              </p>

              <div className="space-y-3 pt-2">
                {product.culinaryPairings.map((pairing, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[#FFFFFF] rounded-xl border border-[#EADFC9] shadow-xs"
                  >
                    <h4 className="font-serif text-lg text-[#00351E] font-bold mb-1">
                      {pairing.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed">
                      {pairing.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Explore More from Chhoti Tokri */}
      <section className="w-full px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto py-14 lg:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B88A3B] font-semibold">
              BOTANICAL ATELIER
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#00351E] tracking-tight mt-1">
              Explore More from Chhoti Tokri
            </h2>
          </div>
          <button
            onClick={() => onBack()}
            className="text-xs uppercase tracking-widest text-[#174D32] hover:text-[#B88A3B] font-semibold inline-flex items-center gap-1 cursor-pointer"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="w-4 h-4 text-[#B88A3B]" />
          </button>
        </div>

        {/* 4 Companion Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companionProducts.map((comp) => (
            <div
              key={comp.id}
              className="bg-[#FFFFFF] rounded-xl border border-[#EADFC9] p-5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-xs group"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#B88A3B] font-semibold block mb-1">
                  {comp.monographNumber}
                </span>
                <h3 className="font-serif text-xl text-[#00351E] font-bold mb-2 group-hover:text-[#B88A3B] transition-colors">
                  {comp.name}
                </h3>
                <p className="text-xs text-[#4A554E] leading-relaxed mb-4 line-clamp-3">
                  {comp.shortDescription}
                </p>
              </div>
              <button
                onClick={() => {
                  onSelectProduct(comp.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#174D32] font-semibold group-hover:text-[#B88A3B] transition-colors cursor-pointer pt-3 border-t border-[#EADFC9]/70"
              >
                <span>Discover Product</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B88A3B]" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Product Inquiries Callout */}
      <section className="w-full bg-[#174D32] text-[#F8F5EC] py-14 lg:py-20" id="trade-inquiry">
        <div className="px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFDEAD]"></span>
                <span className="text-xs uppercase tracking-widest text-[#FFDEAD] font-semibold">
                  DOMESTIC & GLOBAL PARTNERSHIPS
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F5EC] tracking-tight">
                Want to Know More About {product.name}?
              </h2>
              <p className="text-sm sm:text-base text-[#E6EFEA] max-w-2xl leading-relaxed">
                Connect with our trade desk to receive our detailed technical specimen sheets, volume pricing, and physical sample boxes for testing.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
              <button
                onClick={onOpenEnquiry}
                className="px-8 py-4 bg-[#FFDEAD] hover:bg-[#FEC973] text-[#281900] text-xs uppercase tracking-widest font-bold rounded-lg shadow-md transition-all cursor-pointer"
              >
                Initiate Trade Enquiry
              </button>
              <div className="text-xs text-[#E6EFEA]/80 text-left lg:text-right">
                <span>Direct Liaison: </span>
                <a href="mailto:liaison@chhotitokri.com" className="text-[#FFDEAD] hover:underline">
                  liaison@chhotitokri.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
