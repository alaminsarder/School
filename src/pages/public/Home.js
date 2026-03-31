import React from "react";
import "./Home.css";

function Home() {
  return React.createElement(
    React.Fragment,
    null,

    // Premium Hero
    React.createElement(
      "section",
      { className: "premium-hero" },
      React.createElement(
        "div",
        { className: "premium-hero-overlay" },
        React.createElement(
          "div",
          { className: "container premium-hero-content" },
          React.createElement(
            "span",
            { className: "hero-mini-badge" },
            "Welcome to ABC School"
          ),
          React.createElement(
            "h1",
            null,
            "Shaping Bright Minds for a Better Tomorrow"
          ),
          React.createElement(
            "p",
            null,
            "ABC School is committed to academic excellence, character building, modern learning, and a safe environment where every student can grow with confidence."
          ),
          React.createElement(
            "div",
            { className: "hero-action-group" },
            React.createElement(
              "a",
              { href: "/admission", className: "hero-btn hero-btn-primary" },
              "Apply for Admission"
            ),
            React.createElement(
              "a",
              { href: "/about", className: "hero-btn hero-btn-secondary" },
              "Discover More"
            )
          )
        )
      )
    ),

    // Highlight Strip
    React.createElement(
      "section",
      { className: "highlight-strip-section" },
      React.createElement(
        "div",
        { className: "container highlight-strip" },
        React.createElement(
          "div",
          { className: "highlight-box" },
          React.createElement("h3", null, "25+"),
          React.createElement("p", null, "Years of Excellence")
        ),
        React.createElement(
          "div",
          { className: "highlight-box" },
          React.createElement("h3", null, "1200+"),
          React.createElement("p", null, "Active Students")
        ),
        React.createElement(
          "div",
          { className: "highlight-box" },
          React.createElement("h3", null, "60+"),
          React.createElement("p", null, "Qualified Teachers")
        ),
        React.createElement(
          "div",
          { className: "highlight-box" },
          React.createElement("h3", null, "98%"),
          React.createElement("p", null, "Success Rate")
        )
      )
    ),

    // About Intro
    React.createElement(
      "section",
      { className: "home-section premium-about-section" },
      React.createElement(
        "div",
        { className: "container premium-about-grid" },
        React.createElement(
          "div",
          { className: "premium-about-image" },
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80",
            alt: "Students learning",
          })
        ),
        React.createElement(
          "div",
          { className: "premium-about-text" },
          React.createElement(
            "span",
            { className: "section-kicker" },
            "About Our Institution"
          ),
          React.createElement("h2", null, "A Trusted Place for Meaningful Education"),
          React.createElement(
            "p",
            null,
            "We create an environment where students can learn with discipline, confidence, creativity, and strong moral values. Our focus is on helping every child become academically capable and socially responsible."
          ),
          React.createElement(
            "div",
            { className: "about-check-list" },
            React.createElement(
              "div",
              { className: "check-item" },
              React.createElement("span", null, "✔"),
              React.createElement("p", null, "Modern teaching approach")
            ),
            React.createElement(
              "div",
              { className: "check-item" },
              React.createElement("span", null, "✔"),
              React.createElement("p", null, "Safe and disciplined environment")
            ),
            React.createElement(
              "div",
              { className: "check-item" },
              React.createElement("span", null, "✔"),
              React.createElement("p", null, "Focus on values and leadership")
            )
          )
        )
      )
    ),

    // Features
    React.createElement(
      "section",
      { className: "home-section premium-features-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "span",
          { className: "section-kicker center" },
          "Why Choose ABC School"
        ),
        React.createElement("h2", { className: "section-title center" }, "Excellence Beyond the Classroom"),
        React.createElement(
          "div",
          { className: "premium-feature-grid" },
          React.createElement(
            "div",
            { className: "premium-feature-card" },
            React.createElement("h3", null, "Academic Excellence"),
            React.createElement(
              "p",
              null,
              "We offer a strong academic foundation with experienced teachers and a student-focused learning system."
            )
          ),
          React.createElement(
            "div",
            { className: "premium-feature-card" },
            React.createElement("h3", null, "Modern Facilities"),
            React.createElement(
              "p",
              null,
              "Our students enjoy an inspiring learning environment with modern classrooms, labs, and library support."
            )
          ),
          React.createElement(
            "div",
            { className: "premium-feature-card" },
            React.createElement("h3", null, "Character Building"),
            React.createElement(
              "p",
              null,
              "We encourage honesty, discipline, respect, leadership, and responsibility in everyday school life."
            )
          )
        )
      )
    ),

    // Principal Section
    React.createElement(
      "section",
      { className: "home-section principal-premium-section" },
      React.createElement(
        "div",
        { className: "container principal-premium-grid" },
        React.createElement(
          "div",
          { className: "principal-photo-box" },
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
            alt: "Principal",
          })
        ),
        React.createElement(
          "div",
          { className: "principal-message-box" },
          React.createElement(
            "span",
            { className: "section-kicker" },
            "Leadership Message"
          ),
          React.createElement("h2", null, "Message from the Principal"),
          React.createElement(
            "p",
            null,
            "At ABC School, we believe education is not only about academic achievement but also about developing values, vision, and responsibility. We are proud to guide our students toward a bright and successful future."
          ),
          React.createElement(
            "a",
            { href: "/about", className: "read-btn" },
            "Read Full Message"
          )
        )
      )
    ),

    // Notice Preview
    React.createElement(
      "section",
      { className: "home-section notice-preview-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "section-head-flex" },
          React.createElement(
            "div",
            null,
            React.createElement(
              "span",
              { className: "section-kicker" },
              "Notice Board"
            ),
            React.createElement("h2", { className: "section-title left" }, "Latest Notices")
          ),
          React.createElement(
            "a",
            { href: "/notices", className: "view-all-link" },
            "View All"
          )
        ),
        React.createElement(
          "div",
          { className: "notice-preview-grid" },
          React.createElement(
            "div",
            { className: "notice-preview-card" },
            React.createElement("span", { className: "notice-date-pill" }, "30 Mar 2026"),
            React.createElement("h3", null, "Annual Examination Schedule Published"),
            React.createElement(
              "p",
              null,
              "The examination schedule has been published for all classes. Students are requested to follow the academic instructions."
            )
          ),
          React.createElement(
            "div",
            { className: "notice-preview-card" },
            React.createElement("span", { className: "notice-date-pill" }, "28 Mar 2026"),
            React.createElement("h3", null, "Updated Class Routine Available"),
            React.createElement(
              "p",
              null,
              "A revised class routine has been issued for all students. Please check the updated academic routine carefully."
            )
          ),
          React.createElement(
            "div",
            { className: "notice-preview-card" },
            React.createElement("span", { className: "notice-date-pill" }, "25 Mar 2026"),
            React.createElement("h3", null, "Admission Open for New Session"),
            React.createElement(
              "p",
              null,
              "Admission is open for the next academic session. Guardians are encouraged to collect the application form soon."
            )
          )
        )
      )
    ),

    // Gallery Preview
    React.createElement(
      "section",
      { className: "home-section gallery-preview-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "span",
          { className: "section-kicker center" },
          "School Life"
        ),
        React.createElement("h2", { className: "section-title center" }, "Moments from Our Campus"),
        React.createElement(
          "div",
          { className: "gallery-preview-grid" },
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
            alt: "Students",
          }),
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
            alt: "School discussion",
          }),
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
            alt: "Classroom",
          })
        )
      )
    ),

    // CTA Section
    React.createElement(
      "section",
      { className: "home-cta-section" },
      React.createElement(
        "div",
        { className: "container home-cta-box" },
        React.createElement("h2", null, "Start Your Child's Journey with ABC School"),
        React.createElement(
          "p",
          null,
          "Join a school community that values learning, discipline, creativity, and leadership."
        ),
        React.createElement(
          "a",
          { href: "/admission", className: "cta-main-btn" },
          "Apply Now"
        )
      )
    )
  );
}

export default Home;