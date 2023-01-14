const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = async (phase) => {
  const commonConfig = {
    i18n: {
      locales: ["en", "es"],
      defaultLocale: "en",
      localeDetection: false,
    },
    reactStrictMode: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...commonConfig,
      images: {
        domains: ["127.0.0.1", "www.datocms-assets.com"],
      },
    };
  }

  return {
    ...commonConfig,
    images: {
      domains: ["www.datocms-assets.com"],
    },
  };
};
