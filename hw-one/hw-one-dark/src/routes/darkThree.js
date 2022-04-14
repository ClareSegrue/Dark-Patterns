import "../styles/App.css";
import logo from "../Images/star.png";
import { Link, useHistory, useParams } from "react-router-dom";
import TopBanner from "../components/TopBanner";
import gold from "../Images/gold.png";
import silver from "../Images/silver.png";
import bronze from "../Images/bronze.png";
import AdModal from "../components/AdModal";
import LoginModal from "../components/LoginModal";
import Ad from "../Images/coinAd.svg";

import React, { useState, Component } from "react";
const wallet = new Object();
wallet.bronze = 30;
wallet.silver = 30;
wallet.gold = 30;

const LightThree = () => {
  const [showModal, setShowModal] = useState(false);
  var progressCounter = 6;

  const openModal = () => {
    setShowModal((prev) => !prev);
    wallet.gold += 30;
    //alert(wallet.gold);
  };

  const [showLoginModal, setShowLoginModal] = useState(true);

  const incr = () => {
    var progress = document.getElementById("p1").value;
    document.getElementById("file").value = progress + 1;
  };

  
  const openLoginModal = () => {
    incr();
    setShowLoginModal((prev) => !prev);
  };

  const updateWallet = (a, b, c) => {
    openModal = !openModal;
    //this.setState(wallet.gold + a, wallet.silver + b, wallet.bronze + c);
    //alert(wallet);
    //tiny change
  };


  //const { wallet } = useParams();

  var store =
    "/store?" + wallet.gold + "?" + wallet.silver + "?" + wallet.bronze;

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
      <AdModal showModal={showModal} setShowModal={setShowModal} />
      <LoginModal
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
      <div className="flex-table" id="gif-container">
        <div>
          <Link to="/store">
            <div id="coinAd">
              <img src={Ad}></img>
            </div>
          </Link>
          <div className="flex-table">
            <div className="main-panel">
              <div className="game">
                <div className="parent">
                  <div id="row-layout-left">
                    <button className="login" onClick={openLoginModal}>
                      login bonus
                    </button>

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

export default LightThree;
