/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config)=>{
    config.resolve.fallback = {fs:false};
    return config;
  },
  images: {
    domains: ['th.bing.com','res.cloudinary.com','thumb1.shutterstock.com']
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
      dgram: false,
    };

    return config;
  },
}

module.exports = nextConfig
