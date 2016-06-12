const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    delic: path.join(__dirname, 'src/js/index.js')
  },
  output: {
    sourceMapFilename: '[name].bundle.map',
    path: path.join(__dirname, 'static/assets'),
    filename: '[name].bundle.js'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png' },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader'
        )
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!sass-loader'
        )
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
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
      'highlight.css': path.join(__dirname, 'node_modules', 'highlight.js', 'styles', 'monokai.css'),
      'highlight.js': path.join(__dirname, 'node_modules', 'highlight.js', 'lib', 'highlight.js'),
      'bulma.sass': path.join(__dirname, 'node_modules', 'bulma', 'bulma.sass')
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
