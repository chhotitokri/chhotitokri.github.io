import React, { useState } from 'react';
import { MapPin, ShieldCheck, Sun, Compass } from 'lucide-react';

interface ProvenanceProtocolSectionProps {
  lang: 'en' | 'fr';
}

export const ProvenanceProtocolSection: React.FC<ProvenanceProtocolSectionProps> = ({ lang }) => {
  const [activeRegion, setActiveRegion] = useState(0);

  const terroirs = [
    {
      name: 'Terai Belt, Uttar Pradesh',
      crop: 'Kala Namak Heirloom Rice',
      elevation: '90m — 140m MSL',
      soil: 'Snow-melt alluvial silt, rich in organic minerals & moisture',
      notes: 'Ancient Buddha rice micro-climate watered by the Rapti river system, sheltered under the southern Himalayan ridge.'
    },
    {
      name: 'Chambal Valley & Eastern Rajasthan',
      crop: 'Traditional Brown Mustard',
      elevation: '200m — 320m MSL',
      soil: 'Loamy riverine sand with deep limestone horizons',
      notes: 'Arid sunlight and high diurnal temperature shifts provoke intense natural allyl isothiocyanate accumulation.'
    },
    {
      name: 'Western Ghats & Nilgiri Sholas',
      crop: 'Wild Multifloral Forest Honey',
      elevation: '1,200m — 2,200m MSL',
      soil: 'Highland peat and undisturbed virgin forest humus',
      notes: 'Protected UNESCO biosphere reserve; uncultivated medicinal flora and canopy foraging by Apis dorsata bees.'
    },
    {
      name: 'Jaintia Hills, Meghalaya',
      crop: 'High-Curcumin Lakadong Turmeric',
      elevation: '600m — 1,000m MSL',
      soil: 'Rich volcanic red loam with acidic organic mulch',
      notes: 'Continuous mist and copious rainfall foster unparalleled natural curcumin levels averaging 7.5%.'
    },
    {
      name: 'Konkan Coast & Sahyadri Foothills',
      crop: 'Alphonso Mango & Peak Orchard Fruits',
      elevation: 'Sea level — 300m MSL',
      soil: 'Lateritic red rock soils bathed in Arabian Sea breezes',
      notes: 'Natural diurnal coastal warmth concentrates natural brix sugars and tropical acids prior to gentle dehydration.'
    }
  ];

  return (
    <section className="w-full bg-[#EADFC9]/35 border-y border-[#EADFC9] py-16 sm:py-20 lg:py-28" id="provenance">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#B88A3B]"></span>
            <span className="text-[#B88A3B] text-[12px] uppercase tracking-[0.24em] font-semibold">
              {lang === 'fr' ? 'Protocole de Provenance' : 'Provenance Protocol'}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#00351E] tracking-tight mb-4">
            {lang === 'fr' ? 'Sourcing Conscient. Sélection Rigoureuse.' : 'Thoughtfully Sourced. Carefully Selected.'}
          </h2>

          <p className="text-[#4A554E] text-[15px] sm:text-[17px] leading-relaxed">
            {lang === 'fr'
              ? 'Nous garantissons une traçabilité totale grâce à l’identification géographique certifiée, des partenariats directs avec des cultivateurs dévoués et des analyses de pureté pour chaque micro-lot.'
              : 'We prioritize transparency through verified geographical origin, direct relationships with multi-generational cultivators, and rigorous physical batch inspection—honoring true agricultural lineage.'}
          </p>
        </div>

        {/* 3 Protocol Cards in Wide Desktop Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {/* Card 01 */}
          <div className="bg-[#FFFFFF] p-8 rounded-xl border border-[#EADFC9] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="font-serif text-4xl text-[#B88A3B] font-light block mb-4">01</span>
              <h3 className="font-serif text-2xl text-[#174D32] mb-3">
                {lang === 'fr' ? 'Traçabilité Régionale' : 'Origin Traceability'}
              </h3>
              <p className="text-[#4A554E] text-[15px] leading-relaxed">
                {lang === 'fr'
                  ? 'Chaque récolte est directement rattachée à un micro-terroir spécifique, répertoriant les qualités pédologiques, l’altitude et le terroir du village.'
                  : 'Every harvest lot is tagged directly to specific micro-regions, recording indigenous soil characteristics, elevation, and village provenance.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#EADFC9]/70 text-[11px] text-[#727E77] uppercase tracking-wider font-medium flex items-center justify-between">
              <span>{lang === 'fr' ? 'Lots Certifiés' : 'Verified Micro-Region Batches'}</span>
              <ShieldCheck className="w-4 h-4 text-[#B88A3B]" />
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-[#FFFFFF] p-8 rounded-xl border border-[#EADFC9] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="font-serif text-4xl text-[#B88A3B] font-light block mb-4">02</span>
              <h3 className="font-serif text-2xl text-[#174D32] mb-3">
                {lang === 'fr' ? 'Récolte Saisonnière' : 'Seasonal Harvesting'}
              </h3>
              <p className="text-[#4A554E] text-[15px] leading-relaxed">
                {lang === 'fr'
                  ? 'Cueillies ou fauchées strictement lors de la fenêtre de maturation naturelle, sans maturation forcée, pour préserver la plénitude gustative.'
                  : 'Gathered strictly during natural maturity windows, avoiding force-ripening or premature harvesting to ensure authentic flavor density.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#EADFC9]/70 text-[11px] text-[#727E77] uppercase tracking-wider font-medium flex items-center justify-between">
              <span>{lang === 'fr' ? 'Rythme des Moussons' : 'Aligned with Monsoon Cycles'}</span>
              <Sun className="w-4 h-4 text-[#B88A3B]" />
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-[#FFFFFF] p-8 rounded-xl border border-[#EADFC9] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="font-serif text-4xl text-[#B88A3B] font-light block mb-4">03</span>
              <h3 className="font-serif text-2xl text-[#174D32] mb-3">
                {lang === 'fr' ? 'Préservation Douce' : 'Gentle Preservation'}
              </h3>
              <p className="text-[#4A554E] text-[15px] leading-relaxed">
                {lang === 'fr'
                  ? 'Maintien des phytonutriments et terpènes naturels par séchage solaire doux, pressage à froid au bois et scellage hermétique en micro-lots.'
                  : 'Preserving natural phytonutrients through low-temperature solar drying, mechanical cold-pressing, and hermetic micro-lot sealing.'}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#EADFC9]/70 text-[11px] text-[#727E77] uppercase tracking-wider font-medium flex items-center justify-between">
              <span>{lang === 'fr' ? 'Zéro Intervention Chimique' : 'Zero Chemical Intervention'}</span>
              <Compass className="w-4 h-4 text-[#B88A3B]" />
            </div>
          </div>
        </div>

        {/* Interactive Regional Terroir Dossier Module */}
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#EADFC9] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#EADFC9]">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#B88A3B] text-[22px]">public</span>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B88A3B] block">
                  Interactive Terroir Atlas
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#174D32]">
                  {lang === 'fr' ? 'Registre des Terroirs de l’Inde' : 'Subcontinent Terroir Registry'}
                </h3>
              </div>
            </div>
            <span className="text-xs text-[#727E77] uppercase tracking-widest font-medium">
              5 Verified Agronomy Corridors
            </span>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-4 border-b border-[#EADFC9]/60">
            {terroirs.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setActiveRegion(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeRegion === idx
                    ? 'bg-[#174D32] text-[#F8F5EC] shadow-xs'
                    : 'bg-[#F4EFE6] text-[#4A554E] hover:bg-[#EADFC9]'
                }`}
              >
                {t.name.split(',')[0]}
              </button>
            ))}
          </div>

          {/* Active Terroir Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-start">
            <div className="md:col-span-5 flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-widest text-[#B88A3B] font-semibold">
                Designated Geographic Region
              </span>
              <h4 className="font-serif text-2xl text-[#174D32]">
                {terroirs[activeRegion].name}
              </h4>
              <div className="inline-flex items-center gap-2 text-xs text-[#4A554E] mt-1">
                <span className="font-medium text-[#174D32]">Key Harvest:</span>
                <span className="text-[#7E5707] font-semibold">{terroirs[activeRegion].crop}</span>
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F8F5EC] p-5 rounded-xl border border-[#E8E1D3]">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#727E77] font-medium block">Elevation</span>
                <p className="text-sm font-semibold text-[#1B241E] mt-0.5">{terroirs[activeRegion].elevation}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#727E77] font-medium block">Soil Character</span>
                <p className="text-xs text-[#1B241E] mt-0.5">{terroirs[activeRegion].soil}</p>
              </div>
              <div className="sm:col-span-2 pt-2 border-t border-[#EADFC9]/60">
                <span className="text-[10px] uppercase tracking-wider text-[#727E77] font-medium block">Botanical & Agronomy Notes</span>
                <p className="text-xs text-[#4A554E] mt-1 leading-relaxed">{terroirs[activeRegion].notes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
