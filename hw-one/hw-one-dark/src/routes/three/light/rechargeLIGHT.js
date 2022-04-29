import "../../../styles/App.css";
import logo from "../../../Images/star.png";
import { Link } from "react-router-dom";

export default function RechargeLIGHT() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="button-container">
          <Link to="/lightThree">
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
        <div id="recharge">
            <b>recharge LIGHT</b>

          </div>
        </div>
      </div>
    </div>
  );
}
