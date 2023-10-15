import { useTranslations } from 'next-intl';
import { Icon } from '../elements/Icon';

export default function About({ data }: { data: AboutInfoType }) {
  const { title = '', jobs = [] } = data || {};

  return (
    <section className='flex items-center justify-center px-5 py-14 md:py-40 bg-white dark:bg-dark'>
      <div className='container'>
        <h3 className='h3 dark:text-white max-w-4xl leading-tight text-balance mb-12 md:mb-20'>{title}</h3>
        <div className='grid grid-cols-2 gap-12 md:gap-20'>
          {jobs.map((text: string) => (
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
  title: string;
  jobs: string[];
};
