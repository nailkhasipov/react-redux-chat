require('babel-polyfill');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: ['babel-polyfill', `${APP_DIR}/index.js`],
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};