import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Camera,
  Heart,
  Film,
  CheckCircle2,
  ArrowRight,
  Calendar,
  MessageCircle,
  Phone,
  Layers,
  MapPin,
} from 'lucide-react';
import { STUDIO_CONFIG, GalleryItem } from '../data/studioConfig';
import { useStudioMedia } from '../context/MediaContext';
import { Lightbox } from '../components/Lightbox';
import { PackageComparison } from '../components/PackageComparison';
import { VideoModal } from '../components/VideoModal';

export const WeddingsPage: React.FC = () => {
  const { primaryImages, galleryItems } = useStudioMedia();
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const weddingGallery = galleryItems.filter(
    (item) => item.category === 'wedding' || item.category === 'cinematography'
  );

  return (
    <div className="bg-[#FAF7F2] text-[#1A1815] pt-28 pb-20 transition-colors">
      {/* 1. HERO HEADER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2D6C3] bg-gradient-to-b from-[#F2ECE1] via-[#FAF7F2] to-[#FAF7F2]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
            Sacred Rituals &amp; Royal Celebrations
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#1A1815] tracking-tight leading-tight">
            Wedding Photography &amp; Cinematography
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-700 max-w-2xl mx-auto font-sans leading-relaxed">
            Honoring traditions, capturing genuine emotions, and weaving cinematic love stories.
            From the intimate Mehendi and Sangeet to the grand Baraat, sacred Saat Phere, and gala
            reception.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#packages"
              className="px-7 py-3 text-xs sm:text-sm font-bold text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              Compare Wedding Packages
            </a>
            <Link
              to="/contact?cat=wedding"
              className="px-7 py-3 text-xs sm:text-sm font-bold text-[#1A1815] bg-white border border-[#D9C5A5] hover:bg-stone-50 rounded-full transition-all shadow-xs hover:scale-105 active:scale-95"
            >
              Inquire Wedding Availability
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WEDDING DISCIPLINES EDITORIAL GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
            The Full Spectrum of Coverage
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1815]">
            Every Sacred Moment Captured In Perfection
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Couple Portraits */}
          <div className="p-8 rounded-3xl bg-white border border-[#E2D6C3] space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1A1815]">Romantic Couple Portraits</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Quiet, intimate editorial portraits guided with gentle posing direction so you look natural,
              regal, and completely at ease in your traditional attire.
            </p>
          </div>

          {/* Candid Emotion */}
          <div className="p-8 rounded-3xl bg-white border border-[#E2D6C3] space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1A1815]">Unfiltered Candid Joy</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Documentary photography that catches the unscripted tears during the Kanyadaan, the
              bursts of laughter among bridesmaids, and heartfelt elders&apos; blessings.
            </p>
          </div>

          {/* Traditional Rituals */}
          <div className="p-8 rounded-3xl bg-white border border-[#E2D6C3] space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1A1815]">Sacred Vedic Rituals</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Deep respect for cultural practices: Vermilion (Sindoor), Mangalsutra ceremony, fire rituals,
              and garland exchanges documented without intruding on the sanctity.
            </p>
          </div>

          {/* Drone Aerials */}
          <div className="p-8 rounded-3xl bg-white border border-[#E2D6C3] space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
              <Film className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1A1815]">4K Drone Aerials</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Sweeping cinematic aerial perspectives of grand Baraat processions, outdoor mandaps,
              and illuminated heritage venues by our licensed drone cinematographers.
            </p>
          </div>

          {/* Wedding Details */}
          <div className="p-8 rounded-3xl bg-white border border-[#E2D6C3] space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1A1815]">Fine Details &amp; Jewelry</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Macro detail captures of intricate gold jewelry, bridal mehndi patterns, embroidered lehenga
              fabrics, and custom floral mandap styling.
            </p>
          </div>

          {/* Custom Velvet Albums */}
          <div className="p-8 rounded-3xl bg-white border border-[#E2D6C3] space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1A1815]">Archival Canvas &amp; Albums</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              In-house flush-mount photo books and gallery canvas frames produced directly through{' '}
              <strong className="text-[#1A1815]">BABA CANVAS &amp; FRAMES</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WEDDING GALLERY IMMERSION (LIGHT) */}
      <section className="py-24 bg-[#F5EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
                Visual Retrospective
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1815]">
                Featured Wedding Stories
              </h2>
            </div>
            <span className="text-xs text-stone-500 font-mono">Click any image to view in 4K resolution</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              onClick={() => setSelectedLightboxItem(galleryItems[0])}
              className="group relative rounded-3xl overflow-hidden border border-[#E2D6C3] cursor-pointer aspect-[16/10] shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={primaryImages.heroWedding}
                alt="Palace Sunset Wedding"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-mono uppercase text-[#D9C5A5]">Ceremony</span>
                <h4 className="font-serif text-2xl font-bold">
                  Sunset Vows by the Water
                </h4>
                <p className="text-xs text-stone-200">
                  Golden hour backlight, traditional crimson attire, and majestic mountain vistas.
                </p>
              </div>
            </div>

            <div
              onClick={() => setSelectedLightboxItem(galleryItems[1])}
              className="group relative rounded-3xl overflow-hidden border border-[#E2D6C3] cursor-pointer aspect-[16/10] shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={primaryImages.weddingReception}
                alt="Floral Reception First Dance"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-mono uppercase text-[#D9C5A5]">Reception</span>
                <h4 className="font-serif text-2xl font-bold">
                  Candlelight &amp; Suspended Florals
                </h4>
                <p className="text-xs text-stone-200">
                  Intimate whispered moments under glowing candlelight arches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEDICATED WEDDING PACKAGES & COMPARISON */}
      <section id="packages" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
            Transparent Wedding Investment
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1815]">
            Wedding Photography Packages
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Compare our Essential, Premium, and Signature Royal Wedding packages side by side.
          </p>
        </div>

        <PackageComparison initialCategory="wedding" />
      </section>

      {/* Lightbox */}
      <Lightbox
        item={selectedLightboxItem}
        allItems={weddingGallery}
        onClose={() => setSelectedLightboxItem(null)}
        onSelect={(item) => setSelectedLightboxItem(item)}
      />

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        title="Royal Wedding 4K Master Film"
        category="Cinematography"
        posterUrl={primaryImages.heroWedding}
      />
    </div>
  );
};
