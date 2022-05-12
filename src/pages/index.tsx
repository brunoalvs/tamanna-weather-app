import { useEffect, useState } from 'react'
import { InputSearch } from '../components/InputSearch'
import { WeatherHome } from '../components/WeatherHome'
import { Forecast } from '../components/Forecast'

import { useLocationInfo } from '../contexts/location-info'

export default function HomePage() {
  const { location } = useLocationInfo()

  let url = `${process.env.OPENWEATHERMAP_HOST}weather?lat=${location.coord.lat}&lon=${location.coord.lon}&units=metric&appid=${process.env.OPENWEATHERMAP_APIKEY}`

  const getWeatherInfo = async () => {
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
  }

  useEffect(() => {
    getWeatherInfo()
  }, [])

  return (
    <>
      <p
        style={{
          color: '#fff',
        }}
      >
        {location.city}, {location.country}
      </p>
      <WeatherHome />
      <Forecast />
    </>
  )
}
