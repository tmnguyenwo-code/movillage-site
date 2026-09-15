'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import Container from '../Container';
import Section from '../Section';
import Button from '../Button';
import Image from 'next/image';

interface BookingProps {
  onOpenModal: () => void;
}

export default function Booking({ onOpenModal }: BookingProps) {
  const t = useTranslations('booking');

  return (
    <Section id="booking" className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/campus/campus-dji0135.webp"
          alt="Mơ Village"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-espresso/40" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-body-sm uppercase tracking-[0.2em] text-apricot-blossom mb-4">
            {t('cta.eyebrow')}
          </p>

          <h2 className="text-display-xl font-bold text-warm-paper mb-6 leading-tight">
            {t('cta.heading')}
          </h2>

          <p className="text-body-lg text-warm-paper/90 mb-8 leading-relaxed">
            {t('cta.subheading')}
          </p>

          <Button
            onClick={onOpenModal}
            className="bg-terracotta hover:bg-terracotta/90 text-warm-paper px-12 py-4 text-ui-lg"
          >
            {t('cta.button')}
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
