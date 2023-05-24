/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // topLevelAwait: true,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ["image.tmdb.org", "images.unsplash.com", "rentzo.qsaweb.com", "shorelinerealestate.com"],
    // path: "http://rentzo.qsaweb.com/_next/image"
  },
  // distDir: 'build',
  // enableUndici: true,

}

module.exports = nextConfig
