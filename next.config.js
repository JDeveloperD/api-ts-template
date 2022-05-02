/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['localhost', 'crehana-public-catalog.imgix.net', 'loremflickr.com']
  }
};

module.exports = nextConfig;
