import React from 'react';
import './App.css';
import {GlobalStyles} from "./Styles/Styles";
import StyledCard from "./Card";


function App() {
  return (
    <div className="div3">
    <GlobalStyles/>
      <StyledCard headline={"First headline"}/>
    </div>
  );
}

export default App;
