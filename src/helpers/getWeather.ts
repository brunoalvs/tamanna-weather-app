import { ICoordinates, IForecastData, IWeatherData } from '../../types'
import handleClockTime from './handleClockTime'

async function getDataInOpenWeatherMapAPI(
  coordinates: ICoordinates,
  type: 'weather' | 'forecast'
) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/${type}?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${process.env.OPENWEATHERMAP_APIKEY}`
  )

  if (response.status !== 200) {
    throw new Error(`${response.status} ${response.statusText}`)
  }

  const data = await response.json()

  return data
}

const useWeather = () => {
  const getWeather = async (coordinates: ICoordinates) => {
    const data = await getDataInOpenWeatherMapAPI(coordinates, 'weather')

    const weather: IWeatherData = {
      temp: Math.floor(data.main.temp),
      description: data.weather[0].description,
      weather: data.weather[0].icon,
      minmax: {
        min: Math.floor(data.main.temp_min),
        max: Math.floor(data.main.temp_max),
      },
      sunrise: handleClockTime(data.sys.sunrise),
      sunset: handleClockTime(data.sys.sunset),
    }

    console.log('Data from OpenWeatherMap API:', data)
    console.log('Weather Return:', weather)

    return weather
  }

  const getForecast = async (coordinates: ICoordinates) => {
    const data = await getDataInOpenWeatherMapAPI(coordinates, 'forecast')

    const forecast: IForecastData = {
      data,
    }

    return forecast
  }

  return {
    getWeather,
    getForecast,
  }
}

export default useWeather
