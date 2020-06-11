const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  siteName: 'Fabric',
  siteUrl: 'https://fabricmc.net',
  titleTemplate: 'Fabric - %s',
  plugins: [],
  chainWebpack: config => {
    // UNCOMMENT ON HYDRATION ERROR
    //config.mode('development')

    // UNCOMMENT FOR BUNDLE ANALYSIS REPORT
    // config
    //   .plugin('BundleAnalyzerPlugin')
    //   .use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }]);
  },
  permalinks: {
    trailingSlash: false
  }
};
