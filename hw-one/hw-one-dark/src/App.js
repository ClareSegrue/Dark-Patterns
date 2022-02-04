import logo from './logo.svg';
import './App.css';
import React from "react";
import "./shoe.png";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="button-container">
          <button className="dark-button"><b>Dark</b></button>
          <button className="light-button"><b>Light</b></button>
        </div>
        <div className="header-title">COB'S COBBLERS
        <img src="shoe.png" width="32" height="32" alt="x"></img>
        </div>
        
        
      </header>
      <div className="flex-table">
        <div className="left-panel">
          left panel
        </div>
        <div className="main-panel">
          main panel
        </div>
        <div className="right-panel">
          right panel
        </div>
      </div>
    </div>
  );
}

export default App;
