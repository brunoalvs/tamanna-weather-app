import { useEffect, useState } from 'react'
import { ILocation } from '../../../types'
import { useLocationInfo } from '../../contexts/location-info'
import useWeather from '../../helpers/getWeather'
import { ButtonRemoveLocation } from '../ButtonRemoveLocation'

import { Container, LocationInfo, Temperature } from './styles'

type WeatherObject = {
  temp: number
  description: string
  weather: string
}

export const LocationCard = ({ ...props }: ILocation) => {
  const [weatherInfo, setWeatherInfo] = useState<WeatherObject>({
    temp: 0,
    description: '',
    weather: '',
  })
  const { removeLocation } = useLocationInfo()
  const { getWeather } = useWeather()

  useEffect(() => {
    getWeather(props.coord).then(res => {
      setWeatherInfo(res)
    })
  }, [])

  return (
    <>
      <Container>
        <LocationInfo>
          <p className="city" aria-label={props.city}>
            {props.city}
          </p>
          <p className="country">{props.country}</p>
        </LocationInfo>

        <Temperature>
          <p className="temp">
            <span className="value">{weatherInfo?.temp}</span>
            <span className="unit">°C</span>
          </p>
          <figure className="weather-icon">
            <img
              src={`/icons/weather/${weatherInfo?.weather}.svg`}
              alt={'weather'}
            />
          </figure>
        </Temperature>

        <ButtonRemoveLocation onClick={() => removeLocation(props)} />
      </Container>
    </>
  )
}
