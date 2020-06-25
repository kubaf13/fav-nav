import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    /* to będzie jako 10px */
  }

  body {
    font-size: 1.6rem;
    /* to jest jako 16px */
    font-family: "Montserrat", sans-serif;
  }
`;

export default GlobalStyle;
