import "../../styles/App.css";
import logo from "../../Images/star.png";
import { Link, useHistory, useParams } from "react-router-dom";


import React, { useState, Component } from "react";

const LightFour = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    //setShowModal((prev) => !prev);
  };

/*   var progressCounter = 6;

  const wallet = new Object();
  wallet.bronze = 30;
  wallet.silver = 30;
  wallet.gold = 30;

  var store =
    "/store?" + wallet.gold + "?" + wallet.silver + "?" + wallet.bronze;

  function Profile() {
    const { handle } = useParams();
  } */
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
            <div className="main-panel">
            light four
            </div>
            <div className="left-panel">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightFour;
