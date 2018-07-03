
const webpack = require('webpack');
const path = require('path');
const entrys = require('../app/entrys')

module.exports = {
  entry: entrys,
  output: {
    path: path.resolve(__dirname, '../app/outputs'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_module/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_module/
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js',
      'pages': path.resolve(__dirname, '../app/pages'),
      'components': path.resolve(__dirname, '../app/components')
    }
  }
}