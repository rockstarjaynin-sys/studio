import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  Heart,
  Sparkles,
  Camera,
  Film,
  MapPin,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Phone,
  ChevronDown,
  Compass,
  Star,
  Layers,
  Award,
} from 'lucide-react';
import {
  STUDIO_CONFIG,
  TESTIMONIALS,
  STUDIO_PACKAGES,
  GalleryItem,
} from '../data/studioConfig';
import { useStudioMedia } from '../context/MediaContext';
import { Lightbox } from '../components/Lightbox';
import { VideoModal } from '../components/VideoModal';
import { PackageComparison } from '../components/PackageComparison';

export const HomePage: React.FC = () => {
  const { primaryImages, galleryItems } = useStudioMedia();
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({
    title: 'The Eternal Vow — 4K Royal Wedding Film',
    category: 'Wedding Cinematography',
    posterUrl: primaryImages.heroWedding,
  });

  const handleOpenVideo = (title: string, category: string, posterUrl: string) => {
    setCurrentVideo({ title, category, posterUrl });
    setVideoModalOpen(true);
  };

  return (
    <div className="bg-[#FAF7F2] text-[#1A1815] overflow-hidden transition-colors">
      {/* 1. CINEMATIC LIGHT LUXURY HERO */}
      <section className="relative min-h-[94vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Hero Image with soft, bright luxury scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={primaryImages.heroWedding}
            alt="BABA PRODUCTION STUDIO — Luxury Wedding Photography"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Radiant pearl-to-champagne luxury gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/65 to-[#FAF7F2]/40" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#FAF7F2]/40 to-[#FAF7F2]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#D9C5A5]/80 text-[#B99B69] text-xs font-mono tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 fill-[#B99B69]" />
            <span className="font-semibold text-stone-800">Luxury Fine Art Photography &amp; Film Studio</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1A1815] leading-[1.08] max-w-4xl mx-auto text-balance">
            Turning Your Beautiful Moments Into{' '}
            <span className="italic font-normal text-[#B99B69] bg-gradient-to-r from-[#B99B69] to-[#8F7449] bg-clip-text text-transparent">
              Timeless Memories.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-700 max-w-2xl mx-auto font-sans leading-relaxed">
            From intimate royal weddings and serene motherhood portraits to cinematic films and
            sweeping outdoor landscapes in Nepal.
          </p>

          {/* Action CTAs with Interactive Pill Styling */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/portfolio"
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold text-[#1A1815] bg-white hover:bg-stone-50 border border-[#D9C5A5] rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 text-[#B99B69]" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-9 py-3.5 text-xs sm:text-sm font-bold text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] via-[#E2D2B8] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all duration-200 shadow-[0_8px_25px_rgba(185,155,105,0.3)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Session</span>
            </Link>
          </div>

          {/* Reel Play Trigger */}
          <div className="pt-4">
            <button
              onClick={() =>
                handleOpenVideo(
                  'The Eternal Vow — 4K Royal Wedding Film',
                  'Wedding Cinematography',
                  primaryImages.heroWedding
                )
              }
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E0D5C3] text-stone-800 hover:text-black hover:border-[#B99B69] hover:shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            >
              <div className="w-7 h-7 rounded-full bg-[#B99B69] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
              </div>
              <span className="font-mono text-xs tracking-wider font-semibold">
                Watch 4K Cinematic Studio Showreel
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-stone-500 opacity-90 hover:opacity-100 transition-opacity">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#B99B69] font-bold">
            Scroll to Explore
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#B99B69]" />
        </div>
      </section>

      {/* 2. STUDIO INTRODUCTION & TRUST METRICS */}
      <section className="py-24 bg-[#F5EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
                Welcome to BABA PRODUCTION STUDIO
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1815] leading-tight">
                Crafting visual heirlooms that outlast generations.
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed font-sans">
                At BABA PRODUCTION STUDIO, we believe photography is not merely documenting an event;
                it is preserving the nervous excitement before the vows, the tear in a mother&apos;s eye,
                and the unscripted joy shared between two souls.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Supported by our registered framing and canvas studio,{' '}
                <strong className="text-[#1A1815] font-semibold">{STUDIO_CONFIG.mapsListingName}</strong> in
                Kanchanpur, we offer a complete experience from shutter release to master flush-mount
                albums and handcrafted wall art.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-xs font-bold text-[#1A1815] border border-[#D9C5A5] hover:bg-stone-50 shadow-xs hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Read Our Philosophy &amp; Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B99B69]" />
                </Link>
              </div>
            </div>

            {/* Split Visual & 3 Key Value Anchors */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-7 rounded-3xl bg-white border border-[#E8DEC8] space-y-3 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
                  <Camera className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#1A1815]">Fine Art Master Lenses</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Dual full-frame cinema &amp; prime camera setups capturing rich color depth and natural
                  skin tones.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white border border-[#E8DEC8] space-y-3 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
                  <Film className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#1A1815]">4K Drone &amp; Cinema</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Sweeping aerial views and gimbal-stabilized cinematic highlight films with authentic
                  audio recording.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white border border-[#E8DEC8] space-y-3 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#1A1815]">Canvas &amp; Framing</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  In-house archival printing and custom framing through BABA CANVAS &amp; FRAMES.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED WEDDING PHOTOGRAPHY (LIGHT EDITORIAL SHOWCASE) */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
                Royal Celebrations
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1815] mt-1">
                Wedding Photography &amp; Rituals
              </h2>
            </div>
            <Link
              to="/weddings-cinema-outdoor"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-xs font-bold text-[#1A1815] border border-[#D9C5A5] hover:bg-stone-50 shadow-xs hover:scale-105 active:scale-95 transition-all"
            >
              <span>Explore Wedding Gallery &amp; Packages</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B99B69]" />
            </Link>
          </div>

          {/* Large Editorial Asymmetric Layout with Light Styling */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Main Hero Card */}
            <div
              onClick={() => setSelectedLightboxItem(galleryItems[0])}
              className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-[#E2D6C3] cursor-pointer min-h-[440px] lg:min-h-[540px] shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={primaryImages.heroWedding}
                alt="Royal Wedding Couple"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D9C5A5]">
                  Featured Heritage Ceremony
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  The Golden Vows — Sunset Palace Wedding
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 line-clamp-2">
                  Traditional handcrafted crimson and gold attire against golden mountain light. Click to
                  view high resolution.
                </p>
              </div>
            </div>

            {/* Secondary Wedding Highlights */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div
                onClick={() => setSelectedLightboxItem(galleryItems[1])}
                className="group relative rounded-3xl overflow-hidden border border-[#E2D6C3] cursor-pointer flex-1 min-h-[260px] shadow-md hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={primaryImages.weddingReception}
                  alt="Candlelight Reception"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 space-y-1 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D9C5A5]">
                    Reception &amp; Decor
                  </span>
                  <h4 className="font-serif text-xl font-bold">
                    Candlelight &amp; Floral Canopy First Dance
                  </h4>
                </div>
              </div>

              {/* Inclusions summary strip */}
              <div className="p-7 rounded-3xl bg-white border border-[#E2D6C3] space-y-4 shadow-sm">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#B99B69] font-bold">
                  What&apos;s Included In Our Wedding Coverage:
                </h4>
                <ul className="grid grid-cols-2 gap-2.5 text-xs text-stone-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B99B69] shrink-0" />
                    <span>Traditional Rituals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B99B69] shrink-0" />
                    <span>Couple Portraits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B99B69] shrink-0" />
                    <span>4K Aerial Drone</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B99B69] shrink-0" />
                    <span>Luxury Velvet Album</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Link
                    to="/weddings-cinema-outdoor#packages"
                    className="w-full py-3 text-xs font-bold text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all text-center block shadow-sm hover:scale-105 active:scale-95"
                  >
                    View Wedding Packages &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MATERNITY & MOTHERHOOD (WARM IVORY RADIANCE) */}
      <section className="py-24 bg-[#F5EFE6] text-[#1A1815] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
                Maternity &amp; Newborn Grace
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1815] leading-tight">
                Honoring the quiet beauty and anticipation of motherhood.
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Pregnancy is one of the most transformative chapters of your life. Our serene studio
                sessions are crafted with warm natural window light, gentle pacing, and exquisite flowing
                silk gowns.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/70 border border-[#E0D5C3]">
                  <div className="w-7 h-7 rounded-full bg-[#D9C5A5]/50 text-[#B99B69] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A1815]">Curated Designer Gowns</h4>
                    <p className="text-xs text-stone-600">
                      Access to flowing maternity silks, delicate lace robes, and gentle draping styling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/70 border border-[#E0D5C3]">
                  <div className="w-7 h-7 rounded-full bg-[#D9C5A5]/50 text-[#B99B69] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A1815]">Makeup &amp; Hair Assistance</h4>
                    <p className="text-xs text-stone-600">
                      Collaborative makeup coordination designed specifically for soft studio illumination.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/70 border border-[#E0D5C3]">
                  <div className="w-7 h-7 rounded-full bg-[#D9C5A5]/50 text-[#B99B69] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A1815]">Bump-to-Baby Heirloom Continuity</h4>
                    <p className="text-xs text-stone-600">
                      Seamless session pairing with safe, certified newborn photography within baby&apos;s
                      first weeks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/maternity-celebrations"
                  className="px-7 py-3 text-xs sm:text-sm font-bold text-[#1A1815] bg-[#D9C5A5] hover:bg-[#cbb284] rounded-full transition-all shadow-sm hover:scale-105 active:scale-95"
                >
                  Explore Maternity Experience
                </Link>
                <Link
                  to="/contact?cat=maternity"
                  className="text-xs sm:text-sm font-semibold text-stone-800 hover:text-[#B99B69] hover:underline"
                >
                  Check Available Dates &rarr;
                </Link>
              </div>
            </div>

            {/* Maternity Featured Visual Card */}
            <div
              onClick={() => setSelectedLightboxItem(galleryItems[2])}
              className="lg:col-span-6 group relative rounded-3xl overflow-hidden shadow-xl border border-[#D9C5A5] cursor-pointer bg-white hover:-translate-y-1 transition-all duration-500"
            >
              <img
                src={primaryImages.maternityIvory}
                alt="Fine Art Maternity Portrait"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-6 bg-white border-t border-[#D9C5A5]/40 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1A1815]">
                    Serenade in Ivory — Fine Art Maternity
                  </h4>
                  <p className="text-xs text-stone-600 font-sans">
                    Morning window light in our Kanchanpur studio
                  </p>
                </div>
                <span className="text-xs font-mono text-[#B99B69] font-bold">View Portrait &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUTDOOR & PANORAMIC CINEMATIC PORTRAITURE */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
              Golden Hour Expeditions
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1815]">
              Outdoor Couple &amp; Scenic Landscapes
            </h2>
            <p className="text-sm text-stone-600">
              Untamed natural light, golden grassy meadows, riverbeds, and sunset mountain horizons.
            </p>
          </div>

          <div
            onClick={() => setSelectedLightboxItem(galleryItems[3])}
            className="group relative rounded-3xl overflow-hidden border border-[#E2D6C3] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
              <img
                src={primaryImages.outdoorSunset}
                alt="Outdoor Pre-Wedding Sunset Session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D9C5A5]">
                  Far-Western Nepal Scenic Landscapes
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold">
                  Golden Valley Sunset Expedition
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 max-w-xl">
                  Natural, candid romance captured in picturesque open valleys with mountain backdrops.
                </p>
              </div>
              <Link
                to="/weddings-cinema-outdoor"
                onClick={(e) => e.stopPropagation()}
                className="px-7 py-3 text-xs sm:text-sm font-bold text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-md hover:scale-105 active:scale-95 whitespace-nowrap self-start sm:self-auto"
              >
                View Outdoor Sessions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BABY SHOWER & CELEBRATIONS PREVIEW */}
      <section className="py-24 bg-[#F5EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div
              onClick={() => setSelectedLightboxItem(galleryItems[4])}
              className="lg:col-span-6 group relative rounded-3xl overflow-hidden border border-[#E2D6C3] cursor-pointer shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <img
                src={primaryImages.celebrationBabyShower}
                alt="Baby Shower Celebration"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h4 className="font-serif text-xl font-bold">
                  Baby Bloom — Floral Shower Celebration
                </h4>
                <p className="text-xs text-stone-200">
                  Laughter, pastel blooms, and heartfelt family blessings.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
                Joyful Milestones
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1815] leading-tight">
                Baby Showers, Gender Reveals &amp; Family Celebrations
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed font-sans">
                Whether celebrating a first birthday, rice-feeding ceremony (annaprashan), or intimate baby
                shower, we capture the candid embraces, laughter, and delicate table decorations.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <Link
                  to="/maternity-celebrations"
                  className="px-7 py-3 text-xs sm:text-sm font-bold text-[#1A1815] bg-[#D9C5A5] hover:bg-[#cbb284] rounded-full transition-all shadow-sm hover:scale-105 active:scale-95"
                >
                  Explore Celebration Galleries &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CINEMATOGRAPHY & VIDEO PRODUCTION REEL */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
                Motion &amp; Sound
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1815] mt-1">
                4K Cinematography &amp; Drone Reels
              </h2>
            </div>
            <Link
              to="/weddings-cinema-outdoor"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-xs font-bold text-[#1A1815] border border-[#D9C5A5] hover:bg-stone-50 shadow-xs hover:scale-105 active:scale-95 transition-all"
            >
              <span>Explore All Films &amp; Videos</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B99B69]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Film Card 1 */}
            <div
              onClick={() =>
                handleOpenVideo(
                  'The Eternal Vow — 4K Royal Wedding Film',
                  'Wedding Film',
                  primaryImages.heroWedding
                )
              }
              className="group relative rounded-3xl overflow-hidden border border-[#E2D6C3] cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-video w-full overflow-hidden relative bg-black">
                <img
                  src={primaryImages.heroWedding}
                  alt="Wedding Film"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#B99B69] to-[#E5D4B8] text-[#1A1815] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-[10px] font-mono uppercase bg-black/75 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                  4:18 · 4K Film
                </div>
              </div>
              <div className="p-7 space-y-2">
                <h4 className="font-serif text-2xl font-bold text-[#1A1815] group-hover:text-[#B99B69] transition-colors">
                  The Eternal Vow — Palace Wedding Film
                </h4>
                <p className="text-xs sm:text-sm text-stone-600">
                  Drone aerials, speech audio, slow motion rituals, and emotional vow exchanges.
                </p>
              </div>
            </div>

            {/* Film Card 2 */}
            <div
              onClick={() =>
                handleOpenVideo(
                  'Sunlit Romance — Outdoor Highlight Reel',
                  'Cinematic Teaser',
                  primaryImages.outdoorSunset
                )
              }
              className="group relative rounded-3xl overflow-hidden border border-[#E2D6C3] cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-video w-full overflow-hidden relative bg-black">
                <img
                  src={primaryImages.outdoorSunset}
                  alt="Outdoor Highlight Reel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#B99B69] to-[#E5D4B8] text-[#1A1815] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-[10px] font-mono uppercase bg-black/75 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                  2:45 · 4K Film
                </div>
              </div>
              <div className="p-7 space-y-2">
                <h4 className="font-serif text-2xl font-bold text-[#1A1815] group-hover:text-[#B99B69] transition-colors">
                  Sunlit Romance — Outdoor Highlight Reel
                </h4>
                <p className="text-xs sm:text-sm text-stone-600">
                  Golden hour backlight, couple movement, and scenic drone sweep over the valley.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE PACKAGES & COMPARISON SECTION (LIGHT AESTHETIC) */}
      <section className="py-24 bg-[#F5EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
              Transparent Pricing &amp; Comparison
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1815]">
              Studio Photography Packages
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Compare package inclusions side by side. All prices are provisional demonstration quotes;
              personalized contracts are provided upon direct consultation.
            </p>
          </div>

          <PackageComparison initialCategory="wedding" />
        </div>
      </section>

      {/* 9. CLIENT TESTIMONIALS & REVIEWS */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
              Kind Words From Families
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1815]">
              Loved by Couples &amp; Families
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-3xl bg-white border border-[#E2D6C3] flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#B99B69]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B99B69]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic font-serif">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E8DEC8]">
                  <h4 className="text-sm font-bold text-[#1A1815]">{t.client}</h4>
                  <span className="text-xs text-[#B99B69] font-semibold block">{t.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SOCIAL MEDIA & GOOGLE MAPS SHOWCASE */}
      <section className="py-20 bg-[#F5EFE6] border-t border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Facebook */}
            <a
              href={STUDIO_CONFIG.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="p-7 rounded-3xl bg-white border border-[#E2D6C3] hover:border-[#B99B69] hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#B99B69] font-bold uppercase">Facebook Official</span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#1A1815] group-hover:translate-x-1 transition-all" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#1A1815] mb-1">@babaproductionstudio</h4>
              <p className="text-xs text-stone-600">
                Follow our latest wedding sneak peeks, client reviews, and ceremony albums.
              </p>
            </a>

            {/* YouTube */}
            <a
              href={STUDIO_CONFIG.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="p-7 rounded-3xl bg-white border border-[#E2D6C3] hover:border-red-500 hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-red-600 font-bold uppercase">YouTube Channel</span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#1A1815] group-hover:translate-x-1 transition-all" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#1A1815] mb-1">
                @babaproductionstudio4196
              </h4>
              <p className="text-xs text-stone-600">
                Stream 4K wedding films, cinematic teasers, and drone aerial showcases.
              </p>
            </a>

            {/* Google Maps / Studio Location */}
            <a
              href={STUDIO_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="p-7 rounded-3xl bg-white border border-[#E2D6C3] hover:border-[#B99B69] hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#B99B69] font-bold uppercase">Visit Studio</span>
                <MapPin className="w-4 h-4 text-[#B99B69]" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#1A1815] mb-1">
                {STUDIO_CONFIG.mapsListingName}
              </h4>
              <p className="text-xs text-stone-600">
                Kanchanpur / Mahendranagar. View our physical studio and custom framing gallery on Google Maps.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* 11. FINAL LUXURY BOOKING CTA (RADIANT CHAMPAGNE BANNER) */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 sm:p-16 rounded-[2.5rem] bg-gradient-to-br from-[#F5EFE4] via-[#EFE6D5] to-[#E6D7BE] border border-[#D9C5A5] text-center space-y-6 shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
              Let&apos;s Create Something Timeless
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#1A1815] leading-tight">
              Ready to secure your wedding or photoshoot date?
            </h2>
            <p className="text-sm sm:text-base text-stone-700 max-w-xl mx-auto">
              Dates for prime wedding seasons and weekend sessions book fast. Connect directly with our
              studio directors today.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={STUDIO_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-600 rounded-full transition-all flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Direct Booking</span>
              </a>

              <a
                href={STUDIO_CONFIG.phoneTel}
                className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold text-[#1A1815] bg-white border border-[#D9C5A5] hover:bg-stone-50 rounded-full transition-all flex items-center justify-center gap-2 shadow-xs hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#B99B69]" />
                <span>Call: {STUDIO_CONFIG.phoneDisplay}</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-9 py-3.5 text-xs sm:text-sm font-bold text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] via-[#E2D2B8] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-md hover:scale-105 active:scale-95"
              >
                Book Your Date Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedLightboxItem}
        allItems={galleryItems}
        onClose={() => setSelectedLightboxItem(null)}
        onSelect={(item) => setSelectedLightboxItem(item)}
      />

      {/* Video Modal */}
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
