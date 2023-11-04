import { MoneyInputProps } from '../types'

export const toCents = (value: number) => {
  return value * 100
}

export const toDecimal = (value: number) => {
  return value / 100
}

export const formatToDecimal = (value: MoneyInputProps['value']) => {
  if (!value || isNaN(value)) return ''
  return toDecimal(value)
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
