/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "blog-page-panel.onrender.com",
      },
    ],
    domains: ["i.imgur.com", "imgur.com", "blog-page-panel.onrender.com", "images.unsplash.com", "plus.unsplash.com"], // Allow external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgur.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
};

export default nextConfig;
