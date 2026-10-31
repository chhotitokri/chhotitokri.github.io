import React from 'react';

interface FooterProps {
  onNavigate: (view: string, productId?: string) => void;
  onOpenEnquiry: () => void;
  lang: 'en' | 'fr';
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry, lang }) => {
  return (
    <footer className="w-full bg-[#EADFC9]/30 border-t border-[#EADFC9] pt-16 pb-24 lg:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top Tier: Brand, Mission, Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#EADFC9]">
          {/* Logo & Manifesto */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#174D32] flex items-center justify-center p-1 text-[#B88A3B]">
                <span className="material-symbols-outlined text-[20px]">shopping_basket</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#174D32]">
                CHHOTI TOKRI
              </span>
            </div>

            <p className="text-[#B88A3B] text-[12px] uppercase tracking-[0.24em] font-semibold mb-3">
              Good Food • Brighter Days
            </p>

            <p className="text-[#4A554E] text-[14px] sm:text-[15px] leading-relaxed max-w-sm mb-6">
              {lang === 'fr'
                ? 'Monographie d’archive célébrant les terroirs d’origine unique, les lignées ancestrales et les micro-récoltes du sous-continent indien.'
                : 'An archival monograph celebrating single-origin terroirs, ancestral provenance, and mindful micro-lot harvests of the Indian subcontinent.'}
            </p>

            <div className="flex items-center gap-3 text-[#4A554E]">
              <span className="text-[11px] uppercase tracking-wider text-[#727E77] font-medium">Presence:</span>
              <span className="text-[11px] font-semibold text-[#174D32] uppercase tracking-widest">
                New Delhi • London • Paris
              </span>
            </div>
          </div>

          {/* Navigation Columns: Provisions */}
          <div className="lg:col-span-2">
            <h4 className="text-[#174D32] text-[12px] uppercase tracking-[0.18em] font-bold mb-4">
              Provisions
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#4A554E]">
              <li>
                <button
                  onClick={() => onNavigate('product-detail', 'kala-namak-rice')}
                  className="hover:text-[#174D32] transition-colors cursor-pointer text-left"
                >
                  Kala Namak Rice
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product-detail', 'mustard-oil')}
                  className="hover:text-[#174D32] transition-colors cursor-pointer text-left"
                >
                  Mustard Oil
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product-detail', 'forest-honey')}
                  className="hover:text-[#174D32] transition-colors cursor-pointer text-left"
                >
                  Raw Forest Honey
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product-detail', 'turmeric')}
                  className="hover:text-[#174D32] transition-colors cursor-pointer text-left"
                >
                  Sun-Dried Turmeric
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product-detail', 'dehydrated-fruits')}
                  className="hover:text-[#174D32] transition-colors cursor-pointer text-left"
                >
                  Dehydrated Fruits
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Columns: Curatorial */}
          <div className="lg:col-span-2">
            <h4 className="text-[#174D32] text-[12px] uppercase tracking-[0.18em] font-bold mb-4">
              Curatorial
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#4A554E]">
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-[#174D32] transition-colors cursor-pointer text-left"
                >
                  {lang === 'fr' ? 'Notre Histoire' : 'Our Story'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('provenance')}
                  className="hover:text-[#174D32] transition-colors cursor-pointer text-left"
                >
                  {lang === 'fr' ? 'Sourcing & Terroir' : 'Provenance & Terroir'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('provenance')}
                  className="hover:text-[#174D32] transition-colors cursor-pointer text-left"
                >
                  {lang === 'fr' ? 'Charte Qualité' : 'Quality Protocol'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journal')}
                  className="hover:text-[#174D32] transition-colors cursor-pointer text-left"
                >
                  {lang === 'fr' ? 'Le Journal' : 'The Tokri Journal'}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenEnquiry}
                  className="hover:text-[#174D32] transition-colors cursor-pointer text-left"
                >
                  {lang === 'fr' ? 'Bureau Export' : 'Global Trade Desk'}
                </button>
              </li>
            </ul>
          </div>

          {/* Trade Desk Mini-Dossier Box */}
          <div className="lg:col-span-3">
            <div className="bg-[#FFFFFF] p-6 rounded-xl border border-[#EADFC9] shadow-xs">
              <span className="text-[#B88A3B] text-[11px] uppercase tracking-[0.2em] font-semibold block mb-1">
                Wholesale & Delicatessen
              </span>
              <h5 className="font-serif text-lg text-[#174D32] mb-2 font-bold">
                Trade Enquiries
              </h5>
              <p className="text-[13px] text-[#4A554E] leading-relaxed mb-4">
                For retail distribution, Michelin restaurant provisioning, and bespoke packaging inquiries.
              </p>
              <a
                href="mailto:liaison@chhotitokri.com?subject=Chhoti%20Tokri%20Trade%20Inquiry"
                className="text-[#174D32] hover:text-[#B88A3B] text-[13px] font-semibold underline underline-offset-4 tracking-wider transition-colors block"
              >
                liaison@chhotitokri.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-[12px] text-[#727E77] uppercase tracking-wider gap-4 font-medium">
          <div>
            © 2025 Chhoti Tokri. All Rights Reserved. Single-Origin Subcontinent Provisions.
          </div>
          <div className="flex items-center space-x-5">
            <button
              onClick={() => onNavigate('provenance')}
              className="hover:text-[#174D32] transition-colors cursor-pointer"
            >
              Provenance Registry
            </button>
            <span>•</span>
            <button
              onClick={onOpenEnquiry}
              className="hover:text-[#174D32] transition-colors cursor-pointer"
            >
              Trade Enquiries
            </button>
            <span>•</span>
            <span className="text-[#727E77]">Export Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
