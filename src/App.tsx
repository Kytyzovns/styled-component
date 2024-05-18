import React from 'react';
import './App.css';
import {GlobalStyles, StyledBtn, StyledDiv, StyledImg} from "./Styles";
import landscape from './images/landscape.jpg';
import {themes} from "./myTheme";
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
