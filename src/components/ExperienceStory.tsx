import React from 'react';
import { Sparkles, HeartHandshake, Award, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ExperienceStory: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full Editorial Banner Container */}
        <div className="relative rounded-sm overflow-hidden border border-[#E2D7C7] bg-[#F5EFEB] shadow-[0_12px_40px_rgba(120,100,88,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[520px]">
            
            {/* Left/Main Editorial Image with Soft Warm Grading */}
            <div className="lg:col-span-6 relative overflow-hidden h-[340px] sm:h-[400px] lg:h-full">
              <img
                src="https://i.ibb.co/YBrnPGxD/Sapphire-ring-in-velvet-box-20260918200537.jpg"
                alt="Sapphire ring in velvet box - Jewellery That Becomes Part of Your Story by j w jewellery ph official"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Soft champagne & rose gold tinted overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF8F5]/10 to-[#FAF8F5] lg:block hidden pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/20 to-transparent lg:hidden block pointer-events-none" />
            </div>

            {/* Right Story Content Area */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-[#FAF8F5] relative">
              
              <div className="space-y-6 max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#8C6D3B] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#C8A870]" />
                  <span>The Choosing Experience</span>
                </div>

                <div className="space-y-3">
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#3A2E26] leading-tight">
                    Jewellery That Becomes <br />
                    <span className="italic font-normal text-[#9A753C]">Part of Your Story</span>
                  </h2>
                  <div className="w-14 h-[1px] bg-[#C8A870]" />
                </div>

                <div className="space-y-4 text-[#5E4E45] text-sm sm:text-base leading-relaxed">
                  <p>
                    Selecting fine jewellery is an intimate milestone. Whether commemorating an anniversary, honoring personal growth, or celebrating an eternal bond, the piece you choose will forever hold the memory of this moment.
                  </p>
                  <p>
                    At <strong className="font-medium text-[#3A2E26]">{BUSINESS_INFO.name}</strong>, we curate with respect for longevity. We believe true luxury lies not in ostentation, but in subtle proportion, tactile comfort, and the enduring glow of honest materials.
                  </p>
                </div>

                {/* Experiential Highlights */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F5EFEB] border border-[#DFCBB5] flex items-center justify-center text-[#9A753C] shrink-0 mt-0.5">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-medium text-[#3A2E26]">Thoughtful Guidance</h4>
                      <p className="text-[11px] text-[#786458] mt-0.5 leading-snug">
                        Dedicated care to discover pieces harmonizing with your personal aesthetic.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F5EFEB] border border-[#DFCBB5] flex items-center justify-center text-[#9A753C] shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-medium text-[#3A2E26]">Enduring Elegance</h4>
                      <p className="text-[11px] text-[#786458] mt-0.5 leading-snug">
                        Designs that transcend fleeting trends to remain radiant for generations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-CTA with equal height/width buttons and clean WhatsApp & Call action buttons */}
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                  <div className="grid grid-cols-2 gap-3 w-full sm:w-auto">
                    <a
                      href={BUSINESS_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 px-5 sm:px-7 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs uppercase tracking-wider font-semibold shadow-xs transition-all active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <WhatsAppIcon className="w-4 h-4 shrink-0" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="h-11 px-5 sm:px-7 rounded-full border border-[#C8A870] bg-[#FAF8F5] text-[#785E38] hover:text-[#3A2E26] hover:bg-[#F5EFEB] text-xs uppercase tracking-wider font-semibold shadow-xs transition-all active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <Phone className="w-4 h-4 text-[#C8A870] shrink-0" />
                      <span>CALL NOW</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
