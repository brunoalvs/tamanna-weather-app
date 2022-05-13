import { createContext, useContext, useEffect, useState } from 'react'
import { ILocation } from '../../types'

import { getUserGeoLocation } from '../helpers/getUserGeoLocation'
import { getCityByCoordinates } from '../helpers/getCityByCoordinates'

type LocationInfoContextType = {
  location: ILocation
  locations: ILocation[]
  addLocation: (location: ILocation) => void
  removeLocation: (location: ILocation) => void
}

const LocationInfoContext = createContext<LocationInfoContextType>({
  location: { city: '', country: '', coord: { lat: 0, lon: 0 } },
  locations: [],
  addLocation: () => {},
  removeLocation: () => {},
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

  const removeLocation = (location: ILocation) => {
    setLocations(
      locations.filter(locationSaved => locationSaved.city !== location.city)
    )
  }

  useEffect(() => {
    getUserGeoLocation()
      .then(coord => {
        getCityByCoordinates(coord[0], coord[1])
          .then(res => {
            res && setLocation(res)
          })
          .catch(err => {
            console.error('Error getting city by coordinates', err.message)
          })
      })
      .catch(err => {
        console.error('Error getting user location', err.message)
      })
  }, [])

  return (
    <LocationInfoContext.Provider
      value={{
        location,
        locations,
        addLocation,
        removeLocation,
      }}
    >
      {children}
    </LocationInfoContext.Provider>
  )
}

const useLocationInfo = () => useContext(LocationInfoContext)

export { LocationInfoProvider, useLocationInfo }
