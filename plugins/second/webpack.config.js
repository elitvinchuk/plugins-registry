const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin
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
      shared: [
        {
          react: { singleton: true, requiredVersion: dependencies.react },
          'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
          },
        },
      ],
    }),
  ],
})

module.exports = pluginConfig
