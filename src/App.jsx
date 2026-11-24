import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import StatsBanner from './components/StatsBanner';
import VisionCta from './components/VisionCta';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-burgundy selection:text-white">
      {/* 1. Header Navigation matching mockup */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main>
        {/* 2. Hero Section: Media Mind • Create. Manage. Grow. */}
        <Hero onOpenBooking={() => setBookingOpen(true)} />

        {/* 3. Our Services: A Full-Service Creative Agency (5 Cards) */}
        <Services onOpenBooking={() => setBookingOpen(true)} />

        {/* 4. About Media Mind: Where Creativity Meets Strategy */}
        <About onOpenBooking={() => setBookingOpen(true)} />

        {/* 5. Our Portfolio: Our Work Speaks (5 Featured Showcase Cards) */}
        <Portfolio onOpenBooking={() => setBookingOpen(true)} />

        {/* 6. Dark Wave Stats Banner (100+ Clients, 300+ Projects, 5+ Years, 100% Satisfaction) */}
        <StatsBanner />

        {/* 7. Bottom CTA: Let's Bring Your Vision to Life */}
        <VisionCta onOpenBooking={() => setBookingOpen(true)} />
      </main>

      {/* 8. Dark Footer matching mockup */}
      <Footer onOpenBooking={() => setBookingOpen(true)} />

      {/* 9. Floating WhatsApp Widget */}
      <WhatsAppWidget />

      {/* 10. Booking Modal */}
      <ContactModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
