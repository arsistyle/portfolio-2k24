import createMiddleware from 'next-intl/middleware';
import { LOCALES } from './constants';

const [EN] = LOCALES;

export default createMiddleware({
  locales: LOCALES,

  defaultLocale: EN,
  localePrefix: 'never',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
