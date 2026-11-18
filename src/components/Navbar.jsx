import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, ShoppingBag } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-300 via-gold-500 to-amber-700 p-[1px] shadow-gold-glow transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center">
                <span className="font-display font-black text-xl text-gold-400 tracking-wider">M</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg tracking-[0.2em] text-white flex items-center gap-1.5">
                MEDIA <span className="text-gold-400">MINED</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase font-medium">
                Shopify & Social Media
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#services" className="text-zinc-300 hover:text-gold-400 transition-colors">
              Services
            </a>
            <a href="#case-studies" className="text-zinc-300 hover:text-gold-400 transition-colors">
              Case Studies
            </a>
            <a href="#audit" className="text-zinc-300 hover:text-gold-400 transition-colors flex items-center gap-1">
              <span>Free Audit</span>
              <span className="px-1.5 py-0.5 text-[10px] bg-gold-500/20 text-gold-300 border border-gold-500/30 rounded-full font-mono">
                AI Tool
              </span>
            </a>
            <a href="#calculator" className="text-zinc-300 hover:text-gold-400 transition-colors">
              ROI Calculator
            </a>
            <a href="#pricing" className="text-zinc-300 hover:text-gold-400 transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-zinc-300 hover:text-gold-400 transition-colors">
              Results
            </a>
          </div>

          {/* CTA & Shopify Partner Badge */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
              <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
              <span>Shopify Experts</span>
            </div>
            
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-gradient text-black shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Book Strategy Call
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-gradient text-black"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-gold-500/20 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 hover:text-gold-400 transition-colors py-1"
            >
              Services
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 hover:text-gold-400 transition-colors py-1"
            >
              Case Studies
            </a>
            <a
              href="#audit"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 hover:text-gold-400 transition-colors py-1 flex items-center justify-between"
            >
              <span>Shopify Audit Tool</span>
              <span className="px-2 py-0.5 text-[10px] bg-gold-500/20 text-gold-300 border border-gold-500/30 rounded-full font-mono">
                Interactive
              </span>
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 hover:text-gold-400 transition-colors py-1"
            >
              ROI Projection Calculator
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 hover:text-gold-400 transition-colors py-1"
            >
              Pricing & Packages
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 hover:text-gold-400 transition-colors py-1"
            >
              Client Results
            </a>
          </div>
          
          <div className="pt-4 border-t border-zinc-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl font-bold uppercase tracking-wider text-xs bg-gold-gradient text-black flex items-center justify-center gap-2 shadow-gold-glow"
            >
              <Sparkles className="w-4 h-4" />
              Schedule 1-on-1 Growth Audit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
