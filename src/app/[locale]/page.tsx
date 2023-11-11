import { SectionAbout, SectionHero, SectionProjects, SectionStack } from '@/components/sections';
import { Footer, Header } from '@/components/shared';
import { languages } from '@/types';
import { getHome } from '@/services/getHome';

export default async function Home({ params }: { params: { locale: languages } }) {
  const { locale } = params || {};

  const [homeData] = await getHome({ language: locale });
  const { hero, about, skills } = homeData;

  return (
    <main>
      <Header locale={locale} />
      <SectionHero data={hero} />
      <SectionAbout data={about} />
      <SectionStack data={skills} />
      <SectionProjects locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
