import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Privacy from "./routes/privacy";
import Store from "./routes/store";
import Terms from "./routes/terms";
import LightThree from "./routes/lightThree";
import DarkThree from "./routes/darkThree";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/store" element={<Store />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/lightThree" element={<LightThree />} />
      <Route path="/darkThree" element={<DarkThree />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
