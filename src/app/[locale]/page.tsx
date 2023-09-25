'use client';

import { useTranslations } from 'next-intl';

import { SectionAbout, SectionHero } from '@/components/sections';
import { Header } from '@/components/shared';

export default function Home({ params }: { params: { locale: string } }) {
  const { locale } = params || {};

  const t = useTranslations('Home');

  return (
    <main className='h-[300vh]'>
      <Header locale={locale} />
      <SectionHero t={t} />
      <SectionAbout t={t} locale={locale} />
    </main>
  );
}
