import { Container, Icon } from './styles'

interface ButtonRemoveLocation {
  onClick: () => void
}

export const ButtonRemoveLocation = ({ onClick }: ButtonRemoveLocation) => {
  return (
    <Container
      onClick={() => {
        onClick()
      }}
    >
      <Icon src="/icons/trash.svg" />
    </Container>
  )
}
