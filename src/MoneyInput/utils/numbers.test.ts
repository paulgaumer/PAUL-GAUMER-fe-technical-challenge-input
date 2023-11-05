import { describe, expect, it, vi } from 'vitest'
import {
  toCents,
  toDecimal,
  formatToDecimalCurrency,
  logInCents,
  recordAsCurrency,
  numberToLocale,
  localeToNumber,
} from './numbers'

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

describe('numberToLocale', () => {
  it('returns a formatted number as string', () => {
    const value = numberToLocale(15.5, 'fr-FR')
    expect(value).toEqual('15,5')
  })
})

describe('localeToNumber', () => {
  it('returns a valid number from a localised string', () => {
    const value = localeToNumber('1.234,5', 'de-DE')
    expect(value).toEqual(1234.5)
  })
})

describe('formatToDecimalCurrency', () => {
  it('returns a decimal number with currency if the value is valid', () => {
    const value = formatToDecimalCurrency(150, 'en-US')
    expect(value).toEqual('€1.5')
  })

  it('returns an empty string if the value is undefined ', () => {
    const value = formatToDecimalCurrency(undefined, 'en-US')
    expect(value).toEqual('')
  })
})

describe('logInCents', () => {
  it('logs a message if the value is valid', () => {
    logInCents('1', 'en-US')
    expect(logSpy).toHaveBeenCalledWith('New value in cents: 100')
  })
})

describe('recordAsCurrency', () => {
  it('returns the value as currency if valid', () => {
    const value = recordAsCurrency('12', 'en-US')
    expect(value).toEqual('€12')
  })

  it('returns the sanitised value if it includes non-numeric characters', () => {
    const value = recordAsCurrency('12kjh', 'en-US')
    expect(value).toEqual('€12')
  })

  it('accepts negative values', () => {
    const value = recordAsCurrency('-12', 'en-US')
    expect(value).toEqual('€-12')
  })
})
