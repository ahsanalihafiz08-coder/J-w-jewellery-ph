import React from 'react';
import { MapPin, Navigation, ExternalLink, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

export const StoreLocationMap: React.FC = () => {
  const encodedAddress = encodeURIComponent(BUSINESS_INFO.address);
  const mapIframeSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  return (
    <section className="py-12 md:py-16 bg-[#F8F4EE] border-t border-[#E8DFC8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Map Header Card */}
        <div className="bg-[#FAF8F5] rounded-2xl border border-[#E2D7C7] p-6 sm:p-8 shadow-[0_8px_30px_rgba(120,100,88,0.06)] mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#C8A870]" />
                <span>Visit Our Los Angeles Atelier</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#3A2E26]">
                {BUSINESS_INFO.name} Atelier & Showroom
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5A4E] max-w-2xl leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#C8A870] via-[#DFBE82] to-[#C8A870] hover:from-[#B89458] hover:to-[#B89458] text-[#3A2E26] text-xs uppercase tracking-wider font-semibold shadow-xs transition-all active:scale-95"
              >
                <Navigation className="w-3.5 h-3.5 text-[#3A2E26]" />
                <span>Get Directions</span>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#C8A870] bg-[#FAF8F5] hover:bg-[#EFE8DE] text-[#785E38] text-xs uppercase tracking-wider font-semibold transition-all active:scale-95"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#C8A870]" />
                <span>View Full Map</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-[#EADBCE] text-xs text-[#6B5A4E]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8A870]" />
              <span>Suite 1238, 12th Floor Jewelry Exchange</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#C8A870] shrink-0" />
              <span>{BUSINESS_INFO.hours}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>Valet & Covered Parking Available</span>
            </div>
          </div>
        </div>

        {/* Interactive Google Map iframe */}
        <div className="relative w-full h-[280px] sm:h-[320px] md:h-[200px] rounded-2xl overflow-hidden border border-[#DFCBB5] shadow-[0_12px_40px_rgba(120,100,88,0.1)] bg-[#EFE8DE]">
          <iframe
            title="JWA by Madeleine Store Location Map - 550 S Hill St, Los Angeles, CA"
            src={mapIframeSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[15%] contrast-[105%]"
          />
        </div>
      </div>
    </section>
  );
};
