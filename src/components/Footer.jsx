import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="logo">Herion</div>
          <p>© 2024 Herion. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#pages">Pages</a>
            <a href="#releases">Releases</a>
            <a href="#artists">Artists</a>
            <a href="#events">Events</a>
            <a href="#videos">Videos</a>
            <a href="#shop">Shop</a>
            <a href="#blog">Blog</a>
            <a href="#elements">Elements</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
