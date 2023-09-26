import { NextIntlClientProvider } from 'next-intl';

import '../globals.css';
import { Syne } from 'next/font/google';

import { notFound } from 'next/navigation';
import { Background } from '@/components/elements';
import { LOCALES } from '@/constants';

const syne = Syne({ subsets: ['latin'] });

// export function generateStaticParams() {
//   return [{ locale: 'en' }, { locale: 'es' }];
// }

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isValidLocale = LOCALES.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const { Home = {} } = messages || {};
  const { title = '', description = '' } = Home || {};

  return (
    <html lang={locale}>
      <head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </head>
      <body className={syne.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Background />
      </body>
    </html>
  );
}
