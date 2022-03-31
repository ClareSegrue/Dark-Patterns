import "../styles/App.css";
import logo from "../Images/star.png";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="App">
      <header className="App-header">
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
        <p className="termsOfPurchase">
            <b><h3><em>Privacy Policy for Cobs Cobblers</em></h3>
              English
              Privacy Policy <br></br></b>
            <br></br>
            <em>Last updated: January 13, 2022</em><br></br><br></br>
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
            information when You use the Service and tells You about Your privacy rights and how the law protects
            You.
            <br></br>
            <br></br>
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
            collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been
            created with the help of the Privacy Policy Template.
          </p>
        </div>
      </div>
    </div>
  );
}
