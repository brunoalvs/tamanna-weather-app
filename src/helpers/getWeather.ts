import { ILocation } from '../../types'

type WeatherObject = {
  temp: number
  description: string
  weather: string
}

const getWeather = async ({ coord }: ILocation) => {
  let url = `${process.env.OPENWEATHERMAP_HOST}weather?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=${process.env.OPENWEATHERMAP_APIKEY}`
  const getData = await fetch(url)
  const weatherData = await getData.json()

  const weather: WeatherObject = {
    temp: Math.floor(weatherData.main.temp),
    description: weatherData.weather[0].description,
    weather: weatherData.weather[0].icon,
  }

  return weather
}

export { getWeather }
