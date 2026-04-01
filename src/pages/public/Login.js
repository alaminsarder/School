import React from "react";
import "./Login.css";

function Login() {
  return React.createElement(
    React.Fragment,
    null,

    React.createElement(
      "section",
      { className: "login-banner" },
      React.createElement(
        "div",
        { className: "login-banner-overlay" },
        React.createElement(
          "div",
          { className: "container login-banner-content" },
          React.createElement("h1", null, "Login Portal"),
          React.createElement(
            "p",
            null,
            "Access your school account securely as an Admin, Teacher, Student, or Parent."
          )
        )
      )
    ),

    React.createElement(
      "section",
      { className: "login-section" },
      React.createElement(
        "div",
        { className: "container login-grid" },

        React.createElement(
          "div",
          { className: "login-info-box" },
          React.createElement("h2", null, "Welcome Back"),
          React.createElement(
            "p",
            null,
            "Please sign in to access your dashboard, manage academic information, view notices, and stay connected with school activities."
          ),

          React.createElement(
            "div",
            { className: "login-feature" },
            React.createElement("h4", null, "Student Access"),
            React.createElement(
              "p",
              null,
              "Check notices, class information, and academic activities."
            )
          ),

          React.createElement(
            "div",
            { className: "login-feature" },
            React.createElement("h4", null, "Teacher Access"),
            React.createElement(
              "p",
              null,
              "Manage classes, student records, and educational resources."
            )
          ),

          React.createElement(
            "div",
            { className: "login-feature" },
            React.createElement("h4", null, "Parent Access"),
            React.createElement(
              "p",
              null,
              "Stay informed about your child's academic progress and school updates."
            )
          )
        ),

        React.createElement(
          "div",
          { className: "login-form-box" },
          React.createElement("h2", null, "Sign In"),

          React.createElement(
            "form",
            { className: "login-form" },

            React.createElement("label", { className: "login-label" }, "User Role"),
            React.createElement(
              "select",
              { className: "login-input" },
              React.createElement("option", null, "Select Role"),
              React.createElement("option", null, "Admin"),
              React.createElement("option", null, "Teacher"),
              React.createElement("option", null, "Student"),
              React.createElement("option", null, "Parent")
            ),

            React.createElement("label", { className: "login-label" }, "Email or Username"),
            React.createElement("input", {
              type: "text",
              placeholder: "Enter email or username",
              className: "login-input",
            }),

            React.createElement("label", { className: "login-label" }, "Password"),
            React.createElement("input", {
              type: "password",
              placeholder: "Enter password",
              className: "login-input",
            }),

            React.createElement(
              "div",
              { className: "login-options" },
              React.createElement(
                "label",
                { className: "remember-box" },
                React.createElement("input", { type: "checkbox" }),
                React.createElement("span", null, "Remember me")
              ),
              React.createElement("a", { href: "#" }, "Forgot Password?")
            ),

            React.createElement(
              "button",
              { type: "submit", className: "login-btn" },
              "Login"
            )
          )
        )
      )
    )
  );
}

export default Login;