import React from 'react';

interface LegalPageProps {
  title: string;
  lang: 'en' | 'fr';
  children: React.ReactNode;
}

export const LegalPage: React.FC<LegalPageProps> = ({title, lang, children}) => (
  <div className="pt-24 pb-16 px-4 sm:px-8 max-w-3xl mx-auto">
    <h1 className="font-serif text-3xl sm:text-4xl text-[#00351E] mb-6">{title}</h1>
    <div className="prose prose-sm max-w-none text-[#4A554E] leading-relaxed space-y-4">
      {children}
      <p className="text-xs uppercase tracking-widest text-[#B88A3B] font-semibold pt-6">
        {lang === 'fr'
          ? 'TODO : révision juridique en attente.'
          : 'TODO: Legal review pending — business to supply final policy text.'}
      </p>
    </div>
  </div>
);