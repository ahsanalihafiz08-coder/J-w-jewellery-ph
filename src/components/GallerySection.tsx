import React from 'react';
import { Sparkles } from 'lucide-react';
import { GALLERY_DATA } from '../data/jewelleryData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E8DFC8] section-contain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#8C6D3B] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A870]" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#3A2E26]">
            ATELIER GALLERY
          </h2>
          <div className="w-16 h-[1px] bg-[#C8A870] mx-auto my-3" />
          <p className="text-sm sm:text-base text-[#6B5A4E]">
            Close-up perspectives, warm metallic sheens, and luminous gemstone brilliance from our curated 9-piece collection.
          </p>
        </div>

        {/* 9-Card Gallery Grid (STRICTLY 3 Columns Per Row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {GALLERY_DATA.map((item) => {
            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.preventDefault();
                  onOpenLightbox(item);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenLightbox(item);
                  }
                }}
                className="group relative rounded-2xl overflow-hidden border border-[#E2D7C7] bg-[#FDFBF7] shadow-xs hover:shadow-[0_14px_36px_rgba(120,100,88,0.14)] hover:border-[#C8A870] transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Frame with Aspect Ratio */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE8DE]">
                  <img
                    src={item.image}
                    alt={`${item.title} by j w jewellery ph official`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A2E26]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Proper Descriptive Title Text under each gallery thumbnail image */}
                <div className="p-4 sm:p-5 bg-[#FDFBF7] border-t border-[#F0E6D8] text-center group-hover:bg-[#FCF9F3] transition-colors flex flex-col items-center justify-center">
                  <h3 className="font-serif text-sm sm:text-base font-medium text-[#3A2E26] group-hover:text-[#8C6D3B] transition-colors leading-snug line-clamp-1">
                    {item.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#9A753C] mt-1 font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Guidance Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#8A786D]">
            Click any gallery piece to examine high-resolution details and artisanal specifications in fullscreen.
          </p>
        </div>
      </div>
    </section>
  );
};
