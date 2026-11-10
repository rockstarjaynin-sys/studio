import React from 'react';
import { Link } from 'react-router-dom';
import {
  SlidersHorizontal,
  CheckCircle2,
  Info,
  ShieldAlert,
  ArrowRight,
  Phone,
  MessageCircle,
  HelpCircle,
} from 'lucide-react';
import { STUDIO_CONFIG, FAQ_ITEMS } from '../data/studioConfig';
import { PackageComparison } from '../components/PackageComparison';

export const PackagesPage: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2] text-[#1A1815] pt-28 pb-24 transition-colors">
      {/* 1. HERO HEADER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2D6C3] bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6] to-[#FAF7F2]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2D6C3] text-[#B99B69] text-xs font-mono font-bold uppercase shadow-xs">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Interactive Investment Portal</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1815] tracking-tight leading-tight">
            Packages &amp; Pricing Comparison
          </h1>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Transparent, comprehensive package structures across weddings, maternity, celebrations,
            outdoor sessions, and 4K cinematography. Compare services side by side with zero guesswork.
          </p>

          <div className="p-4 rounded-2xl bg-white border border-[#E2D6C3] text-xs text-stone-600 max-w-2xl mx-auto flex items-start gap-3 text-left shadow-sm">
            <ShieldAlert className="w-4 h-4 text-[#B99B69] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#1A1815] font-semibold">Provisional Benchmark Pricing:</strong> All rates and
              inclusions displayed below are demonstration packages. Finalized quotes and custom
              contracts are tailored to your celebration date and venue during direct consultation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE INTERACTIVE COMPARISON MATRIX */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PackageComparison initialCategory="wedding" />
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-gradient-to-b from-[#F5EFE6] via-[#FAF7F2] to-[#F5EFE6] border-t border-[#E2D6C3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B99B69] font-bold">
              Common Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1815]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => (
              <div
                key={index}
                className="p-7 rounded-[2rem] bg-white border border-[#E2D6C3] shadow-sm hover:shadow-md transition-shadow space-y-2"
              >
                <div className="flex items-start gap-3.5">
                  <HelpCircle className="w-5 h-5 text-[#B99B69] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1815]">{faq.question}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans mt-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CUSTOM PACKAGE INQUIRY BANNER */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-[#FAF7F2] via-[#F4EDE2] to-[#FAF7F2] border border-[#E2D6C3] shadow-xl text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1815]">
            Need a completely custom photography package?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
            If your event spans multiple days, involves special drone permits, or requires a custom
            flush-mount album layout, our directors will prepare a bespoke itinerary.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={STUDIO_CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-600 rounded-full transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1815] bg-gradient-to-r from-[#D9C5A5] via-[#E2D2B8] to-[#B99B69] hover:from-[#cbb284] hover:to-[#a88a58] rounded-full transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
