/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config)=>{
    config.resolve.fallback = {fs:false};
    return config;
  },
  images: {
    domains: ['bing.com','https://cloudinary.com/']
  }
}

module.exports = nextConfig
