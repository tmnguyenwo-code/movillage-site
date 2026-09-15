'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import Container from '../Container';
import Section from '../Section';
import Image from 'next/image';

export default function Gallery() {
  const t = useTranslations('gallery');

  const galleryImages = [
    { src: '/images/campus/campus-dji0135.webp', span: 'md:col-span-2 md:row-span-2' },
    { src: '/images/rooms/nh-sang-20250725075817.webp', span: '' },
    { src: '/images/facilities/b-bi-v-cc-dji0124-1.webp', span: '' },
    { src: '/images/restaurant/restaurant-dsc05377.webp', span: '' },
    { src: '/images/facilities/b-bi-v-cc-img2969.webp', span: 'md:col-span-2' },
    { src: '/images/rooms/nh-mn-img2934.webp', span: '' },
    { src: '/images/cafe/cafe-img0850.webp', span: '' },
    { src: '/images/facilities/bn-bi-a-img4621.webp', span: 'md:col-span-2' },
    { src: '/images/rooms/nh-mt-img2947.webp', span: '' },
    { src: '/images/campus/campus-dji0107.webp', span: 'md:row-span-2' },
    { src: '/images/facilities/b-bi-v-cc-img4506.webp', span: '' },
    { src: '/images/rooms/nh-o-img2981.webp', span: '' },
  ];

  return (
    <Section id="gallery" className="bg-soft-sand">
      <Container>
        <h2 className="text-display-lg font-bold text-espresso mb-12">
          {t('title')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={`relative rounded-lg overflow-hidden ${image.span}`}
            >
              <Image
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
