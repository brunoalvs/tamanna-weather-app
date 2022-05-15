import styled from 'styled-components'

export const Container = styled.li`
  background-color: var(--midground);
  border-radius: 1.4rem;
  padding: 1rem 2rem;

  width: 100%;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr max-content 40px;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 745px) {
    gap: 1rem;
  }
`

export const LocationInfo = styled.section`
  color: var(--text-color);

  a {
    color: currentColor;
    text-decoration: none;
  }

  .city {
    font-size: 2rem;

    line-clamp: 1;
    -webkit-line-clamp: 1;
    display: box;
    display: -webkit-box;
    overflow: hidden;

    text-overflow: ellipsis;
    white-space: normal;
    -webkit-box-orient: vertical;
    word-break: break-all;

    @media (min-width: 745px) {
      font-size: 2.4rem;
    }
  }

  .country {
    font-size: 1.2rem;

    @media (min-width: 745px) {
      font-size: 1.5rem;
    }
  }
`

export const Temperature = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1rem;

  > .temp {
    font-size: 2rem;
    color: var(--text-color);
    text-align: end;

    @media (min-width: 745px) {
      font-size: 2.4rem;
    }
  }

  > .weather-icon {
    width: 40px;
  }
`
