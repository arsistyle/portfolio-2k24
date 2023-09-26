import Image from 'next/image';

export default function Hero({ t }: { t: any }) {
  return (
    <section className='flex items-center justify-center px-5 py-40'>
      <div className='container'>
        <div className='grid items-center grid-cols-12'>
          <div className='hero-info relative z-10 col-span-8'>
            <h1 className='mb-2'>
              <div className='inline-flex p-2 mb-2 text-5xl font-bold bg-secondary-400 dark:bg-secondary-300 text-dark'>
                {t('Hero.greeting')}
              </div>
              <div className='font-black text-dark dark:text-white h1 heading mix-blend-difference'>
                {t('Hero.name')}
              </div>
            </h1>
            <h2 className='text-6xl font-bold text-primary-400 dark:text-primary-300'>
              {t('Hero.job')}
            </h2>
          </div>
          <div className='col-span-4'>
            <div className='flex justify-end'>
              <Image
                src='/assets/img/avatar.jpg'
                className='avatar block rounded-main aspect-square brightness-125 contrast-75 dark:filter-none'
                alt='Hero image'
                loading='lazy'
                width={475}
                height={475}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
