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
    rules: [
      {test: /\.js$/, loader: 'babel-loader'},
      {test: /\.png$/, loader: 'url-loader?mimetype=image/png'},
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.s(a|c)ss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
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
      'font-awesome.scss': path.join(
        __dirname,
        'node_modules',
        'font-awesome',
        'scss',
        'font-awesome.scss'
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
