import { createContext, useContext, useEffect, useState } from 'react'
import { ILocation } from '../../types'

type LocationInfoContextType = {
  location: ILocation
  locations: ILocation[]
  addLocation: (location: ILocation) => void
}

const LocationInfoContext = createContext<LocationInfoContextType>({
  location: { city: '', country: '', coord: { lat: 0, lon: 0 } },
  locations: [],
  addLocation: () => {},
})

const LocationInfoProvider = ({ children }: { children: React.ReactNode }) => {
  const [location, setLocation] = useState<ILocation>({
    city: 'Lisbon',
    country: 'Portugal',
    coord: { lat: 38.7259284, lon: -9.137382 },
  })
  const [locations, setLocations] = useState<ILocation[]>([])

  const addLocation = (location: ILocation) => {
    setLocations([...locations, location])
  }

  useEffect(() => {
    setLocation({
      city: 'São Paulo',
      country: 'Brazil',
      coord: { lat: -23.5489, lon: -46.6388 },
    })
  }, [])

  return (
    <LocationInfoContext.Provider
      value={{
        location,
        locations,
        addLocation,
      }}
    >
      {children}
    </LocationInfoContext.Provider>
  )
}

const useLocationInfo = () => useContext(LocationInfoContext)

export { LocationInfoProvider, useLocationInfo }
