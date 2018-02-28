'use strict';

var webpack = require('webpack');
var path = require('path');
var utils = require('./utils');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('../config');
var vueLoaderConfig = require('./vue-loader.conf');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'jquery': 'jquery'
    }
  },
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [resolve('src'), resolve('test')],
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src'), resolve('test')]
    }, {
      test: /\.less$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "less-loader" // compiles Less to CSS
      }]
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }]
  },
  // 增加一个plugins
  plugins: [new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }), new HtmlWebpackPlugin({
    template: 'index.html',
    excludeChunks: ['list', 'detail']
  }), new HtmlWebpackPlugin({
    filename: 'login.html',
    template: 'login.html',
    thunks: ['common', 'list']
  })]
};
//# sourceMappingURL=webpack.base.conf.js.map