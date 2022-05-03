import "../../styles/App.css";
import logo from "../../Images/star.png";
import { Link, useHistory, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import React, { useState, Component } from "react";

const DarkFour = () => {
  //const firstClick = new Boolean(true);
  //var isPlaying = new Boolean(false);
  var track =
    "https://soundcloud.com/w2cvgtfgvyj1/fear?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";

  // used after song ends
  const [isPlaying, setPlaying] = React.useState(false);
  const togglePlaying = () => setPlaying(!isPlaying);

  const [toggled, setToggled] = React.useState(false);
  const toggleImage = () => {
    setToggled(!toggled);
    setPlaying(!isPlaying);
  };

  const [trackSelected, setTrack] = React.useState(false);
  const toggleTrackSelected = () => setTrack(!trackSelected);

  const changeUrl = () => {
    var url = "https://soundcloud.com/fueled_by_ramen/twenty-one-pilots-stressed-out?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
    track = url;

  ReactPlayer.play(url);
  }

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

      <div className="flex-table" id="gif-container">
        <div>
          <div className="flex-table">
            <div className="main-panel">
              <div className="track" onClick={changeUrl}>one</div>
              <div className="track">two</div>
              <div className="track">three</div>
              <div className="track">four</div>
              <div className="track">five</div>
              <div className="track">six</div>
              <div className="track">seven</div>
              <div className="track">eight</div>
              <div className="track">nine</div>
              <div className="track">ten</div>
              <div className="track">eleven</div>
              <div className="track">twelve</div>
            </div>
            <div className="left-panel">
              <div className="filter">
              <div className="filter-description">Genre:</div>
              <div className="filter-select">
                <select>
                  <option value="rock">Rock</option>
                  <option value="alt">Alternative</option>
                  <option value="country">Country</option>
                  <option value="pop">Pop</option>
                </select>
                </div>
              </div>
              <div className="filter">
                <div className="filter-description">Decade:</div>
                <div className="filter-select">
                   <select>
                  <option value="50">'50s</option>
                  <option value="60">'60s</option>
                  <option value="70">'70s</option>
                  <option value="80">'80s</option>
                  <option value="90">'90s</option>
                  <option value="00">'00s</option>
                  <option value="10">'10s</option>
                  <option value="current">'20s</option>
                </select>
                </div>
               
              </div>
            </div>
            <header className="bottom-header">
              <div className="player">
                <ReactPlayer
                  width="100%"
                  height="100px"
                  url={track}
                  backgroundColor="black"
                ></ReactPlayer>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkFour;
