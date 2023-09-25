import Link from 'next/link';
import { Logo } from '../elements';
import { Nav } from '../ui';

export default function Header({locale}: {locale: string}) {
  return (
    <header className='sticky top-0 left-0 right-0 z-50 px-4 pt-4'>
      <div className='container flex items-center justify-between gap-4 p-3 px-8 m-auto transition rounded-main backdrop-blur-md bg-white/60 dark:bg-dark/60'>
        <Link href='/' className='text-white'>
          <Logo />
        </Link>
        <div className='flex items-center gap-8 ml-auto'>
          <Nav />
          <div className="flex rounded-xl text-dark dark:text-white overflow-hidden bg-dark/10 dark:bg-white/10">
            <Link href="/en" locale="en" className={`px-1 pl-2 transition ${locale === 'en' ? 'opacity-100 bg-dark/10 dark:bg-white/10': 'opacity-60'}`}>EN</Link>
            <Link href="/es" locale="es" className={`px-1 pr-2 transition ${locale === 'es' ? 'opacity-100 bg-dark/10 dark:bg-white/10': 'opacity-60'}`}>ES</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
