import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import App from "./App";
import { GlobalStyles } from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
