import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route exact path={ROUTES.BROWSE} element={<Browse />} />
        <Route exact path={ROUTES.SIGN_IN} element={<Signin />} />
        <Route exact path={ROUTES.SIGN_UP} element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
