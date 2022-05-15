import { useEffect, useState } from 'react'
import { IWeatherData } from '../../../types'
import { useLocationInfo } from '../../contexts/location-info'
import getWeather from '../../helpers/getWeather'
import { Container, List, ListItem } from './styles'

interface ForecastProps {}

export const Forecast = ({}: ForecastProps) => {
  const { location } = useLocationInfo()
  const { getForecast } = getWeather()

  const [list, setList] = useState<IWeatherData[]>([])

  useEffect(() => {
    getForecast(location.coord).then(res => {
      setList(res.daily)
    })
  }, [])

  return (
    <Container>
      <h2 className="title">7 Days Forecast</h2>

      <List>
        {list.map((item, index) => (
          <ListItem key={index}>
            <article>
              <p className="temp">{item.temp} °C</p>
              <p>
                {new Date(item.dayWeek * 1000).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </article>
            <figure>
              <img
                src={`/icons/weather/${item.weather}.svg`}
                alt={item.description}
              />
              <figcaption>{item.description}</figcaption>
            </figure>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}
