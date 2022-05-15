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
  }

  #__next {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }

  :root {
    --gradient: linear-gradient(180deg, #35ACC7 0%, #35C7BE 100%);

    --background: #2E2F37;
    --midground: #4A4B52;
    --foreground: #464B59; // shape

    --text-color: #FFF;
    --text-on-shape: #85888F;
  }
`
