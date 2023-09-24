'use client';

import { SectionHero } from '@/components/sections';
import { Header } from '@/components/shared';

export default function Home({ params }: { params: { locale: string } }) {
  const { locale } = params || {};

  return (
    <main className='h-[300vh]'>
      <Header locale={locale} />
      <SectionHero />
    </main>
  );
}
