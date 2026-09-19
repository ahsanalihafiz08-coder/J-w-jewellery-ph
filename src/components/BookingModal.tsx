import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Check, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { WhatsAppIcon, getWhatsAppUrl } from './WhatsAppIcon';

export interface BookingProductDetails {
  id: string;
  name: string;
  image: string;
  price?: string;
  category?: string;
}

interface BookingModalProps {
  isOpen: boolean;
  product: BookingProductDetails | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, product, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: '2:00 PM - 3:30 PM',
    consultationType: 'In-Person Atelier Visit (Pasig)',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent background scrolling while modal is open & clean up properly
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const bookingSummaryText = `Appointment Request for ${BUSINESS_INFO.name}:
- Piece: ${product?.name || 'Bespoke Consultation'} (ID: ${product?.id || 'N/A'})
- Category: ${product?.category || 'General'}
- Price/Est: ${product?.price || 'Upon Request'}
- Client: ${formData.name}
- Contact: ${formData.phone}
- Preferred Date: ${formData.date || 'Soonest Available'}
- Time Slot: ${formData.timeSlot}
- Type: ${formData.consultationType}
- Notes: ${formData.notes || 'None'}`;

  const whatsappDirectUrl = getWhatsAppUrl(bookingSummaryText);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Translucent backdrop in warm taupe */}
      <div
        className="fixed inset-0 bg-[#3A2E26]/65 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-2xl bg-[#FAF8F5] rounded-2xl border border-[#C8A870] shadow-[0_24px_60px_rgba(74,61,53,0.35)] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-5 py-4 bg-[#F5EFEB] border-b border-[#E8DFC8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C8A870]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold">
              Atelier Appointment & Consultation
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full aspect-square border border-[#D4C4AE] hover:border-[#C8A870] flex items-center justify-center text-[#5E4E45] hover:text-[#3A2E26] bg-[#FAF8F5] transition-colors"
            style={{ borderRadius: '50%' }}
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Selected Product Card Banner */}
          {product && (
            <div className="p-4 rounded-xl bg-[#FDFBF7] border border-[#E2D7C7] flex items-center gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-[#E8DFC8] shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#9A887C] font-semibold">
                    {product.category || 'Atelier Creation'}
                  </span>
                  <span className="text-[10px] text-[#C8A870]">• ID: {product.id}</span>
                </div>
                <h4 className="font-serif text-base sm:text-lg text-[#3A2E26] font-medium truncate">
                  {product.name}
                </h4>
                {product.price && (
                  <p className="font-serif text-sm font-semibold text-[#9A753C] mt-0.5">
                    {product.price}
                  </p>
                )}
              </div>
            </div>
          )}

          {isSubmitted ? (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F5EFEB] border border-[#C8A870] text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#C8A870] flex items-center justify-center text-[#8C6D3B] mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-[#3A2E26]">Appointment Request Received</h3>
                <p className="text-xs sm:text-sm text-[#6B5A4E] max-w-md mx-auto">
                  Thank you, <strong className="text-[#3A2E26]">{formData.name}</strong>. Our concierge at{' '}
                  <strong className="text-[#3A2E26]">{BUSINESS_INFO.name}</strong> will confirm your viewing
                  for <span className="font-medium text-[#8C6D3B]">{product?.name || 'your consultation'}</span> on{' '}
                  <span className="font-medium text-[#8C6D3B]">{formData.date || 'the upcoming date'}</span>.
                </p>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-full bg-[#25D366] text-white text-[11px] sm:text-xs uppercase tracking-wider font-semibold hover:bg-[#20bd5a] transition-all shadow-sm whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Send Confirmation to WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full border border-[#C8A870] text-[11px] sm:text-xs uppercase tracking-wider text-[#785E38] hover:bg-[#EFE8DE] transition-colors whitespace-nowrap"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="booking-name" className="text-xs uppercase tracking-wider text-[#5E4E45] font-medium block">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="booking-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maria Santos"
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl text-sm text-[#3A2E26] focus:outline-none focus:border-[#C8A870]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="booking-phone" className="text-xs uppercase tracking-wider text-[#5E4E45] font-medium block">
                    Contact / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    id="booking-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+63 9XX XXX XXXX"
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl text-sm text-[#3A2E26] focus:outline-none focus:border-[#C8A870]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="booking-date" className="text-xs uppercase tracking-wider text-[#5E4E45] font-medium block flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C8A870]" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    id="booking-date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl text-sm text-[#3A2E26] focus:outline-none focus:border-[#C8A870]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="booking-time" className="text-xs uppercase tracking-wider text-[#5E4E45] font-medium block flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C8A870]" />
                    <span>Preferred Time Slot *</span>
                  </label>
                  <select
                    id="booking-time"
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl text-sm text-[#3A2E26] focus:outline-none focus:border-[#C8A870]"
                  >
                    <option value="10:30 AM - 12:00 PM">Morning (10:30 AM - 12:00 PM)</option>
                    <option value="2:00 PM - 3:30 PM">Afternoon (2:00 PM - 3:30 PM)</option>
                    <option value="4:00 PM - 5:30 PM">Late Afternoon (4:00 PM - 5:30 PM)</option>
                    <option value="6:00 PM - 7:30 PM">Evening (6:00 PM - 7:30 PM)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="booking-type" className="text-xs uppercase tracking-wider text-[#5E4E45] font-medium block flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A870]" />
                  <span>Consultation Format</span>
                </label>
                <select
                  id="booking-type"
                  value={formData.consultationType}
                  onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl text-sm text-[#3A2E26] focus:outline-none focus:border-[#C8A870]"
                >
                  <option value="In-Person Atelier Visit (Pasig)">
                    Private Atelier Viewing • Ortigas Ave, Pasig City
                  </option>
                  <option value="Virtual Private Video Consultation">
                    Virtual HD Video Consultation (Zoom / WhatsApp Video)
                  </option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="booking-notes" className="text-xs uppercase tracking-wider text-[#5E4E45] font-medium block">
                  Bespoke Notes / Ring Size / Milestone Occasion
                </label>
                <textarea
                  id="booking-notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details on ring size, metal choice, or wedding dates..."
                  className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl text-sm text-[#3A2E26] focus:outline-none focus:border-[#C8A870] resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-[#786458] bg-[#F5EFEB] p-3 rounded-xl border border-[#E8DFC8]">
                <ShieldCheck className="w-4 h-4 text-[#C8A870] shrink-0" />
                <span>Private one-on-one session with our master jewellery consultant. No consultation fee.</span>
              </div>

              <button
                type="submit"
                id="submit-booking-form"
                className="w-full py-3.5 px-3 sm:px-6 rounded-full bg-gradient-to-r from-[#C8A870] via-[#DFBE82] to-[#C8A870] hover:from-[#B89458] hover:to-[#B89458] text-[#3A2E26] text-[11px] sm:text-xs uppercase tracking-wider font-semibold shadow-[0_4px_16px_rgba(200,168,112,0.35)] transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 text-center whitespace-nowrap"
              >
                <span>Confirm Appointment Booking</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
