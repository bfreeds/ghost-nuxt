const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['ghost-nuxt'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'ghost-nuxt.js',
    options
  })
}

module.exports.meta = require('../package.json')
