export type InputProps = {
  modelValue?: string
  type?: 'text' | 'password'
  placeholder?: string
  inputClass?: string
  disabled?: boolean
}

export type MainInputProps = Omit<InputProps, 'type'> & { suffix?: string }
