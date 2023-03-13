module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com", "ia.media-imdb.com"],
    unoptimized: true,
  },
  basePath: "/movie",
  async rewrites() {
    return [
      {
        source: "/movie/:id*",
        destination: "/movie/[id]",
      },
    ];
  },
};
