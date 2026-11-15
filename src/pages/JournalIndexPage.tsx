import React from 'react';
import {JournalSection} from '../components/JournalSection';
import {JournalArticle} from '../data/journal';

interface JournalIndexPageProps {
  lang: 'en' | 'fr';
  onReadArticle: (article: JournalArticle) => void;
}

export const JournalIndexPage: React.FC<JournalIndexPageProps> = ({lang, onReadArticle}) => (
  <div className="pt-20">
    <h1 className="sr-only">{lang === 'fr' ? 'Le Journal Tokri' : 'The Tokri Journal'}</h1>
    <JournalSection onReadArticle={onReadArticle} lang={lang} />
  </div>
);