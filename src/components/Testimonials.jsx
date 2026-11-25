import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Parallax, Reveal } from './Motion';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 bg-white border-t border-zinc-200/80 relative text-start overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-[1.5px] bg-burgundy/60"></span>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-burgundy font-bold">
                {t.testimonials.tag}
              </span>
              <span className="w-8 h-[1.5px] bg-burgundy/60"></span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-zinc-950 tracking-tight mb-2">
              {t.testimonials.headingPrefix}{' '}
              <span className="text-burgundy">{t.testimonials.headingHighlight}</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
              {t.testimonials.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.items.map((review, idx) => (
            <Reveal key={idx} delay={idx * 90} className="h-full">
              <Parallax speed={idx === 1 ? -14 : 10} className="h-full">
                <div className="h-full rounded-2xl bg-zinc-50/70 p-6 sm:p-7 border border-zinc-200/90 hover:border-burgundy hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative text-start">
                  {/* Decorative Quote Icon */}
                  <div className="absolute top-5 end-5 text-burgundy/15 group-hover:text-burgundy/30 transition-colors pointer-events-none">
                    <Quote className="w-8 h-8" />
                  </div>

                  <div>
                    {/* 5 Burgundy Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-burgundy text-burgundy" />
                      ))}
                      <span className="text-[11px] font-mono text-zinc-500 ms-2 font-bold">
                        {t.testimonials.verifiedLabel}
                      </span>
                    </div>

                    <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed mb-6">
                      "{review.quote}"
                    </p>
                  </div>

                  <div className="pt-5 border-t border-zinc-200/70 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={review.avatar}
                        alt={review.author}
                        className="w-11 h-11 rounded-full object-cover border border-burgundy/30 shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-zinc-950 flex items-center gap-1.5">
                          <span className="truncate">{review.author}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-burgundy shrink-0" />
                        </div>
                        <div className="text-[11px] text-zinc-500 truncate">{review.role}</div>
                        <div className="text-[11px] text-zinc-900 font-bold truncate">{review.company}</div>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <span className="inline-block text-[10px] tracking-wide text-burgundy bg-burgundy-light px-2.5 py-1 rounded-full border border-burgundy/20 font-bold">
                        {review.metric}
                      </span>
                    </div>
                  </div>
                </div>
              </Parallax>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
