import React, { useEffect } from 'react';
import { X, ShieldCheck, Check, Calendar, Heart, Eye } from 'lucide-react';
import { CollectionItem, FeaturedProduct } from '../types';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { useWishlist } from '../context/WishlistContext';
import { BookingProductDetails } from './BookingModal';

interface ProductModalProps {
  item: CollectionItem | FeaturedProduct | null;
  onClose: () => void;
  onInquire: (categoryName: string) => void;
  onBookItem?: (details: BookingProductDetails) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  item,
  onClose,
  onInquire,
  onBookItem,
}) => {
  const { isWishlisted, toggleWishlist } = useWishlist();

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const isCollection = 'piecesCountText' in item;
  const title = item.name;
  const category = item.category;
  const description = item.description;
  const image = item.image;
  const price =
    (item as FeaturedProduct).price ||
    (item as CollectionItem).price ||
    '₱52,000';
  const highlights = isCollection
    ? (item as CollectionItem).highlights
    : (item as FeaturedProduct).features;

  const wishlisted = isWishlisted(item.id);

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist({
      id: item.id,
      name: title,
      category,
      image,
      price: price || '₱52,000',
      description,
    });
  };

  const handleBook = () => {
    if (onBookItem) {
      onBookItem({
        id: item.id,
        name: title,
        image,
        price: price || '₱52,000',
        category,
      });
      onClose();
    } else {
      onClose();
      onInquire(title);
    }
  };

  const handleViewDetails = () => {
    onClose();
    onInquire(title);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-200">
      {/* Backdrop in warm taupe */}
      <div
        className="fixed inset-0 bg-[#3A2E26]/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-3xl bg-[#FAF8F5] rounded-2xl border border-[#C8A870] shadow-[0_24px_60px_rgba(74,61,53,0.35)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="p-4 sm:px-6 bg-[#F5EFEB] border-b border-[#E8DFC8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C8A870]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold">
              Atelier Profile • {category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Wishlist Button inside Modal */}
            <button
              type="button"
              onClick={handleToggleWishlist}
              className="w-8 h-8 rounded-full aspect-square border border-[#D4C4AE] hover:border-[#C8A870] flex items-center justify-center text-[#8C6D3B] bg-[#FAF8F5] transition-colors"
              style={{ borderRadius: '50%' }}
              title={wishlisted ? 'Saved' : 'Save to Wishlist'}
              aria-label="Wishlist Item"
            >
              <Heart
                className={`w-4 h-4 ${
                  wishlisted ? 'fill-[#C8A870] text-[#C8A870]' : 'text-[#8C6D3B]'
                }`}
              />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full aspect-square border border-[#D4C4AE] hover:border-[#C8A870] flex items-center justify-center text-[#5E4E45] hover:text-[#3A2E26] bg-[#FAF8F5] transition-colors"
              style={{ borderRadius: '50%' }}
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Image Preview */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[#EFE8DE] border border-[#E2D7C7]">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2E26]/25 via-transparent to-transparent pointer-events-none" />
              {price && (
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#3A2E26]/90 backdrop-blur-sm rounded-full text-xs font-serif text-[#FAF8F5] border border-[#C8A870] flex items-center gap-1.5 shadow-sm">
                  <span>{price}</span>
                </div>
              )}
            </div>

            {/* Description & Craft Notes */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9A887C]">
                  {BUSINESS_INFO.name}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#3A2E26] font-normal mt-0.5">
                  {title}
                </h3>
                {price && (
                  <div className="flex items-baseline gap-2 pt-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#9A887C] font-semibold">
                      Atelier Price:
                    </span>
                    <span className="font-serif text-2xl font-semibold text-[#8C6D3B]">
                      {price}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#5E4E45] leading-relaxed">
                {description}
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-2 pt-2 border-t border-[#EADBCE]">
                <span className="text-[10px] uppercase tracking-wider text-[#8C6D3B] font-semibold block">
                  Artisanal Attributes:
                </span>
                <ul className="space-y-1.5">
                  {highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#6B5A4E]">
                      <Check className="w-3.5 h-3.5 text-[#C8A870] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Assurance strip */}
              <div className="flex items-center gap-2 text-[11px] text-[#786458] bg-[#F5EFEB] p-3 rounded-xl border border-[#E8DFC8]">
                <ShieldCheck className="w-4 h-4 text-[#C8A870] shrink-0" />
                <span>Custom tailored sizing & 18K solid gold finishing crafted at our Pasig atelier.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Standardized Footer Actions (Left: View Details, Right: Book Viewing - NO Call Button) */}
        <div className="p-3.5 sm:px-6 bg-[#F5EFEB] border-t border-[#E8DFC8] flex items-center justify-between gap-2.5 sm:gap-4">
          {/* Left Side: View Details */}
          <button
            type="button"
            onClick={handleViewDetails}
            className="flex-1 sm:flex-none min-w-0 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 rounded-full border border-[#C8A870] bg-[#FAF8F5] hover:bg-[#EFE4D6] text-[#785E38] text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-all duration-200 shadow-xs active:scale-[0.98] whitespace-nowrap"
          >
            <Eye className="w-3.5 h-3.5 text-[#C8A870] shrink-0" />
            <span className="truncate">View Details</span>
          </button>

          {/* Right Side: Book Viewing */}
          <button
            type="button"
            onClick={handleBook}
            className="flex-1 sm:flex-none min-w-0 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C8A870] via-[#DFBE82] to-[#C8A870] hover:from-[#B89458] hover:to-[#B89458] text-[#3A2E26] text-[11px] sm:text-xs uppercase tracking-wider font-semibold shadow-xs transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-[#3A2E26] shrink-0" />
            <span className="truncate">Book Viewing</span>
          </button>
        </div>
      </div>
    </div>
  );
};
