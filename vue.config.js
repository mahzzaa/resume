module.exports = {
  // publicPath      : process.env.NODE_ENV === 'production' ? '/' : '/',
  css             : { loaderOptions: { css: { url: false } } },
  configureWebpack: (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        test   : require('path').resolve(__dirname, 'node_modules/leader-line/'),
        loader : 'skeleton-loader',
        options: { procedure: (content) => `${content} export default LeaderLine` },
      },
    ]
  },

  pwa: {
    name      : 'resume',
    short_name: 'resume',
    themeColor: '#6ccf9e',
    iconPath  : {
      favicon32     : 'img/app_icons/icon-32x32.png',
      favicon16     : 'img/app_icons/icon-16x16.png',
      appleTouchIcon: 'img/app-icons/icon-152x152.png',
      msTileImage   : 'img/app-icons/icon-144x144.png',
    },
    manifestOptions: {
      background_color: '#7c2a95',
      icons           : [
        {
          src  : 'img/app_icons/icon-192x192.png',
          sizes: '192x192',
          type : 'image/png',
        },

        {
          src  : 'img/app_icons/icon-512x512.png',
          sizes: '512x512',
          type : 'image/png',
        },

        {
          src    : 'img/app_icons/icon-192x192.png',
          sizes  : '192x192',
          type   : 'image/png',
          purpose: 'maskable',
        },

        {
          src    : 'img/app_icons/icon-512x512.png',
          sizes  : '512x512',
          type   : 'image/png',
          purpose: 'maskable',
        },
      ],
    },
  },
}
