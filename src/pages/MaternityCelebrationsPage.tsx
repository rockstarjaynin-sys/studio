import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Sparkles,
  Cake,
  Clock,
  Layers,
  Smile,
  SlidersHorizontal,
  ArrowRight,
  ShieldAlert,
  Camera,
  CheckCircle2,
  Calendar,
  Eye,
  MessageCircle,
} from 'lucide-react';
import { STUDIO_CONFIG, GalleryItem } from '../data/studioConfig';
import { useStudioMedia } from '../context/MediaContext';
import { Lightbox } from '../components/Lightbox';
import { PackageComparison } from '../components/PackageComparison';

type CategoryFilter = 'all' | 'maternity' | 'newborn' | 'celebrations';

export const MaternityCelebrationsPage: React.FC = () => {
  const { primaryImages, galleryItems } = useStudioMedia();
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);

  const maternityItems = galleryItems.filter((i) => i.category === 'maternity');
  const newbornItems = galleryItems.filter((i) => i.category === 'newborn');
  const celebrationItems = galleryItems.filter((i) => i.category === 'celebrations');

  const displayedGallery =
    activeFilter === 'all'
      ? [...maternityItems, ...newbornItems, ...celebrationItems]
      : activeFilter === 'maternity'
      ? maternityItems
      : activeFilter === 'newborn'
      ? newbornItems
      : celebrationItems;

  return (
    <div className="bg-[#FAF7F2] text-[#1A1815] pt-24 sm:pt-28 pb-24 transition-colors">
      {/* 1. SERENE LIGHT LUXURY HERO */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E2D6C3] bg-gradient-to-b from-[#FAF7F2] via-[#F6EFE5] to-[#FAF7F2] overflow-hidden">
        {/* Soft radial background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-r from-[#D9C5A5]/25 to-[#F3DDD2]/30 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#D9C5A5] text-[#B99B69] text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 fill-[#B99B69]" />
            <span>Maternity · Newborn Heirlooms · Baby Shower &amp; Milestones</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#1A1815] tracking-tight leading-[1.1]">
            Maternity, Newborn &amp;{' '}
            <span className="italic font-normal text-[#B99B69] bg-gradient-to-r from-[#B99B69] to-[#8E7348] bg-clip-text text-transparent">
              Celebrations
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Preserving life’s most tender chapters with gentle pacing, studio gown wardrobes,
            sanitized wraps, and joyful baby shower celebrations in Nepal.
          </p>

          {/* Quick Filter Switcher */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: 'all', label: 'All Baby & Celebrations' },
              { id: 'maternity', label: 'Fine Art Maternity' },
              { id: 'newborn', label: 'Newborn Portraits' },
              { id: 'celebrations', label: 'Baby Shower & Parties' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as CategoryFilter)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105 active:scale-95 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#D9C5A5] to-[#B99B69] text-[#1A1815] shadow-sm font-bold'
                    : 'bg-white text-stone-600 border border-[#E2D6C3] hover:bg-stone-50'
                }`}
              >
                {filter.label}
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

            <Link
              to="/contact?cat=maternity"
              className="px-7 py-3.5 text-xs sm:text-sm font-bold text-stone-800 bg-white border border-[#D9C5A5] hover:bg-stone-50 rounded-full transition-all shadow-xs hover:scale-105 active:scale-95 inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#B99B69]" />
              <span>Enquire Availability</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE THREE CHAPTERS CARDS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Chapter 1: Maternity */}
          <div
            onClick={() => setActiveFilter('maternity')}
            className={`p-8 rounded-[2.5rem] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeFilter === 'maternity'
                ? 'bg-white border-[#B99B69] shadow-xl ring-2 ring-[#B99B69]/30'
                : 'bg-gradient-to-b from-white to-[#FAF7F2] border-[#E2D6C3] shadow-sm hover:shadow-md hover:-translate-y-1'
            }`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#B99B69]/10 text-[#B99B69] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1815]">Fine Art Maternity</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Private, unhurried sanctuary paced to expectant mothers. Complimentary flowing
                wardrobe gowns, soft window lighting, and intimate spouse portraits.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-1.5 text-xs font-bold text-[#B99B69]">
              <span>View Maternity Portraits</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Chapter 2: Newborn */}
          <div
            onClick={() => setActiveFilter('newborn')}
            className={`p-8 rounded-[2.5rem] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeFilter === 'newborn'
                ? 'bg-white border-[#B99B69] shadow-xl ring-2 ring-[#B99B69]/30'
                : 'bg-gradient-to-b from-white to-[#FAF7F2] border-[#E2D6C3] shadow-sm hover:shadow-md hover:-translate-y-1'
            }`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#B99B69]/10 text-[#B99B69] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1815]">Newborn Heirlooms</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Tender first 14 days captured with temperature-regulated rooms, sanitized organic
                swaddles, and timeless skin-to-skin bonding portraits.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-1.5 text-xs font-bold text-[#B99B69]">
              <span>View Newborn Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Chapter 3: Baby Showers & Celebrations */}
          <div
            onClick={() => setActiveFilter('celebrations')}
            className={`p-8 rounded-[2.5rem] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeFilter === 'celebrations'
                ? 'bg-white border-[#B99B69] shadow-xl ring-2 ring-[#B99B69]/30'
                : 'bg-gradient-to-b from-white to-[#FAF7F2] border-[#E2D6C3] shadow-sm hover:shadow-md hover:-translate-y-1'
            }`}
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#B99B69]/10 text-[#B99B69] flex items-center justify-center">
                <Cake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1815]">Baby Showers &amp; Parties</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Joyful gender reveals, godh bharai, annaprashan rituals, cake cuttings, floral stage
                decorations, and heartwarming candid family moments.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-1.5 text-xs font-bold text-[#B99B69]">
              <span>View Celebration Stories</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL GALLERY SHOWCASE */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
              Curated Gallery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1815] mt-1">
              {activeFilter === 'all'
                ? 'Maternity, Baby & Celebration Gallery'
                : activeFilter === 'maternity'
                ? 'Fine Art Maternity Studio Portraits'
                : activeFilter === 'newborn'
                ? 'Gentle Newborn Portraits'
                : 'Baby Shower & Milestone Moments'}
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
          {displayedGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedLightboxItem(item)}
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
                    <span>Click to view 4K portrait</span>
                  </div>
                </div>
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

      {/* 4. DEDICATED PACKAGES & PRICING (DIRECTLY INCLUDED HERE) */}
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
              Maternity, Newborn &amp; Celebration Packages
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
              Compare Bump-to-Baby, Newborn, and Baby Shower packages side-by-side with exact hours,
              wardrobe access, raw files, and handcrafted nursery frames.
            </p>
          </div>

          {/* Interactive Package Comparison Component with initialCategory maternity */}
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-10 rounded-[2.5rem] shadow-xl border border-[#E2D6C3]">
            <PackageComparison initialCategory="maternity" />
          </div>
        </div>
      </section>

      {/* 5. GOWN WARDROBE & NURSERY FRAMING HIGHLIGHT */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-white via-[#FAF7F2] to-[#F5EFE6] border border-[#E2D6C3] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#B99B69] text-xs font-mono uppercase font-bold">
              <Layers className="w-4 h-4" />
              <span>Studio Wardrobe &amp; Handcrafted Nursery Framing</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1815]">
              Sanctuary Comfort &amp; Archival Baby Albums
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              Enjoy complimentary access to our client wardrobe of imported lace gowns and silk drapes.
              All finished newborn and milestone memories are custom-framed right in our workshop at{' '}
              <strong className="text-[#1A1815]">BABA CANVAS &amp; FRAMES</strong> with baby-safe,
              archival materials.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link
              to="/contact?cat=maternity"
              className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] via-[#E2D2B8] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 text-center"
            >
              Reserve Session Date
            </Link>
            <a
              href={STUDIO_CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-6 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-full transition-all hover:scale-105 active:scale-95 text-center"
            >
              Ask Questions on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedLightboxItem}
        allItems={displayedGallery}
        onClose={() => setSelectedLightboxItem(null)}
        onSelect={(item) => setSelectedLightboxItem(item)}
      />
    </div>
  );
};
