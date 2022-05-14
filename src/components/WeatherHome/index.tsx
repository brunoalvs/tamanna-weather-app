import { useEffect, useState } from 'react'
import { useLocationInfo } from '../../contexts/location-info'
import useWeather from '../../helpers/getWeather'

import {
  Container,
  LocationWeather,
  MinMaxTemperature,
  SunriseSunset,
} from './styles'

export const WeatherHome = () => {
  const { location } = useLocationInfo()
  const { getWeather } = useWeather()

  const [weather, setWeather] = useState({})

  useEffect(() => {
    getWeather(location.coord)
  }, [location])

  return (
    <>
      <Container>
        <LocationWeather></LocationWeather>
        <MinMaxTemperature></MinMaxTemperature>
        <SunriseSunset></SunriseSunset>
      </Container>
    </>
  )
}
