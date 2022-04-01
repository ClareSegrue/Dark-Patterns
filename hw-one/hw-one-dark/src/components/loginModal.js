import "../styles/TopBanner.css";
import React from "react";
import termsOfPurchase from "./termsOfPurchase.txt";

class LoginBonus extends React.Component {
  render() {
    return (
      <div className="parent">
        <div id="row-layout-left">login streak</div>
        <div id="row-layout-right">
          <button className="x">X</button>
        </div>
      </div>
    );
  }
}

export default LoginBonus;
