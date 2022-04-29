import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Privacy from "./routes/privacy";
import Terms from "./routes/terms";

import LightFour from "./routes/four/lightFour";
import DarkFour from "./routes/four/darkFour";

import LightThree from "./routes/three/lightThree";
import DarkThree from "./routes/three/darkThree";

import LoginBonus from "./routes/three/dark/loginBonus";
import Recharge from "./routes/three/dark/recharge";
import Store from "./routes/three/dark/store";

import LoginBonusLIGHT from "./routes/three/light/loginBonusLIGHT";
import RechargeLIGHT from "./routes/three/light/rechargeLIGHT";
import StoreLIGHT from "./routes/three/light/storeLIGHT";

const rootElement = document.getElementById("root");

const wallet = new Object();
wallet.bronze = 30;
wallet.silver = 30;
wallet.gold = 30;

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />

      <Route path="/lightThree" element={<LightThree />} />
      <Route path="/darkThree" element={<DarkThree />} />

      <Route path="/lightFour" element={<LightFour />} />
      <Route path="/darkFour" element={<DarkFour />} />

      <Route path="/loginBonus" element={<LoginBonus />} />
      <Route path="/recharge" element={<Recharge />} />
      <Route path="/store" element={<Store />} />

      <Route path="/loginBonusLIGHT" element={<LoginBonusLIGHT />} />
      <Route path="/rechargeLIGHT" element={<RechargeLIGHT />} />
      <Route path="/storeLIGHT" element={<StoreLIGHT />} />

    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
