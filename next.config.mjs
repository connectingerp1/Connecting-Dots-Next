/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['i.imgur.com'], // Allow external images
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.imgur.com',
        },
      ],
    },
  };

export default nextConfig;
