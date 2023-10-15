import React from 'react';
import { ProjectCard } from '../elements';
import { ProjectCardType, languages } from '@/types';
import { getProjectsList } from '../../services';

export default async function Projects({ locale }: { locale: languages }) {
  const projects = await getProjectsList({
    language: locale,
    limit: 4,
  });

  return (
    <section className='flex items-center justify-center px-5 py-40'>
      <div className='container'>
        <div className='grid grid-cols-2 gap-4 md:gap-12'>
          {projects.map(({ _id, title, slug, category, image, links }: ProjectCardType) => {
            return (
              <ProjectCard
                key={_id}
                title={title}
                category={category}
                image={image}
                links={links}
                slug={slug}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
