import React from 'react';
import { Link } from 'react-router-dom';
import {
  Camera,
  Heart,
  Compass,
  Film,
  Award,
  Layers,
  MapPin,
  ExternalLink,
  Phone,
  MessageCircle,
  Mail,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2] text-[#1A1815] pt-28 pb-24 transition-colors">
      {/* 1. HERO BANNER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2D6C3] bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6] to-[#FAF7F2]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
            The Studio Story
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1815] tracking-tight leading-tight">
            About BABA PRODUCTION STUDIO
          </h1>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Founded on the conviction that life&apos;s most meaningful milestones deserve more than
            temporary snapshots—they deserve timeless artistic heirlooms.
          </p>
        </div>
      </section>

      {/* 2. PHILOSOPHY & STORY */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
              Our Artistic Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1815] leading-tight">
              We look for the authentic heartbeat in every frame.
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed font-sans">
              At BABA PRODUCTION STUDIO, we believe the greatest photographs happen in the quiet
              intervals between the formal poses—the trembling hand squeezing a father&apos;s palm before
              the ceremony, the shared private smile between newlyweds across a crowded banquet hall,
              and the gentle breath of a sleeping newborn.
            </p>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              Our working style is calm, unobtrusive, and deeply respectful of cultural rituals and family
              traditions. We guide you gently when direction is needed, and step back when spontaneous
              magic takes place.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/contact"
                className="px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] via-[#E2D2B8] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
              >
                Schedule A Studio Visit
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-[2.5rem] overflow-hidden border border-[#E2D6C3] shadow-xl bg-white hover:shadow-2xl transition-all duration-500">
            <img
              src={STUDIO_CONFIG.primaryImages.heroWedding}
              alt="BABA PRODUCTION STUDIO — Philosophy"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="p-6 sm:p-8 bg-white border-t border-[#EAE1D3]">
              <span className="text-xs font-mono text-[#B99B69] font-bold uppercase block mb-1">
                Kanchanpur / Nepal
              </span>
              <p className="text-xs sm:text-sm text-stone-600 font-sans italic">
                &ldquo;A photograph is a pause button on life. When we give you your gallery, you should
                not just see how you looked—you should remember exactly how you felt.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PHYSICAL HOME: BABA CANVAS & FRAMES */}
      <section className="py-20 bg-gradient-to-b from-[#F5EFE6] via-[#FAF7F2] to-[#F5EFE6] border-y border-[#E2D6C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2D6C3] text-[#B99B69] text-xs font-mono font-bold uppercase shadow-xs">
                <MapPin className="w-3.5 h-3.5" />
                <span>Our Physical Studio &amp; Framing Center</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1815]">
                BABA CANVAS &amp; FRAMES
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed font-sans">
                Our creative headquarters and framing workshop is officially listed on Google Maps as{' '}
                <strong className="text-[#1A1815] font-semibold">BABA CANVAS &amp; FRAMES</strong>, situated
                in Kanchanpur, Nepal.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Having an integrated, dedicated framing studio allows us to control the entire physical
                quality pipeline. From high-grade velvet album binding to large-scale museum-grade
                canvas stretching and framing, your memories are crafted right in our workshop.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={STUDIO_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] via-[#E2D2B8] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95 inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps / Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 p-7 sm:p-8 rounded-[2rem] bg-white border border-[#E2D6C3] shadow-lg space-y-4">
              <h4 className="font-serif text-xl font-bold text-[#1A1815]">Direct Location Information</h4>
              <div className="space-y-3 text-xs sm:text-sm text-stone-600 font-sans">
                <div>
                  <span className="text-stone-400 block font-mono text-[11px] uppercase">
                    Google Maps Listing:
                  </span>
                  <span className="font-bold text-[#1A1815]">{STUDIO_CONFIG.mapsListingName}</span>
                </div>
                <div>
                  <span className="text-stone-400 block font-mono text-[11px] uppercase">
                    Region &amp; City:
                  </span>
                  <span className="text-stone-700">Kanchanpur / Mahendranagar, Sudurpashchim Province, Nepal</span>
                </div>
                <div>
                  <span className="text-stone-400 block font-mono text-[11px] uppercase">
                    Direct Contact Phone:
                  </span>
                  <a href={STUDIO_CONFIG.phoneTel} className="text-[#B99B69] font-bold hover:underline">
                    {STUDIO_CONFIG.phoneDisplay}
                  </a>
                </div>
                <div>
                  <span className="text-stone-400 block font-mono text-[11px] uppercase">
                    Official Email:
                  </span>
                  <a href={STUDIO_CONFIG.emailMailto} className="text-stone-700 hover:text-[#B99B69] hover:underline">
                    {STUDIO_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIX REASONS TO CHOOSE US */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
            The BABA Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1815]">
            Why Discerning Clients Choose Our Studio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-[2rem] bg-white border border-[#E2D6C3] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#B99B69]/10 text-[#B99B69] flex items-center justify-center">
              <Camera className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#1A1815]">Dual-Camera Redundancy</h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Every critical ritual is captured on dual-slot camera systems with immediate cloud and
              physical on-site backups.
            </p>
          </div>

          <div className="p-8 rounded-[2rem] bg-white border border-[#E2D6C3] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#B99B69]/10 text-[#B99B69] flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#1A1815]">Gentle Posing Direction</h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              No robotic posture commands. We guide couples and families with relaxed prompts that bring
              out authentic smiles and laughter.
            </p>
          </div>

          <div className="p-8 rounded-[2rem] bg-white border border-[#E2D6C3] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#B99B69]/10 text-[#B99B69] flex items-center justify-center">
              <Film className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#1A1815]">Cinematic Master Grading</h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Every photo and 4K film is individually color-corrected and graded in DaVinci Resolve for
              timeless, skin-flattering tones.
            </p>
          </div>

          <div className="p-8 rounded-[2rem] bg-white border border-[#E2D6C3] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#B99B69]/10 text-[#B99B69] flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#1A1815]">In-House Canvas Craft</h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              No third-party delays. BABA CANVAS &amp; FRAMES builds custom wooden framing, canvas
              stretching, and velvet albums in-house.
            </p>
          </div>

          <div className="p-8 rounded-[2rem] bg-white border border-[#E2D6C3] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#B99B69]/10 text-[#B99B69] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#1A1815]">Transparent Contracts</h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Clear deliverables, stated turnaround times, and zero hidden equipment fees. What you
              agree to is what is delivered.
            </p>
          </div>

          <div className="p-8 rounded-[2rem] bg-white border border-[#E2D6C3] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#B99B69]/10 text-[#B99B69] flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#1A1815]">Direct Personal WhatsApp</h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Prompt, direct communication throughout the planning process and swift delivery of sneak
              peeks for social sharing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
