import { SaveLocationButton } from '../SaveLocationButton'
import { Container, LocationInfo, Temperature } from './styles'

interface LocationCardProps {
  city: string
  country: string
  temperature: number
  weather: string
  saved: boolean
}

export const LocationCard = ({
  city,
  country,
  temperature,
  weather,
  saved,
}: LocationCardProps) => {
  return (
    <>
      <Container>
        <LocationInfo>
          <p className="city">{city}</p>
          <p className="country">{country}</p>
        </LocationInfo>

        <Temperature>
          <p className="temp">
            <span className="temperature-value">{temperature}</span>
            <span className="temperature-unit">°C</span>
          </p>
          <figure className="weather-icon">
            <img src="/icons/weather/sunny.svg" alt={weather} />
          </figure>
        </Temperature>

        <SaveLocationButton
          isActive={saved}
          onClick={() => console.log('Saved')}
        />
      </Container>
    </>
  )
}
