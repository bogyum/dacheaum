import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages 배포 시에만 basePath 사용
  ...(process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS && {
    basePath: '/dacheaum',
    assetPrefix: '/dacheaum/',
  }),
};

export default nextConfig;