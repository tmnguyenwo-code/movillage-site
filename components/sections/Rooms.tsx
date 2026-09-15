'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import Container from '../Container';
import Section from '../Section';
import Card from '../Card';
import Image from 'next/image';

const roomImages: Record<string, string> = {
  'Nhà Táo': '/images/rooms/nh-mn-img2934.webp',
  'Nhà Đào': '/images/rooms/nh-mn-img2936.webp',
  'Nhà Mận': '/images/rooms/nh-mn-img2934.webp',
  'Nhà Mít': '/images/rooms/nh-mt-img2947.webp',
  'Nhà Sang': '/images/rooms/nh-sang-20250725075817.webp',
  'Nhà Cộng đồng': '/images/rooms/nh-cng-ng-20-pax-8-pax-3pax-img2957.webp',
};

export default function Rooms() {
  const t = useTranslations('rooms');

  return (
    <Section id="rooms" className="bg-soft-sand">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const roomName = t(`list.${index}.name`);
            const imagePath = roomImages[roomName] || '/images/rooms/nh-to-img2922.webp';

            return (
              <Card key={index} className="relative overflow-hidden bg-warm-paper border-2 border-stilt-timber/20 hover:border-stilt-timber/40 hover:shadow-2xl transition-all duration-500 group flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-bamboo-shoot/5 via-transparent to-stilt-timber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={imagePath}
                    alt={roomName}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1.5 bg-bamboo-shoot/95 backdrop-blur-sm rounded-full shadow-lg">
                      <span className="text-body-sm font-semibold text-warm-paper">
                        {t(`list.${index}.capacity`)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-body-xl font-bold text-espresso font-display">
                      {roomName}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-bamboo-shoot/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🏡</span>
                    </div>
                  </div>

                  <p className="text-body-base text-espresso/90 leading-relaxed mb-6">
                    {t(`list.${index}.description`)}
                  </p>

                  <ul className="space-y-3 flex-1">
                    {(t.raw(`list.${index}.features`) as string[]).map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 w-4 h-4 rounded-full bg-bamboo-shoot flex items-center justify-center flex-shrink-0">
                          <span className="text-warm-paper text-[10px]">✓</span>
                        </div>
                        <span className="text-body-sm text-espresso/80 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="h-1 bg-gradient-to-r from-bamboo-shoot via-stilt-timber to-bamboo-shoot opacity-50" />
              </Card>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
