import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(true);
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 end-6 z-40 flex flex-col items-end text-start">
      {/* Tooltip greeting */}
      {showTooltip && (
        <div className="mb-2 bg-white border border-zinc-200 shadow-lg px-4 py-2.5 rounded-xl text-xs text-zinc-800 max-w-xs flex items-start gap-2.5 animate-fade-in">
          <div className="flex-1">
            <div className="font-bold text-zinc-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{t.whatsapp.title}</span>
            </div>
            <div className="text-[11px] text-zinc-500 mt-0.5 leading-relaxed">
              {t.whatsapp.message}
            </div>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-zinc-600 p-0.5 shrink-0 cursor-pointer"
            aria-label={t.whatsapp.closeAria}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href="https://wa.me/96170000000"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 group"
        aria-label={t.whatsapp.buttonAria}
      >
        <MessageCircle className="w-7 h-7 fill-white/10 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
