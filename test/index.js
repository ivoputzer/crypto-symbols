const { strictEqual } = require('assert')

test('crypto-symbols', () => {
  test('supports euro', () => {
    const { EUR } = require('..')
    strictEqual(EUR, '€')
  })
  test('supports bitcoin', () => {
    const { BTC } = require('..')
    strictEqual(BTC, '₿')
  })
})
