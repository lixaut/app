const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 浏览器自动打开
  devServer: {
    open: true,
    host: '192.168.2.21',
    port: 8080
  },
  // 关闭eslint校验功能
  lintOnSave: false,
})