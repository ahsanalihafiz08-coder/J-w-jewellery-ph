import React from 'react';
import { Phone, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface CtaSectionProps {
  onContactClick: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onContactClick }) => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-[#F6F1EA] via-[#FAF4ED] to-[#F6F1EA] relative overflow-hidden border-b border-[#E8DFC8]">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full [background:radial-gradient(ellipse,rgba(238,222,203,0.4)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        {/* Sub-pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-[#DFCBB5] text-[11px] uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A870]" />
          <span>Your Personal Jewellery Journey</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#3A2E26] tracking-tight">
          FIND SOMETHING BEAUTIFUL
        </h2>

        {/* Delicate Gold Accent Bar */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-[1px] bg-[#C8A870]" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A870] bg-[#FAF8F5]" />
          <div className="w-12 h-[1px] bg-[#C8A870]" />
        </div>

        {/* Supporting Text */}
        <p className="max-w-xl mx-auto text-base sm:text-lg text-[#6B5A4E] leading-relaxed">
          Explore elegant jewellery and connect with {BUSINESS_INFO.name}. We look forward to assisting you in selecting or commissioning a piece of enduring grace.
        </p>

        {/* Action Buttons: strictly pill-shaped rounded-full (border-radius: 9999px) with matched height/width */}
        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto">
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            id="cta-phone-call-button"
            className="w-full sm:w-auto flex-1 min-h-[48px] sm:min-h-[52px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 rounded-full bg-gradient-to-r from-[#C8A870] via-[#D8BC88] to-[#C8A870] hover:from-[#B89458] hover:to-[#B89458] text-[#3A2E26] text-xs uppercase tracking-[0.16em] font-semibold shadow-[0_4px_20px_rgba(200,168,112,0.35)] hover:shadow-[0_6px_24px_rgba(200,168,112,0.45)] transition-all duration-300 active:scale-[0.98] whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-[#3A2E26] shrink-0" />
            <span>CALL NOW</span>
          </a>

          <button
            type="button"
            id="cta-get-in-touch-button"
            onClick={onContactClick}
            className="w-full sm:w-auto flex-1 min-h-[48px] sm:min-h-[52px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 rounded-full border border-[#C8A870] text-[#785E38] hover:text-[#3A2E26] bg-[#FAF8F5] hover:bg-[#F3ECE0] text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 active:scale-[0.98] whitespace-nowrap shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#C8A870] shrink-0" />
            <span>Get In Touch</span>
          </button>
        </div>

        {/* Location Subtext */}
        <div className="pt-2 text-xs text-[#9A887C]">
          <span>{BUSINESS_INFO.address}</span>
        </div>
      </div>
    </section>
  );
};
