import React from 'react';
import { ChevronRight, ArrowLeft, Instagram, Youtube, Sparkles, MapPin } from 'lucide-react';
import logoMark from '../assets/logo-black-mark.png';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Content matching mockup) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <MapPin className="w-3.5 h-3.5 text-burgundy" />
              <span>بيروت 🇱🇧 • دبي 🇦🇪</span>
              <span className="text-zinc-300">•</span>
              <span className="text-zinc-500 text-[11px]">وكالة متكاملة</span>
            </div>

            {/* Vertical Accent Line + Brand Headline matching mockup */}
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-20 sm:h-24 bg-burgundy rounded-full shrink-0 mt-1"></div>
              <div>
                <div className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-zinc-950 tracking-tight leading-none mb-2">
                  <span>Media</span> <span className="text-burgundy">Mind</span>
                </div>
                <h1 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-zinc-900 tracking-tight leading-tight">
                  Create. Manage. Grow.
                </h1>
              </div>
            </div>

            {/* Subtitle in Arabic and English matching mockup */}
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal max-w-lg">
              شريكك الإبداعي لإدارة السوشيال ميديا، التصميم الجرافيكي، التغليف الفاخر، وبناء المواقع الإلكترونية ومتاجر شوبيفاي القوية.
              <span className="block text-xs text-zinc-400 mt-1.5 font-sans">
                Your creative partner for social media management, graphic design, packaging, and powerful websites.
              </span>
            </p>

            {/* CTA Button matching mockup: Discover Our Services > */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full font-bold text-xs tracking-wider bg-burgundy hover:bg-burgundy-hover text-white flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>استكشف خدماتنا (Discover Our Services)</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </button>

              <a
                href="#portfolio"
                className="px-6 py-3.5 rounded-full font-semibold text-xs text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 transition-colors"
              >
                سابقة أعمالنا
              </a>
            </div>
          </div>

          {/* Right Column (Hero 3D Mockup Visual matching mockup) */}
          <div className="lg:col-span-7 relative">
            
            {/* Background Curved Dark & Burgundy Fluid Shape */}
            <div className="relative w-full aspect-[16/11] max-w-2xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-tr from-[#0C0C0E] via-[#1A1A22] to-[#2B0E15] p-6 sm:p-8 flex items-center justify-center shadow-2xl border border-zinc-800">
              
              {/* Burgundy Ambient Glow Ribbons */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-burgundy/60 via-burgundy-accent/30 to-transparent blur-3xl rounded-full pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-burgundy-dark/50 blur-2xl rounded-full pointer-events-none"></div>

              {/* Composition matching the mockup */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                
                {/* Floating Social Badges */}
                {/* Instagram */}
                <div className="absolute -top-1 right-12 w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] p-2 flex items-center justify-center shadow-lg transform -rotate-12 hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-white" />
                </div>

                {/* TikTok */}
                <div className="absolute top-4 right-32 w-10 h-10 rounded-2xl bg-black border border-zinc-700 p-2 flex items-center justify-center shadow-lg transform rotate-6 hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .591.045.87.134V9.41a6.34 6.34 0 0 0-.87-.06A6.33 6.33 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.48V8.71a8.18 8.18 0 0 0 4.91 1.62v-3.64z"/>
                  </svg>
                </div>

                {/* YouTube */}
                <div className="absolute top-20 right-2 w-10 h-10 rounded-2xl bg-[#FF0000] p-2 flex items-center justify-center shadow-lg transform rotate-12 hover:scale-110 transition-transform">
                  <Youtube className="w-6 h-6 text-white" />
                </div>

                {/* Shopify */}
                <div className="absolute top-6 left-12 w-11 h-11 rounded-2xl bg-white/95 border border-zinc-200 p-2 flex items-center justify-center shadow-lg transform -rotate-6 hover:scale-110 transition-transform">
                  <span className="font-display font-black text-sm text-[#95BF47]">S</span>
                </div>

                {/* Central Laptop Showcase */}
                <div className="relative w-4/5 max-w-md bg-zinc-900 rounded-t-xl border-2 border-zinc-700 p-2 shadow-2xl">
                  {/* Laptop Screen */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-[#121217] via-[#240A10] to-[#0A0A0C] rounded-lg border border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-950/80 border border-zinc-700/80 p-2.5 flex items-center justify-center mb-2 shadow-inner">
                      <img src={logoMark} alt="Media Mind" className="w-full h-full object-contain invert" />
                    </div>
                    <span className="font-display font-black text-xs text-white tracking-widest uppercase">
                      Media Mind
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono mt-0.5">
                      Creative Studio Platform
                    </span>
                  </div>
                  {/* Laptop Base */}
                  <div className="h-2 w-full bg-zinc-700 rounded-b mt-0.5"></div>
                </div>

                {/* Foreground Branded Elements: Shopping Bags & Coffee Tumbler */}
                <div className="absolute -bottom-2 -left-2 flex items-end gap-2 transform translate-y-2">
                  {/* Black Bag */}
                  <div className="w-16 sm:w-20 h-20 sm:h-24 bg-zinc-950 border border-zinc-800 rounded-sm shadow-xl flex flex-col items-center justify-center p-2 transform -rotate-3">
                    <div className="w-3 h-5 border-t-2 border-r-2 border-l-2 border-zinc-600 rounded-t-full -mt-4 mb-2"></div>
                    <img src={logoMark} alt="M" className="w-6 h-6 object-contain invert opacity-90" />
                  </div>

                  {/* Burgundy Bag */}
                  <div className="w-14 sm:w-16 h-16 sm:h-20 bg-burgundy border border-burgundy-accent rounded-sm shadow-xl flex flex-col items-center justify-center p-2 transform rotate-6">
                    <div className="w-3 h-4 border-t-2 border-r-2 border-l-2 border-zinc-400 rounded-t-full -mt-3 mb-1.5"></div>
                    <img src={logoMark} alt="M" className="w-5 h-5 object-contain invert opacity-90" />
                  </div>

                  {/* Branded Coffee Cup */}
                  <div className="w-9 sm:w-11 h-14 sm:h-16 bg-white rounded-b-md shadow-xl flex flex-col items-center justify-center p-1 border border-zinc-200">
                    <div className="w-full h-1.5 bg-zinc-900 rounded-t -mt-2 mb-2"></div>
                    <img src={logoMark} alt="M" className="w-4 h-4 object-contain" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
