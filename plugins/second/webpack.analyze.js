const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const { merge } = require('webpack-merge')

const containerConfig = require('./webpack.config')

const analyzerConfig = merge(containerConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: 8002,
    }),
  ],
})

module.exports = analyzerConfig
