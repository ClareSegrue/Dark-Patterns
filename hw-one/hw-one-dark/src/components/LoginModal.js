import React, { useState } from "react";
import "../styles/LoginModal.css";
import ad from "../Images/ad.mp4";
import { Link } from "react-router-dom";

export default function LoginModal({ showLoginModal, setShowLoginModal }) {
  var date = new Date();
  var time = date.toLocaleTimeString();
  var midnight = new Date();
  var midnight = midnight.setHours(24, 0, 0, 0);
  var acceptableTime = false;
  var accepted = false;



  const onSubmit = (e) => {
    e.preventDefault();
    
    console.log("refresh prevented");
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

                    <button class="accept-button" id="default-button">
                      submit
                    </button>

                    <div id="tiny">
                      *my checkmark here is equivalent to reciting this
                      incantation out loud
                    </div>
                    <div className="time">{time}</div>
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
