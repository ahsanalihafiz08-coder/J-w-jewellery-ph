import React, { useEffect } from 'react';
import { X, Heart, Trash2, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { useWishlist, WishlistItem } from '../context/WishlistContext';
import { BookingProductDetails } from './BookingModal';

interface WishlistDrawerProps {
  onBookItem: (product: BookingProductDetails) => void;
  onExplore: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ onBookItem, onExplore }) => {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, removeFromWishlist, clearWishlist } = useWishlist();

  useEffect(() => {
    if (isWishlistOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isWishlistOpen) {
        setIsWishlistOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isWishlistOpen, setIsWishlistOpen]);

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#3A2E26]/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Slide-over Panel */}
      <div className="relative z-10 w-full max-w-md bg-[#FAF8F5] h-full shadow-[0_0_60px_rgba(58,46,38,0.4),-12px_0_36px_rgba(58,46,38,0.22)] border-l border-[#C8A870] flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 bg-[#F5EFEB] border-b border-[#E8DFC8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 fill-[#C8A870] text-[#C8A870]" />
            <h3 className="font-serif text-lg text-[#3A2E26] font-medium tracking-wide">
              Saved Pieces ({wishlist.length})
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsWishlistOpen(false)}
            className="w-8 h-8 rounded-full aspect-square border border-[#D4C4AE] hover:border-[#C8A870] flex items-center justify-center text-[#5E4E45] hover:text-[#3A2E26] bg-[#FAF8F5] transition-colors"
            style={{ borderRadius: '50%' }}
            aria-label="Close wishlist"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlist.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F5EFEB] border border-[#DFCBB5] flex items-center justify-center text-[#B89458]">
                <Heart className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-xl text-[#3A2E26]">Your Wishlist is Empty</h4>
                <p className="text-xs text-[#786458] max-w-xs leading-relaxed">
                  Explore our collections and save your favorite rings, necklaces, and bespoke pieces for future reference.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsWishlistOpen(false);
                  onExplore();
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C8A870] to-[#B89458] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold shadow-xs"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E2D7C7] hover:border-[#C8A870] transition-all flex gap-3 relative group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover bg-[#EFE8DE] border border-[#E8DFC8] shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[9px] uppercase tracking-wider text-[#9A887C] font-semibold">
                          {item.category}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFromWishlist(item.id)}
                          className="text-[#9A887C] hover:text-[#C84A3B] transition-colors p-1"
                          title="Remove from saved"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <h5 className="font-serif text-sm font-medium text-[#3A2E26] truncate">
                        {item.name}
                      </h5>
                      {item.price && (
                        <p className="font-serif text-xs font-semibold text-[#9A753C] mt-0.5">
                          {item.price}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setIsWishlistOpen(false);
                        onBookItem({
                          id: item.id,
                          name: item.name,
                          image: item.image,
                          price: item.price,
                          category: item.category,
                        });
                      }}
                      className="mt-2 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3A2E26] hover:bg-[#8C6D3B] text-[#FAF8F5] text-[10px] uppercase tracking-wider font-medium transition-colors"
                    >
                      <Calendar className="w-3 h-3 text-[#DFBE82]" />
                      <span>Book Viewing</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {wishlist.length > 0 && (
          <div className="p-4 bg-[#F5EFEB] border-t border-[#E8DFC8] space-y-2">
            <div className="flex items-center justify-between text-xs text-[#786458]">
              <span>{wishlist.length} item{wishlist.length > 1 ? 's' : ''} saved</span>
              <button
                type="button"
                onClick={clearWishlist}
                className="text-[11px] text-[#9A753C] hover:underline"
              >
                Clear all
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
