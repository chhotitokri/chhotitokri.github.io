import React from 'react';
import {Link, Navigate, useParams} from 'react-router-dom';
import {ArrowLeft} from 'lucide-react';
import {JOURNAL_ARTICLES} from '../data/journal';
import {paths} from '../seo/routes';

interface JournalArticlePageProps {
  lang: 'en' | 'fr';
}

export const JournalArticlePage: React.FC<JournalArticlePageProps> = ({lang}) => {
  const {articleId} = useParams<{articleId: string}>();
  const article = JOURNAL_ARTICLES.find((a) => a.id === articleId);

  if (!article) {
    return <Navigate to={paths.journal} replace />;
  }

  return (
    <article className="pt-24 pb-16 px-4 sm:px-8 max-w-4xl mx-auto">
      <Link
        to={paths.journal}
        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#174D32] hover:text-[#B88A3B] font-semibold mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        {lang === 'fr' ? 'Retour au Journal' : 'Back to Journal'}
      </Link>
      <p className="text-xs uppercase tracking-widest text-[#B88A3B] font-semibold mb-2">{article.issue}</p>
      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#00351E] tracking-tight leading-tight mb-4">
        {article.title}
      </h1>
      <p className="text-sm text-[#4A554E] mb-6">
        {article.author} · {article.date}
      </p>
      <img
        src={article.coverImage}
        alt={article.title}
        width={1200}
        height={630}
        className="w-full h-auto max-h-[420px] object-cover rounded-xl border border-[#EADFC9] mb-8"
        loading="eager"
        fetchPriority="high"
      />
      {article.pullQuote && (
        <blockquote className="border-l-4 border-[#B88A3B] pl-4 italic text-[#00351E] font-serif text-xl mb-8">
          {article.pullQuote}
        </blockquote>
      )}
      <div className="space-y-5 text-[#4A554E] leading-relaxed">
        {article.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {article.keyInsights.length > 0 && (
        <section className="mt-10 p-6 bg-[#FFFFFF] border border-[#EADFC9] rounded-xl">
          <h2 className="font-serif text-xl text-[#00351E] mb-4">
            {lang === 'fr' ? 'Points clés' : 'Key insights'}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[#4A554E]">
            {article.keyInsights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
};