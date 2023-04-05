import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline:0;
    box-shadow: 0 0 0 2px ${props => props.theme["purple-500"]};
  }

  body {
    background: ${props => props.theme["gray-100"]};
    color: ${props => props.theme["gray-700"]}
    -webkit-font-smoothing: antialiased;
  }

  body, input, select, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Baloo 2', sans-serif;
  }
`