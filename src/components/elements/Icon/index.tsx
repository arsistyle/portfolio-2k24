import { ICONS_LIST } from './constants';
import { IconProps } from '@/types';

export const Icon = ({ name, className, ...props }: IconProps) => {
  const Icon = ICONS_LIST[name] || null;

  if (Icon) {
    return (
      <svg className={`w-full h-full ${className}`} viewBox='0 0 24 24' {...props}>
        {Icon}
      </svg>
    );
  }
  return null;
};
