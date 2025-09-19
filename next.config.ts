import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages 배포를 위한 설정
  basePath: process.env.NODE_ENV === 'production' ? '/dacheaum' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dacheaum/' : '',
};

export default nextConfig;