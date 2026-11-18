import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsTicker from './components/StatsTicker';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import StoreAuditor from './components/StoreAuditor';
import RoiCalculator from './components/RoiCalculator';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-gold-500 selection:text-black">
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main>
        {/* Hero with interactive Shopify dashboard preview */}
        <Hero onOpenBooking={() => setBookingOpen(true)} />

        {/* Live Partner & Impact Ticker */}
        <StatsTicker />

        {/* Core Services: Shopify CRO, Social Media Viral, Creator Engine, Paid Ads */}
        <Services onOpenBooking={() => setBookingOpen(true)} />

        {/* Case Studies & Metrics Showcase */}
        <CaseStudies onOpenBooking={() => setBookingOpen(true)} />

        {/* Interactive Shopify & Social Media Diagnostic Tool */}
        <StoreAuditor onOpenBooking={() => setBookingOpen(true)} />

        {/* Interactive ROI & Revenue Slider */}
        <RoiCalculator onOpenBooking={() => setBookingOpen(true)} />

        {/* The 4-step Media Mined Growth Blueprint */}
        <Process onOpenBooking={() => setBookingOpen(true)} />

        {/* Client Reviews & Proof */}
        <Testimonials />

        {/* Transparent Investment Retainers */}
        <Pricing onOpenBooking={() => setBookingOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => setBookingOpen(true)} />

      {/* Booking / Strategy Call Modal */}
      <ContactModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
