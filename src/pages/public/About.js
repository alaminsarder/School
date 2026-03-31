import React from "react";
import "./About.css";

function About() {
  return React.createElement(
    React.Fragment,
    null,

    // Banner Section
    React.createElement(
      "section",
      { className: "about-banner" },
      React.createElement(
        "div",
        { className: "about-banner-overlay" },
        React.createElement(
          "div",
          { className: "container about-banner-content" },
          React.createElement("h1", null, "About ABC School"),
          React.createElement(
            "p",
            null,
            "Empowering students with knowledge, discipline, and values for a brighter future."
          )
        )
      )
    ),

    // Intro Section
    React.createElement(
      "section",
      { className: "about-section" },
      React.createElement(
        "div",
        { className: "container about-grid" },
        React.createElement(
          "div",
          { className: "about-image" },
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
            alt: "Students studying",
          })
        ),
        React.createElement(
          "div",
          { className: "about-text" },
          React.createElement("h2", null, "Who We Are"),
          React.createElement(
            "p",
            null,
            "ABC School is a leading educational institution dedicated to nurturing students with academic excellence, character development, and leadership qualities. We believe education is the foundation of a successful and meaningful life."
          ),
          React.createElement(
            "p",
            null,
            "Our school provides a supportive learning environment where students are encouraged to think creatively, act responsibly, and grow into confident individuals."
          )
        )
      )
    ),

    // Mission Vision Section
    React.createElement(
      "section",
      { className: "about-section light-bg" },
      React.createElement(
        "div",
        { className: "container mission-vision-grid" },
        React.createElement(
          "div",
          { className: "mv-box" },
          React.createElement("h3", null, "Our Mission"),
          React.createElement(
            "p",
            null,
            "To provide quality education that develops knowledge, moral values, discipline, and creativity in every student."
          )
        ),
        React.createElement(
          "div",
          { className: "mv-box" },
          React.createElement("h3", null, "Our Vision"),
          React.createElement(
            "p",
            null,
            "To become a center of excellence in education and prepare students to face future challenges with confidence and integrity."
          )
        )
      )
    ),

    // Values Section
    React.createElement(
      "section",
      { className: "about-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", { className: "section-title" }, "Our Core Values"),
        React.createElement(
          "div",
          { className: "values-grid" },
          React.createElement(
            "div",
            { className: "value-card" },
            React.createElement("h4", null, "Discipline"),
            React.createElement("p", null, "We maintain a disciplined and respectful environment.")
          ),
          React.createElement(
            "div",
            { className: "value-card" },
            React.createElement("h4", null, "Excellence"),
            React.createElement("p", null, "We inspire students to achieve their highest potential.")
          ),
          React.createElement(
            "div",
            { className: "value-card" },
            React.createElement("h4", null, "Integrity"),
            React.createElement("p", null, "We encourage honesty, ethics, and responsibility.")
          ),
          React.createElement(
            "div",
            { className: "value-card" },
            React.createElement("h4", null, "Innovation"),
            React.createElement("p", null, "We support creativity and modern learning approaches.")
          )
        )
      )
    ),

    // Achievements Section
    React.createElement(
      "section",
      { className: "about-section achievements-section" },
      React.createElement(
        "div",
        { className: "container achievements-grid" },
        React.createElement(
          "div",
          { className: "achievement-box" },
          React.createElement("h3", null, "1200+"),
          React.createElement("p", null, "Students")
        ),
        React.createElement(
          "div",
          { className: "achievement-box" },
          React.createElement("h3", null, "60+"),
          React.createElement("p", null, "Teachers & Staff")
        ),
        React.createElement(
          "div",
          { className: "achievement-box" },
          React.createElement("h3", null, "25+"),
          React.createElement("p", null, "Years of Excellence")
        ),
        React.createElement(
          "div",
          { className: "achievement-box" },
          React.createElement("h3", null, "98%"),
          React.createElement("p", null, "Success Rate")
        )
      )
    )
  );
}

export default About;