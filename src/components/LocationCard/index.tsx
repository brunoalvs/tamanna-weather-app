import { SaveLocationButton } from '../SaveLocationButton'
import { Container, LocationInfo, Temperature } from './styles'

interface LocationCardProps {
  city: string
  country: string
}

export const LocationCard = ({ city, country }: LocationCardProps) => {
  return (
    <>
      <Container>
        <LocationInfo>
          <p className="city">{city}</p>
          <p className="country">{country}</p>
        </LocationInfo>

        <Temperature>
          <p className="temp">
            <span className="temperature-value">21</span>
            <span className="temperature-unit">°C</span>
          </p>
          <figure className="weather-icon">
            <img src="/icons/weather/sunny.svg" alt={'weather'} />
          </figure>
        </Temperature>

        <SaveLocationButton
          isActive={true}
          onClick={() => console.log('Saved')}
        />
      </Container>
    </>
  )
}
