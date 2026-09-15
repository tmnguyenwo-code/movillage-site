'use client';

import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import BookingModal from './BookingModal';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenBooking = () => setIsBookingModalOpen(true);
    window.addEventListener('openBookingModal', handleOpenBooking);
    return () => window.removeEventListener('openBookingModal', handleOpenBooking);
  }, []);

  return (
    <>
      <Navigation onOpenBooking={() => setIsBookingModalOpen(true)} />
      {children}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
}
