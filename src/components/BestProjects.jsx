import React from 'react';
import { ExternalLink, Instagram, ArrowUpRight, Sparkles, Images } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BEST_PROJECTS } from '../data/projectsData';
import { Parallax, Reveal } from './Motion';

export default function BestProjects({ onOpenGallery, onOpenBooking }) {
  const { t, lang } = useLanguage();

  return (
    <section
      id="best-projects"
      className="relative py-20 bg-[#0B0B0F] text-white border-y border-zinc-900 text-start overflow-hidden"
    >
      {/* Parallax Burgundy Glow */}
      <Parallax
        speed={-45}
        horizontalSpeed={24}
        className="absolute -top-24 right-1/4 w-[560px] h-[280px] bg-burgundy/25 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[1.5px] bg-burgundy-accent"></span>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D93855] font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.bestProjects.tag}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
                {t.bestProjects.headingPrefix}{' '}
                <span className="text-[#D93855]">{t.bestProjects.headingHighlight}</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
                {t.bestProjects.subtitle}
              </p>
            </div>

            <button
              onClick={onOpenGallery}
              className="self-start md:self-auto px-5 py-2.5 rounded-full bg-burgundy hover:bg-burgundy-hover text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 shadow-md"
            >
              <Images className="w-4 h-4" />
              <span>{t.bestProjects.exploreGallery}</span>
            </button>
          </div>
        </Reveal>

        {/* 3 Spotlight Best Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {BEST_PROJECTS.map((project, idx) => {
            const copy = project[lang];
            const isInsta = project.linkType === 'instagram';

            return (
              <Reveal key={project.id} delay={idx * 90} className="h-full">
                <Parallax speed={idx === 1 ? -14 : 10} className="h-full">
                  <article className="h-full rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-burgundy-accent transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl">
                    <div>
                      {/* Clickable Image directly linked to live site / Instagram */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative aspect-[16/10] overflow-hidden bg-zinc-900"
                      >
                        <img
                          src={project.image}
                          alt={copy.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Category Tag */}
                        <div className="absolute top-3 start-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-zinc-700/80 text-[10px] font-bold text-zinc-200">
                          {copy.category}
                        </div>

                        {/* Metric Highlight */}
                        <div className="absolute top-3 end-3 px-2.5 py-1 rounded-full bg-burgundy/90 text-[10px] font-bold text-white shadow">
                          {copy.metric}
                        </div>

                        {/* Bottom Hover Live Badge */}
                        <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between">
                          <span className="text-[11px] font-medium text-zinc-300">{copy.client}</span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 text-zinc-950 text-[10px] font-bold shadow">
                            {isInsta ? (
                              <Instagram className="w-3 h-3 text-burgundy" />
                            ) : (
                              <ExternalLink className="w-3 h-3 text-burgundy" />
                            )}
                            <span>{copy.linkLabel}</span>
                          </span>
                        </div>
                      </a>

                      {/* Card Body */}
                      <div className="p-6">
                        <h3 className="font-display font-bold text-lg text-white group-hover:text-[#E84A66] transition-colors mb-2">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {copy.title}
                          </a>
                        </h3>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {copy.desc}
                        </p>
                      </div>
                    </div>

                    {/* Footer Action Links */}
                    <div className="px-6 pb-6 pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E84A66] hover:text-white transition-colors"
                      >
                        {isInsta ? (
                          <Instagram className="w-3.5 h-3.5" />
                        ) : (
                          <ExternalLink className="w-3.5 h-3.5" />
                        )}
                        <span>{copy.linkLabel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={onOpenBooking}
                        className="text-[11px] font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {t.bestProjects.requestSimilar}
                      </button>
                    </div>
                  </article>
                </Parallax>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
