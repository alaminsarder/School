import React from "react";

function Header() {
  return React.createElement(
    "header",
    { className: "main-header" },
    React.createElement(
      "div",
      { className: "container header-content" },
      React.createElement(
        "div",
        { className: "school-brand" },
        React.createElement("div", { className: "school-logo" }, "A"),
        React.createElement(
          "div",
          { className: "school-text" },
          React.createElement("h1", null, "ABC School"),
          React.createElement(
            "p",
            null,
            "Inspiring Excellence in Education"
          )
        )
      )
    )
  );
}

export default Header;