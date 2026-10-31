import React from 'react';
import { Mail, Clock, Store, ShieldCheck, Utensils, Globe, Sparkles } from 'lucide-react';

interface TradeEnquirySectionProps {
  onOpenModal: () => void;
  lang: 'en' | 'fr';
}

export const TradeEnquirySection: React.FC<TradeEnquirySectionProps> = ({ onOpenModal, lang }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28" id="trade">
      <div className="relative bg-[#174D32] text-[#F8F5EC] rounded-2xl p-6 sm:p-12 lg:p-16 shadow-xl overflow-hidden border border-[#205E3E]">
        {/* Soft background aura */}
        <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full bg-[#205E3E]/30 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0F3824] text-[#B88A3B] border border-[#B88A3B]/40 mb-6">
              <Globe className="w-4 h-4 text-[#FFDEAD]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#FFDEAD]">
                {lang === 'fr' ? 'Liaison Commerciale & Export' : 'Global Trade & Export Liaison'}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F8F5EC] leading-tight mb-4">
              {lang === 'fr' ? (
                <>
                  Partageons l’Excellence <br />
                  <span className="italic font-light text-[#FFDEAD] font-serif">à Toutes les Tables.</span>
                </>
              ) : (
                <>
                  Looking to Partner <br />
                  <span className="italic font-light text-[#FFDEAD] font-serif">with Chhoti Tokri?</span>
                </>
              )}
            </h2>

            <p className="text-[#F8F5EC]/85 text-[15px] sm:text-[17px] leading-relaxed mb-8 max-w-xl">
              {lang === 'fr'
                ? 'Vous souhaitez intégrer nos terroirs à votre assortiment ou explorer un partenariat commercial ? Nous accueillons avec enthousiasme les distributeurs, épiceries fines et restaurateurs en France et à l’international.'
                : 'Connect with us to learn more about our product range and explore potential business opportunities. We welcome partnerships with Indian retailers, distributors, specialty grocers, and international culinary purveyors.'}
            </p>

            {/* 3 Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
              <div className="bg-[#0F3824]/60 p-4 rounded-lg border border-[#205E3E]/50">
                <ShieldCheck className="w-5 h-5 text-[#FFDEAD] mb-1.5" />
                <p className="text-[12px] font-semibold uppercase tracking-wider text-[#F8F5EC]">
                  {lang === 'fr' ? 'Approvisionnement Fiable' : 'Reliable Supply'}
                </p>
                <p className="text-[12px] text-[#F8F5EC]/75 mt-1 leading-snug">
                  {lang === 'fr' ? 'Logistique rigoureuse et traçabilité par lots.' : 'Prompt fulfillment and consistent supply for domestic and export partners.'}
                </p>
              </div>

              <div className="bg-[#0F3824]/60 p-4 rounded-lg border border-[#205E3E]/50">
                <Store className="w-5 h-5 text-[#FFDEAD] mb-1.5" />
                <p className="text-[12px] font-semibold uppercase tracking-wider text-[#F8F5EC]">
                  {lang === 'fr' ? 'Épicerie & Détail' : 'Retail & Deli'}
                </p>
                <p className="text-[12px] text-[#F8F5EC]/75 mt-1 leading-snug">
                  {lang === 'fr' ? 'Packagings soignés prêts pour le linéaire haut de gamme.' : 'Refined consumer shelf packaging & authentic culinary storytelling.'}
                </p>
              </div>

              <div className="bg-[#0F3824]/60 p-4 rounded-lg border border-[#205E3E]/50">
                <Utensils className="w-5 h-5 text-[#FFDEAD] mb-1.5" />
                <p className="text-[12px] font-semibold uppercase tracking-wider text-[#F8F5EC]">
                  {lang === 'fr' ? 'Haute Gastronomie' : 'Food Service'}
                </p>
                <p className="text-[12px] text-[#F8F5EC]/75 mt-1 leading-snug">
                  {lang === 'fr' ? 'Formats chefs pour cuisines étoilées et tables d’auteurs.' : 'Authentic staples curated for restaurants, boutique hotels & chefs.'}
                </p>
              </div>
            </div>

            {/* Trade Desks Presence Tag */}
            <div className="flex items-center gap-2 text-[#F8F5EC]/80 text-[11px] sm:text-[12px] uppercase tracking-widest font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFDEAD]"></span>
              <span>Dedicated Trade Support Across India, London & Paris</span>
            </div>
          </div>

          {/* Right Column: Direct Trade Interactive Box */}
          <div className="lg:col-span-5 bg-[#FFFFFF] text-[#1B241E] p-7 sm:p-9 rounded-xl shadow-lg border border-[#EADFC9] flex flex-col justify-between">
            <div>
              <span className="text-[#B88A3B] text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-semibold block mb-1">
                {lang === 'fr' ? 'Bureau Commercial Direct' : 'Domestic & Global Trade Desk'}
              </span>
              <h3 className="font-serif text-2xl text-[#00351E] mb-2">
                {lang === 'fr' ? 'Initier un Échange' : 'Initiate an Enquiry'}
              </h3>
              <p className="text-[#4A554E] text-[13px] sm:text-[14px] leading-relaxed mb-6">
                {lang === 'fr'
                  ? 'Recevez notre catalogue professionnel complet, fiches de récolte et échantillons dégustation.'
                  : 'Get in touch for catalogue details, bulk specifications, and partnership terms.'}
              </p>

              <div className="space-y-3 mb-6 text-[13px] text-[#1B241E]">
                <a
                  href="mailto:liaison@chhotitokri.com?subject=Chhoti%20Tokri%20Partnership%20Enquiry"
                  className="flex items-center gap-3 p-3.5 bg-[#F8F5EC] rounded border border-[#E8E1D3] hover:border-[#174D32] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#174D32] group-hover:text-[#B88A3B]" />
                  <span className="font-semibold text-[#174D32]">liaison@chhotitokri.com</span>
                </a>

                <div className="flex items-center gap-3 p-3.5 bg-[#F8F5EC] rounded border border-[#E8E1D3]">
                  <Clock className="w-4 h-4 text-[#174D32]" />
                  <span className="text-[#4A554E]">Response turnaround within 24 business hours</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="w-full py-4 bg-[#B88A3B] hover:bg-[#9E742C] text-[#00351E] font-bold text-[12px] sm:text-[13px] uppercase tracking-[0.16em] rounded shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>{lang === 'fr' ? 'Ouvrir le Formulaire Partenaire' : 'Discuss a Partnership'}</span>
              <span className="material-symbols-outlined text-[18px]">handshake</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
