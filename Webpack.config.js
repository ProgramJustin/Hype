// import { resolve } from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import webpack from 'webpack';
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: ['webpack-dev-server/client?http://localhost:8080', resolve(__dirname, "src" + '/index.jsx')],
  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: 'template.ejs',
    appMountId: 'react-app-root',
    title: 'Developer Page',
    filename: resolve(__dirname, "build", "index.html")
  }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
  performance: {
  hints: process.env.NODE_ENV === 'production' ? "warning" : false
},
};
