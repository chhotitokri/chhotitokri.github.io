import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Package, Store } from 'lucide-react';
import { PROVISIONS, Provision } from '../data/provisions';

interface CataloguePageProps {
  onBack: () => void;
  onSelectProduct: (id: string) => void;
  onOpenEnquiry: () => void;
  lang: 'en' | 'fr';
}

export const CataloguePage: React.FC<CataloguePageProps> = ({
  onBack,
  onSelectProduct,
  onOpenEnquiry,
  lang,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: lang === 'fr' ? 'Tous les Produits' : 'All Products', count: 5 },
    { id: 'rice', label: lang === 'fr' ? 'Riz' : 'Rice', count: 1 },
    { id: 'oils', label: lang === 'fr' ? 'Huiles' : 'Oils', count: 1 },
    { id: 'honey', label: lang === 'fr' ? 'Miel' : 'Honey', count: 1 },
    { id: 'spices', label: lang === 'fr' ? 'Épices' : 'Spices', count: 1 },
    { id: 'fruits', label: lang === 'fr' ? 'Fruits Séchés' : 'Dehydrated Fruits', count: 1 },
  ];

  const filteredProvisions = activeCategory === 'all'
    ? PROVISIONS
    : PROVISIONS.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full pt-20 bg-[#F8F5EC] min-h-screen flex flex-col">
      {/* Top Archival Bar & Breadcrumb */}
      <section className="w-full bg-[#EADFC9]/50 py-3.5 px-4 sm:px-8 lg:px-12 border-b border-[#EADFC9]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-medium uppercase tracking-widest text-[#4A554E]">
          <nav className="flex items-center gap-2">
            <button
              onClick={onBack}
              className="hover:text-[#174D32] transition-colors cursor-pointer flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? 'Accueil' : 'Home'}</span>
            </button>
            <span className="text-[#B88A3B] opacity-60">/</span>
            <span className="text-[#174D32] font-semibold">{lang === 'fr' ? 'Nos Produits' : 'Our Products'}</span>
          </nav>
          <div className="flex items-center gap-3 text-[#B88A3B]">
            <span>VOL. IV</span>
            <span className="opacity-40">•</span>
            <span>ARCHIVAL COLLECTION</span>
            <span className="opacity-40">•</span>
            <span>EDITION 2025</span>
          </div>
        </div>
      </section>

      {/* Editorial Monograph Intro */}
      <section className="w-full py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B88A3B] font-semibold">
                <span className="w-6 h-px bg-[#B88A3B]"></span>
                {lang === 'fr'
                  ? 'Denrées Choisies pour Tables et Cuisines d’Auteurs'
                  : 'Curated Provisions for Discerning Kitchens & Purveyors'}
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#00351E] tracking-tight leading-tight">
                {lang === 'fr' ? 'Nos Produits' : 'Our Products'}
              </h1>
              <p className="text-base sm:text-lg text-[#4A554E] max-w-2xl leading-relaxed mt-2">
                {lang === 'fr'
                  ? 'Découvrez une sélection exigeante de denrées indiennes, inspirée par les traditions culinaires régionales et façonnée pour le bien-manger.'
                  : 'Discover a considered selection of Indian food products, inspired by regional culinary traditions and chosen with care.'}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end lg:items-end">
              <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#EADFC9] shadow-xs max-w-sm w-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-widest text-[#B88A3B] font-semibold">
                    Curatorial Scope
                  </span>
                  <span className="material-symbols-outlined text-[#B88A3B] text-[18px]">spa</span>
                </div>
                <p className="text-xs text-[#4A554E] leading-relaxed">
                  Strictly preserved single-origin cultivars, traditional milling, and sun-concentrated botanical harvests for discerning culinary partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curatorial Filter Bar */}
      <section className="w-full bg-[#EADFC9]/40 sticky top-20 z-30 shadow-xs border-y border-[#EADFC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-3.5">
          <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-4">
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#174D32] text-[#F8F5EC] shadow-xs'
                        : 'bg-[#FFFFFF] text-[#4A554E] hover:text-[#174D32] hover:bg-[#F4EFE6] border border-[#EADFC9]'
                    }`}
                  >
                    {cat.label} <span className="ml-1 opacity-75">({cat.count})</span>
                  </button>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-[#7E5707] uppercase tracking-widest font-semibold shrink-0">
              <span className="inline-block w-2 h-2 rounded-full bg-[#B88A3B]"></span>
              Selected Harvests
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalogue Grid */}
      <section className="w-full py-12 lg:py-16 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProvisions.map((item) => (
              <article
                key={item.id}
                className="bg-[#FFFFFF] rounded-xl border border-[#EADFC9] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F4EFE6]">
                  <img
                    src={item.mainImage}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      if (item.gallery[0]?.url) {
                        (e.target as HTMLImageElement).src = item.gallery[0].url;
                      }
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-[#FFFFFF]/90 backdrop-blur-xs px-3 py-1 rounded text-[11px] uppercase tracking-widest text-[#7E5707] font-semibold shadow-xs">
                    {item.terroirBadge}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#174D32] text-[#F8F5EC] px-2.5 py-1 rounded text-[10px] uppercase tracking-widest font-semibold">
                    {item.monographNumber}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] tracking-widest uppercase text-[#B88A3B] font-semibold">
                      {item.terroirRegion}
                    </span>
                    <h2 className="font-serif text-2xl text-[#00351E] tracking-tight group-hover:text-[#B88A3B] transition-colors font-bold">
                      {lang === 'fr' && item.frenchName ? item.frenchName : item.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed line-clamp-3">
                      {lang === 'fr' && item.frenchShortDescription
                        ? item.frenchShortDescription
                        : item.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EADFC9]/70 flex items-center justify-between">
                    <span className="text-[11px] text-[#727E77] uppercase tracking-wider font-medium">
                      {item.specificationTag}
                    </span>
                    <button
                      onClick={() => onSelectProduct(item.id)}
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-[#174D32] font-semibold group-hover:text-[#B88A3B] transition-colors cursor-pointer"
                    >
                      <span>{lang === 'fr' ? 'Découvrir' : 'Discover Product'}</span>
                      <ArrowRight className="w-4 h-4 text-[#B88A3B] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {/* 6th Card: Trade & Bulk Inquiries Dossier */}
            <article className="flex flex-col bg-[#EADFC9]/40 border border-[#EADFC9] p-6 rounded-xl justify-between shadow-xs">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-[#B88A3B] font-semibold">
                    Terroir Dossiers
                  </span>
                  <BookOpen className="w-5 h-5 text-[#B88A3B]" />
                </div>
                <h3 className="font-serif text-2xl text-[#00351E] font-bold tracking-tight">
                  Trade & Bulk Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed">
                  Evaluations for specialty grocers, culinary directors, and retail partners seeking authentic regional Indian provisions.
                </p>

                <div className="pt-2 flex flex-col gap-2.5 text-xs text-[#1B241E]">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#174D32] shrink-0" />
                    <span>Custom retail carton & food service packaging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#174D32] shrink-0" />
                    <span>Traceable harvest certificates & lab analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#174D32] shrink-0" />
                    <span>Direct farmgate coordination across 5 terroirs</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full inline-flex items-center justify-center py-3 px-4 bg-[#174D32] text-[#F8F5EC] text-xs uppercase tracking-widest font-semibold rounded-lg hover:bg-[#00351E] transition-all cursor-pointer shadow-sm"
                >
                  Request Trade Catalogue
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Commercial Protocol Notice */}
      <section className="w-full pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#EADFC9] shadow-xs">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B88A3B] font-semibold mb-2">
              <Package className="w-4 h-4" />
              <span>Commercial Protocol</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl text-[#00351E] font-bold mb-2">
              Bespoke Packaging & Bulk Wholesale Specifications
            </h2>
            <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed max-w-3xl">
              Custom pack sizes, private label dossiers, and scheduled pallet logistics across the EU, UK, and worldwide are supported through our New Delhi and Paris trade desks.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
