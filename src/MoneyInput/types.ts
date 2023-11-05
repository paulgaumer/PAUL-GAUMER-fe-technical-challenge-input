export interface MoneyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  value?: number
  error?: string
  locale?: string
}

export interface CustomFieldProps extends MoneyInputProps {}
