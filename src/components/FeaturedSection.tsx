import React, { useState } from 'react';
import { Eye, Sparkles, Shield, Calendar, Heart } from 'lucide-react';
import { FEATURED_JEWELRY_CARDS } from '../data/jewelleryData';
import { FeaturedProduct } from '../types';
import { useWishlist } from '../context/WishlistContext';
import { BookingProductDetails } from './BookingModal';

interface FeaturedSectionProps {
  onDiscoverProduct: (product: FeaturedProduct) => void;
  onBookProduct: (product: BookingProductDetails) => void;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  onDiscoverProduct,
  onBookProduct,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { isWishlisted, toggleWishlist } = useWishlist();

  const categories = ['All', 'Rings', 'Bridal', 'Necklaces', 'Earrings', 'Bracelets'];

  const filteredProducts =
    selectedFilter === 'All'
      ? FEATURED_JEWELRY_CARDS
      : FEATURED_JEWELRY_CARDS.filter((p) =>
          p.category.toLowerCase().includes(selectedFilter.toLowerCase())
        );

  const ITEMS_PER_PAGE = 18;
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleFilterChange = (cat: string) => {
    setSelectedFilter(cat);
    setCurrentPage(1);
  };

  const handleCardClick = (e: React.MouseEvent, product: FeaturedProduct) => {
    e.preventDefault();
    onDiscoverProduct(product);
  };

