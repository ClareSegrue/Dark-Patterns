import "../styles/TopBanner.css";
import React from "react";
import termsOfPurchase from "./termsOfPurchase.txt";
import { Link } from "react-router-dom";

class TopBanner extends React.Component {
  render() {
    return (
      <div className="parent">
        <div id="row-layout-left">
          <Link to="/loginBonus">
            <button className="login">login bonus</button>
          </Link>
          <Link to="/store">
            <button className="store">store</button>
          </Link>
          <Link to="/recharge">
            <button className="recharge">recharge</button>
          </Link>
        </div>
        <div id="row-layout-right">
          <button className="x">X</button>
        </div>
      </div>
    );
  }
}

export default TopBanner;
