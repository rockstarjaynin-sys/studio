import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Youtube, Facebook, Camera, ExternalLink, ShieldCheck } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

interface FooterProps {
  onOpenDriveModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDriveModal }) => {
  return (
    <footer className="bg-[#F3EDE2] text-stone-700 border-t border-[#E2D6C3] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#B99B69] to-[#E5D4B8] flex items-center justify-center text-[#1A1815] shadow-sm">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-base font-bold tracking-wider text-[#1A1815] uppercase block">
                  {STUDIO_CONFIG.name}
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#B99B69] font-bold uppercase font-sans">
                  Fine Art Photography &amp; Film
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Capturing authentic human emotion, royal weddings, serene motherhood, and cinematic stories
              across Sudurpashchim and beyond.
            </p>
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-stone-500 block mb-1">
                Studio &amp; Framing Center:
              </span>
              <a
                href={STUDIO_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#B99B69] font-bold hover:underline"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{STUDIO_CONFIG.mapsListingName} (Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Col 2: Photography Disciplines */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold tracking-wider text-[#1A1815] uppercase">
              Galleries &amp; Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>
                <Link to="/weddings-cinema-outdoor" className="hover:text-[#B99B69] transition-colors font-medium">
                  Weddings, Cinema &amp; Outdoor Shoots
                </Link>
              </li>
              <li>
                <Link to="/maternity-celebrations" className="hover:text-[#B99B69] transition-colors font-medium">
                  Maternity, Newborn &amp; Baby Showers
                </Link>
              </li>
              <li>
                <Link to="/weddings-cinema-outdoor#packages" className="hover:text-[#B99B69] transition-colors">
                  Wedding &amp; Cinema Packages
                </Link>
              </li>
              <li>
                <Link to="/maternity-celebrations#packages" className="hover:text-[#B99B69] transition-colors">
                  Maternity &amp; Celebration Packages
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#B99B69] transition-colors">
                  Complete Curated Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#B99B69] transition-colors">
                  About Studio &amp; BABA CANVAS
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Studio Bookings */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold tracking-wider text-[#1A1815] uppercase">
              Direct Contact &amp; Booking
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-600">
              <li>
                <a
                  href={STUDIO_CONFIG.phoneTel}
                  className="flex items-center gap-2.5 hover:text-[#1A1815] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B99B69]" />
                  <span>{STUDIO_CONFIG.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={STUDIO_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-emerald-700 font-medium hover:text-emerald-800 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                  <span>WhatsApp: {STUDIO_CONFIG.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={STUDIO_CONFIG.emailMailto}
                  className="flex items-center gap-2.5 hover:text-[#1A1815] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B99B69]" />
                  <span>{STUDIO_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={STUDIO_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2.5 hover:text-[#1A1815] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#B99B69] shrink-0 mt-0.5" />
                  <span>{STUDIO_CONFIG.locationDisplay}</span>
                </a>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={STUDIO_CONFIG.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Page"
                className="w-8 h-8 rounded-full bg-white border border-[#E2D6C3] flex items-center justify-center text-stone-600 hover:text-blue-600 hover:border-[#B99B69] hover:scale-105 transition-all shadow-xs"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_CONFIG.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube Channel"
                className="w-8 h-8 rounded-full bg-white border border-[#E2D6C3] flex items-center justify-center text-stone-600 hover:text-red-600 hover:border-[#B99B69] hover:scale-105 transition-all shadow-xs"
              >
                <Youtube className="w-4 h-4" />
              </a>
              {onOpenDriveModal && (
                <button
                  onClick={onOpenDriveModal}
                  aria-label="Google Drive Media Assets"
                  className="px-3 py-1.5 text-xs rounded-full bg-white border border-[#E2D6C3] text-stone-700 hover:text-[#B99B69] hover:border-[#B99B69] hover:scale-105 transition-all shadow-xs flex items-center gap-1.5"
                >
                  <span>Drive Media Hub</span>
                  <ExternalLink className="w-3 h-3 text-[#B99B69]" />
                </button>
              )}
            </div>
          </div>

          {/* Col 4: Trust & Transparency */}
          <div className="space-y-3 bg-white/70 p-5 rounded-2xl border border-[#E2D6C3] shadow-xs">
            <div className="flex items-center gap-2 text-[#B99B69]">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A1815]">
                Booking Policy &amp; Notice
              </span>
            </div>
            <p className="text-[11px] text-stone-600 leading-relaxed font-sans">
              Submitting an enquiry via our website, WhatsApp, or email does not automatically confirm a booking.
              Dates are officially secured upon mutual calendar verification and studio contract confirmation.
            </p>
            <div className="pt-1">
              <Link
                to="/packages"
                className="text-[11px] text-[#B99B69] font-bold hover:underline flex items-center gap-1"
              >
                <span>View Interactive Package Comparison</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E2D6C3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} {STUDIO_CONFIG.name}. All rights reserved. Registered location:{' '}
            <a
              href={STUDIO_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#1A1815] font-semibold hover:underline"
            >
              {STUDIO_CONFIG.mapsListingName}
            </a>
            .
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-[#1A1815]">
              About Studio
            </Link>
            <Link to="/packages" className="hover:text-[#1A1815]">
              Pricing Details
            </Link>
            <Link to="/contact" className="hover:text-[#1A1815]">
              Contact &amp; Directions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
