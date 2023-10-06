import { useTranslations } from 'next-intl';

import { SectionAbout, SectionHero, SectionProjects, SectionSkills } from '@/components/sections';
import { Header } from '@/components/shared';

export default function Home({ params }: { params: { locale: string } }) {
  const { locale } = params || {};

  const t = useTranslations('Home');

  return (
    <main>
      <Header locale={locale} />
      <SectionHero t={t} />
      <SectionAbout t={t} locale={locale} />
      <SectionSkills t={t} />
      <SectionProjects t={t} locale={locale} />
    </main>
  );
}
