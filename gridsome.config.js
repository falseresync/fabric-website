const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  siteName: 'Fabric',
  siteUrl: 'https://fabricmc.net',
  titleTemplate: 'Fabric - %s',
  plugins: [],
  chainWebpack: config => {
    // UNCOMMENT FOR BUNDLE ANALYSIS REPORT
    // config
    //   .plugin('BundleAnalyzerPlugin')
    //   .use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }]);
  }
}
