import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--foreground);
  padding: 1rem;

  @media (max-width: 744px) {
    border-radius: 1.5rem 1.5rem 0 0;
  }

  @media (max-width: 1224px) {
  }

  @media (min-width: 1225px) {
  }
`

export const Navigation = styled.nav`
  display: grid;
  gap: 3rem;

  @media (max-width: 744px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 745px) {
    padding: 0 0.5rem;
  }
`
