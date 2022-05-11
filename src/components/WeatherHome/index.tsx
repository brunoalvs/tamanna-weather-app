import {
  Container,
  LocationWeather,
  MinMaxTemperature,
  SunriseSunset,
} from './styles'

interface WeatherHomeProps {}

export const WeatherHome = ({}: WeatherHomeProps) => {
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
