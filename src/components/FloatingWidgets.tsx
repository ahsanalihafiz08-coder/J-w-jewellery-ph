import React, { useState, useRef, useEffect } from 'react';
import { Phone, X, Send, Bot, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { WhatsAppIcon, getWhatsAppUrl } from './WhatsAppIcon';

export const FloatingWidgets: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: 'Mabuhay! Welcome to the Atelier AI Concierge for j w jewellery ph official in Pasig. How may I assist you with bespoke designs, store hours, pricing, bookings, or product specifications today?',
      time: 'Just now',
    },
  ]);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isChatOpen]);

  const quickPrompts = [
    'Custom Design Process',
    'Store Hours & Location',
    'Pricing & Gold Karats',
    'Book Atelier Viewing',
    'Diamond & Gemstone Specs',
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || userInput;
    if (!text.trim()) return;

    const newMessages = [
      ...chatMessages,
      { sender: 'user' as const, text, time: 'Just now' },
    ];
    setChatMessages(newMessages);
    if (!textToSend) setUserInput('');

    // Chatbot widget stays persistently OPEN upon query submission (no auto-closing)
    const lower = text.toLowerCase();
    let targetSectionId = '';
    if (lower.includes('book') || lower.includes('appointment') || lower.includes('contact') || lower.includes('hour') || lower.includes('location')) {
      targetSectionId = 'contact';
    } else if (lower.includes('ring') || lower.includes('neck') || lower.includes('ear') || lower.includes('brace') || lower.includes('price') || lower.includes('jewel') || lower.includes('spec') || lower.includes('gold') || lower.includes('diamond')) {
      targetSectionId = 'featured';
    } else if (lower.includes('gallery') || lower.includes('photo') || lower.includes('image')) {
      targetSectionId = 'gallery';
    }

    if (targetSectionId) {
      setTimeout(() => {
        const el = document.getElementById(targetSectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 350);
    }

    // Generate intelligent luxury atelier response based on customer inquiry categories
    setTimeout(() => {
      let reply = '';
      const lower = text.toLowerCase();

      if (lower.includes('custom') || lower.includes('bespoke') || lower.includes('engrave') || lower.includes('tailor')) {
        reply = '✨ Bespoke Custom Design: We craft one-of-a-kind engagement rings and wedding bands. Our process includes personalized sketch consultations, 3D CAD modeling, and hand-finishing in solid 18K gold. You can select your diamond carat, cut, and setting. Would you like to consult directly with our master jeweler on WhatsApp (+63 917 888 0708)?';
      } else if (lower.includes('hour') || lower.includes('time') || lower.includes('open') || lower.includes('schedule') || lower.includes('day')) {
        reply = `🕒 Atelier Hours: We are open Monday to Saturday from 10:00 AM – 7:00 PM. Sundays are reserved for private VIP appointments. Located along Ortigas Ave, Pasig City, Metro Manila.`;
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('how much') || lower.includes('quote') || lower.includes('rate')) {
        reply = '💎 Pricing Overview: Our signature fine rings and earrings range from ₱28,500 to ₱75,000+. Bespoke bridal and high-carat solitaire rings are priced transparently based on current gold weight and diamond specifications. We offer zero retail markup directly from our Pasig atelier.';
      } else if (lower.includes('book') || lower.includes('appointment') || lower.includes('view') || lower.includes('visit') || lower.includes('consult')) {
        reply = '📅 Book a Viewing: You can book a complimentary private viewing consultation at our Ortigas, Pasig atelier! Click the "Book Consultation" button on the site, or message us directly on WhatsApp (+63 917 888 0708) with your preferred date and time.';
      } else if (lower.includes('spec') || lower.includes('gold') || lower.includes('karat') || lower.includes('diamond') || lower.includes('gem') || lower.includes('metal') || lower.includes('material')) {
        reply = '🔍 Product Specs & Materials: We work exclusively with solid 18K Philippine Yellow Gold, White Gold, and Rose Gold (75% pure gold alloyed for superior heirloom durability). All diamonds are certified, hand-selected for brilliance, paired with genuine natural rubies, emeralds, sapphires, and fire opals.';
      } else if (lower.includes('location') || lower.includes('address') || lower.includes('where') || lower.includes('pasig') || lower.includes('ortigas')) {
        reply = `📍 Atelier Location: ${BUSINESS_INFO.address}. Conveniently situated along Ortigas Avenue, Pasig, Metro Manila. Valet and secure parking are available upon arrival.`;
      } else if (lower.includes('whatsapp') || lower.includes('contact') || lower.includes('phone') || lower.includes('call') || lower.includes('number')) {
        reply = `📞 Direct Contact: Reach our atelier via phone or WhatsApp at ${BUSINESS_INFO.phone} (+63 917 888 0708), or email us at ${BUSINESS_INFO.email}.`;
      } else {
        reply = `Thank you for asking! At ${BUSINESS_INFO.name}, we provide handcrafted 18K fine jewellery, bespoke bridal sets, and private consultations in Ortigas, Pasig. How else may I assist you with custom orders, appointments, or product details?`;
      }

      setChatMessages((prev) => [
        ...prev,
        { sender: 'bot', text: reply, time: 'Just now' },
      ]);
    }, 450);
  };

  const whatsappConciergeUrl = getWhatsAppUrl(
    'Hello j w jewellery ph official, I would like to inquire about your fine jewellery atelier.'
  );

  return (
    <>
      {/* AI Assistant Chat Modal / Flyout */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-2 sm:right-6 w-[calc(100vw-1rem)] sm:w-96 max-w-[390px] max-h-[520px] bg-[#FAF8F5] rounded-2xl shadow-[0_20px_50px_rgba(58,46,38,0.35)] border border-[#C8A870] z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-3.5 bg-[#3A2E26] text-[#FAF8F5] flex items-center justify-between border-b border-[#C8A870]/40">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#C8A870]/20 border border-[#DFBE82] flex items-center justify-center text-[#DFBE82] shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-medium tracking-wide">Atelier AI Concierge</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-[#DFBE82]">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Online • JW Jewellery PH</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="w-7 h-7 rounded-full aspect-square hover:bg-white/10 flex items-center justify-center text-[#FAF8F5]/80 hover:text-white transition-colors"
                title="Scroll Down & Hide Chat"
                aria-label="Scroll Down & Hide Chat"
                style={{ borderRadius: '50%' }}
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="w-7 h-7 rounded-full aspect-square hover:bg-white/10 flex items-center justify-center text-[#FAF8F5]/80 hover:text-white transition-colors"
                aria-label="Close Chat"
                style={{ borderRadius: '50%' }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#F5EFEB] max-h-[280px]">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#3A2E26] text-[#FAF8F5] rounded-br-xs shadow-xs'
                      : 'bg-[#FAF8F5] text-[#3A2E26] border border-[#E2D7C7] rounded-bl-xs shadow-xs'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
                <span className="text-[9px] text-[#9A887C] mt-1 px-1">{msg.time}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Suggestions */}
          <div className="px-3 py-2 bg-[#FAF8F5] border-t border-[#E8DFC8] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                className="shrink-0 text-[10px] px-2.5 py-1 rounded-full bg-[#F5EFEB] hover:bg-[#EAE1D6] text-[#786458] border border-[#DFCBB5] transition-colors whitespace-nowrap"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-[#FAF8F5] border-t border-[#E8DFC8] flex items-center gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
              placeholder="Ask about custom designs, hours, pricing, bookings..."
              className="flex-1 px-3.5 py-2 bg-[#F5EFEB] border border-[#DFCBB5] rounded-full text-xs text-[#3A2E26] placeholder-[#9A887C] focus:outline-none focus:border-[#C8A870]"
            />
            <button
              type="button"
              onClick={() => handleSendMessage()}
              className="w-8 h-8 rounded-full aspect-square bg-[#C8A870] hover:bg-[#B89458] text-white flex items-center justify-center transition-colors shadow-xs shrink-0"
              aria-label="Send message"
              style={{ borderRadius: '50%' }}
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* WhatsApp Direct Handoff Strip */}
          <div className="px-3 py-2 bg-[#FAF8F5] border-t border-[#E8DFC8] text-center">
            <a
              href={whatsappConciergeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-[11px] text-[#128C7E] font-medium hover:underline"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Connect directly on WhatsApp (+63 917 888 0708)</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Standalone Clean Floating Action Icons - Shifted to right edge on mobile, no solid card background */}
      <div className="fixed bottom-4 sm:bottom-6 right-2 sm:right-5 z-40 flex flex-col items-center gap-2.5 sm:gap-3 pointer-events-auto gpu-layer">
        {/* 1. Standalone Round WhatsApp Action Icon */}
        <a
          href={whatsappConciergeUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-widget"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full aspect-square bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.55)] transition-all duration-300 hover:scale-108 active:scale-95 border border-[#1ebd56]"
          style={{ borderRadius: '50%' }}
          title="WhatsApp Concierge (+63 917 888 0708)"
          aria-label="WhatsApp Concierge"
        >
          <WhatsAppIcon className="w-5 h-5 text-white" />
        </a>

        {/* 2. Standalone Round Phone Action Icon */}
        <a
          href={`tel:${BUSINESS_INFO.phoneClean}`}
          id="floating-call-widget"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full aspect-square bg-[#FAF8F5] hover:bg-[#F5EFEB] text-[#785E38] hover:text-[#3A2E26] border border-[#C8A870] flex items-center justify-center shadow-[0_4px_16px_rgba(120,100,88,0.2)] hover:shadow-[0_6px_24px_rgba(120,100,88,0.32)] transition-all duration-300 hover:scale-108 active:scale-95"
          style={{ borderRadius: '50%' }}
          title="Direct Call Atelier (+63 917 888 0708)"
          aria-label="Call Atelier"
        >
          <Phone className="w-5 h-5 text-[#8C6D3B]" />
        </a>

        {/* 3. Standalone Round AI Concierge Bot Trigger Icon */}
        <button
          type="button"
          id="floating-chatbot-trigger"
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full aspect-square flex items-center justify-center shadow-[0_4px_18px_rgba(120,100,88,0.25)] hover:shadow-[0_6px_24px_rgba(120,100,88,0.38)] transition-all duration-300 hover:scale-108 active:scale-95 border relative ${
            isChatOpen
              ? 'bg-[#3A2E26] text-[#DFBE82] border-[#C8A870]'
              : 'bg-gradient-to-tr from-[#C8A870] via-[#DFBE82] to-[#C8A870] text-[#3A2E26] border-[#B89458]'
          }`}
          style={{ borderRadius: '50%' }}
          title={isChatOpen ? 'Close AI Concierge' : 'Atelier AI Concierge'}
          aria-label="Atelier AI Concierge"
        >
          <Bot className="w-5 h-5" />
          {!isChatOpen && (
            <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
          )}
        </button>
      </div>
    </>
  );
};
