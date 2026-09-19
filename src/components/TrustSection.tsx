import React from 'react';
import { Star, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E8DFC8]">
      {/* Delicate background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full [background:radial-gradient(ellipse,rgba(243,232,219,0.4)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Section Label */}
        <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#8C6D3B] font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A870]" />
          <span>Client Satisfaction</span>
        </div>

        {/* 5.0 Star Prominent Presentation (strictly matching requirement) */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-[#C8A870]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 sm:w-7 h-6 sm:h-7 fill-[#C8A870] stroke-[#B89458]" />
            ))}
          </div>

          <div className="space-y-1">
            <div className="font-serif text-5xl sm:text-6xl font-light text-[#3A2E26] tracking-tight">
              5.0 ★
            </div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold">
              Customer Rating
            </p>
          </div>
        </div>

        {/* Delicate Gold Divider */}
        <div className="w-20 h-[1px] bg-[#C8A870] mx-auto my-8" />

        {/* Trust-Focused Copy (Strictly as specified: "Beautiful jewellery deserves a beautiful experience.") */}
        <div className="max-w-2xl mx-auto space-y-4">
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#3A2E26] font-light italic leading-snug">
            “Beautiful jewellery deserves a beautiful experience.”
          </blockquote>
          <p className="text-sm sm:text-base text-[#6B5A4E] leading-relaxed">
            Every consultation is grounded in genuine care, transparent guidance, and the shared joy of discovering a piece that speaks to your heart.
          </p>
        </div>

        {/* Three Trust Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#FDFBF7] p-6 rounded-sm border border-[#E2D7C7] space-y-2.5">
            <div className="flex items-center gap-2 text-[#8C6D3B]">
              <ShieldCheck className="w-4 h-4 text-[#C8A870]" />
              <h4 className="font-serif text-base font-medium text-[#3A2E26]">Authentic Precious Metals</h4>
            </div>
            <p className="text-xs text-[#786458] leading-relaxed">
              Every creation is selected with utmost fidelity to metallurgy, weight, and immaculate surface luster.
            </p>
          </div>

          <div className="bg-[#FDFBF7] p-6 rounded-sm border border-[#E2D7C7] space-y-2.5">
            <div className="flex items-center gap-2 text-[#8C6D3B]">
              <Heart className="w-4 h-4 text-[#C8A870]" />
              <h4 className="font-serif text-base font-medium text-[#3A2E26]">Unhurried Appointments</h4>
            </div>
            <p className="text-xs text-[#786458] leading-relaxed">
              We welcome your inquiries with thoughtful patience, providing tailored styling without pressure.
            </p>
          </div>

          <div className="bg-[#FDFBF7] p-6 rounded-sm border border-[#E2D7C7] space-y-2.5">
            <div className="flex items-center gap-2 text-[#8C6D3B]">
              <CheckCircle2 className="w-4 h-4 text-[#C8A870]" />
              <h4 className="font-serif text-base font-medium text-[#3A2E26]">Local Pasig Presence</h4>
            </div>
            <p className="text-xs text-[#786458] leading-relaxed">
              Proudly serving patrons across Pasig and Metro Manila with direct, responsive communication.
            </p>
          </div>
        </div>

        {/* Location & Brand Verification Badge */}
        <div className="mt-10 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#F5EFEB] border border-[#E2D7C7] text-xs text-[#786458]">
          <span className="w-2 h-2 rounded-full bg-[#C8A870]" />
          <span>{BUSINESS_INFO.name} • {BUSINESS_INFO.address}</span>
        </div>

      </div>
    </section>
  );
};
