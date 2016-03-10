
var webpack = require('webpack');

module.exports = {
  entry: {
    site: './app/js/site.js'
  },

  resolve: {
    root: __dirname
  },

  output: {
    path: __dirname + '/public',
    filename: 'js/[name].js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|public|app\/vendor|dist/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules|public/,
        loader: 'file?context=app&name=[name].css!autoprefixer?browsers=last 3 version!sass'
      }
    ]
  }
};