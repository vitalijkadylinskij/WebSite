'use client'

import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { useRouter, usePathname } from '@/i18n/navigation';

const locales = ['en', 'ru'] as const;

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const toggleLanguage = () => {
    const currentIndex = locales.indexOf(currentLocale as typeof locales[number]);
    const nextIndex = (currentIndex + 1) % locales.length;
    const nextLocale = locales[nextIndex];

    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Button
      className="px-4 py-2 text-gray-900 hover:bg-transparent text-sm font-medium border-none cursor-pointer bg-transparent shadow-none uppercase"
      onClick={toggleLanguage}
    >
      {currentLocale.toUpperCase()}
    </Button>
  );
}

