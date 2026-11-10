import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Check,
  X as CrossIcon,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
  Info,
  Calendar,
  Layers,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';
import { STUDIO_PACKAGES, STUDIO_CONFIG, StudioPackage } from '../data/studioConfig';

interface PackageComparisonProps {
  initialCategory?: 'wedding' | 'maternity' | 'celebrations' | 'outdoor' | 'cinematography';
  className?: string;
}

export const PackageComparison: React.FC<PackageComparisonProps> = ({
  initialCategory = 'wedding',
  className = '',
}) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<
    'wedding' | 'maternity' | 'celebrations' | 'outdoor' | 'cinematography'
  >(initialCategory);

  // Filter packages by current category
  const categoryPackages = STUDIO_PACKAGES.filter((p) => p.category === selectedCategory);

  // Select up to 3 package IDs to compare side by side
  const [selectedIds, setSelectedIds] = useState<string[]>(() => {
    return categoryPackages.slice(0, 3).map((p) => p.id);
  });

  const handleCategoryChange = (
    cat: 'wedding' | 'maternity' | 'celebrations' | 'outdoor' | 'cinematography'
  ) => {
    setSelectedCategory(cat);
    const pkgs = STUDIO_PACKAGES.filter((p) => p.category === cat);
    setSelectedIds(pkgs.slice(0, 3).map((p) => p.id));
  };

  const toggleSelectPackage = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((item) => item !== id));
      }
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
      } else {
        setSelectedIds([selectedIds[0], selectedIds[1], id]);
      }
    }
  };

  const selectedPackages = categoryPackages.filter((p) => selectedIds.includes(p.id));

  const categories = [
    { key: 'wedding', label: 'Wedding Packages' },
    { key: 'maternity', label: 'Maternity & Baby' },
    { key: 'celebrations', label: 'Baby Shower & Events' },
    { key: 'outdoor', label: 'Outdoor Shoots' },
    { key: 'cinematography', label: 'Cinematography' },
  ] as const;

  const comparisonRows = [
    { key: 'coverage', label: 'Session / Coverage Duration' },
    { key: 'editedPhotos', label: 'Master Edited Photographs' },
    { key: 'rawPhotos', label: 'Complete RAW Archive Delivery' },
    { key: 'cinematography', label: 'Cinematic Video / 4K Film' },
    { key: 'droneFootage', label: 'Licensed 4K Aerial Drone Coverage' },
    { key: 'reelsCount', label: 'Social Media Reels (Instagram 4K)' },
    { key: 'outfitAssistance', label: 'Wardrobe & Outfit Styling Provision' },
    { key: 'makeupAssistance', label: 'Professional Makeup Coordination' },
    { key: 'luxuryAlbum', label: 'Luxury Album / Framed Canvas Print' },
    { key: 'deliveryTime', label: 'Post-Production Turnaround' },
    { key: 'crewSize', label: 'Dedicated On-Site Studio Crew' },
  ] as const;

  const renderFeatureValue = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 shadow-xs">
          <Check className="w-4 h-4 stroke-[2.5]" />
        </span>
      ) : (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-stone-100 text-stone-400">
          <CrossIcon className="w-3.5 h-3.5" />
        </span>
      );
    }
    return <span className="text-stone-800 text-xs sm:text-sm font-semibold">{val}</span>;
  };

  const handleEnquire = (pkg: StudioPackage) => {
    navigate(
      `/contact?package=${encodeURIComponent(pkg.name)}&cat=${encodeURIComponent(
        pkg.category
      )}&price=NPR ${pkg.priceNPR.toLocaleString()}`
    );
  };

  return (
    <div className={`space-y-10 text-[#1A1815] ${className}`}>
      {/* Category Pills Strip */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E2D6C3] pb-6">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto p-1.5 bg-white rounded-full border border-[#E2D6C3] shadow-xs">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleCategoryChange(cat.key)}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all whitespace-nowrap hover:scale-105 active:scale-95 ${
                selectedCategory === cat.key
                  ? 'bg-gradient-to-r from-[#D9C5A5] to-[#B99B69] text-[#1A1815] shadow-sm'
                  : 'text-stone-600 hover:text-[#1A1815] hover:bg-stone-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Informative Notice */}
        <div className="flex items-center gap-2 text-xs text-stone-600 font-medium">
          <Info className="w-4 h-4 text-[#B99B69] shrink-0" />
          <span>Select up to 3 packages to compare side by side</span>
        </div>
      </div>

      {/* Package Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {categoryPackages.map((pkg) => {
          const isSelected = selectedIds.includes(pkg.id);
          return (
            <div
              key={pkg.id}
              className={`relative rounded-[2rem] border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                pkg.isPopular
                  ? 'bg-white border-[#D9C5A5] shadow-[0_12px_32px_-6px_rgba(185,155,105,0.22)] ring-2 ring-[#B99B69]/40'
                  : 'bg-white border-[#E5DAC8] shadow-sm hover:shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#D9C5A5] to-[#B99B69] text-[#1A1815] text-[10px] font-bold tracking-widest uppercase shadow-sm">
                  Most Requested Choice
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1815]">{pkg.name}</h4>
                    <p className="text-xs text-stone-500 mt-1">{pkg.tagline}</p>
                  </div>
                  <button
                    onClick={() => toggleSelectPackage(pkg.id)}
                    className={`px-3 py-1.5 text-[11px] rounded-full font-mono transition-all hover:scale-105 active:scale-95 ${
                      isSelected
                        ? 'bg-[#B99B69] text-white font-bold shadow-xs'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {isSelected ? 'Comparing ✓' : '+ Compare'}
                  </button>
                </div>

                {/* Price Display */}
                <div className="pt-2 pb-3 border-y border-[#EAE1D3]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-mono uppercase text-[#B99B69] font-bold">Demo Price</span>
                    <span className="text-3xl font-bold text-[#1A1815] font-mono tabular-nums">
                      NPR {pkg.priceNPR.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-500 block mt-0.5">
                    *Provisional benchmark price. Custom quotes provided upon consultation.
                  </span>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{pkg.summary}</p>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#B99B69] font-bold">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#B99B69] shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[#EAE1D3]">
                <button
                  onClick={() => handleEnquire(pkg)}
                  className="w-full py-3 px-5 text-xs font-bold uppercase tracking-wider text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] via-[#E2D2B8] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Select &amp; Enquire</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Side-by-Side Detailed Comparison Table */}
      <div className="mt-16 pt-8 border-t border-[#E2D6C3]">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-[#B99B69] mb-1">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-wider font-bold">
                Interactive Side-by-Side Analysis
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1815]">
              Detailed Inclusions Table ({selectedPackages.length} Selected)
            </h3>
          </div>
          <p className="text-xs text-stone-600">
            Compare hours, deliverables, raw files, and equipment coverage
          </p>
        </div>

        {/* Responsive Table Container with Soft Light Framing */}
        <div className="overflow-x-auto rounded-[2rem] border border-[#E2D6C3] bg-white shadow-md">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-[#E2D6C3] bg-[#FAF7F2]">
                <th className="p-5 text-xs font-bold uppercase tracking-wider text-stone-700 w-1/4">
                  Feature / Inclusions
                </th>
                {selectedPackages.map((pkg) => (
                  <th
                    key={pkg.id}
                    className={`p-5 text-center ${
                      pkg.isPopular ? 'bg-[#B99B69]/10' : ''
                    }`}
                  >
                    <span className="block font-serif text-lg font-bold text-[#1A1815]">
                      {pkg.name}
                    </span>
                    <span className="block text-sm font-bold text-[#B99B69] font-mono mt-1">
                      NPR {pkg.priceNPR.toLocaleString()}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE1D3]">
              {comparisonRows.map((row) => (
                <tr key={row.key} className="hover:bg-[#FAF7F2]/60 transition-colors">
                  <td className="p-4 sm:p-5 text-xs font-semibold text-stone-700">
                    {row.label}
                  </td>
                  {selectedPackages.map((pkg) => (
                    <td
                      key={pkg.id}
                      className={`p-4 sm:p-5 text-center ${
                        pkg.isPopular ? 'bg-[#B99B69]/5' : ''
                      }`}
                    >
                      {renderFeatureValue(
                        pkg.features[row.key as keyof typeof pkg.features]
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Bottom Table Action Row */}
              <tr className="bg-[#FAF7F2]">
                <td className="p-5 text-xs text-stone-600 font-mono font-bold">
                  Reserve This Tier:
                </td>
                {selectedPackages.map((pkg) => (
                  <td key={pkg.id} className="p-5 text-center">
                    <button
                      onClick={() => handleEnquire(pkg)}
                      className="px-5 py-2.5 text-xs font-bold text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-sm hover:scale-105 active:scale-95 whitespace-nowrap inline-flex items-center gap-1.5"
                    >
                      <span>Book {pkg.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Disclaimer Card */}
        <div className="mt-6 p-5 rounded-2xl bg-[#F6EFE5] border border-[#E2D6C3] flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-[#B99B69] shrink-0 mt-0.5" />
          <div className="text-xs text-stone-600 space-y-1">
            <p className="font-bold text-[#1A1815]">Provisional Pricing Note</p>
            <p>
              The prices and service inclusions listed above are for demonstration and benchmark estimation.
              Every celebration has unique locations, guest counts, and rituals. BABA PRODUCTION STUDIO
              will provide your exact, finalized contract upon direct consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
