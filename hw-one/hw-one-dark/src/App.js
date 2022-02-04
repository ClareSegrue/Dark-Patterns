
import './App.css';
import React from "react";
import logo from "../Images/shoe.png";
import adOne from "../Images/adOne.png";
import adTwo from "../Images/adTwo.png";
import adThree from "../Images/adThree.png";
import adFour from "../Images/adFour.png";
import adFive from "../Images/adFive.png";
import adSix from "../Images/adSix.png";



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
          <div className="products">
            <img className='product' src={adOne} width="220" height="220" alt="x"></img>
            <img className='product' src={adTwo} width="220" height="220" alt="x"></img>
            <img className='product' src={adThree} width="220" height="220" alt="x"></img>
          </div>
        </div>
        <div className="main-panel">
          <darkTC></darkTC>
          main panel
          <darkTC></darkTC>
        </div>
        <div className="right-panel">
        <div className="products">
            <img className='product' src={adFour} width="220" height="220" alt="x"></img>
            <img className='product' src={adFive} width="220" height="220" alt="x"></img>
            <img className='product' src={adSix} width="220" height="220" alt="x"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
