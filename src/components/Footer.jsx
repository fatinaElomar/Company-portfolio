import React from 'react';
import { Instagram, Youtube, Linkedin, MapPin, PhoneCall } from 'lucide-react';
import logoMark from '../assets/logo-black-mark.png';

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="contact" className="bg-[#060608] border-t border-zinc-900 text-zinc-400 text-xs py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row matching mockup */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
          
          {/* Left: Media Mind Logo in Burgundy matching mockup */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src={logoMark}
              alt="Media Mind"
              className="h-8 w-auto object-contain logo-burgundy transition-transform group-hover:scale-105"
            />
            <div className="flex items-center font-display font-bold text-lg text-white">
              <span>Media</span>
              <span className="text-burgundy ml-1 mr-1">Mind</span>
            </div>
          </a>

          {/* Middle: Nav Links matching mockup */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-300 font-medium">
            <a href="#" className="hover:text-white transition-colors">
              الرئيسية (Home)
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              خدماتنا (Services)
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors">
              أعمالنا (Portfolio)
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              عن الوكالة (About)
            </a>
            <button onClick={onOpenBooking} className="hover:text-white transition-colors cursor-pointer">
              تواصل معنا (Contact)
            </button>
          </div>

          {/* Right: Social Media Icons matching mockup (Instagram, Behance, YouTube, LinkedIn) */}
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

            {/* Behance Icon */}
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
            © {new Date().getFullYear()} Media Mind Creative Agency. جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center gap-3">
            <span>بيروت، لبنان 🇱🇧</span>
            <span>•</span>
            <span>دبي، الإمارات العربية المتحدة 🇦🇪</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
