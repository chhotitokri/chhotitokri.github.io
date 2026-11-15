import React from 'react';
import {PhilosophySection} from '../components/PhilosophySection';
import {OurStorySection} from '../components/OurStorySection';

interface AboutPageProps {
  lang: 'en' | 'fr';
}

export const AboutPage: React.FC<AboutPageProps> = ({lang}) => (
  <div className="pt-20">
    <h1 className="sr-only">{lang === 'fr' ? 'Notre histoire' : 'Our Story'}</h1>
    <OurStorySection lang={lang} />
    <PhilosophySection lang={lang} />
  </div>
);