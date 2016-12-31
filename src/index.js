/* @flow */
import 'bulma.sass'
import 'highlight.css'
import { initHighlightingOnLoad } from 'highlight.js'
initHighlightingOnLoad()

import h337 from 'heatmap.js'
const heatmap = h337.create({
  container: document.body,
  maxOpacity: 0.5
})

document.body.addEventListener('mousemove', e => {
  const { pageX, pageY } = e
  const point = {x: pageX, y: pageY}
  const prev = heatmap.getValueAt(point) || 0
  heatmap.addData(Object.assign({}, point, {value: prev + 1}))
})
