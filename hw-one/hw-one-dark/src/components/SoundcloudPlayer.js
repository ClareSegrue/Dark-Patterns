import "../styles/App.css";

import { Link, useHistory, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import React, { useState, Component } from "react";
import Accordion from "./Accordion";

class SoundCloudPlayer extends Component {
  constructor(props) {
    super(props);

    this.genre = null;
    this.decade = null;
    //this.Track = new Object ();

    this.songTracks = [
      {
        name: "Stressed Out",
        artist: "twenty one pilots",
        genre: "rock",
        decade: "'10s",
        url: "https://soundcloud.com/fueled_by_ramen/twenty-one-pilots-stressed-out?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        name: "Ode To Sleep",
        artist: "twenty one pilots",
        genre: "rock",
        url: "https://soundcloud.com/fueled_by_ramen/ode-to-sleep?in=fueled_by_ramen/sets/vessel&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        name: "Carry On",
        artist: "Fun.",
        genre: "rock",
        decade: "'10s",
        url: "https://soundcloud.com/fueled_by_ramen/fun-carry-on?in=fueled_by_ramen/sets/fun-some-nights&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        name: "We Are Young",
        artist: "Fun.",
        genre: "rock",
        decade: "'10s",
        url: "https://soundcloud.com/fueled_by_ramen/we-are-young-ft-janelle-monae?in=fueled_by_ramen/sets/fun-some-nights&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        name: "Bohemian Rhapsody",
        artist: "Queen",
        genre: "rock",
        decade: "'70s",
        url: "https://soundcloud.com/rizky-rilos/queen-bohemian-rhapsody?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        name: "Shake it Off",
        artist: "Taylor Swift",
        genre: "pop",
        decade: "'10s",
        url: "https://soundcloud.com/suarga/taylor-swift-shake-it-off?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        name: "Dark Horse",
        artist: "Katy Perry",
        genre: "pop",
        decade: "'10s",
        url: "https://soundcloud.com/katyperry/dark-horse-feat-juicy-j?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        name: "Before He Cheats",
        artist: "Carrie Underwood",
        genre: "country",
        decade: "'00s",
        url: "https://soundcloud.com/carrieunderwoodofficial/before-he-cheats-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
    ];

    this.tracksToRender = this.tracks;

    this.url = this.songTracks[0].url;

    this.player = null;
    this.tracks = null;
    this.visibleTracks = this.songTracks;

    this.favoritesList = [];

    this.state = this.player = (
      <ReactPlayer
        width="100%"
        height="100px"
        url={this.url}
        video="none"
      ></ReactPlayer>
    );

    this.favorites = null;

    this.state = this.favorites = <div>No current favorites.</div>;

    this.updateFavorites = () => {
      this.renderedOutput = this.favoritesList.map((item) => <li>{item}</li>);

      this.setState(
        (this.favorites = (
          <div className="favorites">{this.renderedOutput}</div>
        ))
      );
    };

    this.tracks = (
      <div className="main-panel">
        <div
          className="track"
          onClick={() => {
            window.open("https://www.kelloggs.com/en_US/home.html", "_blank");
          }}
        >
          Cereal Flakes, Asbestos Free!
        </div>
        <div
          className="track"
          onClick={() => {
            this.url =
              "https://soundcloud.com/fueled_by_ramen/ode-to-sleep?in=fueled_by_ramen/sets/vessel&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";

            this.changeTrack();
          }}
        >
          Ode to Sleep
          <button
            className="light-button"
            id="default-button"
            onClick={() => {
              this.favoritesList.push("Ode to Sleep");

              this.updateFavorites();
            }}
          >
            favorite
          </button>
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
          <button
            className="light-button"
            id="default-button"
            onClick={() => {
              this.favoritesList.push("Carry On");

              this.updateFavorites();
            }}
          >
            favorite
          </button>
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
          <button
            className="light-button"
            id="default-button"
            onClick={() => {
              this.favoritesList.push("We Are Young.");

              this.updateFavorites();
            }}
          >
            favorite
          </button>
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
  }

  changeTrack = () => {
    this.setState(
      (this.player = (
        <ReactPlayer
          width="100%"
          height="100px"
          url={this.url}
          video="none"
        ></ReactPlayer>
      ))
    );
  };

  changeVisibleTracks = () => {
    this.tempTracks = [];
    this.songTracks.map((item) => {
      //alert("test: " + item.name + " item genre " + item.genre + " vs. " + this.genre);
      //alert("item genre" + this.item.genre);
      if (item.genre === this.genre) {
        this.tempTracks.push(item);
      } else if (this.genre === null) {
        this.tempTracks = this.songTracks;
      }
      //alert(this.tempTracks.name);
    });

    this.renderedOutput = this.tempTracks.map((item) => (
      <div
        className="track"
        onClick={() => {
          this.url = item.url;
          this.changeTrack();
        }}
      >
        {item.name} <br></br> {item.artist} <br></br> {item.genre}
        <button
          className="light-button"
          id="default-button"
          onClick={() => {
            this.favoritesList.push(item.name);

            this.updateFavorites();
          }}
        >
          favorite
        </button>
      </div>
    ));

    this.setState(
      (this.tracks = (
        <div className="main-panel">
          <div className="tracks">{this.renderedOutput}</div>
        </div>
      ))
    );
  };

  render() {
    return (
      <div className="flex-table" id="gif-container">
        <div className="flex-table">
          {this.tracks}
          <div className="left-panel">
            library
            <Accordion>
              <div className="accordion-header" label="favorites">
                {this.favorites}
              </div>
              <div className="accordion-header" label="filters">
                <div className="filter">
                  <div className="filter-description">Genre:</div>
                  <div className="filter-select">
                    <select
                      onChange={(e) => {
                        this.genre = e.target.value;
                        alert(this.genre);
                        this.changeVisibleTracks();
                      }}
                    >
                      <option value="rock">Rock</option>
                      <option value="country">Country</option>
                      <option value="pop">Pop</option>
                    </select>
                  </div>
                </div>
                <div className="filter"></div>
              </div>
            </Accordion>
            <div
              id="black"
              onClick={() => {
                window.open(
                  "https://www.kelloggs.com/en_US/home.html",
                  "_blank"
                );
              }}
            >
              Cereal Flakes, Asbestos Free!
            </div>
            <div
          id="black"
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
              id="black"
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

          <header className="bottom-header">
            <div className="player">{this.player}</div>
          </header>
        </div>
      </div>
    );
  }
}

export default SoundCloudPlayer;
