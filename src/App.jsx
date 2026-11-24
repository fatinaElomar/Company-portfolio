import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsTicker from './components/StatsTicker';
import ClientLogos from './components/ClientLogos';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import OurReach from './components/OurReach';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 selection:bg-gold-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={() => setBookingOpen(true)} />

        {/* Live Partner & Impact Ticker */}
        <StatsTicker />

        {/* Client Logos Grid */}
        <ClientLogos />

        {/* Core Services: Social Media, Branding, Packaging, Websites */}
        <Services onOpenBooking={() => setBookingOpen(true)} />

        {/* Why Us? (Devancy Inspired Standard) */}
        <WhyUs onOpenBooking={() => setBookingOpen(true)} />

        {/* Our Reach (Devancy Inspired: UAE, Lebanon, KSA, UK, USA) */}
        <OurReach onOpenBooking={() => setBookingOpen(true)} />

        {/* Featured Projects & High-Resolution Image Galleries */}
        <CaseStudies onOpenBooking={() => setBookingOpen(true)} />

        {/* The 4-step MEDIAMIND Growth Blueprint */}
        <Process onOpenBooking={() => setBookingOpen(true)} />

        {/* Client Reviews & Proof */}
        <Testimonials />

        {/* Frequently Asked Questions (Devancy Inspired) */}
        <Faq />
      </main>

      {/* Footer with "Stay in the loop" newsletter */}
      <Footer onOpenBooking={() => setBookingOpen(true)} />

      {/* Floating WhatsApp Contact Button */}
      <WhatsAppWidget />

      {/* Booking / Project Inquiry Modal */}
      <ContactModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
