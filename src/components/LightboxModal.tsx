import React, { useEffect } from 'react';
import { X, Sparkles, Phone, Calendar, Heart } from 'lucide-react';
import { GalleryItem } from '../types';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { WhatsAppIcon, getWhatsAppUrl } from './WhatsAppIcon';
import { useWishlist } from '../context/WishlistContext';
import { BookingProductDetails } from './BookingModal';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onInquire: (title: string) => void;
  onBookItem?: (details: BookingProductDetails) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
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

  const whatsappInquiryUrl = getWhatsAppUrl(
    `Hello j w jewellery ph official, I am admiring the gallery piece "${item.title}" (${item.category}). Could you provide more details?`
  );

  const wishlisted = isWishlisted(item.id);

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist({
      id: item.id,
      name: item.title,
      category: item.category,
      image: item.image,
      description: item.description,
      price: 'Bespoke Quote',
    });
  };

  const handleBook = () => {
    if (onBookItem) {
      onBookItem({
        id: item.id,
        name: item.title,
        image: item.image,
        category: item.category,
        price: 'Bespoke Quote',
      });
      onClose();
    } else {
      onClose();
      onInquire(item.title);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-200">
      {/* Warm Taupe translucent luxury backdrop */}
      <div
        className="fixed inset-0 bg-[#3A2E26]/65 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-2xl bg-[#FAF8F5] rounded-2xl border border-[#C8A870] shadow-[0_24px_60px_rgba(74,61,53,0.35)] overflow-hidden flex flex-col">
        {/* Top Header */}
        <div className="px-5 py-3.5 bg-[#F5EFEB] border-b border-[#E8DFC8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A870]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold">
              Atelier Gallery • {item.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
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
              aria-label="Close image lightbox"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* High-res Image Showcase */}
        <div className="relative bg-[#EFE8DE] max-h-[55vh] overflow-hidden flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full max-h-[55vh] object-contain object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Description & Inquire Strip */}
        <div className="p-6 bg-[#FAF8F5] border-t border-[#E8DFC8] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-serif text-2xl text-[#3A2E26] font-light">
                {item.title}
              </h3>
              <p className="text-xs text-[#786458] mt-0.5">
                {item.description}
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#9A887C] self-start sm:self-center">
              {BUSINESS_INFO.name}
            </span>
          </div>

          <div className="pt-3 border-t border-[#EFE8DE] flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none h-10 px-4 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#20bd5a] transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex-1 sm:flex-none h-10 px-4 rounded-full border border-[#C8A870] bg-[#FAF8F5] hover:bg-[#F5EFEB] text-[#785E38] hover:text-[#3A2E26] text-xs uppercase tracking-wider font-semibold transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#C8A870] shrink-0" />
                <span>CALL NOW</span>
              </a>
            </div>

            <button
              type="button"
              onClick={handleBook}
              className="w-full sm:w-auto h-10 px-6 rounded-full bg-gradient-to-r from-[#C8A870] via-[#DFBE82] to-[#C8A870] hover:from-[#B89458] hover:to-[#B89458] text-[#3A2E26] text-xs uppercase tracking-wider font-semibold shadow-xs transition-all active:scale-[0.98] flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#3A2E26]" />
              <span>Book Viewing</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
