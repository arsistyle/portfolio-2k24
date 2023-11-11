import { ICONS_LIST } from './constants';
import { IconProps } from '@/types';

export const Icon = ({ name }: IconProps) => {
  const Icon = ICONS_LIST[name] || null;

  if (Icon) {
    return <>{Icon}</>;
  }
  return null;
};
