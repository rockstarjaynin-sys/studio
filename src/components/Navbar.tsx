import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Camera,
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  Folder,
  Sparkles,
  Heart,
  Film,
  Sun,
  Cake,
  SlidersHorizontal,
} from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

interface NavbarProps {
  onOpenDriveModal?: () => void;
}

interface NavItem {
  label: string;
  path: string;
  islandSnippet: string;
  icon?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDriveModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<NavItem | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setHoveredItem(null);
  }, [location.pathname]);

  const navLinks: NavItem[] = [
    {
      label: 'Home',
      path: '/',
      islandSnippet: 'Welcome to BABA PRODUCTION STUDIO · Fine Art Photography & Cinema',
    },
    {
      label: 'Weddings & Cinema',
      path: '/weddings-cinema-outdoor',
      islandSnippet: 'Royal Weddings · 4K Cinema Films · Outdoor Scenic · Dedicated Packages',
      icon: <Heart className="w-3.5 h-3.5 text-[#B99B69]" />,
    },
    {
      label: 'Maternity & Celebrations',
      path: '/maternity-celebrations',
      islandSnippet: 'Fine Art Motherhood · Newborn Heirlooms · Baby Showers · Dedicated Packages',
      icon: <Sparkles className="w-3.5 h-3.5 text-[#B99B69]" />,
    },
    {
      label: 'Portfolio',
      path: '/portfolio',
      islandSnippet: 'Complete Curated 4K Gallery & Lightbox Viewer',
      icon: <Camera className="w-3.5 h-3.5 text-[#B99B69]" />,
    },
    {
      label: 'About Studio',
      path: '/about',
      islandSnippet: 'Artistic Story · Physical Workshop at BABA CANVAS & FRAMES',
    },
    {
      label: 'Contact & Book',
      path: '/contact',
      islandSnippet: 'Reserve Your Dates · Direct WhatsApp (+977 9801721658)',
    },
  ];

  return (
    <div className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      {/* Floating Dynamic Island Container */}
      <div className="pointer-events-auto relative w-full max-w-6xl flex flex-col items-center">
        {/* The Main Pill Island */}
        <header
          className={`w-full rounded-full transition-all duration-300 border backdrop-blur-xl flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3 island-shadow ${
            isScrolled
              ? 'bg-[#FFFDF9]/95 border-[#E2D7C3] shadow-[0_16px_36px_-8px_rgba(185,155,105,0.22)]'
              : 'bg-[#FAF7F2]/90 border-[#E8DFD1] shadow-[0_12px_30px_-6px_rgba(185,155,105,0.16)]'
          }`}
        >
          {/* Brand Left */}
          <Link
            to="/"
            onMouseEnter={() => setHoveredItem(navLinks[0])}
            onMouseLeave={() => setHoveredItem(null)}
            className="flex items-center gap-2.5 shrink-0 group focus-visible:outline-none"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#B99B69] to-[#E5D4B8] flex items-center justify-center text-[#1A1815] shadow-sm group-hover:scale-105 group-hover:rotate-6 transition-transform">
              <Camera className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xs sm:text-sm font-bold tracking-wider text-[#1A1815] uppercase whitespace-nowrap">
                BABA PRODUCTION
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[#B99B69] font-bold uppercase font-sans">
                Studio &amp; Cinema
              </span>
            </div>
          </Link>

          {/* Center Links (Desktop Pill Strip) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-full bg-[#F2EDE4]/70 border border-[#E5DAC8]/60">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setHoveredItem(link)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[#1A1815] shadow-sm font-bold'
                      : 'text-stone-600 hover:text-[#1A1815] hover:bg-white/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Island */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {onOpenDriveModal && (
              <button
                onClick={onOpenDriveModal}
                title="Google Drive Media & Folder Hub"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white/70 hover:bg-white border border-stone-200 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xs"
              >
                <Folder className="w-3.5 h-3.5 text-[#B99B69]" />
                <span>Drive Assets</span>
              </button>
            )}

            <a
              href={STUDIO_CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xs"
              title="Chat directly on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/contact"
              className="px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] via-[#E2D2B8] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_4px_12px_rgba(185,155,105,0.25)] whitespace-nowrap"
            >
              Book Your Date
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-full text-stone-800 hover:bg-stone-200/60 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Dynamic Island Sub-Pill Pop-Up (iPhone style expansion when hovering links) */}
        {hoveredItem && (
          <div className="hidden lg:flex items-center gap-2 mt-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E0D4C0] shadow-[0_8px_20px_-4px_rgba(185,155,105,0.25)] text-xs text-[#1A1815] animate-fadeIn transition-all">
            {hoveredItem.icon || <Sparkles className="w-3.5 h-3.5 text-[#B99B69]" />}
            <span className="font-bold text-[#B99B69] uppercase font-mono text-[10px]">
              {hoveredItem.label}:
            </span>
            <span className="text-stone-700 font-medium">{hoveredItem.islandSnippet}</span>
          </div>
        )}

        {/* Mobile Navigation Drawer Modal */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full mt-3 p-6 rounded-3xl bg-white/95 backdrop-blur-2xl border border-stone-200 shadow-2xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#B99B69] font-bold">
                Studio Navigation
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-stone-500 hover:text-stone-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-[#B99B69]/15 text-[#1A1815] font-bold border border-[#B99B69]/40'
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {link.icon || <Sparkles className="w-3 h-3 text-[#B99B69]" />}
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-2">
              <a
                href={STUDIO_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-full"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>Chat on WhatsApp (+977 9801721658)</span>
              </a>

              <Link
                to="/contact"
                className="flex items-center justify-center w-full py-3 text-xs font-bold text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] to-[#B99B69] rounded-full shadow-md"
              >
                Book Your Session
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
