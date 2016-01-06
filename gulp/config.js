'use strict'
const path = require('path')
const root = path.join(__dirname, '../')

module.exports = {
  layouts: path.join(root, 'layouts'),
  root: root,
  contents: [
    path.join(root, 'src/content/**/**/*.jade')
  ]
}
