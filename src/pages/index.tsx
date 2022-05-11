import { useState } from 'react'
import { InputSearch } from '../components/InputSearch'
import { WeatherHome } from '../components/WeatherHome'
import { Forecast } from '../components/Forecast'

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
