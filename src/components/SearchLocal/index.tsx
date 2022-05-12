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
      `https://api.opencagedata.com/geocode/v1/json?q=${e.target.value}&key=${process.env.OPENCAGEDATA_APIKEY}`
    )
    const data = await response.json()

    const filteredData = data.results.filter(
      (result: { components: { city: string; country: string } }) => {
        return result.components.city && result.components.country
      }
    )

    setPossiblyLocations(filteredData)
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

    // Reset search
    setPossiblyLocations([])
    setSearchValue('')
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
