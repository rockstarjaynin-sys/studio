import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ExternalLink,
  Facebook,
  Youtube,
  ShieldCheck,
  Clock,
  Compass,
} from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';
import { BookingForm } from '../components/BookingForm';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultPackage = searchParams.get('package') || '';
  const defaultCat = searchParams.get('cat') || 'wedding';
  const defaultStyle = searchParams.get('style') || '';

  return (
    <div className="bg-[#FAF7F2] text-[#1A1815] pt-28 pb-24 transition-colors">
      {/* 1. HERO HEADER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2D6C3] bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6] to-[#FAF7F2]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
            Direct Connect
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1815] tracking-tight leading-tight">
            Contact &amp; Studio Bookings
          </h1>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Reserve your wedding dates, schedule a peaceful maternity session, or visit our physical
            framing studio at BABA CANVAS &amp; FRAMES in Kanchanpur, Nepal.
          </p>
        </div>
      </section>

      {/* 2. DIRECT CONTACT METHODS STRIP */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="p-7 rounded-[2rem] bg-white border border-[#E2D6C3] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#B99B69]/10 text-[#B99B69] flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-stone-400 font-bold">Direct Phone Call</span>
              <h3 className="font-serif text-xl font-bold text-[#1A1815] mt-0.5">
                {STUDIO_CONFIG.phoneDisplay}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600">
              Available daily 9:00 AM – 7:00 PM for general and booking inquiries.
            </p>
            <div className="pt-2">
              <a
                href={STUDIO_CONFIG.phoneTel}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B99B69] hover:underline"
              >
                <span>Call Now (+977 9801721658)</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="p-7 rounded-[2rem] bg-emerald-50/60 border border-emerald-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-emerald-700 font-bold">WhatsApp Instant Chat</span>
              <h3 className="font-serif text-xl font-bold text-[#1A1815] mt-0.5">
                {STUDIO_CONFIG.phoneDisplay}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600">
              Fastest response for dates availability, pricing questions, and portfolio reels.
            </p>
            <div className="pt-2">
              <a
                href={STUDIO_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline"
              >
                <span>Open WhatsApp Chat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="p-7 rounded-[2rem] bg-white border border-[#E2D6C3] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#B99B69]/10 text-[#B99B69] flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-stone-400 font-bold">Official Studio Email</span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1815] mt-0.5 truncate">
                {STUDIO_CONFIG.email}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600">
              Send formal event itineraries, RFPs, or partnership requests.
            </p>
            <div className="pt-2">
              <a
                href={STUDIO_CONFIG.emailMailto}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B99B69] hover:underline"
              >
                <span>Compose Email</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOOKING ENQUIRY FORM + LOCATION SPLIT */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Booking Form (7 Cols) */}
          <div className="lg:col-span-7">
            <BookingForm
              defaultPackage={defaultPackage}
              defaultCategory={defaultCat}
              defaultStyle={defaultStyle}
            />
          </div>

          {/* Location & Studio Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Google Maps & Physical Address Card */}
            <div className="p-8 rounded-[2rem] bg-white border border-[#E2D6C3] shadow-lg space-y-5">
              <div className="flex items-center gap-2 text-[#B99B69]">
                <MapPin className="w-5 h-5" />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">Physical Location</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1815]">
                  {STUDIO_CONFIG.mapsListingName}
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Registered Google Maps Business &amp; Studio Headquarters
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Located in Kanchanpur / Mahendranagar, Sudurpashchim Province, Nepal. Stop by our studio
                to view handcrafted velvet albums, explore canvas samples, or discuss your celebration
                in person.
              </p>

              {/* Interactive Map Visual with Direct Google Maps Link */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E2D6C3] bg-[#FAF7F2] p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#B99B69]/10 text-[#B99B69] flex items-center justify-center mx-auto">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-bold text-[#1A1815] block">
                    Google Maps Coordinates: 28.7023° N, 80.5688° E
                  </span>
                  <span className="text-xs text-stone-500 block">
                    Kanchanpur, Sudurpashchim, Nepal
                  </span>
                </div>

                <a
                  href={STUDIO_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-5 text-xs font-bold uppercase tracking-wider text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] via-[#E2D2B8] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-8 rounded-[2rem] bg-white border border-[#E2D6C3] shadow-lg space-y-4">
              <h4 className="font-serif text-xl font-bold text-[#1A1815]">Social Media Channels</h4>
              <p className="text-xs text-stone-600">
                Connect with our active digital community to view latest ceremony teasers and sneak
                peeks:
              </p>
              <div className="space-y-3">
                <a
                  href={STUDIO_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF7F2] border border-[#E2D6C3] hover:border-[#B99B69] text-xs font-semibold text-stone-700 hover:text-[#1A1815] transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3">
                    <Facebook className="w-5 h-5 text-blue-600" />
                    <span>Facebook: @babaproductionstudio</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400" />
                </a>

                <a
                  href={STUDIO_CONFIG.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF7F2] border border-[#E2D6C3] hover:border-red-500 text-xs font-semibold text-stone-700 hover:text-[#1A1815] transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3">
                    <Youtube className="w-5 h-5 text-red-600" />
                    <span>YouTube: @babaproductionstudio4196</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
