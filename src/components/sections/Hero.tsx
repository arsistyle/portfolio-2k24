import Image from 'next/image';

type HeroType = {
  greeting: string;
  name: string;
  job: string;
  avatar: string;
};

export default function Hero({ data }: { data: HeroType }) {
  const { greeting = '', name = '', job = '', avatar = '' } = data || {};

  return (
    <section className='flex items-center justify-center px-5 py-14 md:py-40'>
      <div className='container'>
        <div className='grid items-center grid-cols-2 sm:grid-cols-12 gap-8'>
          {(greeting || name || job) && (
            <div className='hero-info relative z-10 col-span-2 sm:col-span-8'>
              <h1 className='mb-2'>
                {greeting && (
                  <div className='inline-flex p-2 mb-2 text-[clamp(1.6rem,5vw,3.75rem)] leading-[1em] font-bold bg-secondary-400 dark:bg-secondary-300 text-dark'>
                    {greeting}
                  </div>
                )}
                {name && (
                  <div className='font-black text-dark dark:text-white h1 heading mix-blend-difference'>
                    {name}
                  </div>
                )}
              </h1>
              {job && (
                <h2 className='text-[clamp(1.6rem,5vw,3.75rem)] font-bold text-primary-400 dark:text-primary-300'>
                  {job}
                </h2>
              )}
            </div>
          )}
          {avatar && (
            <div className='col-span-2 sm:col-span-4'>
              <div className='flex sm:justify-end'>
                <Image
                  src={avatar}
                  className='max-w-xs sm:max-w-none avatar block rounded-main aspect-square brightness-125 contrast-75 dark:filter-none'
                  alt={name}
                  loading='lazy'
                  width={475}
                  height={475}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
