import React, { useState } from "react";
import "../styles/LoginModal.css";
import ad from "../Images/ad.mp4";
import { Link } from "react-router-dom";
import moment from "moment";

export default function LoginModal({ showLoginModal, setShowLoginModal }) {
  var date = new Date();
  var time = date.toLocaleTimeString();

  var midnight = date.setHours(23, 59, 59, 59);

  var night;
  var canSubmit = false;

  if (time.includes("AM")) {
    var night = false;
    //parseTime();
  } else if (time.includes("PM")) {
    var night = true;
    parseTime();
  } else {
    alert("error parsing time");
  }

  var getTimes = time.split(":");

  //alert(getTimes);

  async function parseTime() {
    var hour = getTimes[0];
    alert(hour);
    
    //if (getTimes[0] === '11' && night) {
      //canSubmit = true;
    //} else if(getTimes[0] === '12' && !night){
      //canSubmit = true;
    //}
  }
  //midnight = moment().startOf('day');

  //var midnightFormatted = formatDate(midnight);

  const onSubmit = (e) => {
    //e.preventDefault();
    setShowLoginModal((prev) => !prev);
    //console.log("refresh prevented");
  };

  return (
    <>
      {showLoginModal ? (
        <div className="background">
          {" "}
          <div className="LoginModal">
            <div className="content" id="content">
              <div className="parent">
                <div id="row-layout-left"></div>
                <div id="row-layout-right">
                  <button
                    className="x"
                    onClick={() => setShowLoginModal((prev) => !prev)}
                  >
                    X
                  </button>
                </div>
              </div>
              <div className="flex-table" id="gif-container">
                <div className="main-panel">
                  <h1>daily login bonus</h1>
                  <br></br>

                  <form className="flex-form" onSubmit={onSubmit}>
                    <div className="prayer">
                      <b>
                        Volo videre tenebras aeternas <br></br>
                        Ego certe amo tenebras <br></br>
                        Vere fan tenebrarum <br></br>
                        Me et tenebrae sunt sicut amici optimi <br></br>
                        Ita vere gratum essem si habere possem infinitas
                        tenebras
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
                      <input
                        type="checkbox"
                        name="dmode"
                        required
                        checked
                      ></input>
                    </div>

                    <button
                      class="accept-button"
                      id="default-button"
                      onClick={() => setShowLoginModal((prev) => !prev)}
                    >
                      submit
                    </button>

                    <div id="tiny">
                      *my checkmark here is equivalent to reciting this
                      incantation out loud
                    </div>
                    <div className="time">
                      {time} || {midnight.getDate}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
