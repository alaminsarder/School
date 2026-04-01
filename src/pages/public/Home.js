import React from "react";
import "./Home.css";

function Home() {
  return React.createElement(
    React.Fragment,
    null,

    React.createElement(
      "section",
      { className: "home-hero" },
      React.createElement(
        "div",
        { className: "home-hero-overlay" },
        React.createElement(
          "div",
          { className: "container home-hero-content" },
          React.createElement(
            "div",
            { className: "home-hero-text" },
            React.createElement(
              "span",
              { className: "home-hero-badge" },
              "Welcome to ABC School"
            ),
            React.createElement(
              "h1",
              null,
              "Building Future Leaders Through Quality Education"
            ),
            React.createElement(
              "p",
              null,
              "We provide a safe, inspiring, and modern learning environment where students grow with knowledge, discipline, creativity, and strong moral values."
            ),
            React.createElement(
              "div",
              { className: "home-hero-buttons" },
              React.createElement(
                "a",
                { href: "/admission", className: "home-btn home-btn-primary" },
                "Apply for Admission"
              ),
              React.createElement(
                "a",
                { href: "/about", className: "home-btn home-btn-secondary" },
                "Explore School"
              )
            )
          )
        )
      )
    ),

    React.createElement(
      "section",
      { className: "home-section" },
      React.createElement(
        "div",
        { className: "container home-intro-grid" },
        React.createElement(
          "div",
          { className: "home-intro-image" },
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
            alt: "Students learning in classroom",
          })
        ),
        React.createElement(
          "div",
          { className: "home-intro-text" },
          React.createElement(
            "span",
            { className: "home-section-tag" },
            "About Our School"
          ),
          React.createElement(
            "h2",
            null,
            "A Modern School for Meaningful Learning"
          ),
          React.createElement(
            "p",
            null,
            "Our school is committed to academic excellence, character development, and co-curricular success. We believe every student deserves opportunities to learn, lead, and shine."
          ),
          React.createElement(
            "div",
            { className: "home-intro-points" },
            React.createElement(
              "div",
              { className: "home-point-card" },
              React.createElement("h4", null, "Academic Excellence"),
              React.createElement(
                "p",
                null,
                "Strong curriculum and focused learning support."
              )
            ),
            React.createElement(
              "div",
              { className: "home-point-card" },
              React.createElement("h4", null, "Safe Environment"),
              React.createElement(
                "p",
                null,
                "A secure, disciplined, and student-friendly campus."
              )
            )
          )
        )
      )
    ),

    React.createElement(
      "section",
      { className: "home-section home-features-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "span",
          { className: "home-section-tag center" },
          "Why Choose Us"
        ),
        React.createElement(
          "h2",
          { className: "home-section-title center" },
          "Excellence Beyond the Classroom"
        ),
        React.createElement(
          "div",
          { className: "home-features-grid" },
          React.createElement(
            "div",
            { className: "home-feature-card" },
            React.createElement("h3", null, "Qualified Teachers"),
            React.createElement(
              "p",
              null,
              "Our dedicated teachers provide high-quality instruction and personal guidance."
            )
          ),
          React.createElement(
            "div",
            { className: "home-feature-card" },
            React.createElement("h3", null, "Digital Learning"),
            React.createElement(
              "p",
              null,
              "Modern classroom practices and digital tools enhance the learning experience."
            )
          ),
          React.createElement(
            "div",
            { className: "home-feature-card" },
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

    React.createElement(
      "section",
      { className: "home-section" },
      React.createElement(
        "div",
        { className: "container home-message-grid" },
        React.createElement(
          "div",
          { className: "home-message-image" },
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
            alt: "School discussion",
          })
        ),
        React.createElement(
          "div",
          { className: "home-message-box" },
          React.createElement(
            "span",
            { className: "home-section-tag" },
            "Principal's Message"
          ),
          React.createElement("h2", null, "Message from the Principal"),
          React.createElement(
            "p",
            null,
            "Welcome to our official school website. Our mission is to provide meaningful education that inspires confidence, creativity, and lifelong learning. We work together to help each student achieve his or her full potential."
          ),
          React.createElement(
            "a",
            { href: "/about", className: "home-read-link" },
            "Read More"
          )
        )
      )
    ),

    React.createElement(
      "section",
      { className: "home-section home-notice-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "span",
          { className: "home-section-tag center" },
          "Latest Updates"
        ),
        React.createElement(
          "h2",
          { className: "home-section-title center" },
          "Recent Notices"
        ),
        React.createElement(
          "div",
          { className: "home-notice-list" },
          React.createElement(
            "div",
            { className: "home-notice-item" },
            React.createElement("span", { className: "home-notice-date" }, "30 Mar 2026"),
            React.createElement("p", null, "Annual Examination will begin from the first week of next month.")
          ),
          React.createElement(
            "div",
            { className: "home-notice-item" },
            React.createElement("span", { className: "home-notice-date" }, "28 Mar 2026"),
            React.createElement("p", null, "Updated class routine has been published for all classes.")
          ),
          React.createElement(
            "div",
            { className: "home-notice-item" },
            React.createElement("span", { className: "home-notice-date" }, "25 Mar 2026"),
            React.createElement("p", null, "Admission is now open for the upcoming academic session.")
          )
        )
      )
    ),

    React.createElement(
      "section",
      { className: "home-section home-gallery-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "span",
          { className: "home-section-tag center" },
          "Campus Life"
        ),
        React.createElement(
          "h2",
          { className: "home-section-title center" },
          "A Glimpse of Our School"
        ),
        React.createElement(
          "div",
          { className: "home-gallery-grid" },
          React.createElement(
            "div",
            { className: "home-gallery-card" },
            React.createElement("img", {
              src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
              alt: "Classroom learning",
            })
          ),
          React.createElement(
            "div",
            { className: "home-gallery-card" },
            React.createElement("img", {
              src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
              alt: "Books and learning",
            })
          ),
          React.createElement(
            "div",
            { className: "home-gallery-card" },
            React.createElement("img", {
              src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
              alt: "Students activity",
            })
          )
        )
      )
    ),

    React.createElement(
      "section",
      { className: "home-section home-stats-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "span",
          { className: "home-section-tag center light" },
          "Our Achievement"
        ),
        React.createElement(
          "h2",
          { className: "home-section-title center light" },
          "Numbers That Reflect Our Excellence"
        ),
        React.createElement(
          "div",
          { className: "home-stats-grid" },
          React.createElement(
            "div",
            { className: "home-stat-box" },
            React.createElement("h3", null, "1200+"),
            React.createElement("p", null, "Students")
          ),
          React.createElement(
            "div",
            { className: "home-stat-box" },
            React.createElement("h3", null, "60+"),
            React.createElement("p", null, "Teachers & Staff")
          ),
          React.createElement(
            "div",
            { className: "home-stat-box" },
            React.createElement("h3", null, "25+"),
            React.createElement("p", null, "Years of Excellence")
          ),
          React.createElement(
            "div",
            { className: "home-stat-box" },
            React.createElement("h3", null, "98%"),
            React.createElement("p", null, "Success Rate")
          )
        )
      )
    )
  );
}

export default Home;