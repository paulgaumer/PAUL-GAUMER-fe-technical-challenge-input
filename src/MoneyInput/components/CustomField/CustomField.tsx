import { useEffect, useState } from 'react'
import _styles from './CustomField.module.css'
import {
  formatToDecimalCurrency,
  removeCurrencySymbol,
  logInCents,
  recordAsCurrency,
  validateLocale,
} from '../../utils/numbers'
import { CustomFieldProps } from '../../types'

export default function CustomField(props: CustomFieldProps) {
  const { value, id, required, disabled, placeholder } = props
  const { label, error, locale, ...inputProps } = props // filter attributes passed to the input element

  const safeLocale = validateLocale(locale)

  const initialValue = formatToDecimalCurrency(value, safeLocale)
  const [currentValue, setCurrentValue] = useState(initialValue)

  const recordAndLog = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = removeCurrencySymbol(e.target.value)
    logInCents(amount, safeLocale)
    setCurrentValue(recordAsCurrency(amount, safeLocale))
  }

  useEffect(() => {
    if (value) setCurrentValue(formatToDecimalCurrency(value, safeLocale))
  }, [value, safeLocale])

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
        ${disabled && _styles.inputDisabled}
        ${error && _styles.inputError}
      `}
    />
  )
}
