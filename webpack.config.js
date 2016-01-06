const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    delic: path.join(__dirname, 'src/js/index.js')
  },
  output: {
    // sourceMapFilename: '[name].bundle.map',
    path: path.join(__dirname, 'static/assets'),
    filename: '[name].bundle.js'
  },
  // devtool: '#source-map',
  module: {
    loaders: [
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    modulesDirectories: [
      'node_modules'
    ],
    alias: {
      'highlight.css': path.join(__dirname, 'bower_components', 'highlightjs', 'styles', 'monokai.css'),
      'highlight.js': path.join(__dirname, 'bower_components', 'highlightjs', 'highlight.pack.js'),
      'skeleton.css': path.join(__dirname, 'bower_components', 'skeleton-css', 'css', 'skeleton.css')
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      mangle: true,
      preserveComments: false,
      minimize: false
    }),
    new ExtractTextPlugin('[name].bundle.css')
  ]
}
