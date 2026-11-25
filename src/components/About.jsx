import React from 'react';
import { Lightbulb, TrendingUp, Handshake, ChevronRight } from 'lucide-react';
import logoMark from '../assets/logo-black-mark.png';
import { useLanguage } from '../context/LanguageContext';
import { Parallax, Reveal } from './Motion';

const PILLAR_ICONS = [Lightbulb, TrendingUp, Handshake];

export default function About({ onOpenBooking }) {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white border-t border-zinc-200/80 text-start overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Photo Column with inner image scroll parallax */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="scale">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-900 shadow-xl border border-zinc-200 group">
                <Parallax speed={-32} baseScale={1.14} className="w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop"
                    alt="Media Mind Notebook and Workspace"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </Parallax>

                {/* Overlay with Burgundy Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                  <Parallax speed={12}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-burgundy flex items-center justify-center p-2 shadow-lg shrink-0">
                        <img src={logoMark} alt="Media Mind" className="w-full h-full object-contain invert" />
                      </div>
                      <div>
                        <div className="text-white font-display font-bold text-sm tracking-wide">
                          {t.about.badgeTitle}
                        </div>
                        <div className="text-zinc-300 text-xs">
                          {t.about.badgeLocations}
                        </div>
                      </div>
                    </div>
                  </Parallax>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={60}>
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1.5px] bg-burgundy/60"></span>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-burgundy font-bold">
                  {t.about.tag}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-zinc-950 tracking-tight leading-tight mt-3">
                {t.about.headingPrefix}{' '}
                <span className="text-burgundy">{t.about.headingHighlight}</span>{' '}
                {t.about.headingSuffix}
              </h2>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-xl mt-4">
                {t.about.description}
              </p>

              <div className="mt-6">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-2.5 rounded-full font-bold text-xs tracking-wide bg-burgundy hover:bg-burgundy-hover text-white inline-flex items-center gap-1.5 shadow-sm transition-all cursor-pointer group"
                >
                  <span>{t.about.cta}</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
                </button>
              </div>
            </Reveal>

            {/* 3 Callout Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-zinc-100">
              {t.about.pillars.map((pillar, idx) => {
                const Icon = PILLAR_ICONS[idx];
                return (
                  <Reveal key={idx} delay={120 + idx * 80}>
                    <div className="h-full p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:border-burgundy/60 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-burgundy-light flex items-center justify-center text-burgundy mb-2">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="font-bold text-xs text-zinc-950">{pillar.title}</div>
                      <p className="text-[11px] text-zinc-500 mt-0.5">{pillar.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
