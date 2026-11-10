import React, { useState } from 'react';
import {
  Filter,
  Camera,
  Play,
  Maximize2,
  Calendar,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { GalleryItem, STUDIO_CONFIG } from '../data/studioConfig';
import { useStudioMedia } from '../context/MediaContext';
import { Lightbox } from '../components/Lightbox';
import { VideoModal } from '../components/VideoModal';

export const PortfolioPage: React.FC = () => {
  const { galleryItems } = useStudioMedia();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState({
    title: '',
    category: '',
    posterUrl: '',
  });

  const categories = [
    { key: 'all', label: 'All Curated Works' },
    { key: 'wedding', label: 'Weddings' },
    { key: 'maternity', label: 'Maternity' },
    { key: 'newborn', label: 'Newborn' },
    { key: 'celebrations', label: 'Baby Shower' },
    { key: 'outdoor', label: 'Outdoor' },
    { key: 'cinematography', label: 'Cinematography' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const handleItemClick = (item: GalleryItem) => {
    if (item.isVideo) {
      setActiveVideo({
        title: item.title,
        category: item.categoryLabel,
        posterUrl: item.imageUrl,
      });
      setVideoModalOpen(true);
    } else {
      setSelectedLightboxItem(item);
    }
  };

  return (
    <div className="bg-[#FAF7F2] text-[#1A1815] pt-28 pb-20 transition-colors">
      {/* 1. PORTFOLIO HERO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2D6C3] bg-gradient-to-b from-[#F2ECE1] via-[#FAF7F2] to-[#FAF7F2]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
            Curated Retrospective
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#1A1815] tracking-tight leading-tight">
            The Studio Portfolio
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-700 max-w-2xl mx-auto font-sans leading-relaxed">
            An archive of love, ritual, new beginnings, and cinematic motion captured by BABA
            PRODUCTION STUDIO across Nepal.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER BAR (PILL ISLAND) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-1.5 overflow-x-auto p-1.5 bg-white rounded-full border border-[#E2D6C3] shadow-xs max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all whitespace-nowrap hover:scale-105 active:scale-95 ${
                  activeFilter === cat.key
                    ? 'bg-gradient-to-r from-[#D9C5A5] to-[#B99B69] text-[#1A1815] shadow-sm'
                    : 'text-stone-600 hover:text-[#1A1815] hover:bg-stone-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-stone-500 font-mono">
          Showing {filteredItems.length} curated works · Click any work to inspect in 4K Lightbox
        </div>
      </section>

      {/* 3. MASONRY / BENTO PORTFOLIO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            const isWide = index % 5 === 0;
            return (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`group relative rounded-3xl overflow-hidden border border-[#E2D6C3] bg-white cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ${
                  isWide ? 'md:col-span-2' : 'col-span-1'
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    isWide ? 'aspect-[16/9]' : 'aspect-[4/3] sm:aspect-[3/4]'
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Icon Indicator for Video / Lightbox */}
                  <div className="absolute top-4 right-4 z-10">
                    {item.isVideo ? (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#B99B69] to-[#E5D4B8] text-[#1A1815] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-current translate-x-0.5" />
                      </div>
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-white/85 text-[#1A1815] flex items-center justify-center backdrop-blur-sm group-hover:bg-[#B99B69] group-hover:text-white transition-colors shadow-sm">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  {/* Clean unboxed metadata overlay */}
                  <div className="absolute bottom-5 left-5 right-5 space-y-1.5 z-10 text-white">
                    <div className="flex items-center gap-2 text-[11px] text-[#D9C5A5] font-mono">
                      <span>{item.categoryLabel}</span>
                      {item.videoDuration && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{item.videoDuration}</span>
                        </>
                      )}
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold group-hover:text-[#D9C5A5] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-stone-200 line-clamp-2 font-sans opacity-95">
                      {item.caption}
                    </p>

                    {item.location && (
                      <div className="pt-1 text-[11px] text-stone-300 font-mono">
                        {item.location}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        item={selectedLightboxItem}
        allItems={filteredItems}
        onClose={() => setSelectedLightboxItem(null)}
        onSelect={(item) => setSelectedLightboxItem(item)}
      />

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
