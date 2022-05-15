import styled from 'styled-components'

export const Container = styled.section`
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--text-color);
  padding: 1rem;
`

export const ListLocations = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex-wrap: wrap;
  color: honeydew;
  list-style: none;
`
