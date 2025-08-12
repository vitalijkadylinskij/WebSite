'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru'],
    interpolation: { escapeValue: false },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
  });

export default i18n;

export const locales = ['en', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const localeFlags: Record<Locale, string> = {
  en: 'en',
  ru: '🇷🇺',
};
