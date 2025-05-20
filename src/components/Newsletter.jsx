import React from "react";
import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates, news, and offers.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit" className="btn primary-btn">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
