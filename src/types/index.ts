import { IconType } from '@/components/elements/Icon/constants';
import { Key, SVGProps } from 'react';

// Icon component

export type IconName = IconType;

export type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

// Skills section

export type SkillsType = { 
  name: IconName;
  label: string;
  id: Key;
  fill?: string;
  stroke?: string
};

// Projects

export type ProjectUrlType = 'code' | 'website' | 'detail';

export type ProjectCardType = {
  _id?: Key;
  slug: string;
  title: string;
  category: string;
  image: string;
  links: {
    url: string;
    type: ProjectUrlType;
  }[];
  t?: any;
};

export type languages = 'en' | 'es';

export type getProjectsListProps = {
  language?: languages;
  limit?: number;
};

export type getHomeProps = {
  language?: languages;
};

export type getFooterProps = {
  language?: languages;
};
