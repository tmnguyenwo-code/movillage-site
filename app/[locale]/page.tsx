'use client';

import Hero from '@/components/sections/Hero';
import Story from '@/components/sections/Story';
import Rooms from '@/components/sections/Rooms';
import Experiences from '@/components/sections/Experiences';
import Gallery from '@/components/sections/Gallery';
import Packages from '@/components/sections/Packages';
import Directions from '@/components/sections/Directions';
import Booking from '@/components/sections/Booking';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Rooms />
      <Experiences />
      <Gallery />
      <Directions />
      <Packages />
      <BookingFromLayout />
      <ScrollToTop />
    </main>
  );
}

function BookingFromLayout() {
  // Access parent's modal handler through props drilling via ClientLayout
  return <Booking onOpenModal={() => {
    const event = new CustomEvent('openBookingModal');
    window.dispatchEvent(event);
  }} />;
}
