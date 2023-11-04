import { describe, expect, it } from 'vitest'
import { toCents, toDecimal, formatToDecimal, toKebabCase, getFieldName } from '.'

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

describe('toKebabCase', () => {
  it('returns a string in Kebab Case', () => {
    const value = toKebabCase('hello world')
    expect(value).toEqual('hello-world')
  })
})

describe('getFieldName', () => {
  it('returns a name from the name arg if available', () => {
    const value = getFieldName('custom-field', 'My custom field')
    expect(value).toEqual('custom-field')
  })

  it('returns a name from the label arg if available', () => {
    const value = getFieldName(undefined, 'My custom field')
    expect(value).toEqual('my-custom-field')
  })

  it('returns a default name if no args are available', () => {
    const value = getFieldName(undefined, undefined)
    expect(value).toEqual('money-input')
  })
})
