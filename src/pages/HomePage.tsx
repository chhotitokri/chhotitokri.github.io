import React from 'react';
import {HeroSection} from '../components/HeroSection';
import {PhilosophySection} from '../components/PhilosophySection';
import {CuratedProvisionsSection} from '../components/CuratedProvisionsSection';
import {OurStorySection} from '../components/OurStorySection';
import {ProvenanceProtocolSection} from '../components/ProvenanceProtocolSection';
import {JournalSection} from '../components/JournalSection';
import {TradeEnquirySection} from '../components/TradeEnquirySection';
import {JournalArticle} from '../data/journal';

interface HomePageProps {
  lang: 'en' | 'fr';
  onExploreProducts: () => void;
  onExploreStory: () => void;
  onSelectProduct: (id: string) => void;
  onOpenEnquiry: () => void;
  onReadArticle: (article: JournalArticle) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  lang,
  onExploreProducts,
  onExploreStory,
  onSelectProduct,
  onOpenEnquiry,
  onReadArticle,
}) => (
  <>
    <HeroSection onExploreProducts={onExploreProducts} onExploreStory={onExploreStory} lang={lang} />
    <PhilosophySection lang={lang} />
    <CuratedProvisionsSection
      onSelectProduct={onSelectProduct}
      onRequestTrade={onOpenEnquiry}
      lang={lang}
    />
    <OurStorySection onReadMore={onExploreStory} lang={lang} />
    <ProvenanceProtocolSection lang={lang} />
    <JournalSection onReadArticle={onReadArticle} lang={lang} />
    <TradeEnquirySection onOpenModal={onOpenEnquiry} lang={lang} />
  </>
);