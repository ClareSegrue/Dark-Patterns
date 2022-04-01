import "../../styles/App.css";
import logo from "../../Images/star.png";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class LoginBonus extends Component {
  constructor(props) {
    super(props);

    this.date = new Date();
    this.time = this.date.toLocaleTimeString();

    this.midnight = new Date();
    this.midnight = this.midnight.setHours(24, 0, 0, 0);

    this.acceptableTime = false;

    this.state = (
      <div className="submit-button">
        <Link to="/darkThree">
          <button
            type="submit"
            class="accept-button"
            id="default-button"
            onClick={alert(
              "thanks for logging! you are on a six day login streak!"
            )}
          >
            submit
          </button>
        </Link>
      </div>
    );
  }
  errorButton = () => {
    this.setState(
      <div className="error-button">
        <button type="reset" id="default-button">
          error
        </button>
      </div>
    );
  };

  submitButton = () => {
    this.setState(
      <div className="error-button">
        <Link to="/darkThree">
          <button type="submit" class="accept-button" id="default-button">
            submit
          </button>
        </Link>
      </div>
    );
  };

  checkTime() {
    if (this.time.endsWith("PM")) {
      var hr = this.time.split(":");
      if (hr[0] == "11") {
        this.acceptableTime = true;
      } else {
        this.acceptableTime = false;
      }
    } else {
      if (hr[0] == "12") {
        this.acceptableTime = true;
      } else {
        this.acceptableTime = false;
      }
    }
  }
  // );

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="button-container">
            <Link to="/">
              <button className="dark-button" id="default-button">
                RETURN HOME
              </button>
            </Link>
          </div>
          <div className="header-title">
            cob's soulo game.exe
            <img src={logo} width="32" height="32" alt="x"></img>
          </div>
        </header>
        <div className="flex-table" id="gif-container">
          <div className="main-panel">
            <h1>daily login bonus</h1>
            <br></br>

            <form className="flex-form">
              <div className="prayer">
                <b>
                  Volo videre tenebras aeternas <br></br>
                  Ego certe amo tenebras <br></br>
                  Vere fan tenebrarum <br></br>
                  Me et tenebrae sunt sicut amici optimi <br></br>
                  Ita vere gratum essem si habere possem infinitas tenebras
                  <br></br>
                  Hoc vere sit multum<br></br>
                  Gratias tibi valde<br></br>
                </b>
              </div>
              <div id="black">
                <label for="incantation">
                  <b>i have read the incantation above*:</b>
                </label>
                <input
                  type="checkbox"
                  name="incantation"
                  required
                  checked
                ></input>
              </div>
              <div id="black">
                <label for="dmode">
                  <b>i agree to be one step closer to dark mode!</b>
                </label>
                <input type="checkbox" name="dmode" required checked></input>
              </div>
              <Link to="/darkThree">
                <button type="submit" class="accept-button" id="default-button">
                  submit
                </button>
              </Link>
              <div id="tiny">
                *my checkmark here is equivalent to reciting this incantation
                out loud
              </div>
              <div className="time">{this.time}</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginBonus;
