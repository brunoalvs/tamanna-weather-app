import { useEffect, useState } from 'react'
import { IWeatherData } from '../../../types'
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

  const [weather, setWeather] = useState({} as IWeatherData)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getWeather(location.coord)
      .then(res => {
        setWeather(res)
        setIsLoading(false)
      })
      .catch(err => console.error(err))
  }, [location])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Container>
        <LocationWeather>
          <article>
            <h2 className="city-name">{location.city}</h2>
            <p className="temperature">{weather.temp}°C</p>
            <p className="weather-description">{weather.description}</p>
          </article>

          <figure>
            <img
              src={`/icons/weather/${weather.weather}.svg`}
              alt={weather.description}
            />
          </figure>
        </LocationWeather>
        <MinMaxTemperature>
          <li>
            <p>{weather.minmax.min}°C Min</p>
          </li>
          <li>
            <p>{weather.minmax.max}°C Max</p>
          </li>
        </MinMaxTemperature>
        <SunriseSunset>
          <li>
            <img src="/icons/sunrise.svg" alt="" />
            <p>{weather.sunrise} Sunrise</p>
          </li>
          <li>
            <img src="/icons/sunset.svg" alt="" />
            <p>{weather.sunset} Sunset</p>
          </li>
        </SunriseSunset>
      </Container>
    </>
  )
}
