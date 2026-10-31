import React from 'react';
import { BookOpen } from 'lucide-react';
import { assetUrl } from '../lib/assets';

interface OurStorySectionProps {
  onReadMore?: () => void;
  lang: 'en' | 'fr';
}

export const OurStorySection: React.FC<OurStorySectionProps> = ({ onReadMore, lang }) => {
  return (
    <section className="w-full bg-[#EADFC9]/30 border-t border-[#EADFC9] py-16 sm:py-20 lg:py-28" id="story">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image Spread */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#FFFFFF] p-3 rounded-2xl shadow-xs border border-[#EADFC9]">
              <div className="relative w-full h-[380px] sm:h-[460px] rounded-xl overflow-hidden bg-[#F4EFE6]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeze-OnIyuXcZp5vUY-nHhn66B41eoVL5NsKIV2rz0GAnRIQfDQd4KjCrv9Ac51ngvqmWFaWE1TgoawCuAG5i5-yy35Q-0KE4xYzKWJ18CCbhnbQuWPP6mX9-cBTQFTmm8EaGuw4U6oi-FVZPVus0omaLcO9nm6u90bc1kgqkuTF_aDoWgrccyeB9txF2g-D4kBDepi9MmhFpPqGwh02VE2fRMjz6402uoeXEW1POhXwjM4KkDnd9W"
                  alt="Rural Indian harvest basket tokri under an ancient banyan tree at dawn"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = assetUrl('/assets/aistudio/Image_1_f5962f74.jpeg');
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00351E]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-[#F8F5EC]">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B88A3B] block mb-1">
                    {lang === 'fr' ? 'Symbole de Gratitude' : 'The Symbol of Gratitude'}
                  </span>
                  <p className="font-serif text-xl sm:text-2xl text-[#F8F5EC]">
                    {lang === 'fr'
                      ? 'Tokri Tissée Main : Approvisionnement Conscient'
                      : 'Handwoven Tokri: Mindful Provisioning'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Editorial */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B88A3B]"></span>
              <span className="text-[#B88A3B] text-[12px] uppercase tracking-[0.22em] font-semibold">
                {lang === 'fr' ? 'La Monographie' : 'The Monograph'}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#00351E] tracking-tight leading-[1.18] mb-6">
              {lang === 'fr' ? (
                <>
                  Une Histoire de Nourriture, <br />
                  <span className="italic font-normal text-[#B88A3B]">de Racines et d’Authenticité.</span>
                </>
              ) : (
                <>
                  A Story of Food, Roots <br />
                  <span className="italic font-normal text-[#B88A3B]">and Everyday Goodness.</span>
                </>
              )}
            </h2>

            <div className="space-y-5 text-[#4A554E] text-[15px] sm:text-[17px] leading-relaxed mb-8">
              <p>
                In traditional Indian households, the{' '}
                <em className="font-serif text-[#00351E] not-italic font-semibold">Chhoti Tokri</em>
                —or little basket—was never merely a container. It was a daily ritual of care. Early each morning, fresh greens, sacred grains, and potent spices were gathered thoughtfully in small proportions, ensuring nothing was wasted and everything was savored at its prime vitality.
              </p>
              <p>
                Today, Chhoti Tokri reimagines this sacred rhythm for the modern home and global pantry. We honor the custodians of ancestral seeds, bridging remote farmsteads with refined culinary tables from New Delhi to London and Paris.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              {onReadMore && (
                <button
                  onClick={onReadMore}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FFFFFF] border border-[#EADFC9] hover:border-[#174D32] text-[#174D32] text-[12px] uppercase tracking-[0.16em] font-semibold rounded shadow-xs hover:shadow-sm transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-[#B88A3B]" />
                  <span>{lang === 'fr' ? 'Lire la Monographie' : 'Explore Our Story'}</span>
                </button>
              )}
              <span className="text-[12px] uppercase tracking-wider text-[#727E77] font-medium">
                Heritage • Provenance • Craft
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
