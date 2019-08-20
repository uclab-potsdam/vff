const { config } = require('./config.js')
const { favicon, msapplication } = require('./assets/js/favicon.js')
const { seo } = require('./assets/js/seo.js')
const { links } = require('./assets/js/head.js')

module.exports = {
  head: {
    title: config.page.title,
    htmlAttrs: {
      lang: config.page.lang
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...seo(config),
      ...msapplication(config.page.url)
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Heebo:700,900&display=swap' },
      ...favicon(config.page.url),
      ...links(config)
    ]
  },
  css: [
    'normalize-scss',
    '@/assets/style/base.scss'
  ],
  resolve: {
    alias: {
      style: 'assets/style'
    }
  },
  loading: { color: config.page.color },
  generate: {
    fallback: true,
    routes: [
      '/'
    ]
  },
  router: {
    base: '/vff/'
  },
  build: {
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          require('webpack-node-externals')({
            whitelist: [/^vue-slick/]
          })
        ]
      }
    }
  }
}
