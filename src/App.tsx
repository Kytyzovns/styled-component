import React from 'react';
import './App.css';
import {GlobalStyles, StyledBtn, StyledDiv, StyledImg} from "./Styles";
import landscape from './images/landscape.jpg';
import {themes} from "./myTheme";



function App() {
  return (
    <div>
    <GlobalStyles/>
      <StyledDiv>
        <StyledImg src={landscape} alt="Landscape" />

        <div className="div1">
          <h2>Headline</h2>
          <p>By mastering these properties,
            you can add depth and dimension to your web elements,
            enhancing the visual appeal of your designs.
          </p>
          <div className="div2">
            <StyledBtn backColor = {themes.colors.blu} textColor={"white"}>See more</StyledBtn>
            <StyledBtn textColor={themes.colors.blu}>Save</StyledBtn>
          </div>
        </div>

      </StyledDiv>
    </div>
  );
}

export default App;
