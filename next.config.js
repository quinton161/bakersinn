/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [],
    unoptimized: true,
  },
}

module.exports = nextConfig 