import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Film,
  Sun,
  Camera,
  Play,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal,
  Calendar,
  Layers,
  MapPin,
  ShieldAlert,
  ChevronRight,
  Eye,
} from 'lucide-react';
import { STUDIO_CONFIG, GalleryItem } from '../data/studioConfig';
import { useStudioMedia } from '../context/MediaContext';
import { Lightbox } from '../components/Lightbox';
import { VideoModal } from '../components/VideoModal';
import { PackageComparison } from '../components/PackageComparison';

type DisciplineTab = 'all' | 'weddings' | 'cinema' | 'outdoor';

export const WeddingsFilmsOutdoorPage: React.FC = () => {
  const { primaryImages, galleryItems } = useStudioMedia();
  const [activeTab, setActiveTab] = useState<DisciplineTab>('all');
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({
    title: 'The Eternal Vow — 4K Royal Wedding Film',
    category: 'Wedding Cinematography',
    posterUrl: primaryImages.heroWedding,
  });

  const weddingItems = galleryItems.filter((i) => i.category === 'wedding');
  const cinemaItems = galleryItems.filter((i) => i.category === 'cinematography' || i.isVideo);
  const outdoorItems = galleryItems.filter((i) => i.category === 'outdoor');

  const displayedItems =
    activeTab === 'all'
      ? [...weddingItems, ...cinemaItems, ...outdoorItems].slice(0, 9)
      : activeTab === 'weddings'
      ? weddingItems
      : activeTab === 'cinema'
      ? cinemaItems
      : outdoorItems;

  const handleOpenVideo = (title: string, category: string, posterUrl: string) => {
    setCurrentVideo({ title, category, posterUrl });
    setVideoModalOpen(true);
  };

  return (
    <div className="bg-[#FAF7F2] text-[#1A1815] pt-24 sm:pt-28 pb-24 transition-colors">
      {/* 1. HERO SHOWCASE WITH LIGHT GRADIENT */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E2D6C3] bg-gradient-to-b from-[#FAF7F2] via-[#F4EDE2] to-[#FAF7F2] overflow-hidden">
        {/* Soft radial background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#D9C5A5]/25 to-[#B99B69]/15 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#D9C5A5] text-[#B99B69] text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 fill-[#B99B69]" />
            <span>Signature Ceremonies · 4K Cinema · Natural Light</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#1A1815] tracking-tight leading-[1.1]">
            Weddings, Cinema &amp;{' '}
            <span className="italic font-normal text-[#B99B69] bg-gradient-to-r from-[#B99B69] to-[#8E7348] bg-clip-text text-transparent">
              Outdoor Visuals
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto font-sans leading-relaxed">
            From the sacred mantras and vermillion rituals of traditional weddings to sweeping 4K
            drone cinematography and golden-hour outdoor portraits across Nepal.
          </p>

          {/* Quick Filter Switcher */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: 'all', label: 'All Showcase' },
              { id: 'weddings', label: 'Wedding Ceremonies' },
              { id: 'cinema', label: '4K Cinematography' },
              { id: 'outdoor', label: 'Outdoor Portraits' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as DisciplineTab)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105 active:scale-95 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#D9C5A5] to-[#B99B69] text-[#1A1815] shadow-sm font-bold'
                    : 'bg-white text-stone-600 border border-[#E2D6C3] hover:bg-stone-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Action Links */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#packages"
              className="px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] via-[#E2D2B8] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 inline-flex items-center gap-2"
            >
              <span>Explore Dedicated Packages</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() =>
                handleOpenVideo(
                  'The Eternal Vow — 4K Royal Wedding Film',
                  'Wedding Cinematography',
                  primaryImages.heroWedding
                )
              }
              className="px-7 py-3.5 text-xs sm:text-sm font-bold text-stone-800 bg-white border border-[#D9C5A5] hover:bg-stone-50 rounded-full transition-all shadow-xs hover:scale-105 active:scale-95 inline-flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-[#B99B69] text-[#B99B69]" />
              <span>Watch Cinema Reel</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. THREE PILLARS STRIP (WEDDINGS, CINEMA, OUTDOOR) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Weddings Pillar */}
          <div
            onClick={() => setActiveTab('weddings')}
            className={`p-8 rounded-[2.5rem] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeTab === 'weddings'
                ? 'bg-white border-[#B99B69] shadow-xl ring-2 ring-[#B99B69]/30'
                : 'bg-gradient-to-b from-white to-[#FAF7F2] border-[#E2D6C3] shadow-sm hover:shadow-md hover:-translate-y-1'
            }`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#B99B69]/10 text-[#B99B69] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1815]">Wedding Ceremonies</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Vedic mandaps, varmala rituals, candlelight canopies, emotional tears, and royal
                regalia captured with dual-camera redundancy and respectful guidance.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-1.5 text-xs font-bold text-[#B99B69]">
              <span>View Wedding Gallery</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Cinema Pillar */}
          <div
            onClick={() => setActiveTab('cinema')}
            className={`p-8 rounded-[2.5rem] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeTab === 'cinema'
                ? 'bg-white border-[#B99B69] shadow-xl ring-2 ring-[#B99B69]/30'
                : 'bg-gradient-to-b from-white to-[#FAF7F2] border-[#E2D6C3] shadow-sm hover:shadow-md hover:-translate-y-1'
            }`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#B99B69]/10 text-[#B99B69] flex items-center justify-center">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1815]">4K Cinematography</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Sony FX3 cinema production, DaVinci Resolve color mastering, Apple ProRes aerial
                drone sweeps, and viral 9:16 Instagram teasers delivered in ultra HD.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-1.5 text-xs font-bold text-[#B99B69]">
              <span>View Film Showreel</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Outdoor Pillar */}
          <div
            onClick={() => setActiveTab('outdoor')}
            className={`p-8 rounded-[2.5rem] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeTab === 'outdoor'
                ? 'bg-white border-[#B99B69] shadow-xl ring-2 ring-[#B99B69]/30'
                : 'bg-gradient-to-b from-white to-[#FAF7F2] border-[#E2D6C3] shadow-sm hover:shadow-md hover:-translate-y-1'
            }`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#B99B69]/10 text-[#B99B69] flex items-center justify-center">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1815]">Outdoor &amp; Landscapes</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Golden hour sunsets, historic palace courtyards, mountain valley vistas, and
                flattering natural-light portraiture with organic color grading.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-1.5 text-xs font-bold text-[#B99B69]">
              <span>View Outdoor Work</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL GALLERY SHOWCASE */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
              Curated Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1815] mt-1">
              {activeTab === 'all'
                ? 'Featured Weddings, Films & Outdoor Work'
                : activeTab === 'weddings'
                ? 'Royal Wedding Photography Gallery'
                : activeTab === 'cinema'
                ? 'Cinematic Films & Drone Footage'
                : 'Scenic Outdoor & Natural Light Gallery'}
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="text-xs font-bold text-[#B99B69] hover:underline inline-flex items-center gap-1"
          >
            <span>Open Complete Filtered Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (item.isVideo) {
                  handleOpenVideo(item.title, item.categoryLabel, item.imageUrl);
                } else {
                  setSelectedLightboxItem(item);
                }
              }}
              className="group relative rounded-[2rem] overflow-hidden border border-[#E2D6C3] bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <div className="text-white text-xs flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-[#B99B69]" />
                    <span>Click to view 4K master</span>
                  </div>
                </div>

                {item.isVideo && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#B99B69] text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-sm">
                    <Play className="w-3 h-3 fill-current" />
                    <span>{item.videoDuration || '4K Film'}</span>
                  </div>
                )}
              </div>

              <div className="p-6 space-y-1.5 bg-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B99B69] font-bold">
                  {item.categoryLabel}
                </span>
                <h4 className="font-serif text-lg font-bold text-[#1A1815] group-hover:text-[#B99B69] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DEDICATED PACKAGES & PRICING SECTION (DIRECTLY INCLUDED HERE) */}
      <section
        id="packages"
        className="py-20 mt-16 bg-gradient-to-b from-[#F5EFE6] via-[#FAF7F2] to-[#F5EFE6] border-y border-[#E2D6C3]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2D6C3] text-[#B99B69] text-xs font-mono font-bold uppercase shadow-xs">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Dedicated Investment Matrix</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1815]">
              Weddings, Cinema &amp; Outdoor Packages
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
              Transparent, side-by-side tier comparison with exact hours, raw footage, drone
              deliverables, and handcrafted albums by BABA CANVAS &amp; FRAMES.
            </p>
          </div>

          {/* Interactive Package Comparison Component with initialCategory wedding */}
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-10 rounded-[2.5rem] shadow-xl border border-[#E2D6C3]">
            <PackageComparison initialCategory="wedding" />
          </div>
        </div>
      </section>

      {/* 5. PHYSICAL FRAMING WORKSHOP: BABA CANVAS & FRAMES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-white via-[#FAF7F2] to-[#F5EFE6] border border-[#E2D6C3] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#B99B69] text-xs font-mono uppercase font-bold">
              <MapPin className="w-4 h-4" />
              <span>Physical Workshop · BABA CANVAS &amp; FRAMES</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1815]">
              Handcrafted Velvet Albums &amp; Museum Canvas
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              Unlike studios that outsource print work, our Kanchanpur framing workshop—officially
              registered on Google Maps as{' '}
              <strong className="text-[#1A1815]">BABA CANVAS &amp; FRAMES</strong>—crafts flush-mount
              velvet albums, museum canvas stretching, and luxury wooden frames directly in-house.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link
              to="/contact?cat=wedding"
              className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] via-[#E2D2B8] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 text-center"
            >
              Reserve Wedding Dates
            </Link>
            <a
              href={STUDIO_CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-6 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-full transition-all hover:scale-105 active:scale-95 text-center"
            >
              Discuss Custom Itinerary on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox & Video Player Modals */}
      <Lightbox
        item={selectedLightboxItem}
        allItems={displayedItems}
        onClose={() => setSelectedLightboxItem(null)}
        onSelect={(item) => setSelectedLightboxItem(item)}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        title={currentVideo.title}
        category={currentVideo.category}
        posterUrl={currentVideo.posterUrl}
      />
    </div>
  );
};
