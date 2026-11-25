import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Instagram, Eye, X, PhoneCall, Images } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GALLERY_ITEMS } from '../data/projectsData';
import { Parallax, Reveal } from './Motion';

export default function GalleryPage({ onBackHome, onOpenBooking }) {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeItemId, setActiveItemId] = useState(null);

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.categoryKey === selectedCategory);

  const activeModal = GALLERY_ITEMS.find((item) => item.galleryId === activeItemId) || null;

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen text-start">
      {/* Dark Burgundy Header Banner */}
      <section className="relative bg-[#09090C] text-white py-16 overflow-hidden border-y border-zinc-800 mb-12">
        <Parallax
          speed={-35}
          horizontalSpeed={24}
          className="absolute -top-20 left-1/4 w-[520px] h-[260px] bg-burgundy/35 blur-[120px] rounded-full pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBackHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-zinc-300 hover:text-white mb-6 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-burgundy transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
            <span>{t.gallery.backHome}</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Images className="w-4 h-4 text-[#E84A66]" />
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#E84A66] font-bold">
                  {t.gallery.tag}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                {t.gallery.headingPrefix}{' '}
                <span className="text-[#D93855]">{t.gallery.headingHighlight}</span>
              </h1>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-2xl">
                {t.gallery.subtitle}
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="self-start md:self-auto px-6 py-3 rounded-full bg-burgundy hover:bg-burgundy-hover text-white text-xs font-bold transition-all cursor-pointer shrink-0 shadow-lg"
            >
              {t.gallery.startProjectCta}
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {t.gallery.filters.map((filter) => {
            const active = selectedCategory === filter.key;
            return (
              <button
                key={filter.key}
                onClick={() => setSelectedCategory(filter.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  active
                    ? 'bg-burgundy text-white shadow-sm'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const copy = item[lang];
            const isInsta = item.linkType === 'instagram';

            return (
              <Reveal key={item.galleryId} delay={(idx % 3) * 70}>
                <div className="group rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200/90 hover:border-burgundy hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Clickable Image Preview / Direct Link */}
                    <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900">
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                      >
                        <img
                          src={item.image}
                          alt={copy.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </a>

                      {/* Top Category Badge */}
                      <div className="absolute top-3 start-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-sm text-[10px] text-white font-bold">
                        {copy.category}
                      </div>

                      {/* Quick Lightbox Preview Button */}
                      <button
                        type="button"
                        onClick={() => setActiveItemId(item.galleryId)}
                        aria-label={t.gallery.previewAria}
                        className="absolute top-3 end-3 w-8 h-8 rounded-full bg-white/90 hover:bg-burgundy text-zinc-900 hover:text-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Text Body */}
                    <div className="p-5">
                      <h3 className="font-display font-bold text-base text-zinc-950 group-hover:text-burgundy transition-colors mb-1.5">
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {copy.title}
                        </a>
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        {copy.desc}
                      </p>
                    </div>
                  </div>

                  {/* External Site / Instagram Link Bar */}
                  <div className="px-5 pb-5 pt-3 border-t border-zinc-200/70 flex items-center justify-between gap-2">
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-burgundy hover:text-burgundy-hover transition-colors"
                    >
                      {isInsta ? (
                        <Instagram className="w-3.5 h-3.5" />
                      ) : (
                        <ExternalLink className="w-3.5 h-3.5" />
                      )}
                      <span>{copy.linkLabel}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setActiveItemId(item.galleryId)}
                      className="text-[11px] font-semibold text-zinc-500 hover:text-zinc-950 transition-colors cursor-pointer"
                    >
                      {t.gallery.detailsBtn}
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Enlarged Gallery Lightbox Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in text-start">
          <div className="relative w-full max-w-xl rounded-2xl bg-white border border-zinc-200 p-6 shadow-2xl">
            <button
              onClick={() => setActiveItemId(null)}
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
                  setActiveItemId(null);
                  onOpenBooking();
                }}
                className="px-5 py-2 rounded-full text-xs font-bold bg-burgundy hover:bg-burgundy-hover text-white flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{t.portfolio.modalCta}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
