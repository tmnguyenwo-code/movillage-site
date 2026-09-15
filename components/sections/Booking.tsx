'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import Container from '../Container';
import Button from '../Button';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name is required').trim(),
  phone: z.string().min(10, 'Phone number is required'),
  checkin: z.string().min(1, 'Check-in date is required'),
  checkout: z.string().min(1, 'Check-out date is required'),
  guests: z.number().min(1, 'Number of guests is required').int(),
  room: z.string().min(1, 'Room preference is required'),
  requests: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function Booking() {
  const t = useTranslations('booking');
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          checkIn: data.checkin,
          checkOut: data.checkout,
          guests: data.guests,
          roomPreference: data.room,
          specialRequests: data.requests,
          language: locale
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage({ type: 'success', text: result.message });
        reset();
      } else {
        setSubmitMessage({ 
          type: 'error', 
          text: result.error || t('form.error')
        });
      }
    } catch {
      setSubmitMessage({ 
        type: 'error', 
        text: t('form.networkError')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-24 bg-soft-sand">
      <Container>
        <div className="max-w-2xl mx-auto">
          <p className="text-body-sm uppercase tracking-wide text-stilt-timber mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-display-lg text-espresso mb-8">
            {t('title')}
          </h2>
          
          <div className="bg-warm-paper p-4 sm:p-8 rounded-lg mb-6">
            <p className="text-body-base text-espresso mb-4">
              {t('zaloInfo')}
            </p>
            <a
              href="https://zalo.me/YOUR_ZALO_OA_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-lake-dawn hover:bg-lake-dawn/80 text-warm-paper px-6 py-3 rounded-lg text-ui-base transition-colors"
            >
              <span>Zalo OA</span>
            </a>
            <p className="text-body-sm text-stilt-timber/70 mt-3">
              {t('responseTime')}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-body-base font-medium text-espresso mb-2">
                {t('form.name')}
              </label>
              <input
                id="name"
                {...register('name')}
                className="w-full px-4 py-3 border border-karst-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-lake-dawn bg-warm-paper text-espresso"
              />
              {errors.name && (
                <p className="text-body-sm text-terracotta mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-body-base font-medium text-espresso mb-2">
                {t('form.phone')}
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                className="w-full px-4 py-3 border border-karst-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-lake-dawn bg-warm-paper text-espresso"
              />
              {errors.phone && (
                <p className="text-body-sm text-terracotta mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="checkin" className="block text-body-base font-medium text-espresso mb-2">
                  {t('form.checkin')}
                </label>
                <input
                  id="checkin"
                  type="date"
                  {...register('checkin')}
                  className="w-full px-4 py-3 border border-karst-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-lake-dawn bg-warm-paper text-espresso"
                />
                {errors.checkin && (
                  <p className="text-body-sm text-terracotta mt-1">{errors.checkin.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="checkout" className="block text-body-base font-medium text-espresso mb-2">
                  {t('form.checkout')}
                </label>
                <input
                  id="checkout"
                  type="date"
                  {...register('checkout')}
                  className="w-full px-4 py-3 border border-karst-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-lake-dawn bg-warm-paper text-espresso"
                />
                {errors.checkout && (
                  <p className="text-body-sm text-terracotta mt-1">{errors.checkout.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="guests" className="block text-body-base font-medium text-espresso mb-2">
                {t('form.guests')}
              </label>
              <input
                id="guests"
                type="number"
                min="1"
                {...register('guests', { valueAsNumber: true })}
                className="w-full px-4 py-3 border border-karst-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-lake-dawn bg-warm-paper text-espresso"
              />
              {errors.guests && (
                <p className="text-body-sm text-terracotta mt-1">{errors.guests.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="room" className="block text-body-base font-medium text-espresso mb-2">
                {t('form.roomPreference')}
              </label>
              <select
                id="room"
                {...register('room')}
                className="w-full px-4 py-3 border border-karst-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-lake-dawn bg-warm-paper text-espresso"
              >
                <option value="">{t('form.selectRoom')}</option>
                <option value="nha-tao">Nhà Táo</option>
                <option value="nha-dao">Nhà Đào</option>
                <option value="nha-man">Nhà Mận</option>
                <option value="nha-mit">Nhà Mít</option>
                <option value="nha-sang">Nhà Sang</option>
                <option value="nha-cong-dong">Nhà Cộng đồng</option>
              </select>
              {errors.room && (
                <p className="text-body-sm text-terracotta mt-1">{errors.room.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="requests" className="block text-body-base font-medium text-espresso mb-2">
                {t('form.requests')}
              </label>
              <textarea
                id="requests"
                {...register('requests')}
                rows={4}
                className="w-full px-4 py-3 border border-karst-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-lake-dawn bg-warm-paper text-espresso"
              />
            </div>

            {submitMessage && (
              <div className={`p-4 rounded-lg ${
                submitMessage.type === 'success' 
                  ? 'bg-bamboo-shoot/20 text-espresso' 
                  : 'bg-terracotta/20 text-espresso'
              }`}>
                {submitMessage.text}
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? t('form.submitting') : t('form.submit')}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
