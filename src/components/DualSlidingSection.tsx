import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { DUAL_SLIDING_TOP_ROW, DUAL_SLIDING_BOTTOM_ROW } from '../data/jewelleryData';
import { FeaturedProduct } from '../types';
import { useWishlist } from '../context/WishlistContext';

interface DualSlidingSectionProps {
  onSelectItem: (product: FeaturedProduct) => void;
}

export const DualSlidingSection: React.FC<DualSlidingSectionProps> = ({ onSelectItem }) => {
  const { isWishlisted, toggleWishlist } = useWishlist();

  const handleCardClick = (
    e: React.MouseEvent,
    card: { id: string; title: string; image: string; tag: string }
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const mappedProduct: FeaturedProduct = {
      id: card.id,
      name: card.title,
      category: card.tag,
      subtitle: 'Atelier Archive Masterpiece',
      description: `Bespoke handcrafted creation featuring ${card.title.toLowerCase()}. Forged in certified 18K Philippine gold with precision diamond and gemstone mounts at our Pasig atelier.`,
      metal: '18K Solid Gold',
      finishing: 'High-Polish Luster',
      price: '₱42,000 - ₱95,000',
      image: card.image,
      features: [
        'Solid 18K Philippine Gold',
        'Certified Conflict-Free Diamonds / Gemstones',
        'Bespoke fit and complimentary commemorative engraving',
      ],
    };

    onSelectItem(mappedProduct);
  };

  const handleToggleWishlist = (
    e: React.MouseEvent,
    card: { id: string; title: string; image: string; tag: string }
  ) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({
      id: card.id,
      name: card.title,
      category: card.tag,
      image: card.image,
      price: '₱42,000 - ₱95,000',
      description: `${card.tag} from the Atelier Archive`,
    });
  };

  return (
    <section id="dual-marquee" className="py-20 md:py-24 bg-[#F5EFEB] relative overflow-hidden border-b border-[#E8DFC8] section-contain">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-14">
        <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#8C6D3B] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A870]" />
          <span>Atelier Archive Panorama</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#3A2E26] mt-2">
          THE ATELIER CURATION
        </h2>
        <div className="w-16 h-[1px] bg-[#C8A870] mx-auto my-3" />
        <p className="text-sm sm:text-base text-[#6B5A4E] max-w-2xl mx-auto">
          Explore 44 handcrafted creations across continuous dual-motion showcases, spotlighting fine Philippine gold and gemstone craftsmanship.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8 overflow-hidden no-scrollbar">
        {/* Top Row: 22 Cards Scrolling Left */}
        <div className="overflow-hidden no-scrollbar gpu-layer">
          <div className="max-w-7xl mx-auto px-4 mb-2 flex items-center justify-between text-xs text-[#786458]">
            <span className="uppercase tracking-[0.2em] font-medium text-[11px] text-[#8C6D3B]">
              Row 01 • Bands, Solitaires & Sapphires (22 Pieces)
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#9A887C] hidden sm:inline">
              Click any piece to view details
            </span>
          </div>

          <div className="animate-marquee-left flex gap-4 sm:gap-5 items-stretch py-1">
            {[...DUAL_SLIDING_TOP_ROW, ...DUAL_SLIDING_TOP_ROW].map((card, idx) => {
              const wishlisted = isWishlisted(card.id);
              return (
                <div
                  key={`${card.id}-${idx}`}
                  role="button"
                  tabIndex={0}
                  onClick={(e) => handleCardClick(e, card)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleCardClick(e as unknown as React.MouseEvent, card);
                    }
                  }}
                  className="w-56 sm:w-64 shrink-0 group relative rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#E2D7C7] shadow-[0_4px_18px_rgba(120,100,88,0.1),0_1px_4px_rgba(120,100,88,0.06)] hover:border-[#C8A870] hover:shadow-[0_10px_28px_rgba(120,100,88,0.18)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  {/* Image Frame */}
                  <div className="relative h-40 sm:h-44 overflow-hidden bg-[#EFE8DE] shrink-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#FAF8F5]/95 text-[9.5px] uppercase tracking-wider text-[#786458] border border-[#E8DFC8] font-medium shadow-xs">
                      {card.tag}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleToggleWishlist(e, card)}
                      className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-[#FAF8F5]/95 border border-[#E8DFC8] flex items-center justify-center text-[#8C6D3B] hover:text-[#C8A870] transition-colors shadow-xs"
                      title={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                      aria-label="Save to wishlist"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          wishlisted ? 'fill-[#C8A870] text-[#C8A870]' : 'text-[#8C6D3B]'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Information panel fitting tightly without extra blank space */}
                  <div className="p-3 sm:p-3.5 bg-[#FAF8F5] flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h3
                        className="font-serif text-sm sm:text-base text-[#3A2E26] font-medium truncate group-hover:text-[#8C6D3B] transition-colors leading-snug"
                        title={card.title}
                      >
                        {card.title}
                      </h3>
                      <p className="text-[10px] uppercase tracking-wider text-[#9A753C] mt-0.5 font-medium">
                        Handcrafted Detail
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#F0E6D8] flex items-center justify-between text-[11px] sm:text-xs">
                      <span className="font-serif font-semibold text-[#8C6D3B]">18K Solid Gold</span>
                      <span className="text-[#5E4E45] group-hover:underline text-[10.5px] sm:text-[11px]">View →</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Row: 22 Cards Scrolling Right */}
        <div className="overflow-hidden no-scrollbar gpu-layer">
          <div className="max-w-7xl mx-auto px-4 mb-2 flex items-center justify-between text-xs text-[#786458]">
            <span className="uppercase tracking-[0.2em] font-medium text-[11px] text-[#8C6D3B]">
              Row 02 • Tennis Bracelets, Signets & Drop Earrings (22 Pieces)
            </span>
            <span className="text-[10px] tracking-wider uppercase text-[#9A887C] hidden sm:inline">
              Click any piece to view details
            </span>
          </div>

          <div className="animate-marquee-right flex gap-4 sm:gap-5 items-stretch py-1">
            {[...DUAL_SLIDING_BOTTOM_ROW, ...DUAL_SLIDING_BOTTOM_ROW].map((card, idx) => {
              const wishlisted = isWishlisted(card.id);
              return (
                <div
                  key={`${card.id}-${idx}`}
                  role="button"
                  tabIndex={0}
                  onClick={(e) => handleCardClick(e, card)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleCardClick(e as unknown as React.MouseEvent, card);
                    }
                  }}
                  className="w-56 sm:w-64 shrink-0 group relative rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#E2D7C7] shadow-[0_4px_18px_rgba(120,100,88,0.1),0_1px_4px_rgba(120,100,88,0.06)] hover:border-[#C8A870] hover:shadow-[0_10px_28px_rgba(120,100,88,0.18)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  {/* Image Frame */}
                  <div className="relative h-40 sm:h-44 overflow-hidden bg-[#EFE8DE] shrink-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#FAF8F5]/95 text-[9.5px] uppercase tracking-wider text-[#786458] border border-[#E8DFC8] font-medium shadow-xs">
                      {card.tag}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleToggleWishlist(e, card)}
                      className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-[#FAF8F5]/95 border border-[#E8DFC8] flex items-center justify-center text-[#8C6D3B] hover:text-[#C8A870] transition-colors shadow-xs"
                      title={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                      aria-label="Save to wishlist"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          wishlisted ? 'fill-[#C8A870] text-[#C8A870]' : 'text-[#8C6D3B]'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Information panel fitting tightly without extra blank space */}
                  <div className="p-3 sm:p-3.5 bg-[#FAF8F5] flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h3
                        className="font-serif text-sm sm:text-base text-[#3A2E26] font-medium truncate group-hover:text-[#8C6D3B] transition-colors leading-snug"
                        title={card.title}
                      >
                        {card.title}
                      </h3>
                      <p className="text-[10px] uppercase tracking-wider text-[#9A753C] mt-0.5 font-medium">
                        Artisanal Finish
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#F0E6D8] flex items-center justify-between text-[11px] sm:text-xs">
                      <span className="font-serif font-semibold text-[#8C6D3B]">18K Solid Gold</span>
                      <span className="text-[#5E4E45] group-hover:underline text-[10.5px] sm:text-[11px]">View →</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
