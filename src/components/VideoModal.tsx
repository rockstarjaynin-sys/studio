import React, { useEffect } from 'react';
import { X, Play, Volume2, Film, CheckCircle2, MessageCircle } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  posterUrl: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
  posterUrl,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#141414] border border-[#2c2925] rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-[#0f0f0f]">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-[#B99B69]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69]">
              {category} · BABA CINEMA
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas / Cinematic Player */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center group">
          <img
            src={posterUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />

          {/* Central Play Pulse Effect */}
          <div className="relative z-10 text-center space-y-4 px-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#B99B69]/90 text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-8 h-8 fill-black translate-x-0.5" />
            </div>
            <p className="text-lg sm:text-xl font-serif font-bold text-white tracking-wide">
              {title}
            </p>
            <p className="text-xs text-stone-300 max-w-md mx-auto">
              Master 4K DCI Film · DaVinci Resolve Graded · Licensed Soundtrack
            </p>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-[#B99B69]" />
              <span>Full Audio Experience (Dolby Mastered)</span>
            </div>
            <span className="font-mono text-[11px] text-stone-300">4K Ultra HD · 60 FPS</span>
          </div>
        </div>

        {/* Bottom Booking Action Strip */}
        <div className="p-6 bg-[#161616] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <div className="flex items-center gap-2 text-stone-200 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#B99B69]" />
              <span>Available for Weddings, Documentaries &amp; Luxury Events</span>
            </div>
            <p className="text-xs text-stone-400">
              Shot on Sony FX3 Cinema Cameras with Apple ProRes 4K drone cinematography.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`${STUDIO_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                `Namaste BABA PRODUCTION STUDIO, I just watched "${title}" on your website and would love to enquire about cinema coverage for my event!`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 rounded-full transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Film Enquiry</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
