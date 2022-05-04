import "../../styles/App.css";
import logo from "../../Images/star.png";
import { Link, useHistory, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import React, { useState, Component } from "react";
import AudioPlayer from "../../components/SoundcloudPlayerDark";

const DarkFour = () => {
  //const firstClick = new Boolean(true);
  //var isPlaying = new Boolean(false);
  var track =
    "https://soundcloud.com/w2cvgtfgvyj1/fear?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";

  const changeUrl = () => {
    var url =
      "https://soundcloud.com/fueled_by_ramen/twenty-one-pilots-stressed-out?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
    track = url;
  };

  /*
  function changeTrack(url){
    var url = "https://soundcloud.com/fueled_by_ramen/twenty-one-pilots-stressed-out?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
    track = url;
  }
  */

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
          soulifiy
          <img src={logo} width="32" height="32" alt="x"></img>
        </div>
      </header>
     
      <AudioPlayer />
    </div>
  );
};

export default DarkFour;
