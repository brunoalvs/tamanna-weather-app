import { createGlobalStyle } from "styled-components";

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
    --primary: #00bcd4;

    --gray-100: #fafafa;
    --gray-200: #f5f5f5;
    --gray-300: #eeeeee;
    --gray-400: #e0e0e0;
    --gray-500: #bdbdbd;
    --gray-600: #9e9e9e;
    --gray-700: #757575;
    --gray-800: #616161;
    --gray-900: #424242;

  }
`;
