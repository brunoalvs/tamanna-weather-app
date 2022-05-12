import { useState } from 'react'
import { ILocation } from '../../types'
import { LocationCard } from '../components/LocationCard'
import { Container, ListLocations } from '../components/Templates/Locations'
import { useLocationInfo } from '../contexts/location-info'

export default function Locations() {
  const { locations, addLocation } = useLocationInfo()

  return (
    <>
      <Container>
        <h2 className="title">Locations</h2>

        <button
          onClick={() => {
            addLocation({
              city: 'Portso',
              country: 'Portugal',
              coord: {
                lat: 41.15,
                lon: -8.6,
              },
              saved: true,
            })
          }}
        >
          <span>Add Location</span>
        </button>

        <ListLocations>
          {locations.map(location => (
            <li key={location.city.trim()}>
              <p>
                {location.city}, {location.country}
              </p>
            </li>
            // <LocationCard key={location.city} {...location} />
          ))}
        </ListLocations>
      </Container>
    </>
  )
}
