interface InputSearchProps {
  placeholder: string
  onChange: (value: string) => void
  value: string
}

export const InputSearch = ({
  placeholder,
  onChange,
  value,
}: InputSearchProps) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      value={value}
    />
  )
}
