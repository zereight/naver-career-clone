import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Components/Header";
import reset from "styled-reset";
import Footer from "./Components/Footer";
import Body from "./Components/Body";

const GlobalStyle = createGlobalStyle`
  ${reset};
  *{
    margin: 0;
  }
  body{
    height: 100vh;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
