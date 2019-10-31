import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%
  }
  body {
    /* background: linear-gradient(to right, #00939A, #fff); */
    background: #63BDC1;
    --webkit-font-smoothing: antialiased !important;
  }

  h1 {
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
  }

  body, label {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #eee; 
    border-radius: 10px;
  }

`;