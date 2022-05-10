import { useState } from 'react'
import { InputSearch } from '../components/Atoms/InputSearch'
import { Forecast } from '../components/Organisms/Forecast'
import { WeatherHome } from '../components/Organisms/WeatherHome'

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

      <WeatherHome />
      <Forecast />
    </div>
  )
}
