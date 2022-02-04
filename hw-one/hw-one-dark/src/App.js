
import './App.css';
import React from "react";
import logo from "./shoe.png";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="button-container">
          <button className="dark-button"><b>DARK</b></button>
          <button className="light-button"><b>LIGHT</b></button>
        </div>
        <div className="header-title">cob's cobblers
        <img src={logo} width="32" height="32" alt="x"></img>
        </div>
        
        
      </header>
      <div className="flex-table">
        <div className="left-panel">
          left panel
        </div>
        <div className="main-panel">
          <darkTC></darkTC>
          main panel
          <darkTC></darkTC>
        </div>
        <div className="right-panel">
          right panel
        </div>
      </div>
    </div>
  );
}

export default App;
