import { useEffect, useState } from 'react'
import { ILocation } from '../../../types'
import { useLocationInfo } from '../../contexts/location-info'
import { getWeather } from '../../helpers/getWeather'
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

  useEffect(() => {
    getWeather(props).then(result => {
      setWeatherInfo(result)
    })
  }, [])

  return (
    <>
      <Container>
        <LocationInfo>
          <p className="city">{props.city}</p>
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
