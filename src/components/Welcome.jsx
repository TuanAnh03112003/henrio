import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <section className="welcome-section">
      <div className="container welcome-content">
        <h2>Welcome to Herion</h2>
        <p>Discover the best music and events curated just for you.</p>
        <div className="welcome-buttons">
          <button className="btn primary-btn">Explore More</button>
          <button className="btn secondary-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
