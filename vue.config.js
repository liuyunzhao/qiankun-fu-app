const { name } = require('./package')
module.exports = {
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 7101,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      library: 'vue-fu',
      // library: `${name}-[name]`,
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: 'umd',
      // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
