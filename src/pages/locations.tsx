import { LocationCard } from '../components/LocationCard'
import { SearchLocal } from '../components/SearchLocal'
import { Container, ListLocations } from '../components/Templates/Locations'
import { useLocationInfo } from '../contexts/location-info'

export default function Locations() {
  const { locations } = useLocationInfo()

  console.table(locations)

  return (
    <>
      <Container>
        <SearchLocal />

        <ListLocations>
          {/* Map locations using react use memo  */}
          {locations.map(location => (
            <LocationCard key={location.city} {...location} />
          ))}
        </ListLocations>
      </Container>
    </>
  )
}
