import React from "react";
import { Route, Routes, Navigate, Outlet, useRoutes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { UserProvider } from "../hooks/User";
import { isAuthenticated } from "../services/auth";
import CashFlow from "../views/CashFlow";
import Dashboard from "../views/Dashboard";
import Expenses from "../views/Expenses";

import Home from "../views/Home";
import Login from "../views/Login";

const PrivateRoute = ({ component: Component }) => {
  if (window.location.pathname === "/" && isAuthenticated()) {
    window.location = "/dashboard";
  }
  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/login" }} />
  );
};

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route
          path="/login"
          element={
            <UserProvider>
              <Login />
            </UserProvider>
          }
        />
        <Route
          path="/dashboard"
          element={
            <UserProvider>
              <Dashboard />
            </UserProvider>
          }
        />
        <Route
          path="/expenses"
          element={
            <UserProvider>
              <Expenses />
            </UserProvider>
          }
        />
        <Route
          path="/cashflow"
          element={
            <UserProvider>
              <CashFlow />
            </UserProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default MainRoute;
