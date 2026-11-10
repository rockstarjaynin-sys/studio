import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  Compass,
  Mountain,
  Camera,
  Film,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { STUDIO_CONFIG, GalleryItem } from '../data/studioConfig';
import { useStudioMedia } from '../context/MediaContext';
import { Lightbox } from '../components/Lightbox';
import { PackageComparison } from '../components/PackageComparison';

export const OutdoorPage: React.FC = () => {
  const { primaryImages, galleryItems } = useStudioMedia();
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);

  const outdoorGallery = galleryItems.filter((item) => item.category === 'outdoor');

  return (
    <div className="bg-[#FAF7F2] text-[#1A1815] pt-28 pb-20 transition-colors">
      {/* 1. HERO HEADER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2D6C3] bg-gradient-to-b from-[#F2ECE1] via-[#FAF7F2] to-[#FAF7F2]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#D9C5A5] text-[#B99B69] text-xs font-mono uppercase shadow-xs">
            <Sun className="w-3.5 h-3.5" />
            <span className="font-bold text-[#1A1815]">Golden Hour &amp; Natural Light</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#1A1815] tracking-tight leading-tight">
            Outdoor Photography &amp; Scenic Expeditions
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-700 max-w-2xl mx-auto font-sans leading-relaxed">
            Dramatic landscapes, windswept meadows, mountain horizons, and riversides across Far-Western
            Nepal. Cinematic pre-wedding love stories told under the golden warmth of the sun.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#packages"
              className="px-7 py-3 text-xs sm:text-sm font-bold text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              View Outdoor Packages
            </a>
            <Link
              to="/contact?cat=outdoor"
              className="px-7 py-3 text-xs sm:text-sm font-bold text-[#1A1815] bg-white border border-[#D9C5A5] hover:bg-stone-50 rounded-full transition-all shadow-xs hover:scale-105 active:scale-95"
            >
              Scout A Location With Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. IMMERSIVE PANORAMA */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          onClick={() => setSelectedLightboxItem(galleryItems[3])}
          className="group relative rounded-3xl overflow-hidden border border-[#E2D6C3] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              src={primaryImages.outdoorSunset}
              alt="Outdoor Sunset Expedition"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#D9C5A5] font-bold">
                Far-Western Scenic Valley
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold">
                Golden Valley Sunset Expedition
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 max-w-lg">
                Pristine natural illumination, golden grass, and distant Himalayan ridges.
              </p>
            </div>
            <span className="text-xs font-mono text-[#1A1815] bg-white/90 px-4 py-2 rounded-full font-bold shadow-md hover:scale-105 transition-transform">
              Click to view 4K Lightbox &rarr;
            </span>
          </div>
        </div>
      </section>

      {/* 3. OUTDOOR LOCATION & LIGHTING GUIDE */}
      <section className="py-24 bg-[#F5EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
              Our Creative Approach
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1815]">
              The Science of Golden Hour Light
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E2D6C3] space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1815]">Pre-Sunset Timing</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We plan sessions precisely during the final 90 minutes of daylight, when the low sun
                casts long romantic shadows and warm golden rim light on hair and garments.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E2D6C3] space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1815]">Scenic Location Scouting</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                From Suklaphanta border grasslands to tranquil riverbanks and secluded pine groves, we
                know the most evocative, uncrowded backdrops in the region.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E2D6C3] space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1815]">Dynamic Movement &amp; Drones</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                No stiff standing poses. We guide couples into walking, laughing, and twirling while our
                4K drone sweeps overhead to capture the vast scale of nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PACKAGES & COMPARISON */}
      <section id="packages" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
            Outdoor Session Investment
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1815]">
            Outdoor Photoshoot Packages
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Compare Golden Hour and Cinematic Adventure packages side by side.
          </p>
        </div>

        <PackageComparison initialCategory="outdoor" />
      </section>

      {/* Lightbox */}
      <Lightbox
        item={selectedLightboxItem}
        allItems={outdoorGallery}
        onClose={() => setSelectedLightboxItem(null)}
        onSelect={(item) => setSelectedLightboxItem(item)}
      />
    </div>
  );
};
