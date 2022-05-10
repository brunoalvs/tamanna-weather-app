import Link from 'next/link'
import { Container } from './styles'

interface HeaderNavigationItemProps {
  label: string
  icon: string
  route: string
}

export const HeaderNavigationItem = ({
  label,
  icon,
  route,
}: HeaderNavigationItemProps) => {
  return (
    <Link href={route}>
      <Container>
        <figure className="icon">
          <img src={icon} alt={`Icon to ${label} page`} />
        </figure>
        <span className="text">{label}</span>
      </Container>
    </Link>
  )
}
