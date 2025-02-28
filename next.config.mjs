/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "blog-page-panel.onrender.com",
        },
      ],  
      domains: ['i.imgur.com', 'imgur.com', 'blog-page-panel.onrender.com'], // Allow external images
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'imgur.com',
        },
      ],
    },
  };

export default nextConfig;
