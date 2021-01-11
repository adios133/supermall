module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@':'src',
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'views':'@/views',
        'network':'@/network'
      }
    }
  }
}