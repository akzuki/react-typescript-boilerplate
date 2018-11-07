const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
});
