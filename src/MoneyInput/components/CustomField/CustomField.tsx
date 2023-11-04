import { useEffect, useState } from 'react'
import _styles from './CustomField.module.css'
import { formatToDecimal, toCents } from '../../utils'
import { MoneyInputProps } from '../../types'

export default function MoneyInput(props: MoneyInputProps) {
  const { label, error, ...inputProps } = props

  const initialValue = formatToDecimal(props.value)
  const [inputValue, setInputValue] = useState(initialValue)

  const recordAndLog = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      console.log(`New value in cents: ${toCents(e.target.valueAsNumber)}`)
    }
    setInputValue(e.target.value)
  }

  useEffect(() => {
    setInputValue(formatToDecimal(props.value))
  }, [props.value])

  return (
    <input
      {...inputProps}
      type="number"
      value={inputValue}
      onChange={recordAndLog}
      onBlur={recordAndLog}
      aria-labelledby={props.id}
      aria-invalid={!!error}
      aria-required={props.required}
      aria-disabled={props.disabled}
      aria-placeholder={props.placeholder}
      className={`
        ${_styles.inputBase}
        ${_styles.arrowsDisabled}
        ${props.disabled && _styles.inputDisabled}
        ${error && _styles.inputError}
      `}
    />
  )
}
