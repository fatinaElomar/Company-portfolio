import React from 'react';
import {
  Megaphone,
  PenTool,
  Box,
  Code,
  Gem,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Parallax, Reveal } from './Motion';

const SERVICE_ICONS = [Megaphone, PenTool, Box, Code, Gem];
const SERVICES_BG_IMAGE =
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000&auto=format&fit=crop';

export default function Services({ onOpenBooking }) {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="relative py-24 bg-black border-y border-zinc-900 text-center overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${SERVICES_BG_IMAGE})` }}
    >
      {/* Dark + Burgundy Gradient Overlays over Fixed Background Image */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-zinc-950/60 to-burgundy/40 pointer-events-none"></div>

      {/* Burgundy Ambient Glow with Scroll Parallax */}
      <Parallax
        speed={-55}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-burgundy/25 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <Reveal delay={0}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1.5px] bg-burgundy-accent"></span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D93855] font-bold">
              {t.services.tag}
            </span>
            <span className="w-8 h-[1.5px] bg-burgundy-accent"></span>
          </div>

          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight mb-2">
            {t.services.headingPrefix}{' '}
            <span className="text-[#D93855]">{t.services.headingHighlight}</span>{' '}
            {t.services.headingSuffix}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed mb-12">
            {t.services.subtitle}
          </p>
        </Reveal>

        {/* 5 Service Cards Row with staggered reveal & subtle alternating parallax */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {t.services.items.map((item, idx) => {
            const Icon = SERVICE_ICONS[idx];
            return (
              <Reveal key={idx} delay={idx * 80} className="h-full">
                <Parallax speed={idx % 2 === 0 ? -10 : 10} className="h-full">
                  <div
                    onClick={onOpenBooking}
                    className="h-full p-6 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800/90 hover:border-burgundy-accent hover:bg-zinc-900/95 hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-between group cursor-pointer text-center"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-xl bg-burgundy/25 border border-burgundy/50 flex items-center justify-center text-[#E84A66] mb-5 group-hover:bg-burgundy group-hover:border-burgundy group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6 stroke-[1.75]" />
                      </div>

                      <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-[#E84A66] transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-[11px] text-zinc-300/90 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-zinc-800/80 w-full flex items-center justify-center gap-1 text-xs font-bold text-[#E84A66] opacity-90 group-hover:opacity-100 transition-opacity">
                      <span className="text-[11px]">{t.services.cardCta}</span>
                      <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </div>
                  </div>
                </Parallax>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
