import "./styles/App.css";
import logo from "./Images/star.png";


import Accordion from "./components/Accordion";
import React, { Component } from "react";
import TopBanner from "./components/TopBanner";
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);



    this.goldCount = 40;
    this.silverCount = 30;
    this.bronzeCount = 76;

    //this.audio = new Audio(bgMusic);
    this.isPlaying = new Boolean(false);
    this.state = (
      <div id="black">
        <h1>WELCOME.</h1>Select light mode or dark mode from the header.
      </div>
    );
    this.mode = false;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  addDarkLoginComponent = () => {
    this.setState(
      <div class="login-container" id="black">
        <form onSubmit={this.handleSubmit}>
          <div class="imgcontainer">
            <img src={logo} alt="Avatar" class="avatar"></img>
          </div>
          <h4>register // login:</h4>
          <div id="tiny">
            by signing up, you agree to the terms and conditions <br></br>found
            on our company website
          </div>
          <div className="flex-form">
            <label for="uname">
              <b>username:</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            ></input>

            <label for="psw">
              <b>password:</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            ></input>
            <Link to="/darkFour">
              <button type="submit" class="accept-button" id="default-button">
                login
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  };

  addLightLoginComponent = () => {
    this.setState(
      <div class="login-container" id="black">
        <form onSubmit={this.handleSubmit}>
          <div className="flex-form">
            <div class="imgcontainer">
              <img src={logo} alt="Avatar" class="avatar"></img>
            </div>
            <h4>register // login:</h4>

            <label for="uname">
              <b>username:</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            ></input>

            <label for="psw">
              <b>password:</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            ></input>
            <br></br>
            <div id="regular">please read and accept the following terms.</div>
            <div>
              <Accordion>
                <div className="accordion-header" label="terms and conditions">
                  <label for="tc">
                    <b>accept:</b>
                    <br></br>
                    <Link to="/terms">[read terms]</Link>
                  </label>
                  <input type="checkbox" name="tc" required checked></input>
                </div>
                <div className="accordion-header" label="privacy policy">
                  <label for="privacy">
                    <b>accept:</b>
                    <br></br>
                    <Link to="/privacy">[read privacy]</Link>
                  </label>
                  <input
                    type="checkbox"
                    name="privacy"
                    required
                    checked
                  ></input>
                </div>
              </Accordion>
            </div>
            <Link to="/lightFour">
              <button type="submit" class="accept-button" id="default-button">
                login
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  };




  enterDark = () => {
    this.mode = false;
    this.setState(this.addDarkLoginComponent);
  };

  enterLight = () => {
    this.mode = true;
    this.setState(this.addLightLoginComponent);
  };

  /*
  <div className="right-panel">
  <div className="products">
  <img className='product' src={adFour} width="220" height="220" alt="x"></img>
  </div>
  </div>


  */

  //onClick={this.enterLight}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="button-container">
            <button
              className="dark-button"
              id="default-button"
              onClick={this.enterDark}
            >
              DARK
            </button>
            <button
              className="light-button"
              id="default-button"
              onClick={this.enterLight}
            >
              LIGHT
            </button>
          </div>
          <div className="header-title">
            music.ly
            <img src={logo} width="32" height="32" alt="x"></img>
          </div>
        </header>
        <div className="flex-table" id="gif-container">
          <div>{this.state}</div>
        </div>
      </div>
    );
  }
}

export default App;
