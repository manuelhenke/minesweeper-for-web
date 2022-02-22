const path = require('path');

module.exports = {
  mode: 'production',
  devtool: false,
  entry: {
    minesweeper: './src/Minesweeper.js',
  },
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        // HTML for shadow DOM
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        // CSS for shadow DOM
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
