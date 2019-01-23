const { strictEqual } = require('assert')

test('crypto-symbols', () => {
  test('supports euro', () => {
    const { EUR } = require('..')
    strictEqual(EUR, '€')
  })

  test('supports us dollar', () => {
    const { USD } = require('..')
    strictEqual(USD, '$')
  })

  test('supports british pound sterling', () => {
    const { GBP } = require('..')
    strictEqual(GBP, '£')
  })

  test('supports indian rupee', () => {
    const { INR } = require('..')
    strictEqual(INR, '₹')
  })

  test('supports chinese yuan', () => {
    const { CNY } = require('..')
    strictEqual(CNY, '¥')
  })
  test('supports russian ruble', () => {
    const { RUB } = require('..')
    strictEqual(RUB, '₽')
  })

  test('supports bitcoin', () => {
    const { BTC } = require('..')
    strictEqual(BTC, '₿')
  })

  test('supports bitcoin cash', () => {
    const { BCH } = require('..')
    strictEqual(BCH, 'Ƀ')
  })

  test('supports litecoin', () => {
    const { LTC } = require('..')
    strictEqual(LTC, 'Ł')
  })

  test('supports ethereum', () => {
    const { ETH } = require('..')
    strictEqual(ETH, 'Ξ')
  })

  test('supports ethereum classic', () => {
    const { ETH } = require('..')
    strictEqual(ETH, 'Ξ')
  })

  test('supports 0x', () => {
    const { ZRX } = require('..')
    strictEqual(ZRX, '¤')
  })

  test('supports doge coin', () => {
    const { DOGE } = require('..')
    strictEqual(DOGE, 'Ð')
  })

  test('supports iota', () => {
    const { IOTA } = require('..')
    strictEqual(IOTA, 'ι')
  })
})
