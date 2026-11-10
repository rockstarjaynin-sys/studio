import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DriveAssetModal } from './components/DriveAssetModal';
import { HomePage } from './pages/HomePage';
import { WeddingsFilmsOutdoorPage } from './pages/WeddingsFilmsOutdoorPage';
import { MaternityCelebrationsPage } from './pages/MaternityCelebrationsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { STUDIO_CONFIG } from './data/studioConfig';
import { MediaProvider } from './context/MediaContext';
import { CustomCursor } from './components/CustomCursor';

// Auto-scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}

export default function App() {
  const [driveModalOpen, setDriveModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MediaProvider>
      <Router>
        <ScrollToTop />
        <CustomCursor />
        <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1A1815] antialiased selection:bg-[#D9C5A5] selection:text-[#1A1815]">
          {/* Dynamic Island Navigation */}
          <Navbar onOpenDriveModal={() => setDriveModalOpen(true)} />

        {/* Multi-Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Consolidated Weddings, Cinema & Outdoor */}
            <Route path="/weddings-cinema-outdoor" element={<WeddingsFilmsOutdoorPage />} />
            <Route path="/weddings" element={<WeddingsFilmsOutdoorPage />} />
            <Route path="/cinematography" element={<WeddingsFilmsOutdoorPage />} />
            <Route path="/outdoor" element={<WeddingsFilmsOutdoorPage />} />

            {/* Consolidated Maternity, Newborn & Celebrations */}
            <Route path="/maternity-celebrations" element={<MaternityCelebrationsPage />} />
            <Route path="/maternity-newborn" element={<MaternityCelebrationsPage />} />
            <Route path="/celebrations" element={<MaternityCelebrationsPage />} />

            {/* Core Pages */}
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Packages redirects directly into dedicated wedding & cinema packages */}
            <Route path="/packages" element={<WeddingsFilmsOutdoorPage />} />

            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenDriveModal={() => setDriveModalOpen(true)} />

        {/* Floating Quick Action (WhatsApp Direct) */}
        <aside
          aria-label="Quick Communication"
          className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5"
        >
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white/90 hover:bg-[#D9C5A5] text-[#1A1815] border border-stone-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all hover:scale-110 active:scale-95"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          )}

          <a
            href={STUDIO_CONFIG.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_8px_24px_rgba(5,150,105,0.3)] transition-all transform hover:scale-105 active:scale-95 group"
            title="Chat directly on WhatsApp (+977 9801721658)"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span className="text-xs font-bold tracking-wide hidden sm:inline">WhatsApp Studio</span>
          </a>
        </aside>

        {/* Google Drive Media Management Modal */}
        <DriveAssetModal
          isOpen={driveModalOpen}
          onClose={() => setDriveModalOpen(false)}
        />
      </div>
    </Router>
  </MediaProvider>
);
}
