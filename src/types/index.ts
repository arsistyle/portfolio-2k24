import { IconType } from '@/components/elements/Icon/constants';
import { Key, SVGProps } from 'react';

// Icon component

export type IconName = IconType;

export type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

// Skills section

export type SkillsType = { name: IconName; label: string; id: Key; fill?: string; stroke?: string };

// Projects

export type ProjectUrlType = 'code' | 'website' | 'detail';

export type ProjectCardType = {
  id?: Key;
  slug: string;
  title: string;
  category: string;
  image: string;
  urls: {
    url: string;
    type: ProjectUrlType;
  }[];
  t?: any;
};
