import assert = require('assert')
import { add } from '../src'

describe('add', () => {
  it('should return the sum of two number', () => {
    assert.strictEqual(add(1, 2), 3)
  })
})
