import { Container } from './styles'

interface ForecastProps {}

export const Forecast = ({}: ForecastProps) => {
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
