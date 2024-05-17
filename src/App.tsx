import React from 'react';
import './App.css';
import {GlobalStyles} from "./Styles";
import landscape from './images/landscape.jpg';



function App() {
  return (
    <div>
    <GlobalStyles/>
      <div>
        <img src={landscape} alt="Landscape" width={"400px"} height={"300px"} />
        <h1>Headline</h1>
        <p></p>
        <button>See more</button>
        <button>Save</button>
      </div>
    </div>
  );
}

export default App;
