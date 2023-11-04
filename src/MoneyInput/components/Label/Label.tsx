import _styles from './Label.module.css'

interface LabelProps {
  identifier?: string
  label?: string
}

export default function Label({ identifier, label }: LabelProps) {
  if (!label) return null

  return (
    <label htmlFor={identifier} className={_styles.label}>
      {label}
    </label>
  )
}
