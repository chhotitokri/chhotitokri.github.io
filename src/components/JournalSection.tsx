import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { JOURNAL_ARTICLES, JournalArticle } from '../data/journal';
import { assetUrl } from '../lib/assets';

interface JournalSectionProps {
  onReadArticle: (article: JournalArticle) => void;
  lang: 'en' | 'fr';
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onReadArticle, lang }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28" id="journal">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#EADFC9] gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#B88A3B]"></span>
            <span className="text-[#B88A3B] text-[12px] uppercase tracking-[0.24em] font-semibold">
              {lang === 'fr' ? 'Chroniques Éditoriales' : 'Editorial Chronicles'}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#00351E] tracking-tight">
            {lang === 'fr' ? 'Le Journal de la Tokri' : 'The Tokri Journal'}
          </h2>
          <p className="text-[#4A554E] text-[15px] sm:text-[16px] mt-2 max-w-xl">
            {lang === 'fr'
              ? 'Réflexions sur les savoir-faire culinaires de l’Inde, les récoltes rares et l’art de se nourrir au quotidien.'
              : 'Reflections on Indian foodways, rare harvests, and the art of everyday nourishment.'}
          </p>
        </div>
        <span className="text-[12px] uppercase tracking-[0.18em] text-[#B88A3B] font-semibold">
          Curatorial Issue IV
        </span>
      </div>

      {/* 3-Column Article Stack */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {JOURNAL_ARTICLES.map((article) => (
          <article
            key={article.id}
            className="bg-[#FFFFFF] rounded-xl border border-[#EADFC9] overflow-hidden shadow-xs flex flex-col group hover:shadow-md transition-all duration-300"
          >
            <div className="relative w-full h-52 overflow-hidden bg-[#F8F5EC]">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = assetUrl('/assets/aistudio/Image_1_f5962f74.jpeg');
                }}
              />
              <div className="absolute top-3 left-3 bg-[#FFFFFF]/95 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] uppercase tracking-wider text-[#00351E] font-semibold shadow-xs">
                {article.categoryTag}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <span className="text-[#B88A3B] text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-semibold mb-1">
                {article.theme} • {article.readTime}
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-[#00351E] mb-2 leading-snug group-hover:text-[#B88A3B] transition-colors">
                {article.title}
              </h3>
              <p className="text-[#4A554E] text-[14px] leading-relaxed mb-6 flex-1 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="pt-4 border-t border-[#EADFC9]/70">
                <button
                  onClick={() => onReadArticle(article)}
                  className="inline-flex items-center gap-1.5 text-[#174D32] font-semibold text-[12px] uppercase tracking-[0.14em] hover:text-[#B88A3B] transition-colors cursor-pointer"
                >
                  <span>{lang === 'fr' ? 'Lire l’Article' : 'Read Journal Entry'}</span>
                  <ArrowRight className="w-4 h-4 text-[#B88A3B]" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
