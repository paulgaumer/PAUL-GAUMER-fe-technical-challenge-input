import { useEffect, useState } from 'react'
import _styles from './CustomField.module.css'
import { formatToDecimalCurrency, removeCurrencySymbol, logInCents, recordAsCurrency } from '../../utils'
import { MoneyInputProps } from '../../types'

export default function MoneyInput(props: MoneyInputProps) {
  const { value, id, required, disabled, placeholder } = props
  const { label, error, ...inputProps } = props // filter attributes passed to the input element

  const initialValue = formatToDecimalCurrency(value)
  const [currentValue, setCurrentValue] = useState(initialValue)

  const recordAndLog = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = removeCurrencySymbol(e.target.value)
    logInCents(amount)
    setCurrentValue(recordAsCurrency(amount, currentValue))
  }

  useEffect(() => {
    if (value) setCurrentValue(formatToDecimalCurrency(value))
  }, [value])

  return (
    <input
      {...inputProps}
      type="text"
      value={currentValue}
      onChange={recordAndLog}
      onBlur={recordAndLog}
      aria-labelledby={id}
      aria-invalid={!!error}
      aria-required={required}
      aria-disabled={disabled}
      aria-placeholder={placeholder}
      className={`
        ${_styles.inputBase}
        ${_styles.arrowsDisabled}
        ${disabled && _styles.inputDisabled}
        ${error && _styles.inputError}
      `}
    />
  )
}
