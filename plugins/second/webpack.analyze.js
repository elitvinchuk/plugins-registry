const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const { merge } = require('webpack-merge')

const containerConfig = require('./webpack.config')

const analyzerConfig = merge(containerConfig, {
  plugins: [new BundleAnalyzerPlugin()],
})

module.exports = analyzerConfig
