import { useEffect, useState } from 'react'
import { ILocation } from '../../../types'
import { useLocationInfo } from '../../contexts/location-info'
import { getWeather } from '../../helpers/getWeather'
import { SaveLocationButton } from '../SaveLocationButton'
import { Container, LocationInfo, Temperature } from './styles'

interface LocationCardProps {
  city: string
  country: string
}

type WeatherObject = {
  temp: number
  description: string
  weather: string
}

export const LocationCard = ({ ...props }: ILocation) => {
  const { removeLocation } = useLocationInfo()

  console.log('LocationCard', props)

  const [weatherInfo, setWeatherInfo] = useState<WeatherObject>()

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
            <span className="temperature-value">{weatherInfo?.temp}</span>
            <span className="temperature-unit">°C</span>
          </p>
          <figure className="weather-icon">
            <img src="/icons/weather/sunny.svg" alt={'weather'} />
          </figure>
        </Temperature>

        <SaveLocationButton
          isActive={true}
          onClick={() => {
            removeLocation(props)
          }}
        />
      </Container>
    </>
  )
}
