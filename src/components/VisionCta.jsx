import React from 'react';
import { ChevronRight, PhoneCall } from 'lucide-react';

export default function VisionCta({ onOpenBooking }) {
  return (
    <section className="relative bg-[#0A0A0D] text-white py-16 overflow-hidden border-t border-zinc-900">
      
      {/* Burgundy Flowing Wave Ribbon in Background matching mockup */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-burgundy/50 via-burgundy-accent/30 to-transparent blur-3xl rounded-full transform -rotate-6"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
          
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              Let's Bring Your <span className="text-burgundy">Vision</span> to Life
            </h2>
            <div className="text-sm sm:text-base font-bold text-zinc-300 mt-1">
              دعنا نحول رؤيتك إلى واقع ملموس
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-lg">
              Get in touch today and let's create something amazing together.
              <span className="block text-zinc-500 font-medium">
                تواصل معنا اليوم ولنبتكر معاً شيئاً استثنائياً يضاعف مبيعاتك وهيبة علامتك التجارية.
              </span>
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full font-bold text-xs tracking-wider bg-burgundy hover:bg-burgundy-hover text-white flex items-center gap-2 shadow-lg transition-all duration-200 cursor-pointer shrink-0 group"
          >
            <span>تواصل معنا (Contact Us)</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </button>

        </div>
      </div>
    </section>
  );
}
