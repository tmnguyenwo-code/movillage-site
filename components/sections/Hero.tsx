'use client';

import { useTranslations } from 'next-intl';
import BackgroundVideo from '@/components/BackgroundVideo';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <BackgroundVideo
        src="/videos/hero-lake-dawn-4k.mp4"
        poster="/images/hero-poster-4k.jpg"
        alt="Mơ Village misty lake at dawn"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-espresso/20 via-transparent to-espresso/40" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <div className="relative w-80 h-36 sm:w-[30rem] sm:h-48 lg:w-[36rem] lg:h-60 mx-auto mb-6">
            <Image
              src="/01-mo-village-primary-stacked.svg"
              alt={t('title')}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          <p className="text-body-2xl lg:text-display-sm mb-8 text-warm-paper drop-shadow max-w-2xl mx-auto">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="inline-block bg-terracotta hover:bg-terracotta/90 text-warm-paper px-8 py-4 rounded-lg text-ui-base transition-colors"
            >
              {t('ctaPrimary')}
            </a>
            <a
              href="#rooms"
              className="inline-block bg-warm-paper/20 backdrop-blur-sm hover:bg-warm-paper/30 text-warm-paper px-8 py-4 rounded-lg text-ui-base transition-colors border border-warm-paper/30"
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
