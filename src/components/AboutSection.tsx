import React from 'react';
import { Sparkles, Heart, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E8DFC8]">
      {/* Background Soft Gradients (radial gradient without heavy blur filter) */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 rounded-full [background:radial-gradient(circle,rgba(243,232,219,0.4)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Imagery with Layered Frame */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Offset Decorative Background Card */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-full h-full border border-[#D8C7B0] bg-[#F5EFEB] rounded-sm pointer-events-none" />
              
              {/* Main Image */}
              <div className="relative z-10 rounded-sm overflow-hidden bg-[#FAF8F5] shadow-[0_8px_30px_rgba(120,100,88,0.08)] border border-[#EADBCE]">
                <img
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop"
                  alt="Fine jewellery crafting and delicate gold styling at j w jewellery ph official"
                  className="w-full h-[420px] sm:h-[500px] object-cover object-center transition-transform duration-700 hover:scale-103"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A3D35]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlaid Editorial Accent Card */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 z-20 bg-[#FAF8F5] border border-[#DFCBB5] p-5 sm:p-6 rounded-sm shadow-[0_10px_25px_rgba(120,100,88,0.12)] max-w-[240px] sm:max-w-[280px]">
                <div className="flex items-center gap-2 mb-2 text-[#C8A870]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C6D3B]">Craftsmanship</span>
                </div>
                <p className="font-serif text-sm sm:text-base text-[#3A2E26] leading-snug">
                  "Every piece is an intimate celebration of life’s most cherished milestones."
                </p>
                <p className="text-[10px] tracking-wider uppercase text-[#9A887C] mt-2">
                  {BUSINESS_INFO.locationCity}
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Story & Essence */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            
            {/* Subtle "Discover Our Story" visual accent */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C8A870]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#8C6D3B] font-semibold">
                Discover Our Story
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#3A2E26] leading-tight">
                A Passion for Grace & <br />
                <span className="italic font-normal text-[#9A753C]">Lasting Significance</span>
              </h2>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9A887C]">
                {BUSINESS_INFO.name}
              </p>
            </div>

            {/* Narrative text strictly following requirements */}
            <div className="space-y-4 text-[#5E4E45] text-base sm:text-lg leading-relaxed font-normal">
              <p>
                At <strong className="font-medium text-[#3A2E26]">{BUSINESS_INFO.name}</strong>, we believe fine jewellery is far more than an ornament. It is an enduring vessel of affection, a tangible reminder of vows spoken, and an authentic reflection of personal expression.
              </p>
              <p>
                Every ring, necklace, earring, and bracelet is selected and finished with patient dedication to proportion, balance, and radiance. We cherish the quiet alchemy of lustrous precious metals and brilliantly cut gems—shaping pieces that effortlessly accompany both daily rituals and extraordinary milestones.
              </p>
              <p>
                Nestled along Ortigas Avenue in Pasig, our approach centers on a warm, personal, and unhurried consultation experience, allowing each client to find jewellery that resonates deeply with their individual journey.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EADBCE]">
              <div className="p-4 rounded-sm bg-[#F5EFEB] border border-[#EADBCE] space-y-1.5">
                <div className="flex items-center gap-2 text-[#8C6D3B]">
                  <Heart className="w-4 h-4 text-[#C8A870]" />
                  <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#4A3D35]">Personal Expression</span>
                </div>
                <p className="text-xs text-[#786458] leading-relaxed">
                  Designs that mirror your individuality, created to be worn with effortless poise every day.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#F5EFEB] border border-[#EADBCE] space-y-1.5">
                <div className="flex items-center gap-2 text-[#8C6D3B]">
                  <Compass className="w-4 h-4 text-[#C8A870]" />
                  <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#4A3D35]">Honest Guidance</span>
                </div>
                <p className="text-xs text-[#786458] leading-relaxed">
                  A sincere, pressure-free atmosphere dedicated to helping you select pieces you will treasure forever.
                </p>
              </div>
            </div>

            {/* Sub-signature text */}
            <div className="pt-2 flex items-center justify-between text-xs text-[#9A887C]">
              <span>Ortigas Ave, Pasig City</span>
              <span className="font-serif italic text-sm text-[#786458]">Curated for Life’s Memories</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
