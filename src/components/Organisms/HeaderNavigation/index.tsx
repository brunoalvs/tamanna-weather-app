import Link from 'next/link'
import { HeaderNavigationItem } from '../../Molecules/HeaderNavigationItem'
import { Container, Wrapper } from './styles'

export const HeaderNavigation: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderNavigationItem label="Home" icon="/icons/home.svg" route="/" />
        <HeaderNavigationItem
          label="Locations"
          icon="/icons/locations.svg"
          route="/locations"
        />
      </Wrapper>
    </Container>
  )
}
