const path = require('path');
const ip = require('ip').address();

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/activity/<%= user.name %>/dist/' : '/',
  indexPath: path.resolve(__dirname, './index.html'),
  productionSourceMap: true,  // 开启生产环境source map
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    hot: true,
    open: true,
    host: ip, // ip打开
    proxy: {
      '/<%= user.name %>': {
        target: 'http://webevent.cc',
        changeOrigin: true
      }
    },
    clientLogLevel: 'info'
  },
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
        .loader('eslint-loader')
        .tap(options => {
          return {
            ...options,
            emitWarning: true,
            cache: false
          }
        })
  }
}