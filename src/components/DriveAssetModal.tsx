import React, { useState } from 'react';
import {
  X,
  Folder,
  ExternalLink,
  Copy,
  Check,
  Info,
  Image as ImageIcon,
  Sparkles,
  Upload,
  RefreshCw,
  FolderTree,
  Link as LinkIcon,
  CheckCircle2,
} from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioConfig';
import { useStudioMedia } from '../context/MediaContext';

interface DriveAssetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DriveAssetModal: React.FC<DriveAssetModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string>('heroWedding');
  const [inputUrl, setInputUrl] = useState<string>('');
  const [successFeedback, setSuccessFeedback] = useState<string>('');

  const {
    primaryImages,
    updateSlotUrl,
    resetAllToDefault,
    driveStructure,
    convertDriveUrl,
  } = useStudioMedia();

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(STUDIO_CONFIG.googleDriveFolder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;
    updateSlotUrl(selectedSlot, inputUrl.trim());
    setSuccessFeedback(`Slot "${selectedSlot}" updated with your Drive media!`);
    setInputUrl('');
    setTimeout(() => setSuccessFeedback(''), 4000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        updateSlotUrl(selectedSlot, dataUrl);
        setSuccessFeedback(`Selected photo from your device applied to "${selectedSlot}"!`);
        setTimeout(() => setSuccessFeedback(''), 4000);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-[#141414] border border-[#2c2925] rounded-xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-stone-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#B99B69]/10 border border-[#B99B69]/40 flex items-center justify-center text-[#B99B69]">
              <FolderTree className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Google Drive Media Organizer &amp; Linker
              </h3>
              <p className="text-xs text-[#B99B69] font-mono">
                Main: &ldquo;{driveStructure.mainFolder}&rdquo; &bull; Folders: &ldquo;wedding&rdquo; &amp; &ldquo;materternity and baby showr&rdquo;
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Folder Structure Overview */}
        <div className="p-4 rounded-lg bg-stone-900/90 border border-stone-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
              Your Google Drive Folder Structure:
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="px-2 py-1 text-[11px] rounded bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors flex items-center gap-1"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied Link' : 'Copy Drive Link'}</span>
              </button>
              <a
                href={STUDIO_CONFIG.googleDriveFolder}
                target="_blank"
                rel="noreferrer"
                className="px-2 py-1 text-[11px] rounded bg-[#B99B69] hover:bg-[#cbb284] text-black font-semibold transition-colors flex items-center gap-1"
              >
                <span>Open in Drive</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Visual Tree */}
          <div className="font-mono text-xs bg-black/80 p-3.5 rounded border border-stone-800/80 space-y-1.5 text-stone-300">
            <div className="flex items-center gap-2 text-white font-bold">
              <Folder className="w-4 h-4 text-[#B99B69]" />
              <span>web pics/ (Main Folder)</span>
            </div>
            <div className="pl-6 border-l border-stone-800 space-y-2 mt-1">
              <div>
                <div className="flex items-center gap-2 text-[#D9C5A5] font-semibold">
                  <Folder className="w-3.5 h-3.5 text-[#B99B69]" />
                  <span>wedding/</span>
                </div>
                <p className="pl-6 text-[11px] text-stone-400 font-sans">
                  Royal ceremonies, Baraat, couples, Mandap details, and candlelight reception photos.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[#D9C5A5] font-semibold">
                  <Folder className="w-3.5 h-3.5 text-[#B99B69]" />
                  <span>materternity and baby showr/</span>
                </div>
                <p className="pl-6 text-[11px] text-stone-400 font-sans">
                  Fine art maternity studio gowns, peaceful baby bumps, baby shower decor, and newborns.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Image Mapper Tool */}
        <div className="p-5 rounded-lg bg-[#181818] border border-stone-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B99B69]" />
              <h4 className="font-serif text-lg font-bold text-white">
                Live Image Linker &amp; Switcher
              </h4>
            </div>
            <button
              onClick={resetAllToDefault}
              className="text-[11px] text-stone-400 hover:text-stone-200 underline flex items-center gap-1"
              title="Reset all image slots to studio defaults"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset to Defaults</span>
            </button>
          </div>

          {successFeedback && (
            <div className="p-3 rounded bg-emerald-950/80 border border-emerald-700 text-emerald-200 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{successFeedback}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Slot Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-stone-400">
                1. Select Website Image Slot to Update:
              </label>
              <select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded bg-stone-900 border border-stone-700 text-white focus:border-[#B99B69] focus:outline-none"
              >
                <optgroup label="From 'wedding' Folder">
                  <option value="heroWedding">Homepage Hero Wedding Couple</option>
                  <option value="weddingReception">Reception Candlelight Canopy</option>
                  <option value="gal-wed-1">Gallery: Sunset Palace Wedding</option>
                  <option value="gal-wed-2">Gallery: Floral Arch First Dance</option>
                </optgroup>
                <optgroup label="From 'materternity and baby showr' Folder">
                  <option value="maternityIvory">Fine Art Studio Maternity (Ivory Gown)</option>
                  <option value="celebrationBabyShower">Baby Shower Floral Arch &amp; Decor</option>
                  <option value="gal-mat-1">Gallery: Fine Art Maternity Portrait</option>
                  <option value="gal-cel-1">Gallery: Baby Bloom Shower Celebration</option>
                  <option value="gal-new-1">Gallery: Newborn Nursery Heirloom</option>
                </optgroup>
                <optgroup label="Outdoor Landscape">
                  <option value="outdoorSunset">Golden Valley Outdoor Photoshoot</option>
                </optgroup>
              </select>
            </div>

            {/* Upload from Local Device */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-stone-400">
                2A. Pick from Computer / Phone:
              </label>
              <label className="flex items-center justify-center gap-2 w-full px-3 py-2 text-xs font-semibold rounded bg-stone-800 hover:bg-stone-700 border border-stone-600 text-stone-200 cursor-pointer transition-colors">
                <Upload className="w-3.5 h-3.5 text-[#B99B69]" />
                <span>Upload Local Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Paste Link Form */}
          <form onSubmit={handleApplyUrl} className="space-y-2 pt-1">
            <label className="text-xs font-mono text-stone-400">
              2B. Or Paste Direct Drive Link or Image URL:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="https://drive.google.com/file/d/YOUR_FILE_ID/view or direct .jpg link"
                className="flex-1 px-3 py-2 text-xs rounded bg-stone-900 border border-stone-700 text-white placeholder-stone-500 focus:border-[#B99B69] focus:outline-none font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2 text-xs font-bold text-black bg-[#B99B69] hover:bg-[#cbb284] rounded transition-colors whitespace-nowrap"
              >
                Apply Live
              </button>
            </div>
            <p className="text-[11px] text-stone-400">
              Tip: Google Drive share links with &ldquo;Anyone with link can view&rdquo; are automatically converted into direct viewable image URLs!
            </p>
          </form>
        </div>

        {/* Permanent Integration Guide */}
        <div className="space-y-2 pt-2 border-t border-stone-800 text-xs text-stone-400">
          <p className="font-semibold text-stone-300">
            Permanent Project Code Integration:
          </p>
          <p className="leading-relaxed">
            To embed your images permanently in the source code, export your photos from Drive and place them in <code className="text-[#B99B69]">/public/images/wedding/</code> and <code className="text-[#B99B69]">/public/images/maternity/</code>. The website is already structured to read from those paths in <code className="text-[#B99B69]">src/data/studioConfig.ts</code>.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-stone-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-stone-800 hover:bg-stone-700 rounded transition-colors"
          >
            Done, Close Hub
          </button>
        </div>
      </div>
    </div>
  );
};
