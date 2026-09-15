'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import Container from '../Container';
import Section from '../Section';
import Card from '../Card';

export default function Packages() {
  const t = useTranslations('packages');

  return (
    <Section id="packages" className="bg-warm-paper">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-body-sm uppercase tracking-wide text-bamboo-shoot mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-display-lg font-bold text-espresso mb-12">
            {t('title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <Card className="relative overflow-hidden bg-soft-sand border-2 border-stilt-timber/20 hover:border-stilt-timber/40 hover:shadow-2xl transition-all duration-500 group flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-bamboo-shoot/5 via-transparent to-stilt-timber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-6 right-6">
              <div className="px-4 py-1.5 bg-bamboo-shoot rounded-full shadow-lg">
                <span className="text-body-sm font-semibold text-warm-paper uppercase tracking-wide">
                  Quick Getaway
                </span>
              </div>
            </div>

            <div className="relative p-10 pt-20 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-display-sm text-espresso mb-1 font-display">
                    {t('twoDay.name')}
                  </h3>
                  <p className="text-body-sm text-stilt-timber uppercase tracking-wider">
                    Weekend Escape
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-bamboo-shoot/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌲</span>
                </div>
              </div>

              <div className="mb-8 pb-6 border-b-2 border-bamboo-shoot/20">
                <p className="text-body-2xl text-terracotta font-bold">
                  {t('twoDay.price')}
                </p>
              </div>

              <ul className="space-y-4 flex-1">
                {[0, 1].map((index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-bamboo-shoot flex items-center justify-center flex-shrink-0">
                      <span className="text-warm-paper text-xs">✓</span>
                    </div>
                    <span className="text-body-base text-espresso/90 leading-relaxed">
                      {t(`twoDay.schedule.${index}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-1.5 bg-gradient-to-r from-bamboo-shoot via-stilt-timber to-bamboo-shoot" />
          </Card>

          <Card className="relative overflow-hidden bg-gradient-to-br from-espresso via-espresso to-espresso/95 text-warm-paper hover:shadow-2xl transition-all duration-500 group border-2 border-apricot-blossom/30 flex flex-col">
            <div className="absolute top-0 right-0 w-40 h-40 bg-terracotta/15 rounded-bl-full blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-apricot-blossom/10 rounded-full blur-3xl" />
            <div className="absolute top-6 right-6">
              <div className="px-4 py-1.5 bg-terracotta rounded-full shadow-lg">
                <span className="text-body-sm font-semibold text-warm-paper uppercase tracking-wide">
                  {t('threeDay.badge')}
                </span>
              </div>
            </div>

            <div className="relative p-10 pt-20 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-display-sm text-warm-paper mb-1 font-display">
                    {t('threeDay.name')}
                  </h3>
                  <p className="text-body-sm text-apricot-blossom uppercase tracking-wider">
                    Complete Experience
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-apricot-blossom/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✨</span>
                </div>
              </div>

              <div className="mb-8 pb-6 border-b-2 border-apricot-blossom/30">
                <p className="text-body-2xl text-apricot-blossom font-bold">
                  {t('threeDay.price')}
                </p>
              </div>

              <ul className="space-y-4 flex-1">
                {[0, 1, 2].map((index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-apricot-blossom flex items-center justify-center flex-shrink-0">
                      <span className="text-espresso text-xs font-bold">✓</span>
                    </div>
                    <span className="text-body-base text-warm-paper/95 leading-relaxed">
                      {t(`threeDay.schedule.${index}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-1.5 bg-gradient-to-r from-apricot-blossom via-terracotta to-apricot-blossom" />
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}
