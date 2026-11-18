import React from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, CheckCircle2, Shield, Play } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-[#0A0A0A]">
      {/* Background Gold Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-gold-500/15 via-amber-600/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-0"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-gold-400/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f10_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-medium mb-8 shadow-gold-glow/40 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-gold-400 animate-ping"></span>
            <span className="font-semibold tracking-wide text-white">MEDIA MINED</span>
            <span className="text-zinc-600">•</span>
            <span className="text-gold-400">Shopify & Social Media Growth Agency</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white leading-[1.08] mb-6">
            We Turn Social Media Obsession Into{' '}
            <span className="text-gold-gradient underline decoration-gold-500/40 underline-offset-8">
              Shopify Millions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            We craft high-converting Shopify storefronts, orchestrate viral short-form video pipelines, and scale high-ROAS paid ads for ambitious e-commerce brands ready to break 7 and 8 figures.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase bg-gold-gradient text-black shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Claim Free 30-Min Growth Audit</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <a
              href="#case-studies"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm tracking-wider bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-gold-500/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-gold-400 fill-gold-400" />
              <span>View Case Studies & ROAS</span>
            </a>
          </div>

          {/* Micro-proof points */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-400 border-t border-zinc-900 pt-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-400" />
              <span>Certified Shopify Plus Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-400" />
              <span>$48M+ E-Commerce Revenue Scaled</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold-400" />
              <span>Average 4.4x Blended Client ROAS</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Showcase Card (Live Shopify Dashboard Mockup) */}
        <div className="mt-16 max-w-5xl mx-auto relative group">
          {/* Card Border Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500/40 via-amber-400/20 to-gold-600/40 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative rounded-2xl bg-zinc-950 border border-gold-500/30 overflow-hidden shadow-2xl p-6 sm:p-8">
            {/* Top Bar simulating Shopify / Analytics header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-zinc-800/80 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <div className="text-left">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    Live Client Ecosystem • Shopify 2.0 + Meta & TikTok Ads
                  </div>
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    Media Mined Master Funnel
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-500/30 font-mono">
                      Q4 Scaling Window
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-zinc-400">Attribution Window:</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-900 text-gold-400 border border-zinc-800 font-mono">
                  Real-Time Blended
                </span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/70 hover:border-gold-500/40 transition-colors">
                <div className="text-xs text-zinc-400 mb-1">Gross Shopify GMV</div>
                <div className="text-xl sm:text-2xl font-bold font-display text-white text-gold-gradient">$2,418,920</div>
                <div className="text-[11px] text-emerald-400 font-mono mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +384% vs last period
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/70 hover:border-gold-500/40 transition-colors">
                <div className="text-xs text-zinc-400 mb-1">Blended ROAS</div>
                <div className="text-xl sm:text-2xl font-bold font-display text-white">4.82x</div>
                <div className="text-[11px] text-emerald-400 font-mono mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> TikTok & Meta Combined
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/70 hover:border-gold-500/40 transition-colors">
                <div className="text-xs text-zinc-400 mb-1">Store Conversion Rate</div>
                <div className="text-xl sm:text-2xl font-bold font-display text-gold-400">4.62%</div>
                <div className="text-[11px] text-zinc-400 font-mono mt-1">
                  Industry Avg: 1.8%
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/70 hover:border-gold-500/40 transition-colors">
                <div className="text-xs text-zinc-400 mb-1">Viral Video Reach</div>
                <div className="text-xl sm:text-2xl font-bold font-display text-white">28.4M</div>
                <div className="text-[11px] text-gold-400 font-mono mt-1">
                  Organic & Seeding Views
                </div>
              </div>
            </div>

            {/* Visual Funnel Representation */}
            <div className="p-4 rounded-xl bg-black/60 border border-zinc-800">
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                <span className="font-medium text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  Media Mined End-to-End Flywheel
                </span>
                <span className="text-gold-400 font-mono">100% Fully Managed</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-zinc-900/80 border-l-2 border-gold-400">
                  <div className="font-semibold text-white">1. Viral Social Magnet</div>
                  <p className="text-zinc-400 text-[11px] mt-0.5">High-frequency TikTok & IG Reels hooks attract millions of targeted shoppers.</p>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900/80 border-l-2 border-gold-500">
                  <div className="font-semibold text-white">2. High-Converting Shopify</div>
                  <p className="text-zinc-400 text-[11px] mt-0.5">Ultra-fast, luxury UI, sticky bundles & 1-click checkout convert traffic at 4% - 6%.</p>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900/80 border-l-2 border-amber-600">
                  <div className="font-semibold text-white">3. Retention & Klaviyo Machine</div>
                  <p className="text-zinc-400 text-[11px] mt-0.5">Automated SMS & email flows drive 35%+ repeat purchase revenue automatically.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
