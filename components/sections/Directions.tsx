'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import { useState } from 'react';
import Container from '../Container';

export default function Directions() {
  const t = useTranslations('directions');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="directions"
      className="relative py-16 md:py-24"
      style={{
        backgroundImage: 'url(/map-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center -100px',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-espresso/60" />
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-display-lg text-warm-paper mb-6">
              {t('title')}
            </h2>
            <p className="text-body-lg text-warm-paper/90 mb-4">
              {t('subtitle1')} {t('subtitle2')}
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={false}
                className="border-b-2 border-warm-paper/20"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:bg-warm-paper/10 transition-colors px-4 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-body-lg font-semibold text-terracotta">
                      {`0${index + 1}`}
                    </span>
                    <span className="text-body-lg font-semibold text-warm-paper">
                      {t(`faq.${index}.question`)}
                    </span>
                  </div>
                  <span className="text-2xl text-terracotta">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 px-4 pl-16">
                    <p className="text-body-base text-warm-paper/90 leading-relaxed">
                      {t(`faq.${index}.answer`)}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <div className="p-8 bg-warm-paper/95 backdrop-blur-sm rounded-lg">
              <p className="text-body-base text-espresso/80 mb-6">
                {t('subtitle3')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-wrap justify-center">
                  <span className="text-body-lg font-semibold text-espresso">Hà Nội</span>
                  <span className="text-bamboo-shoot">→</span>
                  <span className="text-body-lg font-semibold text-espresso">Hòa Lạc</span>
                  <span className="text-bamboo-shoot">→</span>
                  <span className="text-body-lg font-semibold text-espresso">Hòa Bình</span>
                  <span className="text-bamboo-shoot">→</span>
                  <span className="text-body-lg font-semibold text-terracotta">Xóm Mơ</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/7gk7cRHAvQdimFi39"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-terracotta hover:bg-terracotta/90 text-warm-paper px-6 py-3 rounded-lg text-ui-base transition-colors whitespace-nowrap"
                >
                  {t('getDirections')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
