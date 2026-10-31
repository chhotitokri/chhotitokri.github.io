import React from 'react';
import { X, Clock, Calendar, Bookmark, Share2, ArrowLeft } from 'lucide-react';
import { JournalArticle } from '../data/journal';

interface JournalReaderModalProps {
  article: JournalArticle | null;
  onClose: () => void;
  lang: 'en' | 'fr';
}

export const JournalReaderModal: React.FC<JournalReaderModalProps> = ({
  article,
  onClose,
  lang,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1B241E]/60 backdrop-blur-sm flex justify-center p-3 sm:p-6 lg:p-10">
      <div
        className="relative bg-[#FCFAF5] w-full max-w-4xl rounded-2xl shadow-2xl border border-[#EADFC9] overflow-hidden my-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 bg-[#FCFAF5]/95 backdrop-blur-md px-6 py-4 border-b border-[#EADFC9] flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#174D32] hover:text-[#B88A3B] font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'fr' ? 'Retour au Journal' : 'Back to Journal'}</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#B88A3B] font-semibold hidden sm:inline">
              {article.issue}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-[#4A554E] hover:text-[#174D32] rounded-full hover:bg-[#EADFC9]/50 transition-colors cursor-pointer"
              aria-label="Close Article Reader"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 lg:p-14 overflow-y-auto max-h-[85vh]">
          {/* Metadata Header */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-[#174D32] text-[#F8F5EC] text-xs uppercase tracking-wider font-semibold rounded">
              {article.categoryTag}
            </span>
            <span className="text-xs text-[#727E77] uppercase tracking-wider">
              {article.theme}
            </span>
            <span className="text-[#EADFC9]">•</span>
            <span className="text-xs text-[#727E77] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#B88A3B]" />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#00351E] tracking-tight leading-tight mb-4">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-[#727E77] pb-6 mb-8 border-b border-[#EADFC9]">
            <span className="font-medium text-[#174D32]">{article.author}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#B88A3B]" />
              {article.date}
            </span>
          </div>

          {/* Cover Image Plate */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-10 bg-[#F4EFE6] shadow-xs border border-[#EADFC9]">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Editorial Pullquote */}
          {article.pullQuote && (
            <div className="my-8 p-6 sm:p-8 bg-[#F4EFE6] rounded-xl border-l-4 border-[#B88A3B]">
              <p className="font-serif italic text-lg sm:text-xl text-[#00351E] leading-relaxed">
                "{article.pullQuote}"
              </p>
            </div>
          )}

          {/* Article Prose */}
          <div className="space-y-6 text-[#1B241E] text-base sm:text-[17px] leading-relaxed font-normal">
            {article.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Key Insights & Terroir Data */}
          <div className="mt-12 p-6 sm:p-8 bg-[#FFFFFF] rounded-xl border border-[#EADFC9] shadow-xs">
            <h3 className="font-serif text-xl text-[#00351E] font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#B88A3B] text-[22px]">verified</span>
              <span>Key Curatorial Takeaways</span>
            </h3>
            <ul className="space-y-2.5">
              {article.keyInsights.map((insight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A554E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B88A3B] mt-1.5 shrink-0"></span>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reader Footer */}
          <div className="mt-10 pt-6 border-t border-[#EADFC9] flex items-center justify-between text-xs text-[#727E77]">
            <span>Archival Edition • Chhoti Tokri Monograph</span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#174D32] hover:bg-[#00351E] text-[#F8F5EC] uppercase tracking-wider font-semibold rounded cursor-pointer transition-colors"
            >
              Close Monograph
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
