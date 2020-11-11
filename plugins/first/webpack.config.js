const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin
const { merge } = require('webpack-merge')

const commonConfig = require('../../webpack.common')(__dirname)

const containerConfig = merge(commonConfig, {
  plugins: [
    new ModuleFederationPlugin({
      name: 'plugin',
      filename: 'remoteEntry.js',
      exposes: {
        './Widget': './src/Widget',
      },
      shared: [
        {
          react: { singleton: true },
          'react-dom': { singleton: true },
        },
      ],
    }),
  ],
})

module.exports = containerConfig
