import "../../../styles/App.css";
import logo from "../../../Images/star.png";
import { Link } from "react-router-dom";
import React, { useState, Component } from "react";
import Modal from "../../../components/SkinModal";

const LoginBonus = () => {
  var date = new Date();
  var time = date.toLocaleTimeString();
  var midnight = new Date();
  var midnight = midnight.setHours(24, 0, 0, 0);
  var acceptableTime = false;
  var accepted = false;
  var state = (<div>accept</div>);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const claimPrize = () => {
    state(
      <div>
        <button >claim prize!</button>
      </div>
    );
  };

  const errorButton = () => {
    this.setState(
      <div className="error-button">
        <button type="reset" id="default-button">
          error
        </button>
      </div>
    );
  };

  const submitButton = () => {
    this.setState(
      <div className="error-button">
        <Link to="/darkThree">
          <button
            type="submit"
            class="accept-button"
            id="default-button"
            onClick={""}
          >
            submit
          </button>
        </Link>
      </div>
    );
  };

  const checkTime = () => {
    if (time.endsWith("PM")) {
      var hr = time.split(":");
      if (hr[0] == "11") {
        acceptableTime = true;
      } else {
        acceptableTime = false;
      }
    } else {
      if (hr[0] == "12") {
        acceptableTime = true;
      } else {
        acceptableTime = false;
      }
    }
  };
  // );

  async function opener() {
    openModal();
  }

  return (
    <div className="App">
      <header className="App-header">
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <div className="button-container">
          <Link to="/">
            <button className="dark-button" id="default-button">
              RETURN HOME
            </button>
          </Link>
        </div>
        <div className="header-title">
          cob's soulo game.exe
          <img src={logo} width="32" height="32" alt="x"></img>
        </div>
      </header>
      <div className="flex-table" id="gif-container">
        <div className="main-panel">
          <h1>daily login bonus</h1>
          <br></br>

          <form className="flex-form">
            <div className="prayer">
              <b>
                Volo videre tenebras aeternas <br></br>
                Ego certe amo tenebras <br></br>
                Vere fan tenebrarum <br></br>
                Me et tenebrae sunt sicut amici optimi <br></br>
                Ita vere gratum essem si habere possem infinitas tenebras
                <br></br>
                Hoc vere sit multum<br></br>
                Gratias tibi valde<br></br>
              </b>
            </div>
            <div id="black">
              <label for="incantation">
                <b>i have read the incantation above*:</b>
              </label>
              <input
                type="checkbox"
                name="incantation"
                required
                checked
              ></input>
            </div>
            <div id="black">
              <label for="dmode">
                <b>i agree to be one step closer to dark mode!</b>
              </label>
              <input type="checkbox" name="dmode" required checked></input>
            </div>
            
              <button type="submit" class="accept-button" id="default-button" onClick={claimPrize}>
                submit
              </button>
 
            
            <div id="tiny">
              *my checkmark here is equivalent to reciting this incantation out
              loud
            </div>
            <div className="time">{time}</div>
          </form>

          <button class="claim-button" id="default-button" onClick={openModal}>
                claim prize
              </button>
        </div>
      </div>
    </div>
  );
};

export default LoginBonus;
