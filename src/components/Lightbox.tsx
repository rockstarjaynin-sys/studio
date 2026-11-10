import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Calendar, Share2, Sparkles } from 'lucide-react';
import { GalleryItem } from '../data/studioConfig';
import { useNavigate } from 'react-router-dom';

interface LightboxProps {
  item: GalleryItem | null;
  allItems: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, allItems, onClose, onSelect }) => {
  const navigate = useNavigate();

  const currentIndex = item ? allItems.findIndex((i) => i.id === item.id) : -1;

  const handleNext = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < allItems.length - 1) {
      onSelect(allItems[currentIndex + 1]);
    } else if (allItems.length > 0) {
      onSelect(allItems[0]);
    }
  }, [currentIndex, allItems, onSelect]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelect(allItems[currentIndex - 1]);
    } else if (allItems.length > 0) {
      onSelect(allItems[allItems.length - 1]);
    }
  }, [currentIndex, allItems, onSelect]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose, handleNext, handlePrev]);

  if (!item) return null;

  const handleBookStyle = () => {
    onClose();
    navigate(`/contact?style=${encodeURIComponent(item.title)}&cat=${item.category}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6"
      onClick={onClose}
    >
      {/* Lightbox Wrapper */}
      <div
        className="relative w-full max-w-6xl max-h-[92vh] flex flex-col lg:flex-row bg-[#121212] border border-[#2a2825] rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Mobile & Desktop) */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/70 hover:bg-[#B99B69] hover:text-black text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Container */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[320px] lg:min-h-[560px] overflow-hidden select-none">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[50vh] lg:max-h-[82vh] w-auto max-w-full object-contain"
          />

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#B99B69] hover:text-black text-white transition-colors"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#B99B69] hover:text-black text-white transition-colors"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Counter Tag */}
          <div className="absolute bottom-3 left-4 text-[11px] font-mono tracking-wider bg-black/70 text-stone-300 px-2.5 py-1 rounded">
            {currentIndex + 1} / {allItems.length}
          </div>
        </div>

        {/* Detail Panel */}
        <div className="w-full lg:w-80 xl:w-96 p-6 flex flex-col justify-between bg-[#151515] border-t lg:border-t-0 lg:border-l border-[#262420] overflow-y-auto">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B99B69]">
                {item.categoryLabel}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                {item.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              {item.caption}
            </p>

            {/* Editorial Metadata / EXIF Specs */}
            <div className="space-y-2 pt-2 border-t border-stone-800 text-xs">
              {item.location && (
                <div className="flex items-center gap-2 text-stone-400">
                  <MapPin className="w-3.5 h-3.5 text-[#B99B69] shrink-0" />
                  <span>{item.location}</span>
                </div>
              )}
              {item.cameraInfo && (
                <div className="flex items-center gap-2 text-stone-400 font-mono text-[11px]">
                  <Camera className="w-3.5 h-3.5 text-[#B99B69] shrink-0" />
                  <span>{item.cameraInfo}</span>
                </div>
              )}
              {item.isVideo && item.videoDuration && (
                <div className="flex items-center gap-2 text-[#B99B69] font-mono text-[11px]">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>Master Film Length: {item.videoDuration}</span>
                </div>
              )}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-6 mt-6 border-t border-stone-800 space-y-2">
            <button
              onClick={handleBookStyle}
              className="w-full py-3 px-5 text-xs font-bold uppercase tracking-wider text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] via-[#E2D2B8] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95 text-center block"
            >
              Enquire About This Style
            </button>
            <p className="text-[10px] text-center text-stone-400 font-mono">
              Reference code: {item.id} · BABA PRODUCTION STUDIO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
