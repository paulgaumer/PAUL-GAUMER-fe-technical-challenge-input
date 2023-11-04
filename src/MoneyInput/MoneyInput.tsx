import { useEffect, useState } from 'react'
import _styles from './MoneyInput.module.css'

interface MoneyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: number
}

export default function MoneyInput(props: MoneyInputProps) {
  const { id, value, disabled, required, placeholder } = props

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
      aria-required={required}
      aria-disabled={disabled}
      aria-placeholder={placeholder}
      className={`
        ${_styles.inputBase}
        ${_styles.arrowsDisabled}
      `}
    />
  )
}
