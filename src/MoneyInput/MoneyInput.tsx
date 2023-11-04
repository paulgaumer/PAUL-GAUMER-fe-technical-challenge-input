import { useEffect, useState } from 'react'
import _styles from './MoneyInput.module.css'

interface MoneyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: number
  error?: string
}

export default function MoneyInput(props: MoneyInputProps) {
  const { id, value, disabled, required, placeholder, error } = props

  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <input
      {...props}
      type="number"
      value={inputValue}
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
