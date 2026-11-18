import React from 'react';
import { clientReviews } from '../data/portfolioData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
            Client Voices
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Endorsed By <span className="text-gold-gradient">E-Commerce Leaders</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            See what founders, brand directors, and Shopify merchants say about scaling with Media Mined.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientReviews.map((review, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-zinc-950 p-6 sm:p-8 border border-zinc-800/80 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-gold-glow/20 relative"
            >
              <div className="absolute top-6 right-6 text-gold-500/20 group-hover:text-gold-500/40 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                  <span className="text-[11px] font-mono text-zinc-400 ml-2">5.0 Verified</span>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-11 h-11 rounded-full object-cover border border-gold-500/40"
                  />
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      {review.author}
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                    </div>
                    <div className="text-xs text-zinc-400">{review.role}</div>
                    <div className="text-[11px] text-gold-400 font-medium">{review.company}</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {review.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
