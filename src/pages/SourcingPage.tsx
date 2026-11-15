import React from 'react';
import {ProvenanceProtocolSection} from '../components/ProvenanceProtocolSection';

interface SourcingPageProps {
  lang: 'en' | 'fr';
}

export const SourcingPage: React.FC<SourcingPageProps> = ({lang}) => (
  <div className="pt-20">
    <h1 className="sr-only">
      {lang === 'fr' ? 'Approvisionnement et qualité' : 'Our Sourcing and Quality'}
    </h1>
    <ProvenanceProtocolSection lang={lang} />
  </div>
);