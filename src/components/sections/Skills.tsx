import { Icon } from '../elements/Icon';
import SkillsBadge from '../elements/SkillsBadge';
import { SkillsSlider } from '../elements';
import { SkillsType } from '@/types';

export default function Skills({ t }: { t: any }) {
  const skillsInfo: SkillsType[] = require('@/data/skills.json');

  return (
    <section className='bg-secondary-300 h-40 flex justify-center'>
      <div className='relative flex items-center w-full'>
        <div className='skills-badge w-52 h-52 absolute -left-24 lg:-left-6 -top-6 -bottom-6 z-10'>
          <SkillsBadge />
        </div>
        <div className='flex justify-center w-full pl-20 lg:pl-44'>
          <SkillsSlider skills={skillsInfo} />
        </div>
      </div>
    </section>
  );
}
