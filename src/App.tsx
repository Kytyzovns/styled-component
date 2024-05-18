import React from 'react';
import './App.css';
import {GlobalStyles} from "./Styles/Styles";
import StyledCard from "./Card";


function App() {
  return (
    <div>
    <GlobalStyles/>
      <StyledCard headline={"First headline"}/>
      <StyledCard headline={"Second headline"}/>
    </div>
  );
}

export default App;
