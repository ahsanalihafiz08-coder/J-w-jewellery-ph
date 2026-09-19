import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { EXPLORE_COLLECTION_CARDS } from '../data/jewelleryData';
import { CollectionItem } from '../types';
import { useWishlist } from '../context/WishlistContext';
import { BookingProductDetails } from './BookingModal';

interface CollectionsSectionProps {
  onSelectCollection: (item: CollectionItem) => void;
  onBookCollection?: (item: BookingProductDetails) => void;
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({
  onSelectCollection,
}) => {
  const { isWishlisted, toggleWishlist } = useWishlist();

  const handleCardClick = (e: React.MouseEvent, collection: CollectionItem) => {
    e.preventDefault();
    onSelectCollection(collection);
  };

  const handleToggleWishlist = (e: React.MouseEvent, collection: CollectionItem) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({
      id: collection.id,
      name: collection.name,
      category: collection.category,
      image: collection.image,
      price: collection.price || 'Bespoke Quote',
      description: collection.description,
    });
  };

  return (
    <section id="collections" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E8DFC8] section-contain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#8C6D3B] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A870]" />
            <span>Curated Silhouettes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#3A2E26]">
            EXPLORE OUR COLLECTIONS
          </h2>
          <div className="w-16 h-[1px] bg-[#C8A870] mx-auto my-3" />
          <p className="text-sm sm:text-base text-[#6B5A4E]">
            A nine-piece signature exploration of balanced form, precious warmth, and classical proportion. Click any collection to view details.
          </p>
        </div>

        {/* 9-Card Grid: Clean Image and Title Only (Strictly 3 Columns Per Row with Equal Alignment) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {EXPLORE_COLLECTION_CARDS.map((collection, index) => {
            const wishlisted = isWishlisted(collection.id);
            return (
              <div
                key={collection.id}
                role="button"
                tabIndex={0}
                onClick={(e) => handleCardClick(e, collection)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCardClick(e as unknown as React.MouseEvent, collection);
                  }
                }}
                className="group relative bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#E2D7C7] hover:border-[#C8A870] transition-all duration-300 shadow-[0_4px_18px_rgba(120,100,88,0.1),0_1px_4px_rgba(120,100,88,0.06)] hover:shadow-[0_14px_36px_rgba(120,100,88,0.18)] cursor-pointer flex flex-col justify-between h-full"
              >
                {/* Clean Image Preview */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE8DE] shrink-0">
                  <img
                    src={collection.image}
                    alt={`${collection.name} by j w jewellery ph official`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80';
                    }}
                  />

                  {/* Minimal Subtle Category Identifier */}
                  <div className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 rounded-full bg-[#FAF8F5] text-[10px] uppercase tracking-[0.2em] font-medium text-[#786458] border border-[#E8DFC8]">
                    0{index + 1} • {collection.category}
                  </div>

                  {/* Wishlist Heart Button */}
                  <button
                    type="button"
                    onClick={(e) => handleToggleWishlist(e, collection)}
                    className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E8DFC8] flex items-center justify-center text-[#8C6D3B] hover:text-[#C8A870] transition-colors shadow-xs"
                    title={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                    aria-label="Save to wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        wishlisted ? 'fill-[#C8A870] text-[#C8A870]' : 'text-[#8C6D3B]'
                      }`}
                    />
                  </button>
                </div>

                {/* Clean Title Only Presentation tightly fitted to content */}
                <div className="p-3.5 sm:p-4 bg-[#FDFBF7] text-center group-hover:bg-[#FCF9F3] transition-colors flex flex-col justify-center">
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#3A2E26] group-hover:text-[#8C6D3B] transition-colors leading-snug">
                    {collection.name}
                  </h3>
                  <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#9A753C] font-medium mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    Discover Collection →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F5EFEB] border border-[#E2D7C7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-lg sm:text-xl text-[#3A2E26]">Looking for a bespoke creation or custom setting?</h4>
            <p className="text-xs sm:text-sm text-[#786458]">
              We consult directly with clients on tailoring proportions and metal finishes to your exact desire.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shrink-0 px-6 py-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#EFE8DE] border border-[#C8A870] text-[#785E38] text-xs uppercase tracking-[0.18em] font-medium transition-colors shadow-xs"
          >
            Inquire With Atelier
          </a>
        </div>
      </div>
    </section>
  );
};
