import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { WhatsAppIcon, getWhatsAppUrl } from './WhatsAppIcon';
import { useWishlist } from '../context/WishlistContext';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenChat?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { wishlist, setIsWishlistOpen } = useWishlist();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldScrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== shouldScrolled ? shouldScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Collections', href: '#collections' },
    { label: 'Featured', href: '#featured' },
    { label: 'Archives', href: '#dual-marquee' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Our Story', href: '#story' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = getWhatsAppUrl(
    'Hello j w jewellery ph official, I would like to inquire about your fine jewellery collections.'
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out gpu-layer ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(120,100,88,0.12)] border-b border-[#E8DFC8]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand Name - Positioned at far top-left on mobile */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="group flex items-center gap-2 sm:gap-3 focus:outline-none shrink-0"
            aria-label="JW Jewellery PH Official Home"
          >
            {/* High-contrast circular frame with clear inner JW text */}
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full aspect-square border border-[#DFBE82] flex items-center justify-center bg-[#241C16] shadow-sm shrink-0 group-hover:border-[#C8A870] transition-all"
              style={{ borderRadius: '50%' }}
            >
              <span className="font-serif text-[#DFBE82] text-[12px] sm:text-sm font-bold tracking-wider uppercase leading-none select-none text-center">
                JW
              </span>
            </div>

            {/* Balanced Proportional Brand Name with High Contrast */}
            <div className="flex flex-col">
              <span
                className={`font-serif text-sm sm:text-base md:text-lg font-medium tracking-[0.12em] sm:tracking-[0.16em] uppercase transition-colors group-hover:text-[#DFBE82] leading-tight ${
                  isScrolled
                    ? 'text-[#3A2E26]'
                    : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                }`}
              >
                JW JEWELLERY
              </span>
              <span
                className={`text-[7.5px] sm:text-[9px] uppercase tracking-[0.24em] sm:tracking-[0.32em] font-semibold leading-none mt-0.5 ${
                  isScrolled
                    ? 'text-[#8C6D3B]'
                    : 'text-[#DFBE82] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]'
                }`}
              >
                PH OFFICIAL
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`text-xs uppercase tracking-[0.2em] transition-colors relative py-1 font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A870] hover:after:w-full after:transition-all after:duration-300 ${
                  isScrolled
                    ? 'text-[#5E4E45] hover:text-[#B38E50]'
                    : 'text-[#FAF8F5] hover:text-[#DFBE82] drop-shadow-sm'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons: Call and Saved showing ONLY their respective icons (no text labels, no WhatsApp button) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* 1. Call Now Action Button - Icon Only */}
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF8F5]/95 hover:bg-[#F5EFEB] active:bg-[#EFE4D6] border border-[#DFCBB5] hover:border-[#C8A870] flex items-center justify-center text-[#785E38] hover:text-[#3A2E26] transition-all shadow-xs active:scale-95 shrink-0"
              style={{ borderRadius: '50%' }}
              title={`Call Atelier: ${BUSINESS_INFO.phoneClean}`}
              aria-label="Call Atelier"
            >
              <Phone className="w-4 h-4 text-[#C8A870]" />
            </a>

            {/* 2. Saved / Wishlist Action Button - Icon Only with badge counter */}
            <button
              type="button"
              id="header-wishlist-button"
              onClick={() => setIsWishlistOpen(true)}
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF8F5]/95 hover:bg-[#F5EFEB] active:bg-[#EFE4D6] border border-[#DFCBB5] hover:border-[#C8A870] flex items-center justify-center text-[#8C6D3B] hover:text-[#3A2E26] transition-all shadow-xs active:scale-95 shrink-0"
              style={{ borderRadius: '50%' }}
              title="Saved Items / Wishlist"
              aria-label="View Saved Wishlist"
            >
              <Heart
                className={`w-4 h-4 ${
                  wishlist.length > 0 ? 'fill-[#C8A870] text-[#C8A870]' : 'text-[#8C6D3B]'
                }`}
              />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#8C6D3B] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF8F5]/95 hover:bg-[#EFE4D6] active:bg-[#E5D7C5] border border-[#DFCBB5] hover:border-[#C8A870] flex items-center justify-center text-[#4A3D35] hover:text-[#3A2E26] transition-all shadow-xs ml-0.5 shrink-0"
              style={{ borderRadius: '50%' }}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4 text-[#786458]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu Overlay Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#C8A870] px-4 sm:px-6 py-5 space-y-4 shadow-[0_20px_45px_rgba(58,46,38,0.25),0_6px_16px_rgba(58,46,38,0.12)] animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1 pb-3 border-b border-[#EFE8DE]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-xs uppercase tracking-[0.2em] text-[#4A3D35] hover:text-[#B38E50] py-2 px-1 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Navigation Menu Action Buttons: Full styled action buttons with text labels (Phone, WhatsApp, Saved) matching Explore Collection aesthetics */}
          <div className="pt-4 border-t border-[#EFE8DE] grid grid-cols-3 gap-2 sm:gap-3">
            {/* 1. Phone Button */}
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="h-11 px-1.5 sm:px-3 rounded-full bg-gradient-to-r from-[#C8A870] via-[#DFBE82] to-[#C8A870] hover:from-[#B89458] hover:to-[#B89458] border border-[#C8A870] text-[#3A2E26] text-[10px] sm:text-xs uppercase tracking-tight sm:tracking-wider font-semibold shadow-xs flex items-center justify-center gap-1 sm:gap-1.5 transition-all active:scale-95 whitespace-nowrap min-w-0"
              title={`Call Atelier: ${BUSINESS_INFO.phoneClean}`}
              aria-label="Phone"
            >
              <Phone className="w-3.5 h-3.5 text-[#3A2E26] shrink-0" />
              <span className="truncate">Phone</span>
            </a>

            {/* 2. WhatsApp Button */}
            <a
              href={getWhatsAppUrl("Hello! I would like to inquire about fine jewellery creations at j w jewellery ph official.")}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-1.5 sm:px-3 rounded-full bg-gradient-to-r from-[#C8A870] via-[#DFBE82] to-[#C8A870] hover:from-[#B89458] hover:to-[#B89458] border border-[#C8A870] text-[#3A2E26] text-[10px] sm:text-xs uppercase tracking-tight sm:tracking-wider font-semibold shadow-xs flex items-center justify-center gap-1 sm:gap-1.5 transition-all active:scale-95 whitespace-nowrap min-w-0"
              title="Chat on WhatsApp"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#1E7E34] shrink-0" />
              <span className="truncate">WhatsApp</span>
            </a>

            {/* 3. Saved / Wishlist Button */}
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsWishlistOpen(true);
              }}
              className="h-11 px-1.5 sm:px-3 rounded-full bg-gradient-to-r from-[#C8A870] via-[#DFBE82] to-[#C8A870] hover:from-[#B89458] hover:to-[#B89458] border border-[#C8A870] text-[#3A2E26] text-[10px] sm:text-xs uppercase tracking-tight sm:tracking-wider font-semibold shadow-xs flex items-center justify-center gap-1 sm:gap-1.5 transition-all active:scale-95 whitespace-nowrap min-w-0 relative"
              title="Saved Items / Wishlist"
              aria-label="Saved"
            >
              <Heart className={`w-3.5 h-3.5 ${wishlist.length > 0 ? 'fill-[#3A2E26] text-[#3A2E26]' : 'text-[#3A2E26]'} shrink-0`} />
              <span className="truncate">Saved</span>
              {wishlist.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#3A2E26] text-[#DFBE82] text-[9.5px] font-bold flex items-center justify-center ml-0.5 shrink-0">
                  {wishlist.length}
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
