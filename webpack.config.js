'use strict';

const path = require('path');

const config = {
  entry: {
    vuex: path.resolve('vuex')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      }, {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  }
};

module.exports = config;
