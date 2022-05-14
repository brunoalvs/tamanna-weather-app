import { LocationCard } from '../components/LocationCard'
import { SearchLocal } from '../components/SearchLocal'
import { Container, ListLocations } from '../components/Templates/Locations'
import { useLocationInfo } from '../contexts/location-info'

export default function Locations() {
  const { locations } = useLocationInfo()

  return (
    <>
      <Container>
        <SearchLocal />

        <ListLocations>
          {locations.map(location => (
            <LocationCard key={location.city} {...location} />
          ))}
        </ListLocations>
      </Container>
    </>
  )
}
