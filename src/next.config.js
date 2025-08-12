/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
