import React from "react";
import "../styles/SkinModal.css";
import ad from "../Images/ad.mp4";
import { Alert } from "react-bootstrap";
import TopBanner from "./TopBanner";
import { Link } from "react-router-dom";

export default function SkinModal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <div className="background">
          {" "}
          <div className="modal">
            <div className="content" id="content">
              <div className="parent">
                <div id="row-layout-left"></div>
                <div id="row-layout-right">
                <Link to="/darkThree">
                  <button
                    className="x"
                    onClick={() => setShowModal((prev) => !prev)}
                  >
                    X
                  </button>
                  </Link>
                </div>
              </div>
              <br></br>
              YOU HAVE COMPLETED YOUR LOGIN REQUIREMENTS.
              <br></br>
              you have obtained the dark mode skin.
              <br></br>
              two brass cobbucks have been deducted from your account.
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
