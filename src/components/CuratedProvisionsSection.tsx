import React from 'react';
import { ArrowRight, Package } from 'lucide-react';
import { PROVISIONS, Provision } from '../data/provisions';
import { assetUrl } from '../lib/assets';

interface CuratedProvisionsSectionProps {
  onSelectProduct: (productId: string) => void;
  onRequestTrade: () => void;
  lang: 'en' | 'fr';
}

export const CuratedProvisionsSection: React.FC<CuratedProvisionsSectionProps> = ({
  onSelectProduct,
  onRequestTrade,
  lang,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28" id="catalogue">
      {/* Section Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#EADFC9] gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#B88A3B]"></span>
            <span className="text-[#B88A3B] text-[12px] uppercase tracking-[0.22em] font-semibold">
              {lang === 'fr' ? 'Monographie Archival' : 'Archival Monograph'}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#00351E] tracking-tight">
            {lang === 'fr' ? 'Denrées Curatées' : 'Curated Provisions'}
          </h2>
          <p className="text-[#4A554E] text-[15px] sm:text-[16px] mt-2 max-w-xl">
            {lang === 'fr'
              ? 'Cinq piliers de terroirs uniques préparés pour l’art culinaire, les tables d’exception et les partenariats d’exportation.'
              : 'Five single-origin staples thoughtfully prepared for authentic home cooking, regional culinary discovery, and domestic wholesale partnerships.'}
          </p>
        </div>

        <div className="hidden md:flex items-center text-[12px] uppercase tracking-[0.18em] text-[#B88A3B] font-semibold">
          <span>Pure Single Origin • Zero Additives</span>
        </div>
      </div>

      {/* Row 1: 3 Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
        {PROVISIONS.slice(0, 3).map((item) => (
          <article
            key={item.id}
            className="bg-[#FFFFFF] rounded-xl border border-[#EADFC9] overflow-hidden shadow-xs flex flex-col group hover:shadow-md transition-all duration-300"
          >
            <div className="relative w-full h-64 overflow-hidden bg-[#F8F5EC]">
              <img
                src={assetUrl(item.mainImage)}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  if (item.gallery[0]?.url) {
                    (e.target as HTMLImageElement).src = assetUrl(item.gallery[0].url);
                  }
                }}
              />
              <div className="absolute top-4 left-4 bg-[#174D32] text-[#F8F5EC] px-3 py-1 rounded text-[11px] uppercase tracking-widest font-semibold shadow-xs">
                {item.terroirBadge}
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col flex-1">
              <span className="text-[#B88A3B] text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-semibold mb-1">
                Terroir: {item.terroirRegion}
              </span>
              <h3 className="font-serif text-2xl text-[#174D32] mb-2 group-hover:text-[#B88A3B] transition-colors">
                {lang === 'fr' && item.frenchName ? item.frenchName : item.name}
              </h3>
              <p className="text-[#4A554E] text-[14px] sm:text-[15px] leading-relaxed mb-6 flex-1">
                {lang === 'fr' && item.frenchShortDescription
                  ? item.frenchShortDescription
                  : item.shortDescription}
              </p>

              <div className="pt-4 border-t border-[#EADFC9]/70 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#727E77] font-medium">
                  {item.specificationTag}
                </span>
                <button
                  onClick={() => onSelectProduct(item.id)}
                  className="inline-flex items-center gap-1.5 text-[#174D32] font-semibold text-[12px] uppercase tracking-[0.14em] hover:text-[#B88A3B] transition-colors cursor-pointer"
                >
                  <span>{lang === 'fr' ? 'Découvrir' : 'Discover Product'}</span>
                  <ArrowRight className="w-4 h-4 text-[#B88A3B]" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Row 2: 2 Product Cards (Sun-Dried Turmeric & Sun-Ripened Dehydrated Fruits) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {PROVISIONS.slice(3, 5).map((item) => (
          <article
            key={item.id}
            className="bg-[#FFFFFF] rounded-xl border border-[#EADFC9] overflow-hidden shadow-xs flex flex-col group hover:shadow-md transition-all duration-300"
          >
            <div className="relative w-full h-64 overflow-hidden bg-[#F8F5EC]">
              <img
                src={assetUrl(item.mainImage)}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  if (item.gallery[0]?.url) {
                    (e.target as HTMLImageElement).src = assetUrl(item.gallery[0].url);
                  }
                }}
              />
              <div className="absolute top-4 left-4 bg-[#174D32] text-[#F8F5EC] px-3 py-1 rounded text-[11px] uppercase tracking-widest font-semibold shadow-xs">
                {item.terroirBadge}
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col flex-1">
              <span className="text-[#B88A3B] text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-semibold mb-1">
                Terroir: {item.terroirRegion}
              </span>
              <h3 className="font-serif text-2xl text-[#174D32] mb-2 group-hover:text-[#B88A3B] transition-colors">
                {lang === 'fr' && item.frenchName ? item.frenchName : item.name}
              </h3>
              <p className="text-[#4A554E] text-[14px] sm:text-[15px] leading-relaxed mb-6 flex-1">
                {lang === 'fr' && item.frenchShortDescription
                  ? item.frenchShortDescription
                  : item.shortDescription}
              </p>

              <div className="pt-4 border-t border-[#EADFC9]/70 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-[#727E77] font-medium">
                  {item.specificationTag}
                </span>
                <button
                  onClick={() => onSelectProduct(item.id)}
                  className="inline-flex items-center gap-1.5 text-[#174D32] font-semibold text-[12px] uppercase tracking-[0.14em] hover:text-[#B88A3B] transition-colors cursor-pointer"
                >
                  <span>{lang === 'fr' ? 'Découvrir' : 'Discover Product'}</span>
                  <ArrowRight className="w-4 h-4 text-[#B88A3B]" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Trade Notice Footnote Banner */}
      <div className="mt-12 p-6 bg-[#EADFC9]/40 rounded-xl border border-[#EADFC9] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <Package className="w-6 h-6 text-[#B88A3B] shrink-0" />
          <span className="text-[13px] sm:text-[14px] text-[#1B241E] font-medium">
            {lang === 'fr'
              ? 'Disponible pour conditionnements sur mesure, commandes en gros et distribution spécialisée.'
              : 'Available for customized bespoke packaging, institutional bulk orders, and trade enquiries for retailers and distributors.'}
          </span>
        </div>
        <button
          onClick={onRequestTrade}
          className="text-[#B88A3B] hover:text-[#00351E] text-[12px] uppercase tracking-[0.16em] font-semibold underline underline-offset-4 shrink-0 transition-colors cursor-pointer"
        >
          {lang === 'fr' ? 'Consulter les Spécifications' : 'Request Trade Details'}
        </button>
      </div>
    </section>
  );
};
