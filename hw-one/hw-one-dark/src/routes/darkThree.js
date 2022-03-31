import "../styles/App.css";
import logo from "../Images/star.png";
import { Link } from "react-router-dom";
import TopBanner from "../components/TopBanner";

export default function DarkThree() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="button-container">
          <Link to="/">
          <button className="light-button" id="default-button">
            BACK
          </button>
          </Link>
        </div>
        <div className="header-title">
          cob's soulo game.exe
          <img src={logo} width="32" height="32" alt="x"></img>
        </div>
      </header>
      <div className="flex-table" id="gif-container">
        <div>
          <div className="flex-table">
            <div className="main-panel">
              <div className="game">
                <TopBanner />
                <iframe
                  width="800"
                  height="600"
                  src="https://www.addictinggames.com/embed/html5-games/23866"
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            <div className="left-panel"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
