/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract({
  ...nextConfig,
  images: {
    domains: ["oaidalleapiprodscus.blob.core.windows.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
        port: "3000",
        pathname: "/private/**",
      },
    ],
  },
});
