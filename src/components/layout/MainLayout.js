import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header, null),
    React.createElement(Navbar, null),
    React.createElement(
      "main",
      { className: "main-content container" },
      React.createElement(Outlet, null)
    ),
    React.createElement(Footer, null)
  );
}

export default MainLayout;