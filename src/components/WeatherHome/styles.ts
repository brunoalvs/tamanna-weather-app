import styled from 'styled-components'

export const Container = styled.div`
  max-width: 68rem;
  margin: 0 auto;

  display: grid;
  grid-template-areas:
    'weather weather'
    'left left'
    'right right';
  gap: 2.5rem;
  padding: 1rem;

  @media (min-width: 610px) {
    grid-template-areas:
      'weather weather'
      'left right';
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    padding: 2rem;
  }
`

export const LocationWeather = styled.section`
  display: grid;
  padding: 3rem;

  grid-area: weather;
  background-color: var(--midground);
  color: var(--text-color);
  border-radius: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > article {
    display: grid;
    grid-template-rows: max-content 1fr 1fr;

    .city-name {
      font-size: 4rem;
    }
    .temperature {
      font-size: 4rem;
    }

    .weather-description {
      font-size: 3.2rem;
      text-transform: capitalize;
    }
  }

  > figure {
    max-height: 240px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 545px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const SquareCard = styled.ul`
  background-color: var(--midground);
  color: var(--text-color);
  border-radius: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
  padding: 2.5rem;
  list-style: none;

  @media (min-width: 545px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    > li {
      grid-column: span 2;
      align-self: center;
      justify-self: center;
    }
  }
`

export const MinMaxTemperature = styled(SquareCard)`
  grid-area: left;
  gap: 2rem;
  font-size: 4rem;
  padding: 4rem 2.5rem;
`

export const SunriseSunset = styled(SquareCard)`
  grid-area: right;

  font-size: 3rem;

  > li {
    display: grid;
    grid-template-columns: 6rem 1fr;
    grid-gap: 2rem;

    > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background-color: var(--foreground);
    }
  }
`
