import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WeddingsFilmsOutdoorPage } from './pages/WeddingsFilmsOutdoorPage';
import { MaternityCelebrationsPage } from './pages/MaternityCelebrationsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { MediaProvider } from './context/MediaContext';
import { CustomCursor } from './components/CustomCursor';

export type LanguageOption = 'en' | 'ne';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<LanguageOption>('en');

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = activeLanguage === 'ne' ? 'ne' : 'en';
  }, [activeLanguage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MediaProvider>
      <Router>
        <ScrollToTop />
        <CustomCursor />

        <div className="app-shell min-h-screen flex flex-col antialiased selection:bg-[#D9C5A5] selection:text-[#1A1815] bg-[#FAF7F2] text-[#1A1815]">
          <Navbar activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/weddings-cinema-outdoor" element={<WeddingsFilmsOutdoorPage />} />
              <Route path="/weddings" element={<WeddingsFilmsOutdoorPage />} />
              <Route path="/cinematography" element={<WeddingsFilmsOutdoorPage />} />
              <Route path="/outdoor" element={<WeddingsFilmsOutdoorPage />} />
              <Route path="/maternity-celebrations" element={<MaternityCelebrationsPage />} />
              <Route path="/maternity-newborn" element={<MaternityCelebrationsPage />} />
              <Route path="/celebrations" element={<MaternityCelebrationsPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/packages" element={<WeddingsFilmsOutdoorPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          <Footer />

          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-5 right-5 z-40 p-3 rounded-full bg-white/90 hover:bg-[#D9C5A5] text-[#1A1815] border border-stone-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all hover:scale-110 active:scale-95"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          )}
        </div>
      </Router>
    </MediaProvider>
  );
}
