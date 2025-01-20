'use client';

import { useRef } from 'react';

import HeroSection from '@/app/components/HeroSection';
import CollectionSection from '@/app/components/CollectionSection';
import InstagramSection from '@/app/components/InstagramSection';

export default function Home() {
  const collectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <HeroSection collectionRef={collectionRef} />
      <CollectionSection collectionRef={collectionRef} />
      <InstagramSection />
    </>
  );
}
