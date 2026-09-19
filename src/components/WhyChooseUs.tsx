import React from 'react';
import { Gem, Sparkles, Crown, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_US_DATA, BUSINESS_INFO } from '../data/jewelleryData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Gem':
        return <Gem className="w-6 h-6 stroke-[1.5]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 stroke-[1.5]" />;
      case 'Crown':
        return <Crown className="w-6 h-6 stroke-[1.5]" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-6 h-6 stroke-[1.5]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#F6F1EA] relative overflow-hidden border-b border-[#E8DFC8]">
      {/* Decorative luxury backdrop details with zero-filter radial gradients for high-FPS scroll */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full [background:radial-gradient(circle,rgba(239,228,214,0.5)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full [background:radial-gradient(circle,rgba(248,239,228,0.6)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#8C6D3B] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A870]" />
            <span>The j w standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#3A2E26]">
            WHY CHOOSE US
          </h2>
          <div className="w-16 h-[1px] bg-[#C8A870] mx-auto my-3" />
          <p className="text-sm sm:text-base text-[#6B5A4E]">
            Built on thoughtful attention, refined aesthetics, and an unwavering commitment to fine Philippine jewellery curation.
          </p>
        </div>

        {/* 4 Feature Columns with Minimal Line-Style Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CHOOSE_US_DATA.map((feature, idx) => (
            <div
              key={feature.title}
              className="group bg-[#FAF8F5] p-8 rounded-sm border border-[#E2D7C7] hover:border-[#C8A870] transition-all duration-400 hover:shadow-[0_8px_24px_rgba(120,100,88,0.08)] flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Minimalist Line Icon Circle */}
                <div className="w-14 h-14 rounded-full border border-[#D8C7B0] group-hover:border-[#C8A870] bg-[#FDFBF7] flex items-center justify-center text-[#9A753C] group-hover:text-[#8C6D3B] group-hover:bg-[#F5EFEB] transition-all duration-300 shadow-xs">
                  {getIcon(feature.icon)}
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#3A2E26] group-hover:text-[#8C6D3B] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#786458] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Number and Subtle Divider */}
              <div className="pt-6 mt-6 border-t border-[#EFE8DE] flex items-center justify-between text-[11px] text-[#9A887C]">
                <span className="tracking-widest uppercase">Pillar 0{idx + 1}</span>
                <span className="w-2 h-2 rounded-full border border-[#C8A870]" />
              </div>
            </div>
          ))}
        </div>

        {/* Brand Assurance Strip */}
        <div className="mt-14 max-w-4xl mx-auto text-center border-t border-[#E2D7C7] pt-8">
          <p className="font-serif italic text-lg sm:text-xl text-[#4A3D35]">
            "Jewellery is an intimate conversation between light, precious metals, and human sentiment."
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-[#9A887C] mt-2">
            — {BUSINESS_INFO.name} Atelier
          </p>
        </div>

      </div>
    </section>
  );
};
