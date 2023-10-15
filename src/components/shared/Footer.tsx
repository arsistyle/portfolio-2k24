import React from 'react';
import { getFooter } from '@/services/getFooter';
import { languages } from '@/types';

export default async function Footer({ locale }: { locale: languages }) {
  const [footerData] = await getFooter({ language: locale });

  const {title, description, cta, copyright} = footerData || {};

  console.log(footerData);

  return (
    <footer>
      <div className='bg-primary-300 rounded-t-main py-14 px-14'>
        <div className='container mx-auto'>
          <div className='grid md:grid-cols-12 gap-6'>
            <div className='md:col-span-8'>
              <div className='flex flex-col gap-4'>
                <h4 className='text-dark h4'>{title}</h4>
                <p className='text-dark p'>{description}</p>
              </div>
            </div>
            <div className='md:col-span-4 self-center'>
              <div className='flex justify-end'>
                {cta.available ? (
                  <a href={cta.url} className='btn btn-dark text-primary-300'>
                    {cta.label}
                  </a>
                ) : (
                  <div
                    className='tooltip before:bg-secondary-300 before:text-dark before:rounded-xl after:border-t-secondary-300'
                    data-tip={cta.availableMsg}
                  >
                    <span className='btn btn-dark text-primary-300 opacity-60'>{cta.label}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-dark p-6 px-14'>
        <div className='container mx-auto text-center'>
          <div className='text-white'>{copyright}</div>
        </div>
      </div>
    </footer>
  );
}
