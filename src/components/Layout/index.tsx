import { Header } from './Header'
import { Container, Content } from './styles'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Container>
        <Content>{children}</Content>
        <Header />
      </Container>
    </>
  )
}
