import React from 'react';
import { ArrowRight, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { assetUrl } from '../lib/assets';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onExploreStory: () => void;
  lang: 'en' | 'fr';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProducts,
  onExploreStory,
  lang,
}) => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-10 sm:pt-16 pb-16 lg:pt-20 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Curatorial Prose & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
          {/* Top Foil Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EADFC9]/50 border border-[#B88A3B]/40 text-[#B88A3B] mb-6 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88A3B]"></span>
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-semibold text-[#7E5707]">
              {lang === 'fr' ? 'Récoltes Ancestrales • Terroirs d’Inde' : 'Heritage Harvest • Est. India'}
            </span>
          </div>

          {/* Main Serif Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] text-[#00351E] tracking-tight leading-[1.12] mb-6">
            Good Food. <br />
            <span className="italic font-normal text-[#B88A3B]">
              {lang === 'fr' ? 'Jours Radieux.' : 'Brighter Days.'}
            </span>
          </h1>

          {/* Supporting Narrative */}
          <p className="text-[#4A554E] text-[16px] sm:text-[18px] leading-relaxed mb-8 max-w-xl font-normal">
            {lang === 'fr'
              ? 'Découvrez des denrées indiennes d’exception, puisées aux sources de nos terroirs séculaires et sélectionnées avec exigence pour sublimer les tables contemporaines.'
              : 'Discover thoughtfully sourced Indian foods, inspired by our rich culinary heritage and made for everyday goodness. Curated from ancestral terroirs for discerning domestic kitchens and global pantries.'}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={onExploreProducts}
              className="px-8 py-3.5 bg-[#174D32] hover:bg-[#00351E] text-[#F8F5EC] text-[12px] uppercase tracking-[0.16em] font-semibold rounded text-center shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>{lang === 'fr' ? 'Explorer le Catalogue' : 'Explore Our Products'}</span>
              <ArrowRight className="w-4 h-4 text-[#B88A3B] group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onExploreStory}
              className="px-8 py-3.5 bg-[#FFFFFF] border border-[#174D32]/30 hover:border-[#174D32] text-[#174D32] text-[12px] uppercase tracking-[0.16em] font-semibold rounded text-center hover:bg-[#174D32]/5 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#B88A3B]" />
              <span>{lang === 'fr' ? 'Notre Histoire' : 'Our Story'}</span>
            </button>
          </div>

          {/* Archival Footnote */}
          <div className="pt-6 border-t border-[#EADFC9] w-full flex items-center justify-between text-[11px] sm:text-[12px] text-[#727E77] uppercase tracking-widest font-medium">
            <span className="flex items-center gap-1.5 text-[#174D32]">
              <span className="material-symbols-outlined text-[#B88A3B] text-[18px]">verified</span>
              {lang === 'fr' ? 'Terroirs Pur Origine' : 'Single-Origin Terroirs'}
            </span>
            <span className="text-[#B88A3B]">FOLIO REF: CT-IND-2025</span>
          </div>
        </div>

        {/* Right Column: Editorial Photographic Plate */}
        <div className="lg:col-span-6">
          <div className="relative bg-[#FFFFFF] p-3 sm:p-3.5 rounded-2xl shadow-[0_8px_30px_rgba(27,36,30,0.06)] border border-[#EADFC9] group">
            <div className="relative w-full h-[360px] sm:h-[460px] rounded-xl overflow-hidden bg-[#F4EFE6]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtXwrqhYj9TnVwER7EWgrmNH6yR4uRMC_bG2R3eHpVJQViuUqX89D7mRMj2NZOc3vvdvccpsn9f2ytkAQso9FX6mn7kUnDRmyXbb64Iy20OtxJq72dFqOBFjKYX4sNYtMEKJFOb2l4LyauSnZEk-GGxw4nW6VX6Q1oTcQKF4IjQI81VCvK20vOBDN1dzPaMXuMOIf8gxkEUWt5RVe3yZZ6otHcVgbbPSchBZYTBZAVLemD4c5aJe0g"
                alt="Ancestral Indian harvest ingredients in hand-carved teakwood vessels"
                className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to local asset
                  (e.target as HTMLImageElement).src = assetUrl('/assets/aistudio/Image_1_f5962f74.jpeg');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00351E]/90 via-[#00351E]/25 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-[#F8F5EC]">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#174D32]/80 backdrop-blur-xs text-[10px] uppercase tracking-[0.2em] font-semibold text-[#FFDEAD] mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B88A3B]"></span>
                  Micro-Lot Harvest Folio
                </div>
                <p className="font-serif text-xl sm:text-2xl text-[#F8F5EC] leading-snug">
                  {lang === 'fr'
                    ? 'Pureté des contreforts de l’Himalaya jusqu’aux plaines de Malabar.'
                    : 'Purity from the Himalayan foothills to the Malabar plains.'}
                </p>
              </div>
            </div>

            {/* Archival Citation Strip */}
            <div className="flex items-center justify-between px-3 pt-3 text-[11px] text-[#4A554E] font-medium">
              <span className="text-[#B88A3B] font-semibold uppercase tracking-wider">
                {lang === 'fr' ? 'Sélection Terroirs 2025' : 'Archival Provenance Selection'}
              </span>
              <span className="tracking-widest uppercase text-[#727E77]">
                Batch 01 • Pure Botanical Lineage
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
