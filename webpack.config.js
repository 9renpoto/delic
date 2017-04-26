const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const ClosureCompilerPlugin = require('webpack-closure-compiler')

module.exports = {
  entry: {
    delic: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, 'static/assets'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader'},
      {test: /\.png$/, loader: 'url-loader?mimetype=image/png'},
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      }
    ]
  },
  resolve: {
    alias: {
      'highlight.css': path.join(
        __dirname,
        'node_modules',
        'highlight.js',
        'styles',
        'monokai.css'
      ),
      'highlight.js': path.join(
        __dirname,
        'node_modules',
        'highlight.js',
        'lib',
        'highlight.js'
      ),
      'bulma.sass': path.join(__dirname, 'node_modules', 'bulma', 'bulma.sass')
    }
  },
  plugins: [
    new ClosureCompilerPlugin({
      compiler: {
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT5',
        compilation_level: 'ADVANCED'
      },
      concurrency: 3
    }),
    new ExtractTextPlugin('[name].bundle.css')
  ]
}
