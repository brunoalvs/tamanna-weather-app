interface ILocation {
  city: string
  country: string
  coord: {
    lat: number
    lon: number
  }
  saved?: boolean
}

export type LocationContextType = {
  location: ILocation
  locations: ILocation[]
  addLocation: (location: ILocation) => void
  removeLocation: (location: ILocation) => void
}
