const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin
const { merge } = require('webpack-merge')

const { dependencies } = require('./package.json')
const commonConfig = require('../webpack.common')(__dirname)

const containerConfig = merge(commonConfig, {
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      filename: 'remoteEntry.js',
      shared: {
        ...dependencies,
        react: { singleton: true, requiredVersion: dependencies.react },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    }),
  ],
})

module.exports = containerConfig
