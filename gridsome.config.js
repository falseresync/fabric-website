const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  siteName: 'Fabric',
  siteUrl: 'https://fabricmc.net',
  titleTemplate: 'Fabric - %s',

  templates: {
    Post: '/blog/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ],

  transformers: {
    remark: {
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },

  chainWebpack: config => {
    // UNCOMMENT ON HYDRATION ERROR
    // config.mode('development');

    // UNCOMMENT FOR BUNDLE ANALYSIS REPORT
    // config
    //   .plugin('BundleAnalyzerPlugin')
    //   .use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }]);
  },

  permalinks: {
    trailingSlash: false
  }
};
