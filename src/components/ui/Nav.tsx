'use client'

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useSelectedLayoutSegment } from 'next/navigation';

import { ROUTES } from '@/routes';

export default function Nav() {
  const t = useTranslations('Nav');
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  return (
    <ul className='flex gap-5'>
      {ROUTES.map(({ name, href }) => (
        <li key={name}>
          <Link
            className={`text-xl font-bold text-dark dark:text-white transition hover:opacity-80 ${
              pathname !== href ? 'opacity-60' : ''
            }`}
            href={href}
          >
            {t(name)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
