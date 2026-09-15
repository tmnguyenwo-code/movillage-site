'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import Container from '../Container';
import Card from '../Card';
import Image from 'next/image';
import BackgroundVideo from '../BackgroundVideo';

export default function Experiences() {
  const t = useTranslations('experiences');

  const onsiteImages = [
    '/images/facilities/b-bi-v-cc-dji0124-1.webp',
    '/images/facilities/b-bi-v-cc-img2969.webp',
    '/images/facilities/b-bi-v-cc-img4506.webp',
    '/images/facilities/bn-bi-a-img4621.webp',
    '/images/facilities/b-bi-v-cc-dji0157-1.webp',
    '/images/facilities/b-bi-v-cc-dji0111.webp',
  ];

  return (
    <>
      <section id="experiences" className="relative min-h-screen py-24">
        <div className="absolute inset-0 -z-10">
          <BackgroundVideo
            src="/videos/kayak-lake.mp4"
            poster="/images/facilities/cho-thuyn-kayak-a7309634.webp"
            alt="Kayaking on Hòa Bình Lake"
          />
          <div className="absolute inset-0 bg-espresso/50" />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16 text-center mx-auto"
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <Image
                src="/05-mo-village-reversed-white.svg"
                alt="Mơ Village"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-body-sm uppercase tracking-wide mb-4 text-apricot-blossom">
              {t('eyebrow')}
            </p>
            <h2 className="text-display-lg text-warm-paper mb-6">
              {t('title')}
            </h2>
            <p className="text-body-base text-warm-paper/90">
              {t('description')}
            </p>
          </motion.div>

          <div className="mb-16">
            <h3 className="text-display-sm text-warm-paper mb-8">
              {t('onsiteTitle')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden bg-warm-paper/95 backdrop-blur-sm h-full flex flex-col">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={onsiteImages[index]}
                        alt={t(`onsite.${index}.name`)}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h4 className="text-body-lg font-semibold text-espresso mb-2">
                        {t(`onsite.${index}.name`)}
                      </h4>
                      <p className="text-body-base text-espresso/90">
                        {t(`onsite.${index}.description`)}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-display-sm text-warm-paper mb-8">
              {t('workshopsTitle')}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-warm-paper/95 backdrop-blur-sm rounded-lg h-full flex flex-col"
                >
                  <h4 className="text-body-lg font-semibold text-espresso mb-2">
                    {t(`workshops.${index}.name`)}
                  </h4>
                  <p className="text-body-base text-espresso/90">
                    {t(`workshops.${index}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-display-sm text-warm-paper mb-8">
              {t('nearbyTitle')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="p-6 bg-warm-paper/95 backdrop-blur-sm rounded-lg h-full flex flex-col"
                >
                  <h4 className="text-body-lg font-semibold text-espresso mb-2">
                    {t(`nearby.${index}.name`)}
                  </h4>
                  <p className="text-body-base text-espresso/90 mb-3 flex-1">
                    {t(`nearby.${index}.description`)}
                  </p>
                  <p className="text-body-sm text-stilt-timber">
                    {t(`nearby.${index}.distance`)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
