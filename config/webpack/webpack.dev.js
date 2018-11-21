const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true,
    port: 8000,
    overlay: true,
    compress: true,
    historyApiFallback: true,
  },
});
