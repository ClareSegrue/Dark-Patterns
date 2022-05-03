import "../styles/App.css";

import { Link, useHistory, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import React, { useState, Component } from "react";

class SoundCloudPlayer extends Component {
  constructor(props) {
    super(props);

    //this.Track = new Object ();

   

    this.songTracks = [
      {
        name: "Stressed Out",
        artist: "twenty one pilots",
        genre: "Alternative",
        decade: "'10s",
        url: "https://soundcloud.com/fueled_by_ramen/twenty-one-pilots-stressed-out?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        name: "Ode To Sleep",
        artist: "twenty one pilots",
        genre: "Alternative",
        decade: "'10s",
        url: "https://soundcloud.com/fueled_by_ramen/ode-to-sleep?in=fueled_by_ramen/sets/vessel&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        name: "Carry On",
        artist: "Fun.",
        genre: "Alternative",
        decade: "'10s",
        url: "https://soundcloud.com/fueled_by_ramen/fun-carry-on?in=fueled_by_ramen/sets/fun-some-nights&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        name: "We Are Young",
        artist: "Fun.",
        genre: "Alternative",
        decade: "'10s",
        url: "https://soundcloud.com/fueled_by_ramen/we-are-young-ft-janelle-monae?in=fueled_by_ramen/sets/fun-some-nights&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
    ];

    this.tracksToRender = this.tracks;

    this.url =
      "https://soundcloud.com/fueled_by_ramen/twenty-one-pilots-stressed-out?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";
    //const openSections = {};

    //this.state = { openSections };

    this.tracks = (
      <div className="main-panel">
        <div
          className="track"
          onClick={() => {
            this.url =
              this.songTracks[0].url;

            this.changeTrack();
          }}
        >
          {this.songTracks[0].name}
        </div>
        <div className="track"           onClick={() => {
            window.open(
              "https://www.kelloggs.com/en_US/home.html",
              "_blank"
            );
          }}>Cereal Flakes, Asbestos Free!</div>
        <div
          className="track"
          onClick={() => {
            this.url =
              "https://soundcloud.com/fueled_by_ramen/ode-to-sleep?in=fueled_by_ramen/sets/vessel&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";

            this.changeTrack();
          }}
        >
          Ode to Sleep
        </div>
        <div
          className="track"
          onClick={() => {
            this.url =
              "https://soundcloud.com/fueled_by_ramen/fun-carry-on?in=fueled_by_ramen/sets/fun-some-nights&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";

            this.changeTrack();
          }}
        >
          Carry On
        </div>
        <div
          className="track"
          onClick={() => {
            window.open(
              "http://www.dolekemp96.org/agenda/issues/internet.htm",
              "_blank"
            );
          }}
        >
          Zombie Bob Dole 2024
        </div>
        <div
          className="track"
          onClick={() => {
            this.url =
              "https://soundcloud.com/fueled_by_ramen/we-are-young-ft-janelle-monae?in=fueled_by_ramen/sets/fun-some-nights&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";

            this.changeTrack();
          }}
        >
          We Are Young.
        </div>
        <div
          className="track"
          onClick={() => {
            window.open(
              "https://www.jimsautorepaircenter.com/services/brakes",
              "_blank"
            );
          }}
        >
          Jim’s Brake Pads, “They work every time, 50% of the time”
        </div>
      </div>
    );

    this.state = (
      <ReactPlayer
        width="100%"
        height="100px"
        url={this.url}
        video="none"
      ></ReactPlayer>
    );
  }

  changeTrack = () => {
    this.setState(
      <ReactPlayer
        width="100%"
        height="100px"
        url={this.url}
        video="none"
      ></ReactPlayer>
    );
  };

  changeVisibleTracks = () => {};
  /*
  onClick = label => {
    const {
      state: { openSections },
    } = this;

    const isOpen = !!openSections[label];

    this.setState({
      url: ""
    });
  };
  */

  render() {
    /*const {
      onClick,
      props: { children },
      state: { url },
    } = this;
    */

    return (
      <div className="flex-table" id="gif-container">
        <div>
          <div className="flex-table">
            <div className="main-panel">{this.tracks}</div>
            <div className="left-panel">
              <div className="filter">
                <div className="filter-description">Genre:</div>
                <div className="filter-select">
                  <select onChange={this.changeVisibleTracks()}>
                    <option value="rock">Rock</option>
                    <option value="country">Country</option>
                    <option value="pop">Pop</option>
                  </select>
                </div>
              </div>
              <div className="filter">
                <div className="filter-description">Decade:</div>
                <div className="filter-select">
                  <select>
                    <option value="90">'90s</option>
                    <option value="00">'00s</option>
                    <option value="10">'10s</option>
                  </select>
                </div>
              </div>
            </div>
            <header className="bottom-header">
              <div className="player">{this.state}</div>
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default SoundCloudPlayer;
