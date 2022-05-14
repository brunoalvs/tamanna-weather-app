import { useEffect } from 'react'
import { useLocationInfo } from '../../contexts/location-info'
import getWeather from '../../helpers/getWeather'
import { Container } from './styles'

interface ForecastProps {}

export const Forecast = ({}: ForecastProps) => {
  const { location } = useLocationInfo()
  const { getForecast } = getWeather()

  useEffect(() => {
    getForecast(location.coord)
  }, [])

  return (
    <Container>
      <h2>This Week</h2>

      <ul>
        <li>Sun</li>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
      </ul>
    </Container>
  )
}
