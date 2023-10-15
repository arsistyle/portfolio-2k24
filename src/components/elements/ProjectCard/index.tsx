import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectCardType, ProjectUrlType } from '@/types';
import { Icon } from '../Icon';

const buttonsTypes = {
  code: (url: string, label: string) => {
    return (
      <a href={url} className='btn btn--code' target='_blank' rel='noreferrer'  key={url}>
        {label}
        <span className='w-6 h-6'>
          <Icon name='github' />
        </span>
      </a>
    );
  },
  website: (url: string, label: string) => {
    return (
      <a href={url} className='btn btn--primary' target='_blank' rel='noreferrer'  key={url}>
        {label}
        <span className='w-6 h-6'>
          <Icon name='external' fill='none' stroke="currentColor" />
        </span>
      </a>
    );
  },
  detail: (url: string, label: string) => {
    return (
      <Link href={url} className='btn btn--secondary'  key={url}>
        {label}
      </Link>
    );
  },
};

const generateButton = (url: string, type: ProjectUrlType, t: any) => {
  const label = t(`Projects.Card.buttons.${type}`);
  return buttonsTypes[type](url, label) || null;
};

const ProjectCard = ({ title, category, image, links, slug}: ProjectCardType) => {
  const t = useTranslations();
  return (
    <article className='projectCard'>
      <Image
        className='projectCard__image'
        src={`https://picsum.photos/615/615`}
        width={615}
        height={615}
        alt={title}
      />
      <div className='projectCard__info'>
        <h4 className='h6'>{category}</h4>
        <h3 className='h4 text-dark dark:text-white mb-4'>{title}</h3>
        <div className='projectCard__actions'>
          {links?.map(({ url, type }) => generateButton(url, type, t))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
