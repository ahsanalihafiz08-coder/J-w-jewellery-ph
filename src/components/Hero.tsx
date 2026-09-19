import React from 'react';
import { Sparkles, Compass, Calendar, Heart } from 'lucide-react';
import { BUSINESS_INFO, HERO_CAROUSEL_CARDS } from '../data/jewelleryData';
import { FeaturedProduct } from '../types';
import { useWishlist } from '../context/WishlistContext';

interface HeroProps {
  onExplore: () => void;
  onBookConsultation: () => void;
  onSelectProduct: (product: FeaturedProduct) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onBookConsultation, onSelectProduct }) => {
  const { isWishlisted, toggleWishlist } = useWishlist();

  const handleCardClick = (e: React.MouseEvent, card: (typeof HERO_CAROUSEL_CARDS)[0]) => {
    e.preventDefault();
    e.stopPropagation();

    const productDetail: FeaturedProduct = {
      id: card.id,
      name: card.title,
      category: card.category,
      subtitle: 'Atelier Signature Creation',
      description: `Handcrafted ${card.title.toLowerCase()} forged with 18K solid Philippine gold and hand-selected certified diamonds, individually curated at our Pasig atelier.`,
      metal: '18K Solid Philippine Gold',
      finishing: 'Artisanal Mirror & Satin Luster',
      price: '₱48,000',
      image: card.image,
      features: [
        'Solid 18K Philippine Gold',
        'Certified Conflict-Free Natural Diamonds',
        'Custom ring sizing and tailored engraving included',
      ],
    };

    onSelectProduct(productDetail);
  };

  const handleToggleWishlist = (e: React.MouseEvent, card: (typeof HERO_CAROUSEL_CARDS)[0]) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({
      id: card.id,
      name: card.title,
      category: card.category,
      image: card.image,
      price: '₱48,000',
      description: `${card.category} handcrafted in 18K gold.`,
    });
  };

  return (
    <section id="hero" className="relative w-full bg-[#FAF8F5] border-b border-[#E8DFC8] lg:border-none m-0 p-0 lg:m-0 lg:p-0">
      {/* 1. HERO VIDEO CONTAINER - STRICTLY WRAPS VIDEO CONTENT, ZERO VERTICAL SPACE ON DESKTOP */}
      <div className="hero-media-container relative w-full h-screen lg:h-auto overflow-hidden m-0 p-0">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 lg:relative w-full h-full lg:h-auto object-cover object-center lg:block m-0 p-0 border-0"
        >
          <source
            src="https://res.cloudinary.com/damd6xdts/video/upload/v1789783682/Diamond_ring_rising_from_box_20260919045126_nbzhf0.mp4"
            type="video/mp4"
          />
        </video>

        {/* Subtle Luxury Dark Overlay for Pristine Typography Contrast */}
        <div className="absolute inset-0 bg-black/45 z-[1] pointer-events-none m-0 p-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/50 z-[1] pointer-events-none m-0 p-0" />

        {/* Hero Central Content */}
        <div className="hero-overlay-content absolute inset-0 z-10 w-full h-full flex flex-col items-center justify-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center m-0 p-0">
          {/* Luxury Atelier Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-[#DFBE82]/50 text-[#F5EFEB] text-[10px] sm:text-xs tracking-[0.25em] uppercase font-medium shadow-sm mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBE82]" />
            <span>Official Fine Jewellery Atelier • Pasig City</span>
          </div>

          {/* Main Hero Title */}
          <div className="space-y-3 max-w-4xl">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#FAF8F5] leading-[1.1] tracking-tight drop-shadow-md">
              TIMELESS ELEGANCE, <br />
              <span className="italic font-normal text-[#DFBE82]">BEAUTIFULLY CRAFTED</span>
            </h1>

            {/* Gold Accent Divider */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="w-16 h-[1px] bg-[#DFBE82]" />
              <div className="w-2 h-2 rotate-45 border border-[#DFBE82] bg-[#FAF8F5]" />
              <div className="w-16 h-[1px] bg-[#DFBE82]" />
            </div>
          </div>

          {/* Supporting Narrative */}
          <p className="max-w-2xl text-xs sm:text-base md:text-lg text-[#F5EFEB]/90 font-light leading-relaxed mt-3 sm:mt-4 drop-shadow-sm">
            Discover exquisite Philippine handcrafted jewellery made to celebrate life’s most cherished milestones.
            Custom engagement rings, bridal sets, and timeless heirloom creations in 18K fine gold.
          </p>

          {/* Action Buttons: ONLY 2 BUTTONS ("Explore Collection" and "Book Consultation") */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto pt-6">
            <button
              type="button"
              id="hero-explore-button"
              onClick={onExplore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C8A870] via-[#DFBE82] to-[#C8A870] hover:from-[#B89458] hover:to-[#B89458] text-[#3A2E26] text-xs uppercase tracking-[0.2em] font-semibold shadow-[0_6px_22px_rgba(200,168,112,0.4)] hover:shadow-[0_8px_28px_rgba(200,168,112,0.55)] transition-all duration-300 active:scale-[0.98]"
            >
              <Compass className="w-4 h-4 text-[#3A2E26]" />
              <span>Explore Collection</span>
            </button>

            <button
              type="button"
              id="hero-book-consultation-button"
              onClick={onBookConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/30 text-[#FAF8F5] hover:text-[#FAF8F5] bg-black/40 hover:bg-black/60 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-[#DFBE82]" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. AUTO-SCROLLING HORIZONTAL PRODUCT CARDS (STRICTLY BELOW 16:9 CONTAINER, NO OVERLAPPING) */}
      <div className="w-full bg-[#FAF8F5] py-8 sm:py-10 overflow-hidden border-t border-[#E8DFC8] section-contain">
        {/* Marquee Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between text-xs text-[#786458]">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C8A870]" />
            <span className="uppercase tracking-[0.2em] text-[11px] font-semibold text-[#8C6D3B]">
              Atelier Highlight Reel • 22 Signature Creations
            </span>
          </div>
          <span className="text-[10px] tracking-wider uppercase text-[#9A887C] hidden sm:inline">
            Click any piece to view details • Hover to pause
          </span>
        </div>

        {/* Continuous Horizontal Marquee Container with increased card height & GPU layer */}
        <div className="overflow-hidden no-scrollbar py-2 gpu-layer">
          <div className="animate-marquee-left flex gap-5 sm:gap-6 items-stretch px-4">
            {[...HERO_CAROUSEL_CARDS, ...HERO_CAROUSEL_CARDS].map((card, idx) => {
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
                  className="w-64 sm:w-72 shrink-0 group relative rounded-2xl overflow-hidden bg-[#FDFBF7] border border-[#E2D7C7] shadow-[0_4px_18px_rgba(120,100,88,0.1),0_1px_4px_rgba(120,100,88,0.06)] hover:border-[#C8A870] hover:shadow-[0_12px_28px_rgba(120,100,88,0.18)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  {/* Image Frame */}
                  <div className="relative h-44 sm:h-48 overflow-hidden bg-[#EFE8DE] shrink-0">
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

                    {/* Category Pill */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#FAF8F5]/95 text-[10px] uppercase tracking-wider text-[#786458] border border-[#E8DFC8] font-medium shadow-xs">
                      {card.category}
                    </div>

                    {/* Wishlist Heart Button */}
                    <button
                      type="button"
                      onClick={(e) => handleToggleWishlist(e, card)}
                      className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#FAF8F5]/95 border border-[#E8DFC8] flex items-center justify-center text-[#8C6D3B] hover:text-[#C8A870] transition-colors shadow-xs"
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

                  {/* Card Info - Tightly Formatted without Extra Blank Space */}
                  <div className="p-3.5 sm:p-4 bg-[#FDFBF7] flex-1 flex flex-col justify-between space-y-2.5">
                    <div>
                      <h3
                        className="font-serif text-sm sm:text-base text-[#3A2E26] font-medium leading-snug group-hover:text-[#8C6D3B] transition-colors line-clamp-2"
                        title={card.title}
                      >
                        {card.title}
                      </h3>
                      <p className="text-[10px] uppercase tracking-wider text-[#9A753C] mt-0.5 font-medium">
                        18K Solid Gold • Atelier Curated
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-[#F0E6D8] flex items-center justify-between text-xs">
                      <span className="font-serif text-sm sm:text-base font-semibold text-[#8C6D3B]">₱48,000</span>
                      <span className="text-[10px] uppercase tracking-wider text-[#5E4E45] group-hover:text-[#3A2E26] font-medium group-hover:underline">
                        View Details →
                      </span>
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
