import { NavigationItem } from './NavigationItem'
import { Container, Navigation } from './styles'

export const Header = () => {
  return (
    <Container>
      <Navigation>
        <NavigationItem label="Home" icon="/icons/home.svg" route="/" />
        <NavigationItem
          label="Locations"
          icon="/icons/locations.svg"
          route="/locations"
        />
      </Navigation>
    </Container>
  )
}
