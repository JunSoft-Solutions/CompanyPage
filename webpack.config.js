const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, 'public', 'images'), to: path.join(__dirname, 'dist', 'images') },
        { from: path.join(__dirname, 'public', 'fonts'), to: path.join(__dirname, 'dist', 'fonts') },
      ],
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3000,
    historyApiFallback: true,
  },
};
