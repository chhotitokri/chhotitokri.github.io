import React from 'react';

interface BottomNavProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenEnquiry: () => void;
  lang: 'en' | 'fr';
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentView,
  onNavigate,
  onOpenEnquiry,
  lang
}) => {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-xl border-t border-[#EADFC9] shadow-[0_-2px_12px_rgba(20,30,24,0.06)] pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] transition-all cursor-pointer ${
            currentView === 'home' ? 'text-[#174D32] font-semibold' : 'text-[#727E77] hover:text-[#174D32]'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">spa</span>
          <span className="text-[10px] tracking-wider mt-0.5 uppercase font-medium">Terroir</span>
        </button>

        <button
          onClick={() => {
            onNavigate('catalogue');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] transition-all cursor-pointer ${
            currentView === 'catalogue' ? 'text-[#174D32] font-semibold' : 'text-[#727E77] hover:text-[#174D32]'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">auto_awesome_motion</span>
          <span className="text-[10px] tracking-wider mt-0.5 uppercase font-medium">Catalogue</span>
        </button>

        <button
          onClick={() => {
            onNavigate('provenance');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] transition-all cursor-pointer ${
            currentView === 'provenance' ? 'text-[#174D32] font-semibold' : 'text-[#727E77] hover:text-[#174D32]'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">verified</span>
          <span className="text-[10px] tracking-wider mt-0.5 uppercase font-medium">Provenance</span>
        </button>

        <button
          onClick={() => {
            onNavigate('journal');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] transition-all cursor-pointer ${
            currentView === 'journal' || currentView === 'story'
              ? 'text-[#174D32] font-semibold'
              : 'text-[#727E77] hover:text-[#174D32]'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">menu_book</span>
          <span className="text-[10px] tracking-wider mt-0.5 uppercase font-medium">Journal</span>
        </button>

        <button
          onClick={onOpenEnquiry}
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-[#B88A3B] hover:text-[#174D32] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">mail</span>
          <span className="text-[10px] tracking-wider mt-0.5 uppercase font-medium">
            {lang === 'fr' ? 'Contact' : 'Enquire'}
          </span>
        </button>
      </div>
    </nav>
  );
};
