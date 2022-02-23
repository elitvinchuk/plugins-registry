const { ModuleFederationPlugin } = require('webpack').container
const { merge } = require('webpack-merge')

const { dependencies } = require('./package.json')
const commonConfig = require('../../webpack.common')(__dirname)

const pluginConfig = merge(commonConfig, {
  plugins: [
    new ModuleFederationPlugin({
      name: 'plugin',
      filename: 'remoteEntry.js',
      exposes: {
        './Plugin': './src/Plugin',
      },
      shared: {
        ...dependencies,
        react: { singleton: true, requiredVersion: dependencies.react },
        '@plugins/context': {
          singleton: true,
          requiredVersion: dependencies['@plugins/context'],
        },
      },
    }),
  ],
  devServer: {
    port: 8881,
  },
})

module.exports = pluginConfig
