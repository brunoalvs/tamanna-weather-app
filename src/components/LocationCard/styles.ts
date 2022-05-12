import styled from 'styled-components'

export const Container = styled.li`
  background-color: var(--midground);
  border-radius: 1.4rem;
  padding: 1rem 2rem;

  width: 100%;
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr max-content 40px;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const LocationInfo = styled.section`
  color: var(--text-color);

  .city {
    font-size: 2.4rem;
  }
  .country {
    font-size: 1.5rem;
  }
`

export const Temperature = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;

  > .temp {
    font-size: 2.4rem;
    color: var(--text-color);
  }
`
