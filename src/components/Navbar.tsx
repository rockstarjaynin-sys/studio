import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Menu, X, Sparkles, Heart } from 'lucide-react';
import type { LanguageOption } from '../App';

interface NavbarProps {
  activeLanguage: LanguageOption;
  setActiveLanguage: React.Dispatch<React.SetStateAction<LanguageOption>>;
}

interface NavItem {
  labelEn: string;
  labelNe: string;
  path: string;
  islandSnippetEn: string;
  islandSnippetNe: string;
  icon?: React.ReactNode;
}

const translations = {
  en: {
    bookDate: 'Book Your Date',
    language: 'Language',
    english: 'English',
    nepali: 'नेपाली',
    mobileNav: 'Studio Navigation',
    bookSession: 'Book Your Session',
  },
  ne: {
    whatsapp: 'व्हाट्सएप',
    bookDate: 'बुक गर्नुहोस्',
    driveAssets: 'ड्राइভ',
    language: 'भाषा',
    english: 'English',
    nepali: 'नेपाली',
    theme: 'थिम',
    light: 'उज्यालो',
    dark: 'गाढा',
    gradient: 'ग्रेडिएन्ट',
    mobileNav: 'स्टुडियो नेभिगेसन',
    chatWhatsApp: 'व्हाट्सएपमा कुरा गर्नुहोस् (+977 9801721658)',
    bookSession: 'सेसन बुक गर्नुहोस्',
  },
} as const;

export const Navbar: React.FC<NavbarProps> = ({ activeLanguage, setActiveLanguage }) => {
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
      labelEn: 'Home',
      labelNe: 'होम',
      path: '/',
      islandSnippetEn: 'Welcome to BABA PRODUCTION STUDIO · Fine Art Photography & Cinema',
      islandSnippetNe: 'बाबा प्रोडक्शन स्टुडियोमा स्वागत · फाइन आर्ट फोटोग्राफी र सिनेमा',
    },
    {
      labelEn: 'Weddings & Cinema',
      labelNe: 'वेडिङ्स र सिनेमा',
      path: '/weddings-cinema-outdoor',
      islandSnippetEn: 'Royal Weddings · 4K Cinema Films · Outdoor Scenic · Dedicated Packages',
      islandSnippetNe: 'रॉयल वेडिङ्स · ४के सिनेमा फिल्म्स · आउटडोर लँडस्केप · विशेष प्याकेज',
      icon: <Heart className="w-3.5 h-3.5 text-[#B99B69]" />,
    },
    {
      labelEn: 'Maternity & Celebrations',
      labelNe: 'मातृत्व र उत्सव',
      path: '/maternity-celebrations',
      islandSnippetEn: 'Fine Art Motherhood · Newborn Heirlooms · Baby Showers · Dedicated Packages',
      islandSnippetNe: 'फाइन आर्ट मदरहुड · नवजातको वारिस · बेबी शावर · विशेष प्याकेज',
      icon: <Sparkles className="w-3.5 h-3.5 text-[#B99B69]" />,
    },
    {
      labelEn: 'Portfolio',
      labelNe: 'पोर्टफोलियो',
      path: '/portfolio',
      islandSnippetEn: 'Complete Curated 4K Gallery & Lightbox Viewer',
      islandSnippetNe: 'पूरा क्युरेटेड ४के ग्यालेरी र लाइटबक्स',
      icon: <Camera className="w-3.5 h-3.5 text-[#B99B69]" />,
    },
    {
      labelEn: 'About Studio',
      labelNe: 'स्टुडियोको बारेमा',
      path: '/about',
      islandSnippetEn: 'Artistic Story · Physical Workshop at BABA CANVAS & FRAMES',
      islandSnippetNe: 'कलात्मक कहानी · बाबा क्यानभास र फ्रेम्समा फिजिकल वर्कशप',
    },
    {
      labelEn: 'Contact & Book',
      labelNe: 'सम्पर्क र बुक',
      path: '/contact',
      islandSnippetEn: 'Reserve Your Dates · Direct WhatsApp (+977 9801721658)',
      islandSnippetNe: 'तपाईंको मिति सुरक्षित गर्नुहोस् · प्रत्यक्ष व्हाट्सएप (+977 9801721658)',
    },
  ];

  const t = translations[activeLanguage];

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
                  {activeLanguage === 'ne' ? link.labelNe : link.labelEn}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Island */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 max-w-full flex-wrap justify-end">
            <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-[#E5DAC8]/80 bg-[#F6F1E7]/80 p-1">
              <label className="sr-only">{t.language}</label>
              <select
                aria-label={t.language}
                value={activeLanguage}
                onChange={(e) => setActiveLanguage(e.target.value as LanguageOption)}
                className="appearance-none rounded-full bg-transparent px-2 py-1 text-[9px] font-bold tracking-wide text-stone-700 outline-none"
              >
                <option value="en">{t.english}</option>
                <option value="ne">{t.nepali}</option>
              </select>
            </div>

            <Link
              to="/contact"
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] via-[#E2D2B8] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_4px_12px_rgba(185,155,105,0.25)] whitespace-nowrap shrink-0"
            >
              {t.bookDate}
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
              {activeLanguage === 'ne' ? hoveredItem.labelNe : hoveredItem.labelEn}:
            </span>
            <span className="text-stone-700 font-medium">
              {activeLanguage === 'ne' ? hoveredItem.islandSnippetNe : hoveredItem.islandSnippetEn}
            </span>
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
                const label = activeLanguage === 'ne' ? link.labelNe : link.labelEn;
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
                    <span>{label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-3">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-2">
                <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-stone-500 mb-2">{t.language}</div>
                <select
                  aria-label={t.language}
                  value={activeLanguage}
                  onChange={(e) => setActiveLanguage(e.target.value as LanguageOption)}
                  className="w-full rounded-xl border border-stone-200 bg-white px-2.5 py-2 text-xs font-semibold text-stone-700 outline-none"
                >
                  <option value="en">{t.english}</option>
                  <option value="ne">{t.nepali}</option>
                </select>
              </div>

              <Link
                to="/contact"
                className="flex items-center justify-center w-full py-3 text-xs font-bold text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] to-[#B99B69] rounded-full shadow-md"
              >
                {t.bookSession}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
