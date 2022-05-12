import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--text-color);

  > .title {
    font-size: 3rem;
  }
`

export const ListLocations = styled.ul`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  color: honeydew;
`
