import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return React.createElement(
    "nav",
    { className: "navbar sticky-navbar" },
    React.createElement(
      "div",
      { className: "container nav-wrapper" },
      React.createElement(
        "ul",
        { className: "nav-links" },

        React.createElement(
          "li",
          null,
          React.createElement(
            NavLink,
            {
              to: "/",
              className: function (obj) {
                return obj.isActive ? "active-link" : "";
              },
            },
            "Home"
          )
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            NavLink,
            {
              to: "/about",
              className: function (obj) {
                return obj.isActive ? "active-link" : "";
              },
            },
            "About"
          )
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            NavLink,
            {
              to: "/admission",
              className: function (obj) {
                return obj.isActive ? "active-link" : "";
              },
            },
            "Admission"
          )
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            NavLink,
            {
              to: "/notices",
              className: function (obj) {
                return obj.isActive ? "active-link" : "";
              },
            },
            "Notices"
          )
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            NavLink,
            {
              to: "/contact",
              className: function (obj) {
                return obj.isActive ? "active-link" : "";
              },
            },
            "Contact"
          )
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            NavLink,
            {
              to: "/login",
              className: function (obj) {
                return obj.isActive ? "active-link" : "";
              },
            },
            "Login"
          )
        )
      )
    )
  );
}

export default Navbar;