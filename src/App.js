import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

function App() {
  const user = {};
  return (
    <Router>
      <Routes>
        <Route
          exact
          path={ROUTES.SIGN_IN}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact />
          }
        >
          <Route exact path={ROUTES.SIGN_IN} element={<Signin />} />
        </Route>
        <Route
          exact
          path={ROUTES.SIGN_UP}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact />
          }
        >
          <Route exact path={ROUTES.SIGN_UP} element={<Signup />} />
        </Route>
        <Route
          exact
          path={ROUTES.HOME}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} exact />
          }
        >
          <Route exact path={ROUTES.HOME} element={<Home />} />
        </Route>
        <Route
          exact
          path={ROUTES.BROWSE}
          element={<ProtectedRoute user={user} exact />}
        >
          <Route exact path={ROUTES.BROWSE} element={<Browse />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
