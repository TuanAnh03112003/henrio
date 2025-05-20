import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <section className="gallery-section">
      <div className="container">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/gallery1.jpg" alt="Gallery 1" />
            <div className="gallery-overlay">
              <h3>Live Concert</h3>
              <p>Experience the energy of live music</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/gallery2.jpg" alt="Gallery 2" />
            <div className="gallery-overlay">
              <h3>Music Festival</h3>
              <p>Join the biggest festivals around the world</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/gallery3.jpg" alt="Gallery 3" />
            <div className="gallery-overlay">
              <h3>Studio Session</h3>
              <p>Behind the scenes of music production</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
