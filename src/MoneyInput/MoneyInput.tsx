import _styles from './MoneyInput.module.css'
import Label from './components/Label/Label'
import CustomField from './components/CustomField/CustomField'
import { MoneyInputProps } from './types'
import { getFieldName } from './utils'

export default function MoneyInput(props: MoneyInputProps) {
  const { label, name } = props

  const identifier = getFieldName(name, label)

  return (
    <div className={_styles.inputContainer}>
      <Label identifier={identifier} label={label} />
      <CustomField id={identifier} {...props} />
    </div>
  )
}
