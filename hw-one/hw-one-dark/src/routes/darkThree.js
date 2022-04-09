import "../styles/App.css";
import logo from "../Images/star.png";
import { Link, useHistory, useParams } from "react-router-dom";
import TopBanner from "../components/TopBanner";
import gold from "../Images/gold.png";
import silver from "../Images/silver.png";
import bronze from "../Images/bronze.png";
import Modal from "../components/AdModal";

import React, { useState, Component } from "react";

const DarkThree = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  var progressCounter = 6;
  
  const wallet = new Object();
  wallet.bronze = 30;
  wallet.silver = 30;
  wallet.gold = 30;
  
 
  var store = "/store?" + wallet.gold + "?" + wallet.silver + "?" + wallet.bronze;

  function Profile(){
    const { handle } = useParams();
  }
  return (
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
      <Modal showModal={showModal} setShowModal={setShowModal} />
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
                        onClick={(progressCounter = progressCounter + 1)}
                      >
                        login bonus
                      </button>
                    </Link>
                    <Link to={store}>
                      <button className="store">store</button>
                    </Link>

                    <button className="recharge" onClick={openModal}>
                      recharge
                    </button>
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
                <progress id="file" value={progressCounter} max="7">
                  {" "}
                </progress>
              </div>
            </div>
            <div className="left-panel">
              <h1 className="currency">cobbucks:</h1>
              <div className="currency">
                <img src={gold} width="100px"></img>x {wallet.gold}
              </div>
              <div className="currency">
                <img src={silver} width="100px"></img>x {wallet.silver}
              </div>
              <div className="currency">
                <img src={bronze} width="100px"></img>x {wallet.bronze}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkThree;
