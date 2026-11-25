import React, { useState, useEffect, useCallback } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import BestProjects from './components/BestProjects';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import StatsBanner from './components/StatsBanner';
import VisionCta from './components/VisionCta';
import GalleryPage from './components/GalleryPage';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(() =>
    typeof window !== 'undefined' && window.location.hash === '#/gallery'
      ? 'gallery'
      : 'home'
  );

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash === '#/gallery') {
        setCurrentPage('gallery');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateGallery = useCallback(() => {
    setCurrentPage('gallery');
    if (window.location.hash !== '#/gallery') {
      window.location.hash = '#/gallery';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateHome = useCallback((sectionId = null) => {
    const wasGallery = currentPage === 'gallery';
    setCurrentPage('home');

    if (window.location.hash === '#/gallery') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    if (sectionId) {
      setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, wasGallery ? 80 : 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 selection:bg-burgundy selection:text-white">
        {/* 1. Header Navigation */}
        <Navbar
          currentPage={currentPage}
          onNavigateHome={navigateHome}
          onNavigateGallery={navigateGallery}
          onOpenBooking={() => setBookingOpen(true)}
        />

        {currentPage === 'gallery' ? (
          <main>
            <GalleryPage
              onBackHome={() => navigateHome(null)}
              onOpenBooking={() => setBookingOpen(true)}
            />
          </main>
        ) : (
          <main>
            {/* 2. Hero Section: Media Mind • Create. Manage. Grow. */}
            <Hero onOpenBooking={() => setBookingOpen(true)} />

            {/* 3. Our Services: Fixed Background + Dark Overlay (5 Cards) */}
            <Services onOpenBooking={() => setBookingOpen(true)} />

            {/* 4. About Media Mind: Where Creativity Meets Strategy */}
            <About onOpenBooking={() => setBookingOpen(true)} />

            {/* 5. Best Projects Spotlight (Linked to Live Sites & Instagram) */}
            <BestProjects
              onOpenGallery={navigateGallery}
              onOpenBooking={() => setBookingOpen(true)}
            />

            {/* 6. Our Portfolio: Our Work Speaks (5 Cards with Live Links) */}
            <Portfolio
              onOpenBooking={() => setBookingOpen(true)}
              onOpenGallery={navigateGallery}
            />

            {/* 7. Client Testimonials */}
            <Testimonials />

            {/* 8. Dark Wave Stats Banner */}
            <StatsBanner />

            {/* 9. Bottom CTA: Let's Bring Your Vision to Life */}
            <VisionCta onOpenBooking={() => setBookingOpen(true)} />
          </main>
        )}

        {/* 10. Dark Footer */}
        <Footer
          onNavigateHome={navigateHome}
          onNavigateGallery={navigateGallery}
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* 11. Floating WhatsApp Widget */}
        <WhatsAppWidget />

        {/* 12. Booking Modal */}
        <ContactModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
}
