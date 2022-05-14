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
