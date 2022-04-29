import "../../../styles/App.css";
import logo from "../../../Images/star.png";
import { Link } from "react-router-dom";
import gold from "../../../Images/gold.png";
import silver from "../../../Images/silver.png";
import bronze from "../../../Images/bronze.png";
import Payment from "../../../components/Payment.js";

export default function StoreLIGHT() {
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
          <h1>
            <b>store</b>
          </h1>
          <div id="store">
            <div id="black">
              <img src={gold}></img>
              <br></br>
              100 gold cobbucks
              <button id="default-button">purchase</button>
            </div>
            <div id="black">
              <img src={silver}></img>
              <br></br>
              100 silver cobbucks
              <button id="default-button">purchase</button>
            </div>
            <div id="black">
              <img src={bronze}></img>
              <br></br>
              100 bronze cobbucks
              <button id="default-button">purchase</button>
            </div>
          </div>
          <h2>payment</h2>
          <Payment></Payment>
        </div>
      </div>
    </div>
  );
}
