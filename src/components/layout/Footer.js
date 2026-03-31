import React from "react";

function Footer() {
  return React.createElement(
    "footer",
    { className: "footer" },
    React.createElement(
      "div",
      { className: "container footer-container" },

      React.createElement(
        "div",
        { className: "footer-grid" },

        // Column 1
        React.createElement(
          "div",
          { className: "footer-box" },
          React.createElement("h3", null, "ABC School"),
          React.createElement(
            "p",
            null,
            "ABC School is committed to providing quality education, discipline, and a nurturing environment for all students."
          )
        ),

        // Column 2
        React.createElement(
          "div",
          { className: "footer-box" },
          React.createElement("h3", null, "Quick Links"),
          React.createElement(
            "ul",
            { className: "footer-links" },
            React.createElement(
              "li",
              null,
              React.createElement("a", { href: "/" }, "Home")
            ),
            React.createElement(
              "li",
              null,
              React.createElement("a", { href: "/about" }, "About")
            ),
            React.createElement(
              "li",
              null,
              React.createElement("a", { href: "/admission" }, "Admission")
            ),
            React.createElement(
              "li",
              null,
              React.createElement("a", { href: "/notices" }, "Notices")
            )
          )
        ),

        // Column 3
        React.createElement(
          "div",
          { className: "footer-box" },
          React.createElement("h3", null, "Contact Info"),
          React.createElement("p", null, "📍 Dhaka, Bangladesh"),
          React.createElement("p", null, "✉ info@abcschool.edu"),
          React.createElement("p", null, "📞 +880 1234-567890")
        )
      ),

      React.createElement(
        "div",
        { className: "footer-bottom" },
        React.createElement(
          "p",
          null,
          "© 2025 ABC School. All Rights Reserved."
        )
      )
    )
  );
}

export default Footer;