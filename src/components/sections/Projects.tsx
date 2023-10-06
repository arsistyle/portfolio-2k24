import React from 'react';
import { ProjectCard } from '../elements';
import { ProjectCardType } from '@/types';

export default function Projects({ t, locale }: { t: any; locale: string }) {
  const projectsList = require('@/data/projects.json');
  const projects = projectsList[locale] || [];

  return (
    <section className='flex items-center justify-center px-5 py-40'>
      <div className='container'>
        <div className='grid grid-cols-2 gap-12'>
          {projects.map(({ id, title, slug, category, image, urls }: ProjectCardType) => {
            return (
              <ProjectCard
                key={id}
                title={title}
                category={category}
                image={image}
                urls={urls}
                slug={slug}
                t={t}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
