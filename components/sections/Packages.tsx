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
          <Card className="relative overflow-hidden bg-warm-paper border border-karst-mist hover:shadow-lg transition-all duration-300">
            <div className="p-8">
              <h3 className="text-display-sm text-espresso mb-2">
                {t('twoDay.name')}
              </h3>
              <p className="text-body-2xl text-terracotta font-bold mb-6">
                {t('twoDay.price')}
              </p>
              <ul className="space-y-3 mb-8">
                {[0, 1].map((index) => (
                  <li key={index} className="text-body-base text-espresso/90 flex items-start">
                    <span className="mr-3 text-bamboo-shoot text-body-lg">✓</span>
                    <span>{t(`twoDay.schedule.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-2 bg-gradient-to-r from-bamboo-shoot via-stilt-timber to-bamboo-shoot" />
          </Card>

          <Card className="relative overflow-hidden bg-espresso text-warm-paper hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta/20 rounded-bl-full" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-apricot-blossom/10 rounded-full" />
            <div className="relative p-8">
              <div className="inline-block bg-terracotta text-warm-paper text-body-sm font-semibold px-4 py-2 rounded-full mb-4">
                {t('threeDay.badge')}
              </div>
              <h3 className="text-display-sm text-warm-paper mb-2">
                {t('threeDay.name')}
              </h3>
              <p className="text-body-2xl text-apricot-blossom font-bold mb-6">
                {t('threeDay.price')}
              </p>
              <ul className="space-y-3 mb-8">
                {[0, 1, 2].map((index) => (
                  <li key={index} className="text-body-base text-warm-paper/90 flex items-start">
                    <span className="mr-3 text-apricot-blossom text-body-lg">✓</span>
                    <span>{t(`threeDay.schedule.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-2 bg-gradient-to-r from-apricot-blossom via-terracotta to-apricot-blossom" />
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}
