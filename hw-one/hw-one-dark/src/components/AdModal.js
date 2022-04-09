import React from "react";
import "../styles/AdModal.css";
import ad from "../Images/ad.mp4";

export default function Modal({ showModal, setShowModal }) {
  function delay(n) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }

  async function startTimer() {
    await delay(30000);
    alert("Timer complete");
  }




  return (
    <>
      {showModal ? (
        <div className="background">
          {" "}
          <div className="adModal">
              <button onClick={() => setShowModal(prev => !prev)}>X</button>
            <video
            className="video"
              width="640"
              height="480"
              controls
              onClick={startTimer}
              onEnded={alert("video complete.")}
            >
              <source src={ad} type="video/mp4"></source>
            </video>
          </div>
        </div>
      ) : null}
    </>
  );
}
