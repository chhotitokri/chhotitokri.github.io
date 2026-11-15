import React, {useState} from 'react';
import {Navigate, Route, Routes, useLocation, useParams} from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {BottomNav} from './components/BottomNav';
import {Footer} from './components/Footer';
import {CataloguePage} from './components/CataloguePage';
import {ProductDetailPage} from './components/ProductDetailPage';
import {EnquiryModal} from './components/EnquiryModal';
import {SeoHead} from './seo/SeoHead';
import {getViewFromPath, paths} from './seo/routes';
import {useAppNavigation} from './hooks/useAppNavigation';
import {HomePage} from './pages/HomePage';
import {AboutPage} from './pages/AboutPage';
import {SourcingPage} from './pages/SourcingPage';
import {JournalIndexPage} from './pages/JournalIndexPage';
import {JournalArticlePage} from './pages/JournalArticlePage';
import {ContactPage} from './pages/ContactPage';
import {LegalPage} from './pages/LegalPage';
import {JournalArticle} from './data/journal';
import {trackEvent} from './analytics/gtag';

function ProductRoute({
  lang,
  onSelectProduct,
  onOpenEnquiry,
  onBack,
}: {
  lang: 'en' | 'fr';
  onSelectProduct: (id: string) => void;
  onOpenEnquiry: () => void;
  onBack: () => void;
}) {
  const {productId = 'kala-namak-rice'} = useParams<{productId: string}>();
  React.useEffect(() => {
    trackEvent('view_item', {item_id: productId});
  }, [productId]);

  return (
    <ProductDetailPage
      productId={productId}
      onBack={onBack}
      onSelectProduct={onSelectProduct}
      onOpenEnquiry={onOpenEnquiry}
      lang={lang}
    />
  );
}

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const location = useLocation();
  const currentView = getViewFromPath(location.pathname);
  const {handleNavigate, handleSelectProduct, openJournalArticle} = useAppNavigation();

  const openEnquiry = () => {
    setIsEnquiryModalOpen(true);
    trackEvent('product_enquiry', {page_path: location.pathname});
  };

  const handleReadArticle = (article: JournalArticle) => {
    openJournalArticle(article.id);
  };

  return (
    <>
      <SeoHead />
      <div className="min-h-screen bg-[#F8F5EC] text-[#1B241E] flex flex-col font-sans selection:bg-[#B88A3B]/20 selection:text-[#00351E]">
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenEnquiry={openEnquiry}
        lang={lang}
        setLang={setLang}
      />

      <main className="flex-1 w-full flex flex-col">
        <Routes>
          <Route
            path={paths.home}
            element={
              <HomePage
                lang={lang}
                onExploreProducts={() => handleNavigate('catalogue')}
                onExploreStory={() => handleNavigate('story')}
                onSelectProduct={handleSelectProduct}
                onOpenEnquiry={openEnquiry}
                onReadArticle={handleReadArticle}
              />
            }
          />
          <Route
            path={paths.products}
            element={
              <CataloguePage
                onBack={() => handleNavigate('home')}
                onSelectProduct={handleSelectProduct}
                onOpenEnquiry={openEnquiry}
                lang={lang}
              />
            }
          />
          <Route
            path="/products/:productId"
            element={
              <ProductRoute
                lang={lang}
                onSelectProduct={handleSelectProduct}
                onOpenEnquiry={openEnquiry}
                onBack={() => handleNavigate('catalogue')}
              />
            }
          />
          <Route path={paths.about} element={<AboutPage lang={lang} />} />
          <Route path={paths.sourcing} element={<SourcingPage lang={lang} />} />
          <Route
            path={paths.journal}
            element={<JournalIndexPage lang={lang} onReadArticle={handleReadArticle} />}
          />
          <Route path="/journal/:articleId" element={<JournalArticlePage lang={lang} />} />
          <Route
            path={paths.contact}
            element={<ContactPage lang={lang} onOpenEnquiry={openEnquiry} />}
          />
          <Route
            path={paths.privacy}
            element={
              <LegalPage title={lang === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'} lang={lang}>
                <p>
                  This page describes how Chhoti Tokri may collect and use information from visitors to chhotitokri.com.
                  Final legal text will be published after business and legal review.
                </p>
              </LegalPage>
            }
          />
          <Route
            path={paths.terms}
            element={
              <LegalPage
                title={lang === 'fr' ? 'Conditions générales' : 'Terms and Conditions'}
                lang={lang}
              >
                <p>
                  This page will set out the terms for using chhotitokri.com as a brand information and enquiry site.
                  Final legal text will be published after business and legal review.
                </p>
              </LegalPage>
            }
          />
          <Route path="*" element={<Navigate to={paths.home} replace />} />
        </Routes>
      </main>

      <Footer onNavigate={handleNavigate} onOpenEnquiry={openEnquiry} lang={lang} />
      <BottomNav
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenEnquiry={openEnquiry}
        lang={lang}
      />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        lang={lang}
      />
      </div>
    </>
  );
}