import React, { useState } from 'react';
import { services } from '../data/portfolioData';
import { 
  ShoppingBag, 
  Video, 
  TrendingUp, 
  Sparkles, 
  Repeat, 
  ShieldCheck, 
  Check, 
  ArrowRight 
} from 'lucide-react';

const iconMap = {
  ShoppingBag,
  Video,
  TrendingUp,
  Sparkles,
  Repeat,
  ShieldCheck
};

export default function Services({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
            Our Core Specialization
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Engineered For <span className="text-gold-gradient">Shopify Brands</span> That Demand Scale
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Most social agencies bring views that don't convert. Most web designers build pretty sites that don't sell. Media Mined connects viral social storytelling directly to high-converting Shopify infrastructure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-gold-500/50 p-6 sm:p-8 transition-all duration-300 hover:shadow-gold-glow/20 flex flex-col justify-between"
              >
                {/* Glow pill on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-2xl group-hover:bg-gold-500/15 transition-all"></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-black border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300 shadow-gold-glow/30">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gold-400 px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-gold-300 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="border-t border-zinc-800/80 pt-4 mb-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 mb-3 font-semibold">
                      Deliverables Include:
                    </div>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-black bg-zinc-800/50 hover:bg-gold-gradient transition-all duration-300 flex items-center justify-center gap-1.5"
                  >
                    <span>Deploy This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
