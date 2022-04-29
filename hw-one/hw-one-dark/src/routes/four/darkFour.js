import "../../styles/App.css";
import logo from "../../Images/star.png";
import { Link, useHistory, useParams } from "react-router-dom";

import AdModal from "../../components/AdModal";
import LoginModal from "../../components/LoginModal";

import React, { useState, Component } from "react";
const wallet = new Object();
wallet.bronze = 30;
wallet.silver = 30;
wallet.gold = 30;

const DarkFour = () => {
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
      
      <div className="flex-table" id="gif-container">
        <div>
          <div className="flex-table">
            <div className="main-panel">light four</div>
            <div className="left-panel"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkFour;
