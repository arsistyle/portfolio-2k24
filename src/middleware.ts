import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es'],

  defaultLocale: 'en',
  localePrefix: 'never',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
