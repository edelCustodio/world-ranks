/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/countries",
        permanent: true,
      },
    ];
  },
};

/**
 * Environment variables
 */
nextConfig.env = {
  REST_COUNTRIES: process.env.REST_COUNTRIES,
  COUNTRIES_BODY_FIELDS: process.env.COUNTRIES_BODY_FIELDS,
};

nextConfig.webpack = (config, context) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: "@svgr/webpack",
  });
  return config;
};

nextConfig.images = {
  domains: ["images.unsplash.com"],
};

export default nextConfig;
