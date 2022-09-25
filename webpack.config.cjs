/* eslint-disable import/no-extraneous-dependencies */
const path = require('node:path');
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  cache: false,
  devtool: 'source-map',
  experiments: {
    outputModule: true,
  },
  entry: {
    'custom-element': './src/minesweeper-game.ts',
    'custom-element.min': './src/minesweeper-game.ts',
    'minesweeper-game': {
      import: './src/MinesweeperGame.ts',
      library: {
        type: 'module',
      },
    },
    'minesweeper-game.min': {
      import: './src/MinesweeperGame.ts',
      library: {
        type: 'module',
      },
    },
  },
  optimization: {
    minimize: true,
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
