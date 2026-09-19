import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CollectionsSection } from './components/CollectionsSection';
import { FeaturedSection } from './components/FeaturedSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DualSlidingSection } from './components/DualSlidingSection';
import { ExperienceStory } from './components/ExperienceStory';
import { GallerySection } from './components/GallerySection';
import { TrustSection } from './components/TrustSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { LightboxModal } from './components/LightboxModal';
import { BookingModal, BookingProductDetails } from './components/BookingModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { WishlistProvider } from './context/WishlistContext';
import { CollectionItem, FeaturedProduct, GalleryItem } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<CollectionItem | FeaturedProduct | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [bookingProduct, setBookingProduct] = useState<BookingProductDetails | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (details: BookingProductDetails) => {
    setBookingProduct(details);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingProduct(null);
  };

  const handleInquireFromModal = (categoryOrPiece: string) => {
    setSelectedProduct(null);
    setSelectedGalleryItem(null);
    scrollToSection('contact');

    setTimeout(() => {
      const messageInput = document.getElementById('contact-message') as HTMLTextAreaElement | null;
      if (messageInput) {
        messageInput.value = `Hello, I would like to inquire about: "${categoryOrPiece}".`;
        messageInput.focus();
      }
    }, 400);
  };

  return (
    <WishlistProvider>
      <div className="min-h-screen bg-[#FAF8F5] text-[#4A3D35] flex flex-col selection:bg-[#EBDDC8] selection:text-[#3A2E26]">
        {/* 1. STICKY SCROLL-OBSERVED TOP NAVBAR */}
        <Navbar
          onOpenContact={() => scrollToSection('contact')}
          onOpenChat={() => scrollToSection('contact')}
        />

        <main className="flex-grow">
          {/* 2. HERO SECTION WITH 16:9 VIDEO & 22-CARD HORIZONTAL MARQUEE BELOW */}
          <Hero
            onExplore={() => scrollToSection('collections')}
            onBookConsultation={() =>
              handleOpenBooking({
                id: 'hero-bespoke',
                name: 'Bespoke Atelier Consultation',
                image: 'https://i.ibb.co/Vp0GR86p/Gold-wedding-band-with-diamonds-20260919043310.jpg',
                category: 'Bespoke Bridal & Fine Jewellery',
                price: 'Complimentary Consultation',
              })
            }
            onSelectProduct={(product) => setSelectedProduct(product)}
          />

          {/* 3. EXPLORE COLLECTION SECTION (STRICTLY 3 COLUMNS PER ROW) */}
          <CollectionsSection
            onSelectCollection={(collection) => setSelectedProduct(collection)}
            onBookCollection={(details) => handleOpenBooking(details)}
          />

          {/* 4. FEATURED JEWELLERY SECTION (STRICTLY 3 CARDS PER ROW) */}
          <FeaturedSection
            onDiscoverProduct={(product) => setSelectedProduct(product)}
            onBookProduct={(details) => handleOpenBooking(details)}
          />

          {/* 5. WHY CHOOSE US */}
          <WhyChooseUs />

          {/* 6. DUAL SLIDING ANIMATION SECTION (CLEAN CAROUSEL, DIRECT MODAL OPENING) */}
          <DualSlidingSection
            onSelectItem={(product) => setSelectedProduct(product)}
          />

          {/* 7. JEWELLERY THAT BECOMES PART OF YOUR STORY */}
          <ExperienceStory />

          {/* 8. ATELIER GALLERY (STRICTLY 3 COLUMNS PER ROW) */}
          <GallerySection
            onOpenLightbox={(item) => setSelectedGalleryItem(item)}
          />

          {/* 9. CUSTOMER TRUST / 5.0 STAR RATING */}
          <TrustSection />

          {/* 10. CALL-TO-ACTION SECTION WITH PILL-SHAPED BUTTONS */}
          <CtaSection onContactClick={() => scrollToSection('contact')} />

          {/* 11. CONTACT SECTION WITH OFFICIAL CHANNELS & FORM */}
          <ContactSection />
        </main>

        {/* 12. FOOTER WITH CLEAN ICON LINKS ONLY */}
        <Footer />

        {/* FIXED FLOATING WIDGETS (OFFICIAL WHATSAPP, CALL, AI ASSISTANT CHATBOT) */}
        <FloatingWidgets />

        {/* Slide-over Wishlist Panel */}
        <WishlistDrawer
          onBookItem={(item) => handleOpenBooking(item)}
          onExplore={() => scrollToSection('collections')}
        />

        {/* Unified Booking / Appointment Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          product={bookingProduct}
          onClose={handleCloseBooking}
        />

        {/* Interactive Product & Collection Modal */}
        <ProductModal
          item={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onInquire={handleInquireFromModal}
          onBookItem={(details) => handleOpenBooking(details)}
        />

        {/* Interactive Gallery Lightbox Modal */}
        <LightboxModal
          item={selectedGalleryItem}
          onClose={() => setSelectedGalleryItem(null)}
          onInquire={handleInquireFromModal}
          onBookItem={(details) => handleOpenBooking(details)}
        />
      </div>
    </WishlistProvider>
  );
}
