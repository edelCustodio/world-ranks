/** @type {import('next').NextConfig} */
const nextConfig = {};

nextConfig.webpack = (config, context) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: "@svgr/webpack",
  });
  return config;
};

nextConfig.images = {
  domains: ['images.unsplash.com']
}

export default nextConfig;