  const handleBookClick = (e: React.MouseEvent, product: FeaturedProduct) => {
    e.preventDefault();
    e.stopPropagation();
    onBookProduct({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      category: product.category,
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent, product: FeaturedProduct) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({
      id: product.id,
      name: product.name,
      category: product.category,
      image: product.image,
      price: product.price,
      description: product.description,
    });
  };

  return (
    <section id="featured" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E8DFC8] section-contain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2.5 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#8C6D3B] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A870]" />
              <span>Hallmark Creations • 36 Masterpieces</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#3A2E26]">
              FEATURED JEWELLERY
            </h2>
            <div className="w-16 h-[1px] bg-[#C8A870]" />
            <p className="text-sm sm:text-base text-[#6B5A4E]">
              Descriptive design profiles illustrating our dedication to sculptural harmony, precision settings, and radiant metalwork.
            </p>
          </div>

          <div className="text-xs uppercase tracking-widest text-[#9A887C] border-l-2 border-[#C8A870] pl-4 py-1">
            Bespoke Consultation <br />
            <span className="text-[#5E4E45] font-medium">Ortigas Ave, Pasig Atelier</span>
          </div>
        </div>

        {/* Category Filters with active visual feedback (hover, active, selected states) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 pb-3 border-b border-[#EFE8DE]">
          {categories.map((cat) => {
            const isSelected = selectedFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleFilterChange(cat)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 ease-out cursor-pointer active:scale-95 ${
                  isSelected
                    ? 'bg-[#3A2E26] text-[#FAF8F5] border border-[#C8A870] shadow-[0_4px_14px_rgba(58,46,38,0.28)] scale-[1.03] ring-2 ring-[#C8A870]/30'
                    : 'bg-[#F5EFEB] text-[#6B5A4E] border border-[#DFCBB5] hover:bg-[#FAF8F5] hover:border-[#C8A870] hover:text-[#3A2E26] hover:shadow-[0_3px_10px_rgba(120,100,88,0.12)] hover:-translate-y-0.5'
                }`}
              >
                {cat}
                {cat === 'All' && ` (${FEATURED_JEWELRY_CARDS.length})`}
              </button>
            );
          })}
        </div>

        {/* Strictly 3 Cards Per Row Grid Layout with Optimized Scrolling Performance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {displayedProducts.map((product) => {
            const wishlisted = isWishlisted(product.id);
            return (
              <div
                key={product.id}
                className="group bg-[#FDFBF7] rounded-2xl border border-[#E8DFC8] overflow-hidden hover:border-[#C8A870] transition-all duration-300 shadow-[0_4px_18px_rgba(120,100,88,0.1),0_1px_4px_rgba(120,100,88,0.06)] hover:shadow-[0_12px_32px_rgba(120,100,88,0.18)] flex flex-col justify-between"
              >
                <div>
                  {/* Generous Proportional Product Imagery Preview */}
                  <div
                    className="relative h-60 sm:h-64 md:h-52 overflow-hidden bg-[#F5EFEB] cursor-pointer"
                    onClick={(e) => handleCardClick(e, product)}
                  >
                    <img
                      src={product.image}
                      alt={`${product.name} presentation by j w jewellery ph official`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80';
                      }}
                    />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-[#FAF8F5] rounded-full border border-[#E2D7C7] text-[10px] uppercase tracking-[0.16em] text-[#786458] font-semibold shadow-xs">
                      {product.category}
                    </div>

                    {/* Wishlist Heart Button */}
                    <button
                      type="button"
                      onClick={(e) => handleToggleWishlist(e, product)}
                      className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#E2D7C7] flex items-center justify-center text-[#8C6D3B] hover:text-[#C8A870] transition-colors shadow-xs"
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

                  {/* Card Content with Balanced Spacing */}
                  <div className="p-4 sm:p-5 space-y-3">
                    <div>
                      <h3
                        onClick={(e) => handleCardClick(e, product)}
                        className="font-serif text-lg sm:text-xl font-normal text-[#3A2E26] group-hover:text-[#8C6D3B] transition-colors leading-snug cursor-pointer line-clamp-1"
                        title={product.name}
                      >
                        {product.name}
                      </h3>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#9A753C] mt-0.5 font-medium">
                        {product.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-[#786458] leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    <div className="pt-1 text-[11px] text-[#8A786D] flex items-center justify-between">
                      <span className="text-[#9A887C]">Finishing:</span>
                      <span className="font-medium text-[#5E4E45] truncate ml-2">{product.finishing}</span>
                    </div>

                    {/* Clean and Legible Price Presentation */}
                    <div className="pt-1 flex items-baseline justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-[#9A887C] font-semibold">
                        Atelier Price:
                      </span>
                      <span className="font-serif text-lg sm:text-xl font-semibold text-[#8C6D3B]">
                        {product.price || '₱45,000'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Clean Aligned Action Buttons Container tightly fitting card bottom */}
                <div className="px-3 sm:px-4 pb-3.5 sm:pb-4 pt-0 bg-[#FDFBF7] flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => handleCardClick(e, product)}
                    className="flex-1 min-w-0 py-2.5 px-2.5 sm:px-3.5 rounded-full border border-[#C8A870] text-[#785E38] hover:text-[#FAF8F5] hover:bg-[#C8A870] text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-colors duration-200 flex items-center justify-center gap-1.5 bg-[#FAF8F5] whitespace-nowrap shadow-xs active:scale-[0.98]"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C8A870] shrink-0" />
                    <span className="truncate">View Details</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleBookClick(e, product)}
                    className="flex-1 min-w-0 py-2.5 px-2.5 sm:px-3.5 rounded-full bg-gradient-to-r from-[#C8A870] via-[#DFBE82] to-[#C8A870] hover:from-[#B89458] hover:to-[#B89458] text-[#3A2E26] text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-colors duration-200 flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap active:scale-[0.98]"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#3A2E26] shrink-0" />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Standard Numerical Pagination Layout */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => {
                const prev = Math.max(1, currentPage - 1);
                setCurrentPage(prev);
                document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
              }}
              disabled={currentPage === 1}
              className="px-3.5 py-2 rounded-xl border border-[#DFCBB5] text-xs uppercase tracking-wider text-[#785E38] hover:bg-[#F5EFEB] disabled:opacity-40 disabled:pointer-events-none transition-colors"
              aria-label="Previous page"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
              const isActive = currentPage === pageNum;
              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => {
                    setCurrentPage(pageNum);
                    document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-10 h-10 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center ${
                    isActive
                      ? 'bg-[#3A2E26] text-[#FAF8F5] border border-[#C8A870] shadow-sm scale-105'
                      : 'bg-[#FAF8F5] text-[#5E4E45] border border-[#DFCBB5] hover:border-[#C8A870] hover:bg-[#F5EFEB]'
                  }`}
                  aria-label={`Page ${pageNum}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => {
                const next = Math.min(totalPages, currentPage + 1);
                setCurrentPage(next);
                document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
              }}
              disabled={currentPage === totalPages}
              className="px-3.5 py-2 rounded-xl border border-[#DFCBB5] text-xs uppercase tracking-wider text-[#785E38] hover:bg-[#F5EFEB] disabled:opacity-40 disabled:pointer-events-none transition-colors"
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        )}

        {/* Presentation Integrity Note */}
        <div className="mt-14 flex items-center justify-center gap-2 text-center text-xs text-[#8A786D] bg-[#F5EFEB] py-3.5 px-6 rounded-xl border border-[#E8DFC8]">
          <Shield className="w-4 h-4 text-[#C8A870] shrink-0" />
          <span>
            Every piece is created with 18K solid Philippine gold and hand-selected certified gemstones. Prices subject to stone carat specifications and bespoke customizations.
          </span>
        </div>
      </div>
    </section>
  );
};
