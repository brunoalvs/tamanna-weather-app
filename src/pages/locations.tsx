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
          {locations.map((location, index) => (
            <li key={index}>
              <p>
                {location.city}, {location.country}
              </p>
            </li>
          ))}
        </ListLocations>
      </Container>
    </>
  )
}
