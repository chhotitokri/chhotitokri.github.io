import React from 'react';

interface PhilosophySectionProps {
  lang: 'en' | 'fr';
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ lang }) => {
  const pillars = [
    {
      icon: 'history_edu',
      tag: lang === 'fr' ? 'Lignée' : 'Lineage',
      title: lang === 'fr' ? 'Lignée Culinaire' : 'Culinary Lineage',
      description: lang === 'fr'
        ? 'Préserver des siècles d’agro-biodiversité indigène, de variétés de semences natives et de savoirs ancestraux transmis à travers les générations.'
        : 'Preserving centuries of indigenous agro-biodiversity, native seed varieties, and ancient kitchen wisdom passed through generations.',
      footerTag: lang === 'fr' ? 'Semences Ancestrales' : 'Heritage Varieties'
    },
    {
      icon: 'eco',
      tag: lang === 'fr' ? 'Provenance' : 'Provenance',
      title: lang === 'fr' ? 'Sourcing Conscient' : 'Thoughtful Sourcing',
      description: lang === 'fr'
        ? 'Récoltes sélectives calquées sur les moussons et les cycles lunaires, en partenariat direct avec des cultivateurs de multiples générations.'
        : 'Selective harvesting aligned with monsoons and seasonal cycles, directly partnered with multi-generational cultivators and tribal stewards.',
      footerTag: lang === 'fr' ? 'Origine Terroir Direct' : 'Direct Soil Origin'
    },
    {
      icon: 'balance',
      tag: lang === 'fr' ? 'Intégrité' : 'Integrity',
      title: lang === 'fr' ? 'Pureté & Respect' : 'Purity & Respect',
      description: lang === 'fr'
        ? 'Transformation douce sans intrant chimique, préservant la fraîcheur aromatique naturelle, la texture et la vitalité originelle de chaque récolte.'
        : 'Gentle processing without synthetic intervention, retaining the unblemished botanical aroma, texture, and restorative vitality of every harvest.',
      footerTag: lang === 'fr' ? 'Standard Non Frelaté' : 'Unadulterated Standard'
    }
  ];

  return (
    <section className="w-full bg-[#EADFC9]/35 border-y border-[#EADFC9] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Curatorial Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#B88A3B]"></span>
            <span className="text-[#B88A3B] text-[12px] uppercase tracking-[0.24em] font-semibold">
              {lang === 'fr' ? 'Philosophie Curatoire' : 'Curatorial Philosophy'}
            </span>
            <span className="w-8 h-[1px] bg-[#B88A3B]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#00351E] tracking-tight mb-4">
            Rooted in India.{' '}
            <span className="italic font-normal text-[#1B241E]">
              {lang === 'fr' ? 'Choisi avec Révérence.' : 'Chosen with Care.'}
            </span>
          </h2>

          <p className="text-[#4A554E] text-[15px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
            {lang === 'fr'
              ? 'Chhoti Tokri s’affirme comme le gardien d’ingrédients d’exception, unissant terroirs régionaux, coutumes culinaires millénaires et un standard d’intégrité sans compromis.'
              : 'Chhoti Tokri stands as a culinary custodian uniting regional Indian ingredients, time-honoured culinary traditions, and an unwavering standard of quality for everyday Indian kitchens and international connoisseurs.'}
          </p>
        </div>

        {/* 3 Archival Ivory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] p-8 rounded-xl border border-[#EADFC9] shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#F8F5EC] flex items-center justify-center text-[#174D32] mb-6 border border-[#B88A3B]/30 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[24px] text-[#B88A3B]">
                    {pillar.icon}
                  </span>
                </div>
                <span className="text-[#B88A3B] text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-semibold block mb-1">
                  {pillar.tag}
                </span>
                <h3 className="font-serif text-2xl text-[#174D32] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#4A554E] text-[15px] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#EADFC9]/70 text-[11px] uppercase tracking-wider text-[#727E77] font-medium flex items-center justify-between">
                <span>{pillar.footerTag}</span>
                <span className="text-[#B88A3B] font-mono text-[12px]">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
