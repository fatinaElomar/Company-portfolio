import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Parallax, Reveal } from './Motion';

export default function VisionCta({ onOpenBooking }) {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#0A0A0D] text-white py-16 overflow-hidden border-t border-zinc-900">
      {/* Burgundy Flowing Wave Ribbon with Scroll Parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <Parallax
          speed={-42}
          horizontalSpeed={32}
          className="absolute top-1/2 left-10 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-burgundy/55 via-burgundy-accent/35 to-transparent blur-3xl rounded-full transform -rotate-6"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-start">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                {t.vision.headingPrefix}{' '}
                <span className="text-[#D93855]">{t.vision.headingHighlight}</span>{' '}
                {t.vision.headingSuffix}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-lg">
                {t.vision.subtitle}
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full font-bold text-xs tracking-wider bg-burgundy hover:bg-burgundy-hover text-white flex items-center gap-2 shadow-lg transition-all duration-200 cursor-pointer shrink-0 group"
            >
              <span>{t.vision.cta}</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
