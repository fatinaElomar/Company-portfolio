import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import StatsBanner from './components/StatsBanner';
import VisionCta from './components/VisionCta';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 selection:bg-burgundy selection:text-white">
        {/* 1. Header Navigation */}
        <Navbar onOpenBooking={() => setBookingOpen(true)} />

        <main>
          {/* 2. Hero Section: Media Mind • Create. Manage. Grow. */}
          <Hero onOpenBooking={() => setBookingOpen(true)} />

          {/* 3. Our Services: Fixed Background + Dark Overlay (5 Cards) */}
          <Services onOpenBooking={() => setBookingOpen(true)} />

          {/* 4. About Media Mind: Where Creativity Meets Strategy */}
          <About onOpenBooking={() => setBookingOpen(true)} />

          {/* 5. Our Portfolio: Our Work Speaks (5 Featured Showcase Cards) */}
          <Portfolio onOpenBooking={() => setBookingOpen(true)} />

          {/* 6. Client Testimonials */}
          <Testimonials />

          {/* 7. Dark Wave Stats Banner */}
          <StatsBanner />

          {/* 8. Bottom CTA: Let's Bring Your Vision to Life */}
          <VisionCta onOpenBooking={() => setBookingOpen(true)} />
        </main>

        {/* 9. Dark Footer */}
        <Footer onOpenBooking={() => setBookingOpen(true)} />

        {/* 10. Floating WhatsApp Widget */}
        <WhatsAppWidget />

        {/* 11. Booking Modal */}
        <ContactModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
}
