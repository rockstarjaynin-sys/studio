import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Sparkles,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Phone,
  ShieldAlert,
  ArrowRight,
  Clock,
  Layers,
  Smile,
} from 'lucide-react';
import { STUDIO_CONFIG, GalleryItem } from '../data/studioConfig';
import { useStudioMedia } from '../context/MediaContext';
import { Lightbox } from '../components/Lightbox';
import { PackageComparison } from '../components/PackageComparison';

export const MaternityPage: React.FC = () => {
  const { primaryImages, galleryItems } = useStudioMedia();
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);

  const maternityGallery = galleryItems.filter(
    (item) => item.category === 'maternity' || item.category === 'newborn'
  );

  return (
    <div className="bg-[#FAF7F2] text-[#1A1815] pt-28 pb-24 transition-colors">
      {/* 1. PEACEFUL WARM IVORY HERO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2D6C3] bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6] to-[#FAF7F2]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
            Fine Art Motherhood &amp; Baby
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1815] tracking-tight leading-tight">
            Maternity &amp; Newborn Photography
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 max-w-2xl mx-auto font-sans leading-relaxed">
            A serene sanctuary where every quiet curve, fluttering heartbeat, and tender embrace
            is preserved forever with soft natural light, luxury flowing gowns, and gentle pacing.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#packages"
              className="px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] via-[#E2D2B8] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
            >
              View Maternity Packages
            </a>
            <Link
              to="/contact?cat=maternity"
              className="px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1815] bg-white border border-[#E2D6C3] hover:bg-stone-50 rounded-full transition-all shadow-xs hover:scale-105 active:scale-95"
            >
              Enquire Session Availability
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE MOTHERHOOD EXPERIENCE & PILLARS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div
            onClick={() => setSelectedLightboxItem(galleryItems[2])}
            className="lg:col-span-6 group relative rounded-2xl overflow-hidden shadow-2xl border border-[#D9C5A5]/60 cursor-pointer bg-white"
          >
            <img
              src={primaryImages.maternityIvory}
              alt="Maternity Portrait in Studio"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="p-6 bg-white border-t border-[#D9C5A5]/30">
              <span className="text-[10px] font-mono uppercase text-[#B99B69] font-bold">
                Kanchanpur Studio Session
              </span>
              <h3 className="font-serif text-xl font-bold text-[#171717] mt-0.5">
                Serenade in Ivory — Fine Art Maternity
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Soft diffused natural morning window light and gentle silk drape.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
              Comfort, Safety &amp; Dignity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171717] leading-tight">
              Designed entirely around the comfort of expectant mothers.
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed font-sans">
              We know that pregnancy can feel tiring. That is why our sessions are unhurried, private,
              and completely paced to your comfort. There are no rush timers, loud equipment, or awkward
              expectations.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D9C5A5]/40 text-[#B99B69] flex items-center justify-center shrink-0 font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#171717]">Curated Studio Gown Wardrobe</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Choose from delicate lace robes, flowing stretch gowns, and neutral ivory silks
                    designed to flatter your bump effortlessly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D9C5A5]/40 text-[#B99B69] flex items-center justify-center shrink-0 font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#171717]">Professional Makeup &amp; Styling</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Collaborative makeup services tuned specifically for soft-diffused studio lighting
                    to highlight your radiant natural pregnancy glow.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D9C5A5]/40 text-[#B99B69] flex items-center justify-center shrink-0 font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#171717]">Partner &amp; Sibling Inclusion</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Spouses and older children are warmly welcomed to participate in emotional family
                    connection portraits at no extra charge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEWBORN HEIRLOOM HIGHLIGHT */}
      <section className="py-20 bg-white border-y border-[#D9C5A5]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
              The First Ten Days
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171717]">
              Newborn Portraits &amp; Tiny Heirlooms
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Safe, certified handling techniques with sanitized organic wraps, heated studio rooms, and
              tranquil environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-[#F7F3EC] border border-[#D9C5A5]/50 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#D9C5A5]/40 flex items-center justify-center text-[#B99B69]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#171717]">Optimal Timing</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Best photographed between days 5 and 14 when babies sleep deeply and curl naturally into
                womb-like comfort.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F7F3EC] border border-[#D9C5A5]/50 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#D9C5A5]/40 flex items-center justify-center text-[#B99B69]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#171717]">Parent &amp; Baby Bonding</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Gentle skin-to-skin and cradle portraits showcasing the immense love and tiny scale of
                your newborn in father and mother&apos;s hands.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F7F3EC] border border-[#D9C5A5]/50 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#D9C5A5]/40 flex items-center justify-center text-[#B99B69]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#171717]">Handcrafted Wall Frames</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Archival heirloom frames and linen albums custom crafted by BABA CANVAS &amp; FRAMES for
                the baby nursery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MATERNITY & NEWBORN PACKAGES & PRICING */}
      <section id="packages" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
            Transparent Session Investment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717]">
            Maternity &amp; Newborn Packages
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Compare Classic, Premium, and Heirloom bump-to-baby packages with complete inclusion tables.
          </p>
        </div>

        {/* Comparison System */}
        <div className="bg-white/90 backdrop-blur-md p-6 sm:p-10 rounded-[2.5rem] shadow-xl border border-[#E2D6C3]">
          <PackageComparison initialCategory="maternity" />
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        item={selectedLightboxItem}
        allItems={maternityGallery}
        onClose={() => setSelectedLightboxItem(null)}
        onSelect={(item) => setSelectedLightboxItem(item)}
      />
    </div>
  );
};
