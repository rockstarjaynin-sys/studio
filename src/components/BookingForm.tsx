import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  Calendar,
  MapPin,
  User,
  Phone,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldAlert,
} from 'lucide-react';
import { STUDIO_CONFIG, STUDIO_PACKAGES } from '../data/studioConfig';

interface BookingFormProps {
  defaultPackage?: string;
  defaultCategory?: string;
  defaultStyle?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  defaultPackage = '',
  defaultCategory = 'wedding',
  defaultStyle = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [category, setCategory] = useState(defaultCategory);
  const [selectedPackage, setSelectedPackage] = useState(defaultPackage);
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [additionalMessage, setAdditionalMessage] = useState(
    defaultStyle ? `Interested in reference style: "${defaultStyle}"` : ''
  );

  const [submittedMode, setSubmittedMode] = useState<'whatsapp' | 'email' | null>(null);

  const availablePackages = STUDIO_PACKAGES.filter((p) => p.category === category);

  const formatSummaryMessage = () => {
    return (
      `*New Booking Enquiry — BABA PRODUCTION STUDIO*\n\n` +
      `*Name:* ${fullName || 'Not specified'}\n` +
      `*Phone:* ${phoneNumber || 'Not specified'}\n` +
      `*Category:* ${category.toUpperCase()}\n` +
      `*Preferred Package:* ${selectedPackage || 'Not specified / Custom'}\n` +
      `*Event Date:* ${eventDate || 'To be decided'}\n` +
      `*Location/Venue:* ${location || 'Kanchanpur / Nepal'}\n` +
      `*Requirements/Notes:* ${additionalMessage || 'None'}\n\n` +
      `Sent via BABA PRODUCTION STUDIO Official Web Portal`
    );
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) {
      alert('Please provide your name and phone number so the studio can reach you.');
      return;
    }
    const message = formatSummaryMessage();
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/9779801721658?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmittedMode('whatsapp');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) {
      alert('Please provide your name and phone number so the studio can reach you.');
      return;
    }
    const subject = encodeURIComponent(
      `Booking Enquiry: ${category.toUpperCase()} - ${fullName}`
    );
    const body = encodeURIComponent(formatSummaryMessage());
    const mailto = `mailto:baba69.production@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setSubmittedMode('email');
  };

  return (
    <div className="bg-white border border-[#E2D6C3] rounded-3xl p-7 sm:p-10 shadow-xl text-[#1A1815]">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Form Title & Introduction */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
            Reserve Your Celebration
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#1A1815]">
            Pre-Booking &amp; Date Availability Enquiry
          </h3>
          <p className="text-xs sm:text-sm text-stone-600">
            Send your event details directly to our studio directors via WhatsApp or Email. We usually
            respond within a few hours.
          </p>
        </div>

        {submittedMode && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-emerald-950 mb-0.5">Enquiry Initiated!</p>
              <p>
                Your booking details were compiled and sent via{' '}
                {submittedMode === 'whatsapp' ? 'WhatsApp' : 'Email'}. Remember that submitting an
                enquiry does not confirm a booking—the studio will review availability and confirm with
                you directly.
              </p>
            </div>
          </div>
        )}

        {/* Input Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#B99B69]" />
                <span>Your Full Name *</span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Ramesh Joshi"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E0D5C3] text-[#1A1815] placeholder-stone-400 text-sm focus:border-[#B99B69] focus:outline-none focus:ring-1 focus:ring-[#B99B69]"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#B99B69]" />
                <span>Phone / WhatsApp Number *</span>
              </label>
              <input
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+977 98XXXXXXXX"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E0D5C3] text-[#1A1815] placeholder-stone-400 text-sm focus:border-[#B99B69] focus:outline-none focus:ring-1 focus:ring-[#B99B69]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Event Category */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B99B69]" />
                <span>Event Category</span>
              </label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setSelectedPackage('');
                }}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E0D5C3] text-[#1A1815] text-sm focus:border-[#B99B69] focus:outline-none focus:ring-1 focus:ring-[#B99B69]"
              >
                <option value="wedding">Wedding &amp; Reception</option>
                <option value="maternity">Maternity &amp; Newborn</option>
                <option value="celebrations">Baby Shower &amp; Celebrations</option>
                <option value="outdoor">Outdoor Photoshoot</option>
                <option value="cinematography">Cinematography &amp; Films</option>
              </select>
            </div>

            {/* Preferred Package */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#B99B69]" />
                <span>Preferred Package</span>
              </label>
              <select
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E0D5C3] text-[#1A1815] text-sm focus:border-[#B99B69] focus:outline-none focus:ring-1 focus:ring-[#B99B69]"
              >
                <option value="">Let Studio Recommend Best Fit</option>
                {availablePackages.map((pkg) => (
                  <option key={pkg.id} value={pkg.name}>
                    {pkg.name} (Provisional NPR {pkg.priceNPR.toLocaleString()})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Preferred Date */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#B99B69]" />
                <span>Target Event Date</span>
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E0D5C3] text-[#1A1815] text-sm focus:border-[#B99B69] focus:outline-none focus:ring-1 focus:ring-[#B99B69]"
              />
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B99B69]" />
                <span>Event Location / City</span>
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Mahendranagar / Dhangadhi / Kanchanpur"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E0D5C3] text-[#1A1815] placeholder-stone-400 text-sm focus:border-[#B99B69] focus:outline-none focus:ring-1 focus:ring-[#B99B69]"
              />
            </div>
          </div>

          {/* Additional Message */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-stone-700">
              Additional Requirements or Notes
            </label>
            <textarea
              rows={3}
              value={additionalMessage}
              onChange={(e) => setAdditionalMessage(e.target.value)}
              placeholder="Tell us about your ceremony timings, drone requirements, number of guests, or special moments you want captured..."
              className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E0D5C3] text-[#1A1815] placeholder-stone-400 text-sm focus:border-[#B99B69] focus:outline-none focus:ring-1 focus:ring-[#B99B69]"
            />
          </div>

          {/* Booking Notice */}
          <div className="p-4 rounded-2xl bg-[#F6EFE5] border border-[#E2D6C3] flex items-start gap-2.5 text-stone-600 text-xs">
            <ShieldAlert className="w-4 h-4 text-[#B99B69] shrink-0 mt-0.5" />
            <p>
              <span className="font-bold text-[#1A1815]">Official Confirmation Policy:</span>{' '}
              {STUDIO_CONFIG.bookingDisclaimer}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="w-full sm:flex-1 py-3.5 px-6 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-600 rounded-full transition-all flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send via WhatsApp (+977 9801721658)</span>
            </button>

            <button
              type="button"
              onClick={handleEmailSubmit}
              className="w-full sm:flex-1 py-3.5 px-6 text-xs sm:text-sm font-bold text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] via-[#E2D2B8] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Send via Email</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
