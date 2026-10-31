import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { CuratedProvisionsSection } from './components/CuratedProvisionsSection';
import { OurStorySection } from './components/OurStorySection';
import { ProvenanceProtocolSection } from './components/ProvenanceProtocolSection';
import { JournalSection } from './components/JournalSection';
import { TradeEnquirySection } from './components/TradeEnquirySection';
import { Footer } from './components/Footer';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CataloguePage } from './components/CataloguePage';
import { EnquiryModal } from './components/EnquiryModal';
import { JournalReaderModal } from './components/JournalReaderModal';
import { JournalArticle, JOURNAL_ARTICLES } from './data/journal';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'catalogue' | 'product-detail'>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('kala-namak-rice');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState<boolean>(false);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [lang, setLang] = useState<'en' | 'fr'>('en');

  // Handle URL hash changes for GitHub Pages static hosting compatibility
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('product/')) {
        const prodId = hash.replace('product/', '');
        setSelectedProductId(prodId);
        setCurrentView('product-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'catalogue') {
        setCurrentView('catalogue');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'story') {
        setCurrentView('home');
        setTimeout(() => {
          document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (hash === 'provenance') {
        setCurrentView('home');
        setTimeout(() => {
          document.getElementById('provenance')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (hash === 'journal') {
        setCurrentView('home');
        setTimeout(() => {
          document.getElementById('journal')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (hash === 'contact' || hash === 'trade' || hash === 'enquire') {
        setIsEnquiryModalOpen(true);
      } else if (hash === 'home' || !hash) {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: string, productId?: string) => {
    if (view === 'product-detail') {
      if (productId) setSelectedProductId(productId);
      setCurrentView('product-detail');
      window.location.hash = `product/${productId || selectedProductId}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'catalogue') {
      setCurrentView('catalogue');
      window.location.hash = 'catalogue';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'story') {
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
      }
      window.location.hash = 'story';
    } else if (view === 'provenance') {
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          document.getElementById('provenance')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById('provenance')?.scrollIntoView({ behavior: 'smooth' });
      }
      window.location.hash = 'provenance';
    } else if (view === 'journal') {
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          document.getElementById('journal')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById('journal')?.scrollIntoView({ behavior: 'smooth' });
      }
      window.location.hash = 'journal';
    } else if (view === 'contact') {
      setIsEnquiryModalOpen(true);
    } else {
      setCurrentView('home');
      window.location.hash = 'home';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectProduct = (id: string) => {
    setSelectedProductId(id);
    setCurrentView('product-detail');
    window.location.hash = `product/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F5EC] text-[#1B241E] flex flex-col font-sans selection:bg-[#B88A3B]/20 selection:text-[#00351E]">
      {/* Universal Top Navigation Header */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
        lang={lang}
        setLang={setLang}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full flex flex-col">
        {currentView === 'home' && (
          <>
            <HeroSection
              onExploreProducts={() => handleNavigate('catalogue')}
              onExploreStory={() => handleNavigate('story')}
              lang={lang}
            />
            <PhilosophySection lang={lang} />
            <CuratedProvisionsSection
              onSelectProduct={handleSelectProduct}
              onRequestTrade={() => setIsEnquiryModalOpen(true)}
              lang={lang}
            />
            <OurStorySection
              onReadMore={() => handleNavigate('story')}
              lang={lang}
            />
            <ProvenanceProtocolSection lang={lang} />
            <JournalSection
              onReadArticle={(article) => setSelectedArticle(article)}
              lang={lang}
            />
            <TradeEnquirySection
              onOpenModal={() => setIsEnquiryModalOpen(true)}
              lang={lang}
            />
          </>
        )}

        {currentView === 'catalogue' && (
          <CataloguePage
            onBack={() => handleNavigate('home')}
            onSelectProduct={handleSelectProduct}
            onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
            lang={lang}
          />
        )}

        {currentView === 'product-detail' && (
          <ProductDetailPage
            productId={selectedProductId}
            onBack={() => handleNavigate('catalogue')}
            onSelectProduct={handleSelectProduct}
            onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
            lang={lang}
          />
        )}
      </main>

      {/* Archival Editorial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
        lang={lang}
      />

      {/* Mobile Streamlined Bottom Nav Bar */}
      <BottomNav
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
        lang={lang}
      />

      {/* Interactive Business & Sample Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        lang={lang}
      />

      {/* Interactive Tokri Journal Article Reader Modal */}
      <JournalReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        lang={lang}
      />
    </div>
  );
}
