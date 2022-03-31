import './styles/App.css';
import logo from "./Images/star.png";
import bgMusic from "./audio/game.wav";
import soundOn from "./Images/soundOn.png";
import soundOff from "./Images/soundOff.png";
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
import TopBanner from './components/TopBanner';
import game from "./Images/spaceGame.gif";


class App extends Component {
  constructor(props) {
    super(props);
    this.audioImages = [soundOn, soundOff];
    this.audioImage = this.audioImages[0];

    this.audio = new Audio(bgMusic);
    this.isPlaying = new Boolean(false);
    this.state = (<div id="black"><h1>WELCOME.</h1>Select light mode or dark mode from the header.</div>);
    this.mode = false;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  audioStarter() {
    if (this.isPlaying === false) {
      this.audio.volume = 0.000;
      this.audio.loop = true;
      this.audio.play();
      this.isPlaying = true;
    } else {
      this.isPlaying = false;
    }
  }
  /*
    audioStateManager() {
      if (this.isPlaying === true) {
        this.audio.pause = true;
        this.audio.currentTime = 0;
        this.isPlaying = false;
      } else {
        this.audio.volume = .1;
      }
      //this.changeAudioImg();
    }
  */
  changeAudioImg() {
    if (document.getElementById("volume").src === soundOn) {
      document.getElementById("volume").src = soundOff;
    } else {
      document.getElementById("volume").src = soundOn;
    }
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.mode === false) {
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

          <button type="submit" class="accept-button" id="default-button">login</button>
        </form>
      </div>
    );
  }

  updateLightThree = () => {
    this.audioStarter();
    this.setState(
      <div>
        <div>
          LIGHT
        </div>
        <div id='bottom-span'>
          <button background={this.audioImage} id="volume" onClick={this.audioStateManager}>Sound</button>
        </div>
      </div>

    );
  }

  updateDarkThree = () => {
    this.audioStarter();
    this.setState(
      <div className="flex-table">
        <div className="main-panel">
          <div className="game">
            <TopBanner />
            <img src={game} width="600"></img>
          </div>
        </div>
        <div className="left-panel">
          
        </div>
      </div>


    );
  }

  enterDark = () => {
    this.mode = false;
    this.setState(this.addLoginComponent);

  }

  enterLight = () => {
    this.mode = true;
    this.setState(this.addLoginComponent);
  }

  /*
  <div className="right-panel">
  <div className="products">
  <img className='product' src={adFour} width="220" height="220" alt="x"></img>
  </div>
  </div>


  */

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="button-container">
            <button className="dark-button" id="default-button" onClick={this.enterDark}>DARK</button>
            <button className="light-button" id="default-button" onClick={this.enterLight}>LIGHT</button>
          </div>
          <div className="header-title">cob's soulo game.exe
            <img src={logo} width="32" height="32" alt="x"></img>
          </div>
        </header>
        <div className="flex-table"id='gif-container'>
          
            <div>{this.state}</div>
         
        </div>
      </div>
    );
  }
}


export default App;
