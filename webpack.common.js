const HTMLPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = here => ({
  entry: './src/index',
  output: {
    path: path.resolve(here, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: './src/index.html',
    }),
  ],
  devtool: 'inline-source-map',
})
