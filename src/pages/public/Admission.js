import React from "react";
import "./Admission.css";

function Admission() {
  return React.createElement(
    React.Fragment,
    null,

    // Banner
    React.createElement(
      "section",
      { className: "admission-banner" },
      React.createElement(
        "div",
        { className: "admission-banner-overlay" },
        React.createElement(
          "div",
          { className: "container admission-banner-content" },
          React.createElement("h1", null, "Admission Open"),
          React.createElement(
            "p",
            null,
            "Join ABC School and give your child a bright academic future."
          )
        )
      )
    ),

    // Intro
    React.createElement(
      "section",
      { className: "admission-section" },
      React.createElement(
        "div",
        { className: "container admission-intro-grid" },
        React.createElement(
          "div",
          { className: "admission-intro-text" },
          React.createElement("h2", null, "Admission Information"),
          React.createElement(
            "p",
            null,
            "ABC School welcomes students who are eager to learn, grow, and achieve excellence. Our admission process is simple, transparent, and student-friendly."
          ),
          React.createElement(
            "p",
            null,
            "Parents are requested to read the admission requirements carefully and complete the application form with accurate information."
          )
        ),
        React.createElement(
          "div",
          { className: "admission-intro-image" },
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80",
            alt: "Students",
          })
        )
      )
    ),

    // Requirements
    React.createElement(
      "section",
      { className: "admission-section light-bg" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", { className: "section-title" }, "Admission Requirements"),
        React.createElement(
          "div",
          { className: "requirements-grid" },
          React.createElement(
            "div",
            { className: "requirement-card" },
            React.createElement("h3", null, "Birth Certificate"),
            React.createElement("p", null, "A photocopy of the student's birth certificate is required.")
          ),
          React.createElement(
            "div",
            { className: "requirement-card" },
            React.createElement("h3", null, "Passport Size Photo"),
            React.createElement("p", null, "Recent passport size photographs must be submitted.")
          ),
          React.createElement(
            "div",
            { className: "requirement-card" },
            React.createElement("h3", null, "Previous Report Card"),
            React.createElement("p", null, "Academic transcript/report card from previous school.")
          ),
          React.createElement(
            "div",
            { className: "requirement-card" },
            React.createElement("h3", null, "Guardian NID Copy"),
            React.createElement("p", null, "A photocopy of parent/guardian national ID card.")
          )
        )
      )
    ),

    // Process
    React.createElement(
      "section",
      { className: "admission-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", { className: "section-title" }, "Admission Process"),
        React.createElement(
          "div",
          { className: "process-list" },
          React.createElement(
            "div",
            { className: "process-item" },
            React.createElement("span", { className: "step-number" }, "1"),
            React.createElement(
              "div",
              null,
              React.createElement("h4", null, "Collect Form"),
              React.createElement("p", null, "Collect the admission form from school office or online.")
            )
          ),
          React.createElement(
            "div",
            { className: "process-item" },
            React.createElement("span", { className: "step-number" }, "2"),
            React.createElement(
              "div",
              null,
              React.createElement("h4", null, "Submit Documents"),
              React.createElement("p", null, "Submit the required documents with the filled application form.")
            )
          ),
          React.createElement(
            "div",
            { className: "process-item" },
            React.createElement("span", { className: "step-number" }, "3"),
            React.createElement(
              "div",
              null,
              React.createElement("h4", null, "Assessment / Interview"),
              React.createElement("p", null, "Student may be required to attend an interview or admission test.")
            )
          ),
          React.createElement(
            "div",
            { className: "process-item" },
            React.createElement("span", { className: "step-number" }, "4"),
            React.createElement(
              "div",
              null,
              React.createElement("h4", null, "Final Admission"),
              React.createElement("p", null, "After approval, complete admission by paying the required fees.")
            )
          )
        )
      )
    ),

    // CTA
    React.createElement(
      "section",
      { className: "admission-cta" },
      React.createElement(
        "div",
        { className: "container admission-cta-content" },
        React.createElement("h2", null, "Ready to Apply?"),
        React.createElement(
          "p",
          null,
          "Start your child's journey with ABC School today."
        ),
        React.createElement(
          "a",
          { href: "/contact", className: "apply-btn" },
          "Contact for Admission"
        )
      )
    )
  );
}

export default Admission;