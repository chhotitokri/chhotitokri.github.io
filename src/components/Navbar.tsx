import React, { useState } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, productId?: string) => void;
  onOpenEnquiry: () => void;
  lang: 'en' | 'fr';
  setLang: (lang: 'en' | 'fr') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenEnquiry,
  lang,
  setLang
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: lang === 'fr' ? 'Accueil' : 'Home' },
    { id: 'catalogue', label: lang === 'fr' ? 'Nos Produits' : 'Our Products' },
    { id: 'story', label: lang === 'fr' ? 'Notre Histoire' : 'Our Story' },
    { id: 'provenance', label: lang === 'fr' ? 'Sourcing & Terroir' : 'Sourcing & Quality' },
    { id: 'journal', label: lang === 'fr' ? 'Journal' : 'Journal' },
    { id: 'contact', label: lang === 'fr' ? 'Contact' : 'Contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F5EC]/95 backdrop-blur-md border-b border-[#EADFC9]/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-6">
          {/* Brand Logo Wordmark */}
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 shrink-0 py-2 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-[#174D32] flex items-center justify-center p-1 text-[#F8F5EC] shadow-sm">
              <span className="material-symbols-outlined text-[20px] text-[#B88A3B]">shopping_basket</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#174D32] leading-tight group-hover:text-[#B88A3B] transition-colors">
                Chhoti Tokri
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B88A3B]">
                {lang === 'fr' ? 'Atelier Botanique' : 'Archival Terroir'}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[13px] uppercase tracking-[0.16em] font-medium text-[#1B241E]">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`transition-colors cursor-pointer py-1 ${
                    isActive
                      ? 'text-[#174D32] font-bold border-b-2 border-[#174D32]'
                      : 'text-[#4A554E] hover:text-[#174D32]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Utility Actions: Language & B2B Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#F4EFE6] border border-[#E8E1D3] px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wider text-[#4A554E]">
              <button
                onClick={() => setLang('en')}
                className={`cursor-pointer px-1 transition-colors ${
                  lang === 'en' ? 'text-[#174D32] font-bold' : 'hover:text-[#174D32]'
                }`}
              >
                EN
              </button>
              <span className="mx-1 text-[#E8E1D3]">|</span>
              <button
                onClick={() => setLang('fr')}
                className={`cursor-pointer px-1 transition-colors ${
                  lang === 'fr' ? 'text-[#174D32] font-bold' : 'hover:text-[#174D32]'
                }`}
              >
                FR
              </button>
            </div>

            {/* Business Enquiries CTA */}
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 bg-[#174D32] hover:bg-[#00351E] text-[#F8F5EC] text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-semibold rounded transition-all shadow-sm cursor-pointer group"
            >
              <span>{lang === 'fr' ? 'Partenariats' : 'Business Enquiries'}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform text-[#B88A3B]" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileDrawerOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden p-2 text-[#174D32] hover:text-[#B88A3B] transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#1B241E]/50 backdrop-blur-sm transition-opacity duration-300 ${
          mobileDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileDrawerOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#FCFAF5] border-l border-[#EADFC9] p-6 flex flex-col justify-between shadow-2xl transform transition-transform duration-300 ease-out ${
            mobileDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col">
            <div className="flex items-center justify-between pb-6 border-b border-[#EADFC9]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#174D32] flex items-center justify-center text-[#B88A3B]">
                  <span className="material-symbols-outlined text-[18px]">shopping_basket</span>
                </div>
                <span className="font-serif text-lg font-bold text-[#174D32]">Chhoti Tokri</span>
              </div>
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="p-1 text-[#4A554E] hover:text-[#174D32] cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-4 mb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B88A3B]">
                Folio Navigation
              </span>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = currentView === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      onNavigate(link.id);
                      setMobileDrawerOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`flex items-center py-2.5 text-left font-serif text-lg transition-colors cursor-pointer ${
                      isActive
                        ? 'text-[#174D32] font-semibold pl-2 border-l-2 border-[#174D32]'
                        : 'text-[#1B241E] hover:text-[#B88A3B]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#EADFC9]">
            <div className="flex items-center justify-between text-[#4A554E] text-xs">
              <span className="tracking-wider uppercase text-[10px]">Curatorial Edition</span>
              <span className="text-[#B88A3B] font-semibold">2025 / 2026</span>
            </div>
            <button
              onClick={() => {
                setMobileDrawerOpen(false);
                onOpenEnquiry();
              }}
              className="w-full h-11 flex items-center justify-center bg-[#174D32] text-[#F8F5EC] text-xs uppercase tracking-[0.14em] font-semibold rounded hover:bg-[#00351E] transition-colors cursor-pointer"
            >
              {lang === 'fr' ? 'Demander un Dossier' : 'Business Enquiries'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
