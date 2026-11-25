import React, { useState } from 'react';
import { ChevronRight, Eye, PhoneCall, X, ExternalLink, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_PROJECTS } from '../data/projectsData';
import { Parallax, Reveal } from './Motion';

export default function Portfolio({ onOpenBooking, onOpenGallery }) {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const { t, lang } = useLanguage();

  const activeModal = PORTFOLIO_PROJECTS.find((p) => p.id === activeProjectId) || null;

  return (
    <section id="portfolio" className="py-20 bg-zinc-50/50 border-t border-zinc-200/80 text-start overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Row */}
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1.5px] bg-burgundy/60"></span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-burgundy font-bold">
              {t.portfolio.tag}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-zinc-950 tracking-tight leading-tight">
                {t.portfolio.headingPrefix}{' '}
                <span className="text-burgundy">{t.portfolio.headingHighlight}</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1.5 max-w-xl">
                {t.portfolio.subtitle}
              </p>
            </div>

            <button
              onClick={onOpenGallery}
              className="self-start md:self-auto px-5 py-2 rounded-full border border-burgundy text-burgundy hover:bg-burgundy hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>{t.portfolio.viewAll}</span>
              <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </div>
        </Reveal>

        {/* 5 Project Thumbnails Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PORTFOLIO_PROJECTS.map((project, idx) => {
            const copy = project[lang];
            const isInsta = project.linkType === 'instagram';

            return (
              <Reveal key={project.id} delay={idx * 80} className="h-full">
                <Parallax speed={idx % 2 === 0 ? -10 : 10} className="h-full">
                  <div className="h-full group relative rounded-2xl overflow-hidden bg-white border border-zinc-200/90 hover:border-burgundy hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                    <div className="aspect-[4/3] w-full overflow-hidden relative bg-zinc-900">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                      >
                        <img
                          src={project.image}
                          alt={copy.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </a>

                      {/* Quick Lightbox Trigger */}
                      <button
                        type="button"
                        onClick={() => setActiveProjectId(project.id)}
                        aria-label={copy.title}
                        className="absolute top-2 end-2 w-8 h-8 rounded-full bg-white/90 hover:bg-burgundy text-zinc-900 hover:text-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>

                      <div className="absolute top-2 start-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] text-white font-mono">
                        {copy.category}
                      </div>
                    </div>

                    <div className="p-3.5 text-start flex-1 flex flex-col justify-between gap-3">
                      <div>
                        <h4 className="font-display font-bold text-xs sm:text-sm text-zinc-950 group-hover:text-burgundy transition-colors line-clamp-1">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {copy.title}
                          </a>
                        </h4>
                        <p className="text-[11px] text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                          {copy.desc}
                        </p>
                      </div>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pt-2 border-t border-zinc-100 inline-flex items-center gap-1.5 text-[11px] font-bold text-burgundy hover:text-burgundy-hover transition-colors"
                      >
                        {isInsta ? (
                          <Instagram className="w-3.5 h-3.5" />
                        ) : (
                          <ExternalLink className="w-3.5 h-3.5" />
                        )}
                        <span>{copy.linkLabel}</span>
                      </a>
                    </div>
                  </div>
                </Parallax>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Project Lightbox Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in text-start">
          <div className="relative w-full max-w-xl rounded-2xl bg-white border border-zinc-200 p-6 shadow-2xl">
            <button
              onClick={() => setActiveProjectId(null)}
              aria-label={t.portfolio.closeAria}
              className="absolute top-4 end-4 p-2 rounded-full bg-zinc-100 text-zinc-600 hover:text-black hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono uppercase text-burgundy font-bold block mb-1">
              {activeModal[lang].category}
            </span>
            <h3 className="text-xl font-display font-bold text-zinc-950 mb-4">
              {activeModal[lang].title}
            </h3>

            <a
              href={activeModal.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden aspect-[16/10] mb-4 border border-zinc-200 group"
            >
              <img
                src={activeModal.image}
                alt={activeModal[lang].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </a>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
              {activeModal[lang].desc}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-100">
              <a
                href={activeModal.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-bold border border-burgundy text-burgundy hover:bg-burgundy hover:text-white inline-flex items-center gap-1.5 transition-all"
              >
                {activeModal.linkType === 'instagram' ? (
                  <Instagram className="w-3.5 h-3.5" />
                ) : (
                  <ExternalLink className="w-3.5 h-3.5" />
                )}
                <span>{activeModal[lang].linkLabel}</span>
              </a>

              <button
                onClick={() => {
                  setActiveProjectId(null);
                  onOpenBooking();
                }}
                className="px-5 py-2 rounded-full text-xs font-bold bg-burgundy hover:bg-burgundy-hover text-white flex items-center gap-1.5 shadow-sm transition-all cursor-pointer shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{t.portfolio.modalCta}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
