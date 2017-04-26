/* @flow */
import {describe, it} from 'mocha'
import assert from 'assert'

describe('highlight', () => {
  it('load', () => {
    assert(require('../src/highlight'))
  })
})
