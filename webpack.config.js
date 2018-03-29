'use strict';

const path = require('path');

const config = {
  entry: {
    vuex: path.resolve('vuex'),
    flux: path.resolve('flux'),
    redux: path.resolve('redux'),
    mobx: path.resolve('mobx')
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
        test: /\.jsx?/,
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
        loader: 'style-loader!css-loader!less-loader!postcss-loader'
      }
    ]
  }
};

module.exports = config;