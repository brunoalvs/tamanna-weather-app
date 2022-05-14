import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  gap: 2rem;

  @media (min-width: 1040px) {
    grid-template-columns: 2fr 1fr;
  }

  @media (min-width: 1460px) {
    grid-template-columns: 5fr 2fr;
  }
`
