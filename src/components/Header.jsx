import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-icon">⚡</span> envanto <span className="logo-market">market</span>
        </div>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        </nav>
        <div className="header-buttons">
          <button className="buy-now-btn">Buy now</button>
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            &#9776;
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;