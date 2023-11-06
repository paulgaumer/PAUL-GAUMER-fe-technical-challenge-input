export const toCents = (value: number) => value * 100

export const toDecimal = (value: number) => value / 100

export const removeCurrencySymbol = (value: string) => (value[0] === '€' ? value.slice(1) : value)

export const addCurrencySymbol = (value: number | string) => (value === '' ? '' : `€${value}`)

export const validateLocale = (str: string | undefined) => {
  const defaultLocale = 'en-US'
  if (!str) return defaultLocale

  try {
    Intl.getCanonicalLocales(str)
    return str
  } catch (err) {
    return defaultLocale
  }
}

export const numberToLocale = (number: number, locale: string) => new Intl.NumberFormat(locale).format(number)

export const localeToNumber = (string: string, locale: string) => {
  const base = new Intl.NumberFormat(locale).formatToParts(123456.78)
  const group = base.find((item) => item.type === 'group')?.value || ''
  const decimal = base.find((item) => item.type === 'decimal')?.value || ''

  const formatGroup = string.replaceAll(group, '')
  const formatDecimal = formatGroup.replaceAll(decimal, '.')
  const noWhiteSpaces = formatDecimal.replace(/\s/g, '')
  return parseFloat(noWhiteSpaces)
}

export const formatToDecimalCurrency = (value: string | number | undefined, locale: string) => {
  const amount = Number(value)
  if (!amount || isNaN(amount)) return ''

  const decimal = toDecimal(amount)
  const toLocale = numberToLocale(decimal, locale)
  return addCurrencySymbol(toLocale)
}

export const logInCents = (value: string, locale: string) => {
  const withoutCurrency = removeCurrencySymbol(value)
  const amount = localeToNumber(withoutCurrency, locale)
  if (!isNaN(amount)) {
    console.log(`New value in cents: ${toCents(amount)}`)
  }
}

export const recordAsCurrency = (newValue: string, locale: string) => {
  const withoutCurrency = removeCurrencySymbol(newValue)
  const amount = localeToNumber(withoutCurrency, locale)

  if (
    withoutCurrency.charAt(withoutCurrency.length - 1) === ',' ||
    withoutCurrency.charAt(withoutCurrency.length - 1) === '.' ||
    withoutCurrency.charAt(withoutCurrency.length - 1) === '-'
  ) {
    return addCurrencySymbol(withoutCurrency)
  }
  if (withoutCurrency === '' || isNaN(amount)) return ''

  return addCurrencySymbol(numberToLocale(amount, locale))
}

export const toKebabCase = (string: string) =>
  string
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join('-')

export const getFieldName = (name: string | undefined, label: string | undefined) => {
  if (name) return name
  if (label) {
    return toKebabCase(label)
  }
  return 'money-input'
}
