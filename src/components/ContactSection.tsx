import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, Clock, Sparkles, Check, Copy, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { WhatsAppIcon, getWhatsAppUrl } from './WhatsAppIcon';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Rings',
    message: '',
  });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const standardWhatsAppUrl = getWhatsAppUrl(
    'Hello j w jewellery ph official, I would like to inquire about your jewellery atelier in Pasig.'
  );

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#8C6D3B] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A870]" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#3A2E26]">
            CONNECT WITH OUR ATELIER
          </h2>
          <div className="w-16 h-[1px] bg-[#C8A870] mx-auto my-3" />
          <p className="text-sm sm:text-base text-[#6B5A4E]">
            We invite you to reach out for personalized advice, design inquiries, and bespoke consultations in Pasig.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Business Information & Official Channels Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#E2D7C7] shadow-[0_8px_30px_rgba(120,100,88,0.06)] space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#9A887C] font-semibold">Fine Jewellery Boutique</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#3A2E26] mt-1">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-[#786458] mt-1 font-serif italic">
                  {BUSINESS_INFO.tagline}
                </p>
              </div>

              {/* Official Verified Social & Contact Links */}
              <div className="space-y-3.5 pt-2 border-t border-[#F0E6D8]">
                {/* 1. Official WhatsApp Action Button (Clean, no raw phone number text) */}
                <a
                  href={standardWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/15 border border-[#25D366]/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform" style={{ borderRadius: '50%' }}>
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#128C7E] font-bold block">
                      Chat on WhatsApp
                    </span>
                    <span className="text-xs text-[#2E6B47] block font-medium">
                      Instant Concierge Assistance & Custom Orders
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#128C7E] group-hover:underline pr-1 whitespace-nowrap">
                    Chat Now →
                  </span>
                </a>

                {/* 2. Direct Telephone Line Action Button (Clean, no raw phone number text) */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#F5EFEB] hover:bg-[#EFE4D6] border border-[#DFCBB5] hover:border-[#C8A870] transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#DFCBB5] flex items-center justify-center text-[#9A753C] shrink-0 group-hover:bg-[#FAF8F5] transition-colors" style={{ borderRadius: '50%' }}>
                    <Phone className="w-4 h-4 text-[#C8A870]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#9A887C] font-semibold block">
                      Direct Atelier Line
                    </span>
                    <span className="text-xs text-[#5E4E45] block font-medium">
                      Speak Directly With Our Jewellery Consultant
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#8C6D3B] group-hover:underline pr-1 whitespace-nowrap">
                    Call Now →
                  </span>
                </a>

                {/* 3. Instagram & Facebook Links */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#FAF8F5] border border-[#DFCBB5] hover:border-[#C8A870] transition-colors text-xs text-[#5E4E45] group"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shrink-0">
                      <Instagram className="w-3.5 h-3.5" />
                    </div>
                    <span className="truncate font-medium group-hover:text-[#B38E50]">Instagram</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#FAF8F5] border border-[#DFCBB5] hover:border-[#C8A870] transition-colors text-xs text-[#5E4E45] group"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center shrink-0">
                      <Facebook className="w-3.5 h-3.5" />
                    </div>
                    <span className="truncate font-medium group-hover:text-[#B38E50]">Facebook</span>
                  </a>
                </div>

                {/* 4. Atelier Address */}
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#FAF8F5] border border-[#DFCBB5]">
                  <div className="w-10 h-10 rounded-full bg-[#F5EFEB] border border-[#DFCBB5] flex items-center justify-center text-[#9A753C] shrink-0">
                    <MapPin className="w-4 h-4 text-[#C8A870]" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#9A887C] font-medium block">
                      Atelier Address
                    </span>
                    <p className="text-xs sm:text-sm text-[#4A3D35] leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] uppercase tracking-wider text-[#8C6D3B] hover:underline font-medium inline-block pt-1"
                    >
                      Open in Maps & Directions →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FDFBF7] p-8 sm:p-10 rounded-2xl border border-[#E2D7C7] shadow-[0_8px_30px_rgba(120,100,88,0.06)]">
              <div className="mb-6 space-y-1">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#9A887C] font-semibold">Send a Message</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#3A2E26]">
                  Request an Atelier Consultation
                </h3>
                <p className="text-xs sm:text-sm text-[#786458]">
                  Fill out your preferences below and our team will respond promptly with personalized advice.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#F5EFEB] border border-[#C8A870] text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#C8A870] flex items-center justify-center text-[#8C6D3B] mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-2xl text-[#3A2E26]">Thank You For Reaching Out</h4>
                    <p className="text-xs sm:text-sm text-[#6B5A4E] max-w-md mx-auto">
                      Your message regarding <strong className="text-[#3A2E26]">{formData.category}</strong> has been received by <strong className="text-[#3A2E26]">{BUSINESS_INFO.name}</strong>. We will get in touch shortly via {formData.phone || 'your phone'}.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={standardWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-xs hover:bg-[#20bd5a] transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Chat on WhatsApp with Atelier</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', phone: '', category: 'Rings', message: '' });
                      }}
                      className="px-6 py-3 rounded-full border border-[#C8A870] text-xs uppercase tracking-wider text-[#785E38] hover:bg-[#EFE8DE] transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs uppercase tracking-[0.15em] text-[#5E4E45] font-medium block">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sofia Ramirez"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl text-sm text-[#3A2E26] focus:outline-none focus:border-[#C8A870] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="text-xs uppercase tracking-[0.15em] text-[#5E4E45] font-medium block">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+63 9XX XXX XXXX"
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl text-sm text-[#3A2E26] focus:outline-none focus:border-[#C8A870] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-category" className="text-xs uppercase tracking-[0.15em] text-[#5E4E45] font-medium block">
                      Jewellery Category of Interest
                    </label>
                    <select
                      id="contact-category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl text-sm text-[#3A2E26] focus:outline-none focus:border-[#C8A870] transition-colors"
                    >
                      <option value="Rings">Custom Engagement Rings & Solitaires</option>
                      <option value="Bridal">Wedding Bands & Bridal Suites</option>
                      <option value="Necklaces">Gold Necklaces & Pendants</option>
                      <option value="Earrings">Diamond Studs & Drop Earrings</option>
                      <option value="Bracelets">Tennis Bracelets & Bangles</option>
                      <option value="Bespoke">Completely Bespoke Commission</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs uppercase tracking-[0.15em] text-[#5E4E45] font-medium block">
                      Your Message or Bespoke Specifications
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about desired diamond specs, ring size, or milestone anniversary..."
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DFCBB5] rounded-xl text-sm text-[#3A2E26] focus:outline-none focus:border-[#C8A870] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#786458] bg-[#F5EFEB] p-3 rounded-xl border border-[#E8DFC8]">
                    <Clock className="w-4 h-4 text-[#C8A870] shrink-0" />
                    <span>Average concierge response time: within 1–2 hours during boutique atelier hours.</span>
                  </div>

                  {/* Pill-shaped button (border-radius: 9999px) */}
                  <button
                    type="submit"
                    id="submit-contact-form"
                    className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#C8A870] via-[#DFBE82] to-[#C8A870] hover:from-[#B89458] hover:to-[#B89458] text-[#3A2E26] text-xs uppercase tracking-[0.2em] font-semibold shadow-[0_4px_16px_rgba(200,168,112,0.35)] transition-all duration-300 active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5 text-[#3A2E26]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
