import { Container, Content } from './styles'
import { HeaderNavigation } from '../../Organisms/HeaderNavigation'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Container>
        <Content>{children}</Content>
        <HeaderNavigation />
      </Container>
    </>
  )
}
