module.exports = {
  env: {
    GRAPHQL_ENDPOINT_URL: 'http://nextjs.local/graphql'
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
