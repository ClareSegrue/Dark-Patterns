import './styles/App.css';
import logo from "./Images/game.png";
import bgMusic from "./audio/game.wav"
import adOne from "./Images/adOne.png";
import adTwo from "./Images/adTwo.png";
import adThree from "./Images/adThree.png";
import adFour from "./Images/adFour.png";
import Accordion from './components/Accordion';
import React, { Component } from 'react';
import PaymentAndShipping from './components/Shipping';
import termsOfPurchase from './components/termsOfPurchase.txt';
import Shipping from './components/Shipping';
import Payment from './components/Payment';


class App extends Component {
  constructor(props) {
    super(props);
    this.isPlaying = false;
    this.state = (<div id="black"><h1>WELCOME.</h1>Select light mode or dark mode from the header.</div>);
    this.mode = false;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  audioStarter(){
    if(!this.isPlaying){
      var audio = new Audio(bgMusic);
      audio.volume = 0.01;
      audio.play();
      this.isPlaying = true;
      //audio.loop();
    }
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.mode == false) {
      var state = "dark";
      this.setState(this.updateDarkThree);
    } else {
      var state = "light";
      this.setState(this.updateLightThree);
    }
    //alert('User entered: ' + state);
    
    event.preventDefault();
  }

  addLoginComponent = () => {
    this.setState(
      <div class="login-container" id="black">
        <form onSubmit={this.handleSubmit}>
          <div class="imgcontainer">
            <img src={logo} alt="Avatar" class="avatar"></img>
          </div>


          <label for="uname"><b>username:</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required></input>

          <label for="psw"><b>password:</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required></input>

          <button type="submit" class="accept-button">login</button>
        </form>
      </div>
    );
  }
 
  updateLightThree = () => {
    this.setState(
      <div>
        LIGHT
      </div>
    );
  }

  updateDarkThree = () => {
    this.audioStarter();
    this.setState(
      <div>
        DARK
      </div>
    );
  }

  enterDark = () => {
    this.mode=false;
    this.setState(this.addLoginComponent);

  }

  enterLight = () => {
    this.mode=true;
    this.setState(this.addLoginComponent);
  }
  /*
          <div className="right-panel">
            <div className="products">
              <img className='product' src={adFour} width="220" height="220" alt="x"></img>
            </div>
          </div>

          */

  /*
          <div className="left-panel">
            <div className="products">

            </div>
          </div>

          */

          

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="button-container">
            <button className="dark-button" onClick={this.enterDark}>DARK</button>
            <button className="light-button" onClick={this.enterLight}>LIGHT</button>
          </div>
  
          <div className="header-title">cob's soulo game
            <img src={logo} width="32" height="32" alt="x"></img>
          </div>
        </header>
        <div className="flex-table">

          <div className="main-panel" id='gif-container'>
            <div>{this.state}</div>
          </div>

        </div>
      </div>
    );
  }
}


export default App;
