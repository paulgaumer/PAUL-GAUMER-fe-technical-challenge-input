import { useEffect, useState } from 'react'
import _styles from './MoneyInput.module.css'
import { formatToDecimal, toCents } from './utils'
import { MoneyInputProps } from './types'

export default function MoneyInput(props: MoneyInputProps) {
  const { id, value, disabled, required, placeholder, error } = props

  const initialValue = formatToDecimal(value)
  const [inputValue, setInputValue] = useState(initialValue)

  const recordAndLog = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      console.log(`New value in cents: ${toCents(e.target.valueAsNumber)}`)
    }
    setInputValue(e.target.value)
  }

  useEffect(() => {
    setInputValue(formatToDecimal(value))
  }, [value])

  return (
    <input
      {...props}
      type="number"
      value={inputValue}
      onChange={recordAndLog}
      onBlur={recordAndLog}
      aria-labelledby={id ?? 'money-input'}
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
