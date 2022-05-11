import { useState } from 'react'
import { LocationCard } from '../components/LocationCard'
import { Container, ListLocations } from '../components/Templates/Locations'

export default function Locations() {
  const [locations, setLocations] = useState([
    {
      city: 'Lisbon',
      country: 'Portugal',
      temperature: 21,
      weather: 'sunny',
      active: false,
    },
    {
      city: 'London',
      country: 'United Kingdom',
      temperature: 15,
      weather: 'cloudy',
      active: true,
    },
    {
      city: 'Paris',
      country: 'France',
      temperature: 19,
      weather: 'rainy',
      active: false,
    },
  ])

  return (
    <Container>
      <h2 className="title">Locations</h2>

      <ListLocations>
        {locations.map(location => (
          <LocationCard key={location.city} {...location} />
        ))}
      </ListLocations>
    </Container>
  )
}
