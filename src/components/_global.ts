import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

    @media (prefer-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  body {
    font-family: 'PT Sans', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  :root {
    --primary: linear-gradient(180deg, #35ACC7 0%, #35C7BE 100%);

    --background: #2E2F37;
    --shape: #464B59;
    --card-bg: rgba(224, 224, 225, 16%);
  }
`
