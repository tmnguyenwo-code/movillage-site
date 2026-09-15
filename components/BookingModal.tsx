'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '',
    roomPreference: '',
    requests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
        setFormData({
          name: '',
          phone: '',
          checkin: '',
          checkout: '',
          guests: '',
          roomPreference: '',
          requests: ''
        });
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#05070C]/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#3A2A1E] rounded-3xl shadow-2xl border border-[#8B7355]/30">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#4A3728] hover:bg-[#5A4738] transition-colors text-[#E8DCC8]/60 hover:text-[#E8DCC8]"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="p-8 md:p-12">
          <div className="mb-8">
            <p className="text-[#B8956A] text-sm font-medium tracking-wider mb-3">
              {t('booking.eyebrow')}
            </p>
            <h2 className="text-4xl md:text-5xl font-fraunces text-[#E8DCC8] mb-4">
              {t('booking.title')}
            </h2>
            <p className="text-[#E8DCC8]/70">
              {t('booking.responseTime')}
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-[#B8956A]/10 border border-[#B8956A]/30 rounded-2xl text-[#B8956A]">
              {t('booking.form.success')}
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400">
              {t('booking.form.error')}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#E8DCC8]/90 mb-2 text-sm font-medium">
                  {t('booking.form.name')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-[#4A3728] border border-[#8B7355]/30 rounded-2xl text-[#E8DCC8] placeholder:text-[#E8DCC8]/40 focus:outline-none focus:border-[#B8956A] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#E8DCC8]/90 mb-2 text-sm font-medium">
                  {t('booking.form.phone')}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-[#4A3728] border border-[#8B7355]/30 rounded-2xl text-[#E8DCC8] placeholder:text-[#E8DCC8]/40 focus:outline-none focus:border-[#B8956A] transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#E8DCC8]/90 mb-2 text-sm font-medium">
                  {t('booking.form.checkin')}
                </label>
                <input
                  type="date"
                  required
                  value={formData.checkin}
                  onChange={(e) => setFormData({...formData, checkin: e.target.value})}
                  className="w-full px-4 py-3 bg-[#4A3728] border border-[#8B7355]/30 rounded-2xl text-[#E8DCC8] placeholder:text-[#E8DCC8]/40 focus:outline-none focus:border-[#B8956A] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#E8DCC8]/90 mb-2 text-sm font-medium">
                  {t('booking.form.checkout')}
                </label>
                <input
                  type="date"
                  required
                  value={formData.checkout}
                  onChange={(e) => setFormData({...formData, checkout: e.target.value})}
                  className="w-full px-4 py-3 bg-[#4A3728] border border-[#8B7355]/30 rounded-2xl text-[#E8DCC8] placeholder:text-[#E8DCC8]/40 focus:outline-none focus:border-[#B8956A] transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#E8DCC8]/90 mb-2 text-sm font-medium">
                  {t('booking.form.guests')}
                </label>
                <input
                  type="number"
                  min="1"
                  required
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  className="w-full px-4 py-3 bg-[#4A3728] border border-[#8B7355]/30 rounded-2xl text-[#E8DCC8] placeholder:text-[#E8DCC8]/40 focus:outline-none focus:border-[#B8956A] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#E8DCC8]/90 mb-2 text-sm font-medium">
                  {t('booking.form.roomPreference')}
                </label>
                <select
                  value={formData.roomPreference}
                  onChange={(e) => setFormData({...formData, roomPreference: e.target.value})}
                  className="w-full px-4 py-3 bg-[#4A3728] border border-[#8B7355]/30 rounded-2xl text-[#E8DCC8] placeholder:text-[#E8DCC8]/40 focus:outline-none focus:border-[#B8956A] transition-colors"
                >
                  <option value="">{t('booking.form.selectRoom')}</option>
                  <option value="lakefront">{t('rooms.lakefront.name')}</option>
                  <option value="garden">{t('rooms.garden.name')}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[#E8DCC8]/90 mb-2 text-sm font-medium">
                {t('booking.form.requests')}
              </label>
              <textarea
                rows={4}
                value={formData.requests}
                onChange={(e) => setFormData({...formData, requests: e.target.value})}
                className="w-full px-4 py-3 bg-[#4A3728] border border-[#8B7355]/30 rounded-2xl text-[#E8DCC8] placeholder:text-[#E8DCC8]/40 focus:outline-none focus:border-[#B8956A] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-[#B8956A] text-[#1F1611] font-medium rounded-full hover:bg-[#8B7355] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('booking.form.submitting') : t('booking.form.submit')}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-[#8B7355]/20">
            <p className="text-[#E8DCC8]/80 text-sm mb-4">
              {t('booking.connectWith')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/movillage.hoabinh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#B8956A] hover:bg-[#8B7355] rounded-full shadow-lg transition-colors flex items-center justify-center overflow-hidden"
                aria-label="Facebook"
              >
                <img src="/facebook-icon.webp" alt="Facebook" className="w-[120%] h-[120%] object-cover" />
              </a>
              <a
                href="https://www.facebook.com/movillage.hoabinh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#B8956A] hover:bg-[#8B7355] rounded-full shadow-lg transition-colors flex items-center justify-center overflow-hidden"
                aria-label="Zalo"
              >
                <img src="/zalo-icon.webp" alt="Zalo" className="w-full h-full object-cover" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
