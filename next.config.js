/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['flagcdn.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/w320/**',
      },
    ],
  },
};

module.exports = nextConfig;
