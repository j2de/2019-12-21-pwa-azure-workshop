const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpackPwaManifest({
      name: 'react memo app',
      short_name: 'memo',
      description: '리액트로 제작한 메모앱',
      background_color: '#ffffff',
      crossorigin: 'use-credentials',
      theme_color: '#eeeeee',
      icons: [
        {
          src: path.resolve('src/assets/Icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ]
};
