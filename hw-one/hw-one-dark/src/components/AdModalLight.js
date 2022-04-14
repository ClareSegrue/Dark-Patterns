import React from "react";
import "../styles/AdModal.css";
import ad from "../Images/ad.mp4";
import ReactPlayer from "react-player";

export default function AdModal({ showModal, setShowModal }) {
  /*
  function delay(n) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }

  async function startTimer() {
    await delay(30000);
    alert("Timer complete");
  }
  */
  const urls = ["https://www.youtube.com/watch?v=XoBPnj8suZE"];

  const [showNextButton, setShowNextButton] = React.useState(false);
  const [showWaitDiv, setShowWaitDiv] = React.useState(true);

  var timeLeft = 30;
  var elem = document.getElementById("some_div");

  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == -1) {
      //clearTimeout(timerId);
      //doSomething();
    } else {
      //elem.innerHTML = timeLeft + " seconds remaining";
      timeLeft--;
    }
  }

  //startTimer

  //alert("video complete.")

  return (
    <>
      {showModal ? (
        <div className="adModal">
          {showWaitDiv && (<div>please wait for advertisement to complete.</div>)}
          <ReactPlayer
            url={urls[0]}
            playing
            controls
            onEnded={() => {
              setShowNextButton(true); setShowWaitDiv(false);
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          {showNextButton && (
            <button
              onClick={() => {
                setShowModal((prev) => !prev);
                setShowNextButton(false);
              }}
              style={{
                position: "absolute",
                zIndex: 10,
                fontSize: "2em",
              }}
            >
              complete
            </button>
          )}
        </div>
      ) : null}
    </>
  );
}
