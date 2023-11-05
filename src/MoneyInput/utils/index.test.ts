import { describe, expect, it, vi } from 'vitest'
import {
  toCents,
  toDecimal,
  formatToDecimalCurrency,
  toKebabCase,
  getFieldName,
  formatToCent,
  logInCents,
  recordAsCurrency,
} from '.'

const logSpy = vi.spyOn(console, 'log')

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

describe('formatToDecimalCurrency', () => {
  it('returns a decimal number with currency if the value is valid', () => {
    const value = formatToDecimalCurrency(150)
    expect(value).toEqual('€1.5')
  })

  it('returns an empty string if the value is undefined ', () => {
    const value = formatToDecimalCurrency(undefined)
    expect(value).toEqual('')
  })
})

describe('formatToCent', () => {
  it('returns a number converted in cents if the value is valid', () => {
    const value = formatToCent('€1')
    expect(value).toEqual(100)
  })

  it('returns an empty string if the value is invalid ', () => {
    const value = formatToCent('€123kjh')
    expect(value).toEqual('')
  })
})

describe('logInCents', () => {
  it('logs a message if the value is valid', () => {
    logInCents('1')
    expect(logSpy).toHaveBeenCalledWith('New value in cents: 100')
  })

  it("doesn't logs a message if the value is invalid", () => {
    logInCents('€1kjh')
    expect(logSpy).not.toHaveBeenCalled()
  })
})

describe('recordAsCurrency', () => {
  it('returns the value as currency if valid', () => {
    const value = recordAsCurrency('12', '€5')
    expect(value).toEqual('€12')
  })

  it('returns the currentValue if new value is invalid', () => {
    const value = recordAsCurrency('12kjh', '€5')
    expect(value).toEqual('€5')
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
