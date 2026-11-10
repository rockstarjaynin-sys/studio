import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Film,
  Play,
  Volume2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Tv,
  Camera,
  Share2,
} from 'lucide-react';
import { STUDIO_CONFIG, GALLERY_ITEMS } from '../data/studioConfig';
import { useStudioMedia } from '../context/MediaContext';
import { VideoModal } from '../components/VideoModal';
import { PackageComparison } from '../components/PackageComparison';

export const CinematographyPage: React.FC = () => {
  const { primaryImages } = useStudioMedia();
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState({
    title: 'The Eternal Vow — 4K Royal Wedding Film',
    category: 'Wedding Film',
    posterUrl: primaryImages.heroWedding,
  });

  const handlePlayVideo = (title: string, category: string, posterUrl: string) => {
    setActiveVideo({ title, category, posterUrl });
    setVideoModalOpen(true);
  };

  const films = [
    {
      id: 'film-1',
      title: 'The Eternal Vow — Sunset Palace Wedding',
      category: '4K Wedding Feature',
      duration: '4:18',
      description:
        'A royal celebration captured across two days. Features crystal clear live ceremony audio, licensed soundtrack, slow-motion flower showers, and sweeping drone vistas.',
      posterUrl: primaryImages.heroWedding,
      gear: 'Sony FX3 Cinema Cameras · 24fps DCI 4K · DaVinci Graded',
    },
    {
      id: 'film-2',
      title: 'Golden Valley Whispers — Pre-Wedding Love Story',
      category: 'Cinematic Teaser',
      duration: '2:45',
      description:
        'An emotional expedition across the golden valley meadows with mountain sunsets, running through grass, and aerial tracking shots.',
      posterUrl: primaryImages.outdoorSunset,
      gear: 'DJI Mavic 3 Cine · ProRes 422 · Cinema Primes',
    },
    {
      id: 'film-3',
      title: 'A New Dawn — Fine Art Motherhood Reel',
      category: 'Maternity Film',
      duration: '1:30',
      description:
        'Peaceful motion portraits of an expectant mother in flowing ivory silk, paired with poetic instrumental piano and warm studio glow.',
      posterUrl: primaryImages.maternityIvory,
      gear: 'Canon R5 Cinema Raw · 85mm f/1.4 · 120fps Slow-Mo',
    },
    {
      id: 'film-4',
      title: 'Baby Bloom — Joyous Family Celebration',
      category: 'Event Reel',
      duration: '2:15',
      description:
        'Vibrant baby shower highlights filled with authentic laughter, cake cutting moments, speech reactions, and cheerful background music.',
      posterUrl: primaryImages.celebrationBabyShower,
      gear: 'Sony A7S III · 35mm Prime · Gimbal Stabilized',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#1A1815] pt-28 pb-20 transition-colors">
      {/* 1. HERO HEADER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2D6C3] bg-gradient-to-b from-[#F2ECE1] via-[#FAF7F2] to-[#FAF7F2]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#D9C5A5] text-[#B99B69] text-xs font-mono uppercase shadow-xs">
            <Film className="w-3.5 h-3.5" />
            <span className="font-bold text-[#1A1815]">Cinema-Grade Visual Storytelling</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#1A1815] tracking-tight leading-tight">
            Cinematography &amp; Video Production
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-700 max-w-2xl mx-auto font-sans leading-relaxed">
            We don&apos;t just record what happened—we create evocative cinema. High-definition 4K
            films, master audio recording of vows and speeches, licensed music, and professional color
            grading in DaVinci Resolve.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#packages"
              className="px-7 py-3 text-xs sm:text-sm font-bold text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              Compare Cinema Packages
            </a>
            <button
              onClick={() =>
                handlePlayVideo(
                  films[0].title,
                  films[0].category,
                  films[0].posterUrl
                )
              }
              className="px-7 py-3 text-xs sm:text-sm font-bold text-[#1A1815] bg-white border border-[#D9C5A5] hover:bg-stone-50 rounded-full transition-all shadow-xs hover:scale-105 active:scale-95 inline-flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current text-[#B99B69]" />
              <span>Watch Studio Showreel</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. PLAYABLE CINEMA REEL SHOWCASE */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
            Recent Master Films
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1815]">
            Watch Our Films In Fullscreen 4K
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-mono">
            Click any film below to launch the theater video modal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {films.map((film) => (
            <div
              key={film.id}
              onClick={() => handlePlayVideo(film.title, film.category, film.posterUrl)}
              className="group relative rounded-3xl overflow-hidden border border-[#E2D6C3] bg-white cursor-pointer hover:border-[#B99B69] transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1.5"
            >
              {/* Poster Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={film.posterUrl}
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#B99B69] to-[#E5D4B8] text-[#1A1815] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 text-[10px] font-mono uppercase bg-black/75 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                  {film.duration} · 4K
                </div>

                <div className="absolute bottom-4 left-4 text-xs font-mono text-[#D9C5A5] font-bold">
                  {film.category}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-7 space-y-3">
                <h3 className="font-serif text-2xl font-bold text-[#1A1815] group-hover:text-[#B99B69] transition-colors">
                  {film.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  {film.description}
                </p>
                <div className="pt-2 border-t border-[#EAE1D3] text-[11px] font-mono text-stone-500">
                  {film.gear}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CINEMATOGRAPHY SPECS & ADVANTAGES */}
      <section className="py-24 bg-[#F5EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E2D6C3] space-y-3 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
                <Tv className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#1A1815]">4K 10-Bit Color Science</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Shot in log profiles and professionally color graded for natural skin tones, deep blacks,
                and luminous golden highlights.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E2D6C3] space-y-3 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
                <Volume2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#1A1815]">Dedicated Audio Master</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Wireless lavalier microphones placed on bride, groom, and officiant so heartfelt wedding
                vows and speeches sound crystal clear.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E2D6C3] space-y-3 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FAF7F2] to-[#F2E8D7] border border-[#D9C5A5]/60 flex items-center justify-center text-[#B99B69]">
                <Share2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#1A1815]">Vertical Reels Optimized</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                In addition to widescreen cinema films, we deliver 9:16 vertical 4K reels formatted
                specifically for trending Instagram and TikTok posts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CINEMATOGRAPHY PACKAGES */}
      <section id="packages" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
            Film Production Investment
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1815]">
            Cinematography Packages
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Compare our Highlight Film and Master Production &amp; Drone packages.
          </p>
        </div>

        <PackageComparison initialCategory="cinematography" />
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        title={activeVideo.title}
        category={activeVideo.category}
        posterUrl={activeVideo.posterUrl}
      />
    </div>
  );
};
