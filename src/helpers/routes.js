import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const IsUserRedirect = ({ user, loggedInPath, ...rest }) => {
  return user ? <Navigate {...rest} to={loggedInPath} /> : <Outlet />;
};

export const ProtectedRoute = ({ user, location, ...rest }) => {
  return user ? (
    <Outlet />
  ) : (
    <Navigate {...rest} to={"/signin"} state={{ from: location }} />
  );
};
