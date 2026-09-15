'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface BackgroundVideoProps {
  src: string;
  poster: string;
  alt: string;
  priority?: boolean;
}

export default function BackgroundVideo({
  src,
  poster,
  alt,
  priority = false,
}: BackgroundVideoProps) {
  const [videoAllowed, setVideoAllowed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setVideoAllowed(!mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  return (
    <>
      <Image
        src={poster}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
      />
      {videoAllowed && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </>
  );
}
