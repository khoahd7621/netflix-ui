import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import App from "./App";
import { GlobalStyles } from "./GlobalStyle";
import { Firebase } from "./libs/firebase.prod";
import { FirebaseContext } from "./context/Firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <FirebaseContext.Provider value={{ Firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
);
