import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Heart,
  Smile,
  Cake,
  Gift,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MessageCircle,
} from 'lucide-react';
import { STUDIO_CONFIG, GalleryItem } from '../data/studioConfig';
import { useStudioMedia } from '../context/MediaContext';
import { Lightbox } from '../components/Lightbox';
import { PackageComparison } from '../components/PackageComparison';

export const CelebrationsPage: React.FC = () => {
  const { primaryImages, galleryItems } = useStudioMedia();
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);

  const celebrationGallery = galleryItems.filter((item) => item.category === 'celebrations');

  return (
    <div className="bg-[#FAF7F2] text-[#1A1815] pt-28 pb-20 transition-colors">
      {/* 1. HERO HEADER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2D6C3] bg-gradient-to-b from-[#F2ECE1] via-[#FAF7F2] to-[#FAF7F2]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#D9C5A5] text-[#B99B69] text-xs font-mono uppercase shadow-xs">
            <Gift className="w-3.5 h-3.5" />
            <span className="font-bold text-[#1A1815]">Joyous Family Milestones</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#1A1815] tracking-tight leading-tight">
            Baby Shower &amp; Celebrations
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-700 max-w-2xl mx-auto font-sans leading-relaxed">
            From playful gender reveals and elegant baby showers to milestone birthdays and sacred
            rice-feeding (annaprashan) festivities in Kanchanpur and Far-Western Nepal.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#packages"
              className="px-7 py-3 text-xs sm:text-sm font-bold text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              View Celebration Packages
            </a>
            <Link
              to="/contact?cat=celebrations"
              className="px-7 py-3 text-xs sm:text-sm font-bold text-[#1A1815] bg-white border border-[#D9C5A5] hover:bg-stone-50 rounded-full transition-all shadow-xs hover:scale-105 active:scale-95"
            >
              Enquire Event Date
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CELEBRATION DISCIPLINE CARDS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 rounded-3xl bg-white border border-[#E2D6C3] space-y-3 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
              <Gift className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1A1815]">Baby Showers &amp; Reveals</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Pastel floral setups, games, emotion-filled expressions during the gender reveal, and
              tender family blessings.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E2D6C3] space-y-3 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
              <Cake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1A1815]">First Birthdays &amp; Cakes</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Cake smashes, milestone decor, joyful toddler laughter, and family portrait groupings.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E2D6C3] space-y-3 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1A1815]">Annaprashan Ceremonies</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Sacred rice-feeding rituals, silver plates, blessings by grandparents, and traditional
              baby vestments.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E2D6C3] space-y-3 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
              <Smile className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1A1815]">Milestone Anniversaries</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Silver &amp; golden jubilee anniversaries, reunions, and multi-generational family
              gatherings.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED VISUAL SHOWCASE */}
      <section className="py-24 bg-[#F5EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div
              onClick={() => setSelectedLightboxItem(galleryItems[4])}
              className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-[#E2D6C3] cursor-pointer shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <img
                src={primaryImages.celebrationBabyShower}
                alt="Baby Bloom Floral Baby Shower Celebration"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-6 bg-white border-t border-[#E2D6C3] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-xl font-bold text-[#1A1815]">
                    Baby Bloom — Floral Shower Celebration
                  </h4>
                  <p className="text-xs text-stone-600">
                    Grand ballroom floral arch, pastel balloons, and heartfelt laughter.
                  </p>
                </div>
                <span className="text-xs font-mono text-[#B99B69] font-bold">View 4K &rarr;</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
                Candid Documentary Style
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1815] leading-tight">
                We capture the laughter, not just the posed handshakes.
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Family events move quickly. Our photographers blend into the background so your guests
                feel natural, relaxed, and genuinely joyous.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-700 pt-2">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B99B69]" />
                  <span>Prompt 5-Day Digital Delivery for Fast Social Sharing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B99B69]" />
                  <span>Cinematic High-Definition Video Highlights &amp; Instagram Reels</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B99B69]" />
                  <span>Full Table Decor, Dessert &amp; Blessing Coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PACKAGES & COMPARISON */}
      <section id="packages" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
            Celebration Investments
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1815]">
            Baby Shower &amp; Celebration Packages
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Compare Intimate and Grand Celebration packages with clear inclusions and demo pricing.
          </p>
        </div>

        <PackageComparison initialCategory="celebrations" />
      </section>

      {/* Lightbox */}
      <Lightbox
        item={selectedLightboxItem}
        allItems={celebrationGallery}
        onClose={() => setSelectedLightboxItem(null)}
        onSelect={(item) => setSelectedLightboxItem(item)}
      />
    </div>
  );
};
