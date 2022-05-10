import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container, Icon, Text } from './styles'

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
  const { asPath } = useRouter()

  return (
    <Link href={route}>
      <Container isActive={asPath === route}>
        <Icon>
          <img src={icon} alt={`Icon to ${label} page`} />
        </Icon>
        <Text>{label}</Text>
      </Container>
    </Link>
  )
}
