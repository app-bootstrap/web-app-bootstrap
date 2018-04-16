'use strict';

const path = require('path');

const config = {
  entry: {
    vuex: path.resolve('vuex'),
    flux: path.resolve('flux'),
    redux: path.resolve('redux'),
    mobx: path.resolve('mobx'),
    'vuex-ts': path.resolve('vuex-ts'),
    plain: path.resolve('plain'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          esModule: true,
          loaders: {
            ts: [
              'babel-loader',
              {
                loader: 'ts-loader',
                options: {
                  appendTsSuffixTo: [/\.vue$/],
                  configFile: path.resolve(__dirname, 'tsconfig.json')
                },
              },
            ],
          }
        }
      }, {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              configFile: path.resolve(__dirname, 'tsconfig.json')
            },
          },
          'tslint-loader',
        ],
      }, {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader!postcss-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};

module.exports = config;
