'use client';

import Marquee from 'react-fast-marquee';

import { Icon } from '@/components/elements/Icon';

import { SkillsType } from '@/types';

export default function SkillsSlider({ skills }: { skills: SkillsType[] }) {
  return (
    <Marquee className='w-full' gradient gradientColor='#af73fe' autoFill gradientWidth={60}>
      {skills.map(({ name, label, id, fill = '', stroke = '' }) => (
        <div className='flex items-center justify-center py-10 text-dark w-24 md:w-36 lg:w-44 xl:w-52' key={id}>
          <div
            className='tooltip w-14 h-14 before:bg-primary-300 before:text-dark after:border-t-primary-300'
            data-tip={label}
          >
            <Icon name={name} fill={fill} stroke={stroke} strokeWidth='1.5' />
          </div>
        </div>
      ))}
    </Marquee>
  );
}
