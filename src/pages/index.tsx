import { WeatherHome } from '../components/WeatherHome'
import { Forecast } from '../components/Forecast'

import { useLocationInfo } from '../contexts/location-info'

export default function HomePage() {
  const { location } = useLocationInfo()

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
