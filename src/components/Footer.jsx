import React from 'react';
import { Instagram, Youtube, Linkedin } from 'lucide-react';
import logoMark from '../assets/logo-black-mark.png';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ onNavigateHome, onNavigateGallery, onOpenBooking }) {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-[#060608] border-t border-zinc-900 text-zinc-400 text-xs py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome(null);
            }}
            className="flex items-center gap-2.5 group"
          >
            <img
              src={logoMark}
              alt="Media Mind"
              className="h-8 w-auto object-contain logo-burgundy transition-transform group-hover:scale-105"
            />
            <div className="flex items-center font-display font-bold text-lg text-white" dir="ltr">
              <span>Media</span>
              <span className="text-burgundy ms-1">Mind</span>
            </div>
          </a>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-300 font-medium">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome(null);
              }}
              className="hover:text-white transition-colors"
            >
              {t.nav.home}
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome('services');
              }}
              className="hover:text-white transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#best-projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome('best-projects');
              }}
              className="hover:text-white transition-colors"
            >
              {t.nav.bestProjects}
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome('portfolio');
              }}
              className="hover:text-white transition-colors"
            >
              {t.nav.portfolio}
            </a>
            <a
              href="#/gallery"
              onClick={(e) => {
                e.preventDefault();
                onNavigateGallery();
              }}
              className="hover:text-white transition-colors"
            >
              {t.nav.gallery}
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome('about');
              }}
              className="hover:text-white transition-colors"
            >
              {t.nav.about}
            </a>
            <button onClick={onOpenBooking} className="hover:text-white transition-colors cursor-pointer">
              {t.nav.contact}
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 text-zinc-300">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-burgundy transition-colors p-1"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
              className="hover:text-burgundy transition-colors font-bold font-display text-sm tracking-tighter p-1"
              aria-label="Behance"
            >
              Bē
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-burgundy transition-colors p-1"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-burgundy transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright & locations */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-2">
          <div>
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
          <div className="flex items-center gap-3">
            <span>{t.footer.beirut}</span>
            <span>•</span>
            <span>{t.footer.dubai}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
