'use client';

import { useTranslations } from 'next-intl';
import Container from '../Container';
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
    <section id="rooms" className="bg-soft-sand py-24">
      <Container>
        <div className="mb-12">
          <p className="text-body-sm uppercase tracking-wide text-bamboo-shoot mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-display-lg text-espresso">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const roomName = t(`list.${index}.name`);
            const imagePath = roomImages[roomName] || '/images/rooms/nh-to-img2922.webp';

            return (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={imagePath}
                    alt={roomName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-body-xl font-semibold text-espresso mb-2">
                    {roomName}
                  </h3>
                  <p className="text-body-sm text-lake-dawn mb-3">
                    {t(`list.${index}.capacity`)}
                  </p>
                  <p className="text-body-base text-espresso/90 mb-4">
                    {t(`list.${index}.description`)}
                  </p>
                  <ul className="space-y-2">
                    {(t.raw(`list.${index}.features`) as string[]).map((feature: string, i: number) => (
                      <li
                        key={i}
                        className="text-body-sm text-espresso/80 flex items-start"
                      >
                        <span className="mr-2 text-bamboo-shoot">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
