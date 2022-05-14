import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr 6rem;
  background-color: var(--background);

  @media (min-width: 745px) {
    display: flex;
    flex-direction: row-reverse;
  }
`

export const Content = styled.section`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 6rem);
  overflow-x: auto;

  @media (min-width: 745px) {
    max-height: 100vh;
    padding: 1rem;
  }
`
