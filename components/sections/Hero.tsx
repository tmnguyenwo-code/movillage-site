'use client';

import { useTranslations } from 'next-intl';
import BackgroundVideo from '@/components/BackgroundVideo';
import { motion } from 'motion/react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <BackgroundVideo
        src="/videos/hero-mist-lake.mp4"
        poster="/images/hero-poster.jpg"
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
          <h1 className="text-display-xl mb-6 text-warm-paper drop-shadow-lg">
            {t('title')}
          </h1>
          
          <p className="text-body-xl mb-8 text-warm-paper drop-shadow max-w-2xl mx-auto">
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
