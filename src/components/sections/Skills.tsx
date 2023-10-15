import { Icon } from '../elements/Icon';
import SkillsBadge from '../elements/SkillsBadge';
import { SkillsSlider } from '../elements';
import { SkillsType } from '@/types';
import { useTranslations } from 'next-intl';

import SKILLS from '@/data/skills.json';

export default function Skills({ data }: { data: any }) {
  const skillsData = data.map((name: string) => SKILLS.find((skill) => skill.name === name));

  return (
    <section className='bg-secondary-300 h-40 flex justify-center'>
      <div className='relative flex items-center w-full'>
        <div className='skills-badge w-52 h-52 absolute -left-28 lg:-left-6 -top-6 -bottom-6 z-10'>
          <SkillsBadge />
        </div>
        <div className='flex justify-center w-full pl-20 lg:pl-44'>
          <SkillsSlider skills={skillsData} />
        </div>
      </div>
    </section>
  );
}
