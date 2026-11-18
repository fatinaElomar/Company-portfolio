import React from 'react';
import { ArrowUpRight, Instagram, Linkedin, Twitter, Youtube, Shield, ShoppingBag } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-400 text-xs py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold-300 via-gold-500 to-amber-700 p-[1px] shadow-gold-glow">
                <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-black text-lg text-gold-400">M</span>
                </div>
              </div>
              <span className="font-display font-extrabold text-lg tracking-[0.2em] text-white">
                MEDIA <span className="text-gold-400">MINED</span>
              </span>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              The premier social media acquisition & bespoke Shopify growth partner. We engineer viral brand discovery and turn high-intent traffic into 7 and 8-figure e-commerce empires.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-gold-500/50 hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-gold-500/50 hover:text-gold-400 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .591.045.87.134V9.41a6.34 6.34 0 0 0-.87-.06A6.33 6.33 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.48V8.71a8.18 8.18 0 0 0 4.91 1.62v-3.64z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-gold-500/50 hover:text-gold-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-gold-500/50 hover:text-gold-400 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-gold-500/50 hover:text-gold-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-mono uppercase tracking-wider text-xs mb-4 font-bold">
              Capabilities
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Shopify 2.0 CRO</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">TikTok & Reels Video</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">High-ROAS Meta Ads</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Creator Seeding Engine</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Klaviyo SMS & Email</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-mono uppercase tracking-wider text-xs mb-4 font-bold">
              Tools & Proof
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#audit" className="hover:text-gold-400 transition-colors">Instant Store Auditor</a></li>
              <li><a href="#calculator" className="hover:text-gold-400 transition-colors">Shopify ROI Calculator</a></li>
              <li><a href="#case-studies" className="hover:text-gold-400 transition-colors">Client Case Studies</a></li>
              <li><a href="#testimonials" className="hover:text-gold-400 transition-colors">Verified Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-gold-400 transition-colors">Investment Tiers</a></li>
            </ul>
          </div>

          {/* Partnership & Location */}
          <div>
            <h4 className="text-white font-mono uppercase tracking-wider text-xs mb-4 font-bold">
              Headquarters
            </h4>
            <div className="space-y-2">
              <p className="text-zinc-300">Media Mined Global Agency</p>
              <p className="text-zinc-500">Dedicated E-Commerce Scaling Hub</p>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-semibold"
                >
                  <span>Book Private Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Media Mined Agency. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Shopify Merchant Agreement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
