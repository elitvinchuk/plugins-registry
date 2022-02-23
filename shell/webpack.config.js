const { ModuleFederationPlugin } = require('webpack').container

const { merge } = require('webpack-merge')

const { dependencies } = require('./package.json')
const commonConfig = require('../webpack.common')(__dirname)

const containerConfig = merge(commonConfig, {
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      shared: {
        ...dependencies,
        react: {
          eager: true,
          singleton: true,
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          eager: true,
          requiredVersion: dependencies.react,
        },
        '@plugins/context': {
          eager: true,
          singleton: true,
          requiredVersion: dependencies['@plugins/context'],
        },
      },
    }),
  ],
})

module.exports = containerConfig
