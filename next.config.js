/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = config;