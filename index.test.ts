import * as index from './index'

import assert from 'assert'

describe('index', function () {
  describe('#abc()', function () {
    it('schould return abc everytime', function () {
      assert.equal(index.abc(), 'abc')
    })
  })
  describe('#def()', function () {
    it('schould return def if input not empty and not = 1', function () {
      assert.equal(index.def(0), 'def')
      assert.equal(index.def(1), undefined)
      assert.equal(index.def(), undefined)
    })
  })
})
console.log('index.test.tx geladen')
