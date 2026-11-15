import React from 'react';
import {TradeEnquirySection} from '../components/TradeEnquirySection';
import {Mail, Phone} from 'lucide-react';
import {CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY} from '../lib/contact';
import {trackEvent} from '../analytics/gtag';

interface ContactPageProps {
  lang: 'en' | 'fr';
  onOpenEnquiry: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({lang, onOpenEnquiry}) => (
  <div className="pt-20">
  <section className="w-full bg-[#F8F5EC] border-b border-[#EADFC9] py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-serif text-4xl text-[#00351E] mb-4">
          {lang === 'fr' ? 'Contactez Chhoti Tokri' : 'Contact Chhoti Tokri'}
        </h1>
        <p className="text-[#4A554E] mb-6">
          {lang === 'fr'
            ? 'Pour les informations produits, les dossiers grossistes et les partenariats.'
            : 'For product information, wholesale dossiers, and partnership enquiries.'}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Chhoti%20Tokri%20Enquiry`}
            className="inline-flex items-center gap-2 text-[#174D32] font-semibold hover:text-[#B88A3B]"
            onClick={() => trackEvent('email_click', {link_location: 'contact_page'})}
          >
            <Mail className="w-4 h-4" />
            {CONTACT_EMAIL}
          </a>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="inline-flex items-center gap-2 text-[#174D32] font-semibold hover:text-[#B88A3B]"
            onClick={() => trackEvent('phone_click', {link_location: 'contact_page'})}
          >
            <Phone className="w-4 h-4" />
            {CONTACT_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
    <TradeEnquirySection onOpenModal={onOpenEnquiry} lang={lang} />
  </div>
);