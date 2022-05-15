export interface ICoordinates {
  lat: number
  lon: number
}
export interface ILocation {
  city: string
  country: string
  coord: ICoordinates
}

export type LocationContextType = {
  location: ILocation
  locations: ILocation[]
  addLocation: (location: ILocation) => void
  removeLocation: (location: ILocation) => void
}

interface IWeatherData {
  temp: number
  description: string
  weather: string
  minmax: {
    min: number
    max: number
  }
  sunrise: string
  sunset: string
  dayWeek?: number
}

interface IForecastData {
  daily: IWeatherData[]
}
