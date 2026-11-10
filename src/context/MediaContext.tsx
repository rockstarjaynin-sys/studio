import React, { createContext, useContext, useState, useEffect } from 'react';
import { STUDIO_CONFIG, GALLERY_ITEMS, GalleryItem } from '../data/studioConfig';

export interface MediaSlot {
  key: string;
  label: string;
  driveFolder: 'wedding' | 'materternity and baby showr' | 'outdoor';
  currentUrl: string;
  defaultUrl: string;
  aspect: string;
}

interface MediaContextType {
  primaryImages: typeof STUDIO_CONFIG.primaryImages;
  galleryItems: GalleryItem[];
  updateSlotUrl: (slotKey: string, newUrl: string) => void;
  resetAllToDefault: () => void;
  driveStructure: typeof DRIVE_STRUCTURE;
  convertDriveUrl: (rawUrl: string) => string;
}

export const DRIVE_STRUCTURE = {
  mainFolder: 'web pics',
  folderUrl: STUDIO_CONFIG.googleDriveFolder,
  subfolders: [
    {
      id: 'wedding',
      folderName: 'wedding',
      title: 'Wedding Photography & Rituals',
      description:
        'Contains royal wedding ceremonies, couple portraits, candlelight receptions, Vedic rituals, and Baraat captures.',
      assignedSlots: [
        { key: 'heroWedding', label: 'Homepage Hero & Royal Wedding Ceremony' },
        { key: 'weddingReception', label: 'Reception Candlelight Canopy' },
        { key: 'gal-wed-1', label: 'Palace Sunset Couple Portrait' },
        { key: 'gal-wed-2', label: 'Floral Arch Celebration' },
      ],
    },
    {
      id: 'materternity and baby showr',
      folderName: 'materternity and baby showr',
      title: 'Maternity, Baby Shower & Newborn',
      description:
        'Contains studio maternity portraits in ivory silk, pastel baby shower floral decor, family celebrations, and peaceful newborn heirlooms.',
      assignedSlots: [
        { key: 'maternityIvory', label: 'Fine Art Studio Maternity (Ivory Gown)' },
        { key: 'celebrationBabyShower', label: 'Baby Bloom Shower Celebration Decor' },
        { key: 'gal-mat-1', label: 'Serenade in Ivory Maternity Portrait' },
        { key: 'gal-cel-1', label: 'Baby Bloom Celebration Arch' },
        { key: 'gal-new-1', label: 'Newborn Heirloom Nursery Portrait' },
      ],
    },
  ],
};

const STORAGE_KEY = 'baba_custom_media_overrides_v1';

export const MediaContext = createContext<MediaContextType | null>(null);

/**
 * Converts standard Google Drive file share links to direct web embed URLs.
 * e.g. https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * -> https://lh3.googleusercontent.com/d/FILE_ID
 */
export function convertGoogleDriveUrl(url: string): string {
  if (!url) return '';
  const trimmed = url.trim();

  // Pattern: /file/d/FILE_ID/ or id=FILE_ID
  const matchFileId = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (matchFileId && matchFileId[1]) {
    return `https://lh3.googleusercontent.com/d/${matchFileId[1]}`;
  }

  const matchIdParam = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (matchIdParam && matchIdParam[1]) {
    return `https://lh3.googleusercontent.com/d/${matchIdParam[1]}`;
  }

  // Already a direct link or data URL
  return trimmed;
}

export const MediaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [overrides, setOverrides] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const updateSlotUrl = (slotKey: string, newUrl: string) => {
    const formattedUrl = convertGoogleDriveUrl(newUrl);
    setOverrides((prev) => {
      const next = { ...prev, [slotKey]: formattedUrl };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.warn('LocalStorage save error:', e);
      }
      return next;
    });
  };

  const resetAllToDefault = () => {
    setOverrides({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('LocalStorage clear error:', e);
    }
  };

  // Derive dynamic primaryImages
  const primaryImages = {
    heroWedding: overrides['heroWedding'] || STUDIO_CONFIG.primaryImages.heroWedding,
    weddingReception:
      overrides['weddingReception'] || STUDIO_CONFIG.primaryImages.weddingReception,
    maternityIvory: overrides['maternityIvory'] || STUDIO_CONFIG.primaryImages.maternityIvory,
    outdoorSunset: overrides['outdoorSunset'] || STUDIO_CONFIG.primaryImages.outdoorSunset,
    celebrationBabyShower:
      overrides['celebrationBabyShower'] || STUDIO_CONFIG.primaryImages.celebrationBabyShower,
  };

  // Derive dynamic galleryItems
  const galleryItems = GALLERY_ITEMS.map((item) => {
    if (overrides[item.id]) {
      return { ...item, imageUrl: overrides[item.id] };
    }
    // Also if it points to a primary image that was overridden
    if (item.id === 'gal-wed-1' && overrides['heroWedding']) {
      return { ...item, imageUrl: overrides['heroWedding'] };
    }
    if (item.id === 'gal-wed-2' && overrides['weddingReception']) {
      return { ...item, imageUrl: overrides['weddingReception'] };
    }
    if (item.id === 'gal-mat-1' && overrides['maternityIvory']) {
      return { ...item, imageUrl: overrides['maternityIvory'] };
    }
    if (item.id === 'gal-cel-1' && overrides['celebrationBabyShower']) {
      return { ...item, imageUrl: overrides['celebrationBabyShower'] };
    }
    if (item.id === 'gal-out-1' && overrides['outdoorSunset']) {
      return { ...item, imageUrl: overrides['outdoorSunset'] };
    }
    return item;
  });

  return (
    <MediaContext.Provider
      value={{
        primaryImages,
        galleryItems,
        updateSlotUrl,
        resetAllToDefault,
        driveStructure: DRIVE_STRUCTURE,
        convertDriveUrl: convertGoogleDriveUrl,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export const useStudioMedia = () => {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error('useStudioMedia must be used within a MediaProvider');
  }
  return context;
};
