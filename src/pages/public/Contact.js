import React from "react";
import "./Contact.css";

function Contact() {
  return React.createElement(
    React.Fragment,
    null,

    // Banner
    React.createElement(
      "section",
      { className: "contact-banner" },
      React.createElement(
        "div",
        { className: "contact-banner-overlay" },
        React.createElement(
          "div",
          { className: "container contact-banner-content" },
          React.createElement("h1", null, "Contact Us"),
          React.createElement(
            "p",
            null,
            "We are always happy to hear from students, parents, and visitors."
          )
        )
      )
    ),

    // Contact Info + Form
    React.createElement(
      "section",
      { className: "contact-section" },
      React.createElement(
        "div",
        { className: "container contact-grid" },

        React.createElement(
          "div",
          { className: "contact-info-box" },
          React.createElement("h2", null, "Get in Touch"),
          React.createElement(
            "p",
            null,
            "If you have any questions regarding admission, academic activities, or school information, feel free to contact us."
          ),

          React.createElement(
            "div",
            { className: "contact-item" },
            React.createElement("h4", null, "Address"),
            React.createElement("p", null, "ABC School, Dhaka, Bangladesh")
          ),

          React.createElement(
            "div",
            { className: "contact-item" },
            React.createElement("h4", null, "Phone"),
            React.createElement("p", null, "+880 1234-567890")
          ),

          React.createElement(
            "div",
            { className: "contact-item" },
            React.createElement("h4", null, "Email"),
            React.createElement("p", null, "info@abcschool.edu")
          ),

          React.createElement(
            "div",
            { className: "contact-item" },
            React.createElement("h4", null, "Office Hours"),
            React.createElement("p", null, "Saturday - Thursday: 8:00 AM - 3:00 PM")
          )
        ),

        React.createElement(
          "div",
          { className: "contact-form-box" },
          React.createElement("h2", null, "Send a Message"),
          React.createElement(
            "form",
            { className: "contact-form" },

            React.createElement("input", {
              type: "text",
              placeholder: "Your Name",
              className: "form-control",
            }),

            React.createElement("input", {
              type: "email",
              placeholder: "Your Email",
              className: "form-control",
            }),

            React.createElement("input", {
              type: "text",
              placeholder: "Subject",
              className: "form-control",
            }),

            React.createElement("textarea", {
              placeholder: "Your Message",
              className: "form-control textarea-control",
              rows: "6",
            }),

            React.createElement(
              "button",
              { type: "submit", className: "send-btn" },
              "Send Message"
            )
          )
        )
      )
    ),

    // Map Section
    React.createElement(
      "section",
      { className: "map-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", { className: "section-title" }, "Find Us on Map"),
        React.createElement(
          "div",
          { className: "map-box" },
          React.createElement(
            "iframe",
            {
              title: "ABC School Location",
              src: "https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed",
              width: "100%",
              height: "350",
              style: { border: "0" },
              allowFullScreen: true,
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
            }
          )
        )
      )
    )
  );
}

export default Contact;