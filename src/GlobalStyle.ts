import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    list-style: none;
    box-sizing:border-box;
    text-decoration: none;
  }
  @media screen and (max-width: 678px) {
    h1{
      display:none;
    }
  }
`;

export default GlobalStyle;
