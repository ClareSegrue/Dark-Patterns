import "../../styles/App.css";
import logo from "../../Images/star.png";
import { Link, useHistory, useParams } from "react-router-dom";
import pause from "../../Images/pause.png";
import play from "../../Images/play.png";

import backward from "../../Images/backward.png";
import forward from "../../Images/forward.png";




import React, { useState, Component } from "react";

const LightFour = () => {
  const [showModal, setShowModal] = useState(false);

  const audio = new Audio();




  //const firstClick = new Boolean(true);
  //var isPlaying = new Boolean(false);
  var track = "No track selected.";

  // used after song ends
  const [isPlaying, setPlaying] = React.useState(false);
  const togglePlaying = () => setPlaying(!isPlaying);

  const [toggled, setToggled] = React.useState(false);
  const toggleImage = () => {
    setToggled(!toggled);
    //setPlaying(!isPlaying);
  }

  const [trackSelected, setTrack] = React.useState(false);
  const toggleTrackSelected = () => setTrack(!trackSelected);

  function setPlayState() {
    if (trackSelected) {
      audio.pause();
      audio = new Audio();
      audio.play();
      toggleImage();
    } else {
      alert("No track selected.");
    }
  }

  function audioStarter() {
    alert("reached start, should be false: " + trackSelected);
    //toggleTrackSelected();

    //alert("toggled track selected: " + trackSelected);
    if (!isPlaying) {
      audio.volume = 0.5;
      audio.loop = true;
      audio.play();
    }

    //togglePlaying();
  }  
  
  function changeTrack(a){
    //audio.pause();
    audio = a;
    track = "track selected";
    toggleImage();
    audioStarter();
  };
 /*
  const changeTrack = (Audio) => {
    audio = a;
    track = "track selected";
    toggleImage();
    audioStarter();
  };






  const changeTrack = () => {
    track = "track selected";
    toggleImage();
    audioStarter();
  };

 
  function audioStateManager(){
    if (isPlaying) {
      audio.pause = true;
      audio.currentTime = 0;
      isPlaying = false;
    } else {
      audio.volume = 0.6;
    }
   
  };
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
          <div>
            Genre: 
            <select>
              <option value="fruit">Rock</option>
              <option value="vegetable">Alternative</option>
              <option value="meat">Country</option>
              <option value="meat">Pop</option>
            </select>
          </div>
          <div className="flex-table">
            <div className="main-panel">
              <div className="track" onClick={() => "nope"}>
                track one
              </div>
              <div className="track">track two</div>
              <div className="track">track three</div>
              <div className="track">track four</div>
              <div className="track">track five</div>
            </div>
            <header className="bottom-header">
              <div className="player">
                <button id="default-button">
                  <img src={backward} alt="pause" height="30px" />
                </button>
                <button id="default-button" onClick={setPlayState}>
                  {toggled && <img src={pause} alt="pause" height="50px" />}
                  {!toggled && <img src={play} alt="play" height="50px" />}
                </button>
                <button id="default-button">
                  <img src={forward} alt="pause" height="30px" />
                </button>
              </div>
              <div className="trackName">{track}</div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightFour;
