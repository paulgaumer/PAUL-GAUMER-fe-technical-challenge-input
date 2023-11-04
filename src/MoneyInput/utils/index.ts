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
