const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = defineConfig({
  assetsDir: 'assets',
  productionSourceMap: false,
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()]
      }),
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.html$|\.css$/,
        filename: '[path][base].gz',
        minRatio: 0.9,
        threshold: 10240,
        deleteOriginalAssets: false
      })
    ]
  }
})
