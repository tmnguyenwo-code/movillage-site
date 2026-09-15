'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import Container from '../Container';
import Section from '../Section';
import Image from 'next/image';

export default function Story() {
  const t = useTranslations('story');

  return (
    <Section id="story" className="bg-warm-paper">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-body-sm uppercase tracking-wide text-stilt-timber mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-display-lg text-espresso mb-6">
            {t('title')}
          </h2>
          <p className="text-body-lg text-espresso/80 mb-12 max-w-3xl">
            {t('intro')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/campus/campus-dji0135.webp"
                alt={t('lake.title')}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-display-sm text-espresso mb-4">
                {t('lake.title')}
              </h3>
              <p className="text-body-base text-espresso/90">
                {t('lake.description')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/campus/campus-dji0107.webp"
                alt={t('location.title')}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-display-sm text-espresso mb-4">
                {t('location.title')}
              </h3>
              <p className="text-body-base text-espresso/90">
                {t('location.description')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/rooms/nh-mn-img2934.webp"
                alt={t('design.title')}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-display-sm text-espresso mb-4">
                {t('design.title')}
              </h3>
              <p className="text-body-base text-espresso/90">
                {t('design.description')}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
