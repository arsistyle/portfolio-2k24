import { Icon } from '../elements/Icon';

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
            <div className='grid grid-flow-col gap-4 col-span-2 md:col-span-1' key={text}>
              <div className='w-12 h-12 text-primary-400 dark:text-primary-300'>
                <Icon
                  name='check'
                  stroke='currentColor'
                  fill='none'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </div>
              <p className='p highlight text-dark dark:text-white'>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type ExperienceType = {
  [key: string]: { text: string }[];
};

type AboutInfoType = {
  experience: ExperienceType;
};
