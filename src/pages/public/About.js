import React from "react";
import "./About.css";

function About() {
  return React.createElement(
    React.Fragment,
    null,

    // Hero Section
    React.createElement(
      "section",
      { className: "about-premium-hero" },
      React.createElement(
        "div",
        { className: "about-premium-overlay" },
        React.createElement(
          "div",
          { className: "container about-premium-hero-content" },
          React.createElement(
            "span",
            { className: "about-hero-badge" },
            "Welcome to ABC School"
          ),
          React.createElement("h1", null, "Inspiring Excellence, Building Character"),
          React.createElement(
            "p",
            null,
            "ABC School is dedicated to providing quality education, strong values, and a student-centered environment where future leaders are shaped with confidence and care."
          )
        )
      )
    ),

    // Story Section
    React.createElement(
      "section",
      { className: "about-premium-section" },
      React.createElement(
        "div",
        { className: "container about-story-grid" },
        React.createElement(
          "div",
          { className: "about-story-image" },
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
            alt: "Students in classroom",
          })
        ),
        React.createElement(
          "div",
          { className: "about-story-text" },
          React.createElement(
            "span",
            { className: "section-kicker" },
            "Who We Are"
          ),
          React.createElement("h2", null, "A Trusted Name in Quality Education"),
          React.createElement(
            "p",
            null,
            "ABC School has built a reputation for academic excellence, discipline, and holistic student development. We work to ensure that every learner receives not only knowledge, but also the confidence and values needed for life."
          ),
          React.createElement(
            "p",
            null,
            "With experienced teachers, modern teaching methods, and a nurturing environment, we guide students to become responsible citizens and successful individuals."
          )
        )
      )
    ),

    // Mission Vision
    React.createElement(
      "section",
      { className: "about-premium-section about-light-bg" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "section-heading center" },
          React.createElement(
            "span",
            { className: "section-kicker center" },
            "Our Purpose"
          ),
          React.createElement("h2", { className: "section-title center" }, "Mission & Vision")
        ),
        React.createElement(
          "div",
          { className: "mission-vision-cards" },
          React.createElement(
            "div",
            { className: "mv-premium-card" },
            React.createElement("h3", null, "Our Mission"),
            React.createElement(
              "p",
              null,
              "To provide quality education that develops students intellectually, morally, socially, and creatively through discipline, innovation, and care."
            )
          ),
          React.createElement(
            "div",
            { className: "mv-premium-card" },
            React.createElement("h3", null, "Our Vision"),
            React.createElement(
              "p",
              null,
              "To become a center of excellence where students are inspired to lead, serve, and succeed in a rapidly changing world."
            )
          )
        )
      )
    ),

    // Values Section
    React.createElement(
      "section",
      { className: "about-premium-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "section-heading center" },
          React.createElement(
            "span",
            { className: "section-kicker center" },
            "What We Believe"
          ),
          React.createElement("h2", { className: "section-title center" }, "Our Core Values")
        ),
        React.createElement(
          "div",
          { className: "values-premium-grid" },
          React.createElement(
            "div",
            { className: "value-premium-card" },
            React.createElement("h4", null, "Discipline"),
            React.createElement("p", null, "We maintain a respectful, structured, and focused academic environment.")
          ),
          React.createElement(
            "div",
            { className: "value-premium-card" },
            React.createElement("h4", null, "Integrity"),
            React.createElement("p", null, "We encourage honesty, responsibility, ethics, and accountability.")
          ),
          React.createElement(
            "div",
            { className: "value-premium-card" },
            React.createElement("h4", null, "Excellence"),
            React.createElement("p", null, "We inspire every learner to achieve their highest academic potential.")
          ),
          React.createElement(
            "div",
            { className: "value-premium-card" },
            React.createElement("h4", null, "Leadership"),
            React.createElement("p", null, "We prepare students to lead with confidence, compassion, and purpose.")
          )
        )
      )
    ),

    // Achievements
    React.createElement(
      "section",
      { className: "about-premium-achievement-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "section-heading center" },
          React.createElement(
            "span",
            { className: "section-kicker center white" },
            "Our Impact"
          ),
          React.createElement("h2", { className: "section-title center white" }, "Achievements & Strength")
        ),
        React.createElement(
          "div",
          { className: "achievement-premium-grid" },
          React.createElement(
            "div",
            { className: "achievement-premium-box" },
            React.createElement("h3", null, "1200+"),
            React.createElement("p", null, "Students")
          ),
          React.createElement(
            "div",
            { className: "achievement-premium-box" },
            React.createElement("h3", null, "60+"),
            React.createElement("p", null, "Teachers & Staff")
          ),
          React.createElement(
            "div",
            { className: "achievement-premium-box" },
            React.createElement("h3", null, "25+"),
            React.createElement("p", null, "Years of Excellence")
          ),
          React.createElement(
            "div",
            { className: "achievement-premium-box" },
            React.createElement("h3", null, "98%"),
            React.createElement("p", null, "Academic Success")
          )
        )
      )
    ),

    // CTA
    React.createElement(
      "section",
      { className: "about-premium-cta" },
      React.createElement(
        "div",
        { className: "container about-cta-box" },
        React.createElement("h2", null, "Become a Part of ABC School"),
        React.createElement(
          "p",
          null,
          "Join a school community that believes in knowledge, values, discipline, and lifelong success."
        ),
        React.createElement(
          "a",
          { href: "/admission", className: "about-cta-btn" },
          "Apply for Admission"
        )
      )
    )
  );
}

export default About;