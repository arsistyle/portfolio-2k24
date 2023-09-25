import aboutInfo from '@/data/about.json';

type ExperienceType = {
  [key: string]: { text: string }[];
};

type AboutInfoType = {
  experience: ExperienceType;
};
export default function About({ t, locale }: { t: any; locale: string }) {
  const aboutInfo: AboutInfoType = require('@/data/about.json');
  const { experience = { en: [], es: [] } } = aboutInfo;
  const experienceData = experience[locale] || [];

  return (
    <section className='flex items-center justify-center px-5 py-40 bg-white dark:bg-dark'>
      <div className='container'>
        <h3 className='h3 dark:text-white max-w-4xl leading-tight text-balance mb-20'>
          {t('About.title')}
        </h3>
        <div className='grid grid-cols-2 gap-20'>
          {experienceData.map(({ text }) => (
            <div className='flex gap-4 col-span-2 md:col-span-1' key={text}>
              <div className='w-12 text-primary-400 dark:text-primary-300'>_/</div>
              <p className='p highlight text-dark dark:text-white'>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
