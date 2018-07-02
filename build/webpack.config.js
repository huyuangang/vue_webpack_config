
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entrys: {

  },
  output: {
    path: path.resolve(__dirname, '../app/outputs'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
      }
    ]
  }
}