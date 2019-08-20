'use strict'

module.exports = {
  favicon: function (base) {
    return [
      { rel: 'apple-touch-icon', sizes: '180x180', href: base + '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: base + '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: base + '/favicon-16x16.png' },
      { rel: 'manifest', href: base + '/site.webmanifest' },
      { rel: 'mask-icon', color: '#11ed94', href: base + '/safari-pinned-tab.svg' },
    ]
  },
  msapplication: function (base) {
    return [
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      { name: 'theme-color', content: '#FFFFFF' }
    ]
  }
}
