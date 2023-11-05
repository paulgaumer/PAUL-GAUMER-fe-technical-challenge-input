export const toCents = (value: number) => value * 100

export const toDecimal = (value: number) => value / 100

export const removeCurrencySymbol = (value: string) => (value[0] === '€' ? value.slice(1) : value)

export const addCurrencySymbol = (value: number | string) => (value === '' ? '' : `€${value}`)

export const formatToDecimalCurrency = (value: string | number | undefined) => {
  const amount = Number(value)
  if (!amount || isNaN(amount)) return ''

  const decimal = toDecimal(amount)
  return addCurrencySymbol(decimal)
}

export const formatToCent = (value: string) => {
  const amount = Number(removeCurrencySymbol(value))
  if (!amount || isNaN(amount)) return ''
  return toCents(amount)
}

export const logInCents = (value: string) => {
  if (value !== '' && !isNaN(Number(value))) {
    console.log(`New value in cents: ${formatToCent(value)}`)
  }
}

export const recordAsCurrency = (newValue: string, currentValue: string) => {
  if (isNaN(Number(newValue))) return currentValue
  return addCurrencySymbol(newValue)
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
