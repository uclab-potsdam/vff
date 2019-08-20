'use strict'

module.exports = {
  links: function (config) {
    return [
      { rel: 'license', href: config.page.imprint },
      { rel: 'manifest', href: config.page.url + '/site.webmanifest' }
    ]
  }
}
