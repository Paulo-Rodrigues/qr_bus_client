import { createGlobalStyle } from 'styled-components';
import Img from '../images/background.jpeg';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-image: linear-gradient(0deg, rgba(116,116,116,0.60) 0%, rgba(116,116,116,0.60) 100%), url(${Img});
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export default GlobalStyle;
