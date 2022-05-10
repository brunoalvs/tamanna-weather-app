import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr max-content;
  background-color: var(--background);

  @media (min-width: 745px) {
    display: flex;
    flex-direction: row-reverse;
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
    /* grid-template-columns: 1fr 1fr; */
    /* grid reverse */
  }
`

export const Content = styled.section`
  width: 100%;
  height: 100%;
`
