/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com", "ia.media-imdb.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
