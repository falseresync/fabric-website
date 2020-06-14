const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  siteName: 'Fabric',
  siteUrl: 'https://fabricmc.net',
  titleTemplate: 'Fabric - %s',

  templates: {
    Post: [
      {
        name: 'old_path',
        path: '/blog/:year/:month/:day/:slug'
      },
      {
        name: 'new_path',
        path: '/blog/:year/:month/:day/:title'
      }
    ],
    Tag: '/blog/tag/:id'
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
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['Post'],
        feedOptions: {
          title: 'falseresync blog',
          description: 'Stuff I want to put out there in the Eenternet'
        },
        rss: {
          enabled: true,
          output: '/feed.xml'
        },
        atom: {
          enabled: false,
          output: '/feed.atom'
        },
        json: {
          enabled: false,
          output: '/feed.json'
        },
        maxItems: 25,
        htmlFields: ['description', 'content'],
        enforceTrailingSlashes: false,
        filterNodes: (node) => true,
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date || node.fields.date,
          content: node.content
        })
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
