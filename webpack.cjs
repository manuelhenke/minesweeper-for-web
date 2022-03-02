const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

/** @type {webpack.Configuration} */
module.exports = {
  mode: 'production',
  devtool: false,
  entry: {
    minesweeper: './src/Minesweeper.js',
    'minesweeper.min': './src/Minesweeper.js',
  },
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['css-loader', 'postcss-loader', 'sass-loader'],
        sideEffects: true,
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
};
