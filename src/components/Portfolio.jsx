import React, { useState } from 'react';
import { ChevronRight, Eye, PhoneCall, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Parallax, Reveal } from './Motion';

export default function Portfolio({ onOpenBooking }) {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const { t } = useLanguage();

  const activeModal = t.portfolio.projects.find((p) => p.id === activeProjectId) || null;

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
              onClick={onOpenBooking}
              className="self-start md:self-auto px-5 py-2 rounded-full border border-burgundy text-burgundy hover:bg-burgundy hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>{t.portfolio.viewAll}</span>
              <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </div>
        </Reveal>

        {/* 5 Project Thumbnails Grid with staggered reveal & depth parallax */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {t.portfolio.projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 80} className="h-full">
              <Parallax speed={idx % 2 === 0 ? -10 : 10} className="h-full">
                <div
                  onClick={() => setActiveProjectId(project.id)}
                  className="h-full group relative rounded-2xl overflow-hidden bg-white border border-zinc-200/90 hover:border-burgundy hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-zinc-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-white/90 text-burgundy flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="absolute top-2 start-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] text-white font-mono">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-3.5 text-start flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-zinc-950 group-hover:text-burgundy transition-colors line-clamp-1">
                        {project.title}
                      </h4>
                      <p className="text-[11px] text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Parallax>
            </Reveal>
          ))}
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
              {activeModal.category}
            </span>
            <h3 className="text-xl font-display font-bold text-zinc-950 mb-4">
              {activeModal.title}
            </h3>

            <div className="rounded-xl overflow-hidden aspect-[16/10] mb-4 border border-zinc-200">
              <img src={activeModal.image} alt={activeModal.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
              {activeModal.desc}
            </p>

            <div className="flex items-center justify-between gap-3 pt-3 border-t border-zinc-100">
              <div className="text-xs text-zinc-500 font-bold">
                {t.portfolio.modalPrompt}
              </div>
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
