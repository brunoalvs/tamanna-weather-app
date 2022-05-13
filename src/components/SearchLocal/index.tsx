import { useState } from 'react'
import { ILocation } from '../../../types'
import { useLocationInfo } from '../../contexts/location-info'

import { Container, Input, ListResults } from './styles'

export const SearchLocal: React.FC = () => {
  const { locations, addLocation } = useLocationInfo()
  const [searchValue, setSearchValue] = useState('')

  const [possiblyLocations, setPossiblyLocations] = useState<
    Array<{
      formatted: string
      components: {
        city: string
        country: string
      }
    }>
  >([])

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)

    if (e.target.value.length < 2) {
      setPossiblyLocations([])
      return
    }

    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${e.target.value}&language=en&no_dedupe=1&key=${process.env.OPENCAGEDATA_APIKEY}`
    )
    const data = await response.json()

    const filteredLocations = data.results.filter(
      (location: { components: { city: string; country: string } }) => {
        return location.components.city && location.components.country
      }
    )

    const uniqueLocations = filteredLocations.filter(
      (location, index) =>
        filteredLocations.findIndex(
          filteredLocation =>
            filteredLocation.components.city === location.components.city &&
            filteredLocation.components.country === location.components.country
        ) === index
    )

    setPossiblyLocations(uniqueLocations)
  }

  const resetSearch = () => {
    setSearchValue('')
    setPossiblyLocations([])
  }

  const handleClickLocation = location => {
    let isSaved = locations.find(
      (locationSaved: ILocation) =>
        locationSaved.city === location.components.city &&
        locationSaved.country === location.components.country
    )

    if (isSaved) {
      return
    }

    let locationSelected: ILocation = {
      city: location.components.city,
      country: location.components.country,
      coord: {
        lat: location.geometry.lat,
        lon: location.geometry.lng,
      },
    }
    addLocation(locationSelected)

    resetSearch()
  }

  return (
    <>
      <Container>
        <Input
          type="text"
          value={searchValue}
          placeholder="Search location"
          onChange={e => handleSearch(e)}
        />

        <ListResults
          isOpen={possiblyLocations.length > 0 && searchValue.length > 1}
        >
          {possiblyLocations.map((location, index) => (
            <li key={index} onClick={() => handleClickLocation(location)}>
              {location.components.city} - {location.components.country}
            </li>
          ))}
        </ListResults>
      </Container>
    </>
  )
}
