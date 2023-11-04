import { describe, expect, it } from 'vitest'
import { toCents, toDecimal, formatToDecimal } from '.'

describe('toCents', () => {
  it('returns a value in cents', () => {
    const cents = toCents(1)
    expect(cents).toEqual(100)
  })

  it('returns a decimal value in cents', () => {
    const cents = toCents(2.5)
    expect(cents).toEqual(250)
  })
})

describe('toDecimal', () => {
  it('returns a value in decimal', () => {
    const cents = toDecimal(100)
    expect(cents).toEqual(1)
  })

  it('returns a decimal value in cents', () => {
    const cents = toDecimal(250)
    expect(cents).toEqual(2.5)
  })
})

describe('formatToDecimal', () => {
  it('returns a decimal number if the value is valid', () => {
    const value = formatToDecimal(150)
    expect(value).toEqual(1.5)
  })

  it('returns an empty string if the value is undefined ', () => {
    const value = formatToDecimal(undefined)
    expect(value).toEqual('')
  })
})
