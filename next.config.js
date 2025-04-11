const path = require('path')
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Ignore source map warnings for react-toastify
    config.ignoreWarnings = [
      { module: /react-toastify/ },
    ];
    return config;
  },
  // Disable static optimization for pages that use browser APIs
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '*.vercel.app'],
    },
  },
  // Ensure proper handling of client components
  reactStrictMode: true,
  // Disable static optimization for the home page
  output: 'standalone',
};

module.exports = nextConfig;