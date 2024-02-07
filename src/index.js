// React
import React from "react";
import ReactDOM from "react-dom/client";
// App
import App from "./App";
// Router
import { BrowserRouter } from "react-router-dom";
// CSS
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="freeshoutcast-test">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
