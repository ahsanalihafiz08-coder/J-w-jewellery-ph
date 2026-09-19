import React from 'react';
import { Phone, MapPin, ArrowUp, Star, Mail, Instagram, Facebook, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { WhatsAppIcon, getWhatsAppUrl } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Collections', href: '#collections' },
    { label: 'Featured (36)', href: '#featured' },
    { label: 'Atelier Archive', href: '#dual-marquee' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Our Story', href: '#story' },
    { label: 'Gallery (9)', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const standardWhatsAppUrl = getWhatsAppUrl(
    'Hello j w jewellery ph official, I would like to inquire about your collections.'
  );

  return (
    <footer className="bg-[#F5EFEB] border-t border-[#E2D7C7] text-[#5E4E45] relative overflow-hidden">
      {/* Decorative fine gold line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C8A870] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#E8DFC8]">
          {/* Brand Presentation Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full aspect-square border border-[#C8A870] flex items-center justify-center bg-[#FDFBF7] shadow-xs shrink-0"
                style={{ borderRadius: '50%' }}
              >
                <span className="font-serif text-[#C8A870] text-sm font-bold tracking-normal uppercase leading-none select-none text-center">
                  JW
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-medium tracking-[0.16em] text-[#3A2E26] uppercase leading-tight">
                  JW JEWELLERY
                </span>
                <span className="text-[9px] uppercase tracking-[0.32em] text-[#8C6D3B] font-semibold leading-none mt-0.5">
                  PH OFFICIAL
                </span>
              </div>
            </div>

            <p className="font-serif italic text-base text-[#786458] max-w-sm">
              "{BUSINESS_INFO.tagline}"
            </p>

            <p className="text-xs text-[#786458] leading-relaxed max-w-md">
              A refined Philippine fine jewellery atelier dedicated to timeless design, classical proportions, and enduring brilliance for life’s most celebrated chapters.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-[#8C6D3B] pt-1">
              <div className="flex text-[#C8A870]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C8A870] stroke-[#B89458]" />
                ))}
              </div>
              <span className="font-semibold text-[#4A3D35]">5.0 Customer Rating</span>
              <span className="text-[#9A887C]">• Ortigas Ave, Pasig City</span>
            </div>

            {/* Clean Icon Links Only */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={standardWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-xs"
                title="WhatsApp Official (+63 917 888 0708)"
                aria-label="Official WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center hover:scale-105 transition-transform"
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-105 transition-transform"
                title="Facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="w-8 h-8 rounded-full bg-[#EA4335] text-white flex items-center justify-center hover:scale-105 transition-transform"
                title="Email"
                aria-label="Email Atelier"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-8 h-8 rounded-full bg-[#C8A870] text-[#FAF8F5] flex items-center justify-center hover:scale-105 transition-transform"
                title="Direct Call (+63 917 888 0708)"
                aria-label="Direct Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#3A2E26] font-semibold border-b border-[#E8DFC8] pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-xs uppercase tracking-[0.18em] text-[#6B5A4E] hover:text-[#8C6D3B] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Boutique Location Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#3A2E26] font-semibold border-b border-[#E8DFC8] pb-2">
              Boutique Location
            </h4>

            <div className="space-y-3 text-xs text-[#6B5A4E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A870] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A870] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="font-medium text-[#4A3D35] hover:text-[#8C6D3B] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C8A870] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#4A3D35] block">Hours of Operation:</span>
                  <span className="text-[#786458]">{BUSINESS_INFO.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9A887C]">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Ortigas Ave, Pasig, Metro Manila.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] tracking-wider text-[#786458]">
              Warm Ivory & Champagne Atelier
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#786458] hover:text-[#3A2E26] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
