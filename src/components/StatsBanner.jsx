import React from 'react';
import { Star, Rocket, BarChart3, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Parallax, Reveal } from './Motion';

const STAT_ICONS = [Star, Rocket, BarChart3, Heart];

export default function StatsBanner() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#09090C] text-white py-16 overflow-hidden border-y border-zinc-800">
      {/* Burgundy Fluid Wave Ambient Background with Scroll Parallax */}
      <div className="absolute inset-0 pointer-events-none opacity-45">
        <Parallax
          speed={-45}
          horizontalSpeed={36}
          className="absolute -top-24 left-1/4 w-[600px] h-[350px] bg-gradient-to-r from-burgundy via-burgundy-accent to-transparent blur-[120px] rounded-full transform -rotate-12"
        />
        <Parallax
          speed={40}
          horizontalSpeed={-36}
          className="absolute -bottom-24 right-1/4 w-[500px] h-[300px] bg-gradient-to-l from-burgundy via-burgundy-dark to-transparent blur-[120px] rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x md:rtl:divide-x-reverse divide-zinc-800/80 text-center">
          {t.stats.map((item, idx) => {
            const Icon = STAT_ICONS[idx];
            return (
              <Reveal key={idx} delay={idx * 90}>
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight" dir="ltr">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-zinc-300 mt-1">
                    {item.label}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
