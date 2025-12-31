import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages обычно разворачивает проекты по адресу username.github.io/repo-name/
  // Для репозитория ArtiomNosov/consultation-website:
  basePath: process.env.NODE_ENV === 'production' ? '/consultation-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/consultation-website/' : '',
};

export default nextConfig;
