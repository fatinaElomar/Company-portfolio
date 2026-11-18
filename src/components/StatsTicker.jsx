import React from 'react';
import { ShoppingCart, Flame, Award, Globe, Zap, Users } from 'lucide-react';

export default function StatsTicker() {
  const partners = [
    { name: "Shopify Plus Partner", desc: "Certified Architecture" },
    { name: "Meta Business Partner", desc: "Instagram & FB Ads" },
    { name: "TikTok Agency Partner", desc: "TikTok Shop & Creator Ads" },
    { name: "Klaviyo Elite Master", desc: "Email & SMS Retention" },
    { name: "Google Premier Partner", desc: "Search & Performance Max" }
  ];

  return (
    <div className="border-y border-gold-500/20 bg-black py-8 relative overflow-hidden">
      {/* Background subtle light */}
      <div className="absolute inset-0 bg-gold-500/[0.02]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-xs font-mono uppercase tracking-[0.25em] text-zinc-300 mb-6 font-semibold">
          Certified Ecosystem & Enterprise Integrations
        </div>

        {/* Partners Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-gold-500/40 text-center transition-all duration-300 group hover:shadow-gold-glow/20"
            >
              <div className="text-xs sm:text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
                {partner.name}
              </div>
              <div className="text-[10px] text-zinc-300 tracking-wider uppercase mt-0.5">
                {partner.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Big Impact Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-zinc-900 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-display font-black text-white text-gold-gradient">
              $48M+
            </div>
            <div className="text-xs text-zinc-300 uppercase tracking-widest mt-1">
              Shopify Revenue Scaled
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-display font-black text-white">
              210M+
            </div>
            <div className="text-xs text-zinc-300 uppercase tracking-widest mt-1">
              Social Video Impressions
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-display font-black text-gold-400">
              4.6x
            </div>
            <div className="text-xs text-zinc-300 uppercase tracking-widest mt-1">
              Average Client Blended ROAS
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-display font-black text-white">
              98.4%
            </div>
            <div className="text-xs text-zinc-300 uppercase tracking-widest mt-1">
              Client Retention Rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
