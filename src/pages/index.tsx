import { WeatherHome } from '../components/WeatherHome'
import { Forecast } from '../components/Forecast'
import { Container } from '../components/Templates/Home'

export default function HomePage() {
  return (
    <Container>
      <WeatherHome />
      <Forecast />
    </Container>
  )
}
