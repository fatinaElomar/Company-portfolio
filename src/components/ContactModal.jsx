import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Sparkles, MapPin, ShieldCheck, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactModal({ isOpen, onClose }) {
  const { t, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    locationIdx: 0,
    projectTypeIdx: 0,
    projectScopeIdx: 1,
    notes: '',
  });

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const selectedLocation = t.modal.locations[formData.locationIdx] || t.modal.locations[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-md animate-fade-in text-start">
      <div className="relative w-full max-w-xl rounded-2xl bg-white border border-zinc-200 shadow-2xl p-6 sm:p-8 text-zinc-900 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={t.portfolio.closeAria}
          className="absolute top-5 end-5 p-2 rounded-full bg-zinc-100 text-zinc-500 hover:text-black hover:bg-zinc-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2 text-burgundy text-xs font-mono uppercase tracking-widest font-bold">
              <Sparkles className="w-4 h-4 text-burgundy" />
              {t.modal.badge}
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-950 mb-2">
              {t.modal.headingPrefix}{' '}
              <span className="text-burgundy">{t.modal.headingHighlight}</span>
            </h3>

            <p className="text-zinc-600 text-xs sm:text-sm mb-6 leading-relaxed">
              {t.modal.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    {t.modal.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.modal.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-burgundy focus:outline-none text-zinc-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    {t.modal.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t.modal.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-burgundy focus:outline-none text-zinc-900 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    {t.modal.companyLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.modal.companyPlaceholder}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-burgundy focus:outline-none text-zinc-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    {t.modal.locationLabel}
                  </label>
                  <select
                    value={formData.locationIdx}
                    onChange={(e) => setFormData({ ...formData, locationIdx: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-burgundy focus:outline-none text-zinc-900 text-sm cursor-pointer font-medium"
                  >
                    {t.modal.locations.map((loc, idx) => (
                      <option key={`${lang}-loc-${idx}`} value={idx}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    {t.modal.projectTypeLabel}
                  </label>
                  <select
                    value={formData.projectTypeIdx}
                    onChange={(e) => setFormData({ ...formData, projectTypeIdx: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-burgundy focus:outline-none text-zinc-900 text-sm cursor-pointer font-medium"
                  >
                    {t.modal.projectTypes.map((pt, idx) => (
                      <option key={`${lang}-pt-${idx}`} value={idx}>
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    {t.modal.projectScopeLabel}
                  </label>
                  <select
                    value={formData.projectScopeIdx}
                    onChange={(e) => setFormData({ ...formData, projectScopeIdx: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-burgundy focus:outline-none text-zinc-900 text-sm cursor-pointer font-medium"
                  >
                    {t.modal.projectScopes.map((ps, idx) => (
                      <option key={`${lang}-ps-${idx}`} value={idx}>
                        {ps}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                  {t.modal.notesLabel}
                </label>
                <textarea
                  rows="2"
                  placeholder={t.modal.notesPlaceholder}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-burgundy focus:outline-none text-zinc-900 text-sm resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-bold text-xs tracking-wider bg-burgundy hover:bg-burgundy-hover text-white flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{t.modal.submitBtn}</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-1 font-bold">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.modal.nda}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-700" />
                  <span>{t.modal.offices}</span>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-display font-extrabold text-zinc-950">
              {t.modal.successTitle}
            </h3>

            <p className="text-zinc-600 text-sm max-w-md mx-auto leading-relaxed">
              {t.modal.successGreeting}{' '}
              <span className="text-zinc-950 font-bold">{formData.name}</span>.{' '}
              {t.modal.successBody1}{' '}
              <span className="text-zinc-950 font-bold">{selectedLocation}</span>{' '}
              {t.modal.successBody2}{' '}
              <span className="text-zinc-950 font-bold">{formData.company}</span>.
            </p>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 max-w-sm mx-auto font-medium">
              {t.modal.successConfirmPrefix}{' '}
              <span className="text-zinc-900 font-bold">{formData.email}</span>.{' '}
              {t.modal.successConfirmSuffix}
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full text-xs font-bold bg-burgundy text-white hover:bg-burgundy-hover mt-4 cursor-pointer transition-colors"
            >
              {t.modal.backBtn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
