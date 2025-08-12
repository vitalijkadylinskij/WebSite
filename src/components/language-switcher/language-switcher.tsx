'use client';

import i18n, { locales, localeFlags } from '@/i18n';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    setCurrentLang(i18n.language);
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const currentIndex = locales.indexOf(currentLang as typeof locales[number]);
    const nextIndex = (currentIndex + 1) % locales.length;
    const nextLang = locales[nextIndex];
    i18n.changeLanguage(nextLang);
    setCurrentLang(nextLang);
  };

  if (!mounted) return null;

  return (
    <Button
      className="px-4 py-2 text-gray-900 hover:bg-transparent text-sm font-medium border-none cursor-pointer bg-transparent shadow-none uppercase"
      onClick={toggleLanguage}
    >
      {currentLang.toUpperCase()}
    </Button>
  );
}
