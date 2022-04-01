import "../styles/App.css";
import logo from "../Images/star.png";
import { Link } from "react-router-dom";
import TopBanner from "../components/TopBanner";
import gold from "../Images/gold.png";
import silver from "../Images/silver.png";
import bronze from "../Images/bronze.png";

import React, { Component } from "react";

class DarkThree extends Component {

  constructor(props) {
    super(props);
    this.progressCounter = 6;
    this.goldCount = 40;
    this.silverCount = 30;
    this.bronzeCount =76;

  this.store = "/store?" + this.goldCount + "?" + this.silverCount + "?" + this.bronzeCount;
}
render() {
  return(
    <div className="App">
      <header className="App-header">
        <div className="button-container">
          <Link to="/">
            <button className="light-button" id="default-button">
              BACK
            </button>
          </Link>
        </div>
        <div className="header-title">
          cob's soulo game.exe
          <img src={logo} width="32" height="32" alt="x"></img>
        </div>
      </header>
      <div className="flex-table" id="gif-container">
        <div>
          <div className="flex-table">
            <div className="main-panel">
              <div className="game">
                <div className="parent">
                  <div id="row-layout-left">
                    <Link to="/loginBonus">
                      <button
                        className="login"
                        onClick={(this.progressCounter = this.progressCounter + 1)}
                      >
                        login bonus
                      </button>
                    </Link>
                    <Link to={this.store}>
                      <button className="store">store</button>
                    </Link>
                    <Link to="/recharge">
                      <button className="recharge">recharge</button>
                    </Link>
                  </div>
                  <div id="row-layout-right">
                    <button className="x">X</button>
                  </div>
                </div>
                <iframe
                  width="800"
                  height="500"
                  src="https://www.addictinggames.com/embed/html5-games/23866"
                  scrolling="no"
                ></iframe>
                <br></br>
                <label for="file">
                  <b>daily login bonus:</b>
                </label>
                <progress id="file" value={this.progressCounter} max="7">
                  {" "}
                </progress>
              </div>
            </div>
            <div className="left-panel">
              <h1 className="currency">cobbucks:</h1>
              <div className="currency">
                <img src={gold} width="100px"></img>x {this.goldCount}
              </div>
              <div className="currency">
                <img src={silver} width="100px"></img>x {this.silverCount}
              </div>
              <div className="currency">
                <img src={bronze} width="100px"></img>x {this.bronzeCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default DarkThree;