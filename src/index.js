/* @flow */
import 'bulma.sass'
import 'highlight.css'
import { initHighlightingOnLoad } from 'highlight.js'
initHighlightingOnLoad()

import h337 from 'heatmap.js'
(body => {
  const heatmap = h337.create({
    container: body,
    maxOpacity: 0.5
  })

  body.addEventListener('mousemove', (e: { pageX: number, pageY: number }) => {
    const { pageX, pageY } = e
    const point = {x: pageX, y: pageY}
    const prev: number = heatmap.getValueAt(point) || 0
    heatmap.addData(Object.assign({}, point, {value: prev + 1}))
  })
})(document.body)
