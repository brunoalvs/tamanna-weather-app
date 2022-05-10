import { useState } from 'react'
import { InputSearch } from '../components/Atoms/InputSearch'

export default function HomePage() {
  const [searchValue, setSearchValue] = useState('')

  const onChange = (value: string) => {
    setSearchValue(value)
  }

  return (
    <div>
      <InputSearch
        placeholder="Search"
        onChange={onChange}
        value={searchValue}
      />
      <h1>Home</h1>
    </div>
  )
}
