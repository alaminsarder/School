import React from "react";
import "./Notices.css";

function Notices() {
  return React.createElement(
    React.Fragment,
    null,

    // Hero Banner
    React.createElement(
      "section",
      { className: "notices-hero" },
      React.createElement(
        "div",
        { className: "notices-hero-overlay" },
        React.createElement(
          "div",
          { className: "container notices-hero-content" },
          React.createElement(
            "span",
            { className: "hero-tag" },
            "Official Notice Board"
          ),
          React.createElement("h1", null, "Latest School Notices & Announcements"),
          React.createElement(
            "p",
            null,
            "Find important notices, academic updates, examination schedules, admission announcements, and school office circulars in one place."
          )
        )
      )
    ),

    // Filter Header
    React.createElement(
      "section",
      { className: "notice-filter-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "notice-filter-box" },
          React.createElement(
            "div",
            { className: "notice-filter-left" },
            React.createElement("h2", null, "Notice Archive"),
            React.createElement(
              "p",
              null,
              "Browse recent and archived notices published by ABC School."
            )
          ),
          React.createElement(
            "div",
            { className: "notice-filter-right" },
            React.createElement("input", {
              type: "text",
              placeholder: "Search notices...",
              className: "notice-search-input",
            })
          )
        )
      )
    ),

    // Notice List
    React.createElement(
      "section",
      { className: "notices-main-section" },
      React.createElement(
        "div",
        { className: "container notice-list-wrap" },

        // Notice Card 1
        React.createElement(
          "div",
          { className: "notice-pro-card" },
          React.createElement(
            "div",
            { className: "notice-pro-date" },
            React.createElement("span", { className: "notice-pro-day" }, "30"),
            React.createElement("span", { className: "notice-pro-month" }, "Mar 2026")
          ),
          React.createElement(
            "div",
            { className: "notice-pro-content" },
            React.createElement(
              "div",
              { className: "notice-meta" },
              React.createElement("span", { className: "notice-badge academic" }, "Academic"),
              React.createElement("span", { className: "notice-published" }, "Published by Office Admin")
            ),
            React.createElement("h3", null, "Annual Examination Schedule Published"),
            React.createElement(
              "p",
              null,
              "The annual examination schedule for all classes has been officially published. Students are requested to collect the updated routine and prepare accordingly."
            ),
            React.createElement(
              "div",
              { className: "notice-actions" },
              React.createElement("a", { href: "#", className: "notice-btn primary" }, "View Details"),
              React.createElement("a", { href: "#", className: "notice-btn secondary" }, "Download PDF")
            )
          )
        ),

        // Notice Card 2
        React.createElement(
          "div",
          { className: "notice-pro-card" },
          React.createElement(
            "div",
            { className: "notice-pro-date" },
            React.createElement("span", { className: "notice-pro-day" }, "28"),
            React.createElement("span", { className: "notice-pro-month" }, "Mar 2026")
          ),
          React.createElement(
            "div",
            { className: "notice-pro-content" },
            React.createElement(
              "div",
              { className: "notice-meta" },
              React.createElement("span", { className: "notice-badge routine" }, "Routine"),
              React.createElement("span", { className: "notice-published" }, "Published by Academic Office")
            ),
            React.createElement("h3", null, "Updated Class Routine for All Sections"),
            React.createElement(
              "p",
              null,
              "A revised class routine has been issued for all sections. Students and guardians are requested to follow the new schedule from next week."
            ),
            React.createElement(
              "div",
              { className: "notice-actions" },
              React.createElement("a", { href: "#", className: "notice-btn primary" }, "View Details"),
              React.createElement("a", { href: "#", className: "notice-btn secondary" }, "Download PDF")
            )
          )
        ),

        // Notice Card 3
        React.createElement(
          "div",
          { className: "notice-pro-card" },
          React.createElement(
            "div",
            { className: "notice-pro-date" },
            React.createElement("span", { className: "notice-pro-day" }, "25"),
            React.createElement("span", { className: "notice-pro-month" }, "Mar 2026")
          ),
          React.createElement(
            "div",
            { className: "notice-pro-content" },
            React.createElement(
              "div",
              { className: "notice-meta" },
              React.createElement("span", { className: "notice-badge admission" }, "Admission"),
              React.createElement("span", { className: "notice-published" }, "Published by Admission Cell")
            ),
            React.createElement("h3", null, "Admission Open for New Academic Session"),
            React.createElement(
              "p",
              null,
              "Admission for the upcoming academic session is now open. Interested guardians are requested to collect the form and submit the required documents within the deadline."
            ),
            React.createElement(
              "div",
              { className: "notice-actions" },
              React.createElement("a", { href: "#", className: "notice-btn primary" }, "View Details"),
              React.createElement("a", { href: "#", className: "notice-btn secondary" }, "Download PDF")
            )
          )
        ),

        // Notice Card 4
        React.createElement(
          "div",
          { className: "notice-pro-card" },
          React.createElement(
            "div",
            { className: "notice-pro-date" },
            React.createElement("span", { className: "notice-pro-day" }, "22"),
            React.createElement("span", { className: "notice-pro-month" }, "Mar 2026")
          ),
          React.createElement(
            "div",
            { className: "notice-pro-content" },
            React.createElement(
              "div",
              { className: "notice-meta" },
              React.createElement("span", { className: "notice-badge holiday" }, "Holiday"),
              React.createElement("span", { className: "notice-published" }, "Published by School Authority")
            ),
            React.createElement("h3", null, "Holiday Notice"),
            React.createElement(
              "p",
              null,
              "The school will remain closed on the occasion of the national holiday. All regular academic and office activities will resume on the next working day."
            ),
            React.createElement(
              "div",
              { className: "notice-actions" },
              React.createElement("a", { href: "#", className: "notice-btn primary" }, "View Details"),
              React.createElement("a", { href: "#", className: "notice-btn secondary" }, "Download PDF")
            )
          )
        )
      )
    )
  );
}

export default Notices;