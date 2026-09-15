'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 flex flex-col gap-3 z-40 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
    }`}>
      <a
        href="tel:+84964863838"
        className="w-14 h-14 bg-[#B8956A] hover:bg-[#8B7355] rounded-full shadow-2xl transition-colors flex items-center justify-center overflow-hidden"
        aria-label="Phone"
      >
        <img src="/phone-icon.webp" alt="Phone" className="w-[110%] h-[110%] object-cover" />
      </a>

      <a
        href="https://www.facebook.com/movillage.hoabinh"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#B8956A] hover:bg-[#8B7355] rounded-full shadow-2xl transition-colors flex items-center justify-center overflow-hidden"
        aria-label="Facebook"
      >
        <img src="/facebook-icon.webp" alt="Facebook" className="w-[120%] h-[120%] object-cover" />
      </a>

      <a
        href="https://www.facebook.com/movillage.hoabinh"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#B8956A] hover:bg-[#8B7355] rounded-full shadow-2xl transition-colors flex items-center justify-center overflow-hidden"
        aria-label="Zalo"
      >
        <img src="/zalo-icon.webp" alt="Zalo" className="w-full h-full object-cover" />
      </a>

      <button
        onClick={scrollToTop}
        className="w-14 h-14 bg-[#B8956A] hover:bg-[#8B7355] text-[#1F1611] rounded-full shadow-2xl transition-colors flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  );
}
