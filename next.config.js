/** @type {import('next').NextConfig} */
// add logodownload.org to the domains array in next.config.js
// module.exports = {
//   images: {
//     domains: ["logodownload.org"],

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["logodownload.org"],
  },
};

module.exports = nextConfig;
