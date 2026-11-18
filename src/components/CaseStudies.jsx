import React, { useState } from 'react';
import { caseStudies } from '../data/portfolioData';
import { TrendingUp, ArrowUpRight, CheckCircle, ExternalLink, ShieldAlert, Award } from 'lucide-react';

export default function CaseStudies({ onOpenBooking }) {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0]);
  const [filter, setFilter] = useState('All');

  const filteredStudies = caseStudies.filter(item => {
    if (filter === 'All') return true;
    if (filter === 'Shopify') return item.tags.some(t => t.toLowerCase().includes('shopify'));
    if (filter === 'TikTok / UGC') return item.tags.some(t => t.toLowerCase().includes('tiktok') || t.toLowerCase().includes('ugc') || t.toLowerCase().includes('creator'));
    if (filter === 'Scale & Ads') return item.roas.includes('ROAS') || item.growth.includes('+');
    return true;
  });

  return (
    <section id="case-studies" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
              Verified Track Record
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Real Revenue. <span className="text-gold-gradient">Real Brands.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Inspect how Media Mined's combination of social media dominance and Shopify architecture transformed these brands.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {['All', 'Shopify', 'TikTok / UGC', 'Scale & Ads'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  filter === category
                    ? 'bg-gold-500 text-black font-bold shadow-gold-glow'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study Hero Showcase */}
        {selectedCase && (
          <div className="mb-16 rounded-3xl bg-zinc-950 border border-gold-500/30 overflow-hidden shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
              {/* Left Column: Metrics & Story */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-400 bg-gold-500/10 border border-gold-500/30 px-3 py-1 rounded-full">
                    {selectedCase.category}
                  </span>
                  <span className="text-xs text-zinc-400">Timeline: {selectedCase.timeline}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-black text-white">
                  {selectedCase.title}
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {selectedCase.summary}
                </p>

                {/* Challenge & Solution Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <div className="text-xs font-bold text-red-400 flex items-center gap-1.5 uppercase tracking-wider mb-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      The Bottleneck
                    </div>
                    <div className="text-xs text-zinc-300">{selectedCase.challenge}</div>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <div className="text-xs font-bold text-gold-400 flex items-center gap-1.5 uppercase tracking-wider mb-1">
                      <Award className="w-3.5 h-3.5" />
                      Media Mined Execution
                    </div>
                    <div className="text-xs text-zinc-300">{selectedCase.solution}</div>
                  </div>
                </div>

                {/* Quantitative Metric Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-zinc-900">
                  {selectedCase.results.map((res, rIdx) => (
                    <div key={rIdx} className="p-3 rounded-lg bg-black/80 border border-zinc-800/80">
                      <div className="text-xs text-zinc-400">{res.label}</div>
                      <div className="text-base sm:text-lg font-bold font-display text-gold-400 mt-0.5">
                        {res.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags & Action */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCase.tags.map((t, idx) => (
                      <span key={idx} className="text-[11px] text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-gradient text-black flex items-center gap-2 hover:shadow-gold-glow transition-all"
                  >
                    <span>Scale A Brand Like This</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Mockup */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-gold-500/20 aspect-[4/3] group">
                  <img
                    src={selectedCase.heroImage}
                    alt={selectedCase.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                  
                  {/* Floating Stat Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-gold-500/40 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-zinc-400 uppercase font-mono tracking-wider">Gross Sales Generated</div>
                      <div className="text-xl font-bold font-display text-white text-gold-gradient">
                        {selectedCase.revenue}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {selectedCase.growth}
                      </div>
                      <div className="text-xs text-zinc-400 font-mono">{selectedCase.roas}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedCase(study)}
              className={`cursor-pointer rounded-2xl bg-zinc-950 p-5 border transition-all duration-300 relative group ${
                selectedCase?.id === study.id
                  ? 'border-gold-500 shadow-gold-glow/40 scale-[1.02]'
                  : 'border-zinc-800/80 hover:border-gold-500/40 hover:bg-zinc-900/50'
              }`}
            >
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-4">
                <img
                  src={study.heroImage}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md text-gold-400 font-mono text-[11px] px-2 py-0.5 rounded border border-gold-500/30">
                  {study.roas}
                </div>
              </div>

              <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mb-1">
                {study.tag}
              </div>
              <h4 className="text-lg font-bold font-display text-white group-hover:text-gold-300 transition-colors">
                {study.title}
              </h4>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-900">
                <div className="text-xs text-zinc-400">Total Scale</div>
                <div className="text-sm font-bold text-gold-400 font-display">{study.revenue}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
