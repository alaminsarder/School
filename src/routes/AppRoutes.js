import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Admission from "../pages/public/Admission";
import Notices from "../pages/public/Notices";
import Contact from "../pages/public/Contact";
import Login from "../pages/public/Login";

function AppRoutes() {
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(
      Routes,
      null,
      React.createElement(
        Route,
        { path: "/", element: React.createElement(MainLayout, null) },
        React.createElement(Route, {
          index: true,
          element: React.createElement(Home, null),
        }),
        React.createElement(Route, {
          path: "about",
          element: React.createElement(About, null),
        }),
        React.createElement(Route, {
          path: "admission",
          element: React.createElement(Admission, null),
        }),
        React.createElement(Route, {
          path: "notices",
          element: React.createElement(Notices, null),
        }),
        React.createElement(Route, {
          path: "contact",
          element: React.createElement(Contact, null),
        }),
        React.createElement(Route, {
          path: "login",
          element: React.createElement(Login, null),
        })
      )
    )
  );
}

export default AppRoutes;