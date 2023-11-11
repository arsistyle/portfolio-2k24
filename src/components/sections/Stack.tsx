import StackBadge from '../elements/SkillsBadge';
import { SkillsSlider } from '../elements';

import SKILLS from '@/data/skills.json';

export default function Stack({ data }: { data: any }) {
  const stackData = data.map((name: string) => SKILLS.find((skill) => skill.name === name));

  return (
    <section className='bg-secondary-300 h-40 flex justify-center'>
      <div className='relative flex items-center w-full'>
        <div className='skills-badge w-52 h-52 absolute -left-28 lg:-left-6 -top-6 -bottom-6 z-10'>
          <StackBadge />
        </div>
        <div className='flex justify-center w-full pl-20 lg:pl-44'>
          <SkillsSlider skills={stackData} />
        </div>
      </div>
    </section>
  );
}
