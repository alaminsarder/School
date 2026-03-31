import React from "react";
import "./Home.css";

function Home() {
  return React.createElement(
    React.Fragment,
    null,

    // Hero Section
    React.createElement(
      "section",
      { className: "hero-section" },
      React.createElement(
        "div",
        { className: "hero-overlay" },
        React.createElement(
          "div",
          { className: "container hero-content" },
          React.createElement(
            "div",
            { className: "hero-text" },
            React.createElement("span", { className: "hero-badge" }, "Welcome to Our School"),
            React.createElement("h1", null, "Building Future Leaders Through Quality Education"),
            React.createElement(
              "p",
              null,
              "We provide a safe, inspiring, and modern learning environment where students grow with knowledge, discipline, creativity, and strong moral values."
            ),
            React.createElement(
              "div",
              { className: "hero-buttons" },
              React.createElement(
                "a",
                { href: "/admission", className: "btn primary-btn" },
                "Apply for Admission"
              ),
              React.createElement(
                "a",
                { href: "/about", className: "btn secondary-btn" },
                "Explore School"
              )
            )
          )
        )
      )
    ),

    // Intro Section
    React.createElement(
      "section",
      { className: "section intro-section" },
      React.createElement(
        "div",
        { className: "container intro-grid" },
        React.createElement(
          "div",
          { className: "intro-image" },
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
            alt: "Students in classroom",
          })
        ),
        React.createElement(
          "div",
          { className: "intro-text" },
          React.createElement("h2", null, "A Modern School for Meaningful Learning"),
          React.createElement(
            "p",
            null,
            "Our school is committed to academic excellence, character development, and co-curricular success. We believe every student deserves opportunities to learn, lead, and shine."
          ),
          React.createElement(
            "div",
            { className: "intro-points" },
            React.createElement(
              "div",
              { className: "point-item" },
              React.createElement("h4", null, "Academic Excellence"),
              React.createElement("p", null, "Strong curriculum and focused learning support.")
            ),
            React.createElement(
              "div",
              { className: "point-item" },
              React.createElement("h4", null, "Safe Environment"),
              React.createElement("p", null, "A secure, disciplined, and student-friendly campus.")
            )
          )
        )
      )
    ),

    // Feature Cards
    React.createElement(
      "section",
      { className: "section features-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", { className: "section-title" }, "Why Choose Our School"),
        React.createElement(
          "p",
          { className: "section-subtitle" },
          "We prepare students for academic achievement and responsible citizenship."
        ),
        React.createElement(
          "div",
          { className: "features-grid" },
          React.createElement(
            "div",
            { className: "feature-card" },
            React.createElement("h3", null, "Qualified Teachers"),
            React.createElement(
              "p",
              null,
              "Our dedicated teachers provide high-quality instruction and personal guidance."
            )
          ),
          React.createElement(
            "div",
            { className: "feature-card" },
            React.createElement("h3", null, "Digital Learning"),
            React.createElement(
              "p",
              null,
              "Modern classroom practices and digital tools enhance the learning experience."
            )
          ),
          React.createElement(
            "div",
            { className: "feature-card" },
            React.createElement("h3", null, "Discipline & Values"),
            React.createElement(
              "p",
              null,
              "We focus on ethics, leadership, discipline, and positive social behavior."
            )
          )
        )
      )
    ),

    // Principal Message
    React.createElement(
      "section",
      { className: "section message-section" },
      React.createElement(
        "div",
        { className: "container message-grid" },
        React.createElement(
          "div",
          { className: "message-image" },
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
            alt: "School discussion",
          })
        ),
        React.createElement(
          "div",
          { className: "message-box" },
          React.createElement("h2", null, "Principal's Message"),
          React.createElement(
            "p",
            null,
            "Welcome to our official school website. Our mission is to provide meaningful education that inspires confidence, creativity, and lifelong learning. We work together to help each student achieve his or her full potential."
          ),
          React.createElement("a", { href: "/about", className: "read-more-btn" }, "Read More")
        )
      )
    ),

    // Notice Section
    React.createElement(
      "section",
      { className: "section notice-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", { className: "section-title" }, "Latest Notices"),
        React.createElement(
          "div",
          { className: "notice-list" },
          React.createElement(
            "div",
            { className: "notice-item" },
            React.createElement("span", { className: "notice-date" }, "30 Mar 2026"),
            React.createElement("p", null, "Annual Examination will begin from the first week of next month.")
          ),
          React.createElement(
            "div",
            { className: "notice-item" },
            React.createElement("span", { className: "notice-date" }, "28 Mar 2026"),
            React.createElement("p", null, "Updated class routine has been published for all classes.")
          ),
          React.createElement(
            "div",
            { className: "notice-item" },
            React.createElement("span", { className: "notice-date" }, "25 Mar 2026"),
            React.createElement("p", null, "Admission is now open for the upcoming academic session.")
          )
        )
      )
    ),

    // Gallery Preview
    React.createElement(
      "section",
      { className: "section gallery-preview-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", { className: "section-title" }, "Campus Life"),
        React.createElement(
          "div",
          { className: "gallery-grid" },
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
            alt: "Students in school",
          }),
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
            alt: "Student group",
          }),
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
            alt: "Graduation students",
          })
        )
      )
    ),

    // Stats
    React.createElement(
      "section",
      { className: "section stats-section" },
      React.createElement(
        "div",
        { className: "container stats-grid" },
        React.createElement(
          "div",
          { className: "stat-box" },
          React.createElement("h3", null, "1200+"),
          React.createElement("p", null, "Students")
        ),
        React.createElement(
          "div",
          { className: "stat-box" },
          React.createElement("h3", null, "60+"),
          React.createElement("p", null, "Teachers & Staff")
        ),
        React.createElement(
          "div",
          { className: "stat-box" },
          React.createElement("h3", null, "25+"),
          React.createElement("p", null, "Years of Excellence")
        ),
        React.createElement(
          "div",
          { className: "stat-box" },
          React.createElement("h3", null, "98%"),
          React.createElement("p", null, "Success Rate")
        )
      )
    )
  );
}

export default Home;