import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start text-right">
      {/* Tooltip greeting in Arabic */}
      {showTooltip && (
        <div className="mb-2 bg-white border border-zinc-200 px-4 py-2.5 rounded-none text-xs text-zinc-800 max-w-xs flex items-start gap-2 animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-zinc-600 p-0.5 shrink-0"
            aria-label="إغلاق"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div>
            <div className="font-bold text-zinc-900 flex items-center gap-1.5 justify-end">
              <span>استوديو ميديا ماينيد</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <div className="text-[11px] text-zinc-500 mt-0.5">
              تواصل مباشرة مع فريقنا في بيروت ودبي عبر واتساب. كيف يمكننا مساعدتك؟
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <a
        href="https://wa.me/96170000000"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center hover:scale-105 transition-all duration-300 group"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-7 h-7 fill-white/10 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
