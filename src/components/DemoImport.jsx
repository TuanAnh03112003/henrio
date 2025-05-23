import React from "react";
import "./DemoImport.css";

function DemoImport() {
  return (
    <section className="demo-import-section">
      <div className="demo-import-container">
        <h2 className="demo-import-title">Demo Import</h2>
        <h3 className="demo-import-subtitle">ONE-CLICK DEMO INSTALL</h3>
        <p className="demo-import-description">
          Herion includes a One-Click Demo Importer, to allow you to import the demo
          content easily. It is the cool way to set up your theme in a couple of minutes from
          this starting point.
        </p>
        <button className="demo-import-button">GET YOUR COPY</button>
      </div>
      <div className="demo-import-timeline" style={{ marginLeft: 'auto', marginRight: '100px' }}>
        <div className="timeline-line"></div>
        <div className="timeline-item">
          <div className="timeline-icon mouse-icon" aria-label="Install Herion"></div>
          <div className="timeline-text">INSTALL HERION</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon import-icon" aria-label="Import Demo Content"></div>
          <div className="timeline-text">IMPORT DEMO CONTENT</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon heart-icon" aria-label="Have Fun"></div>
          <div className="timeline-text">HAVE FUN!</div>
        </div>
      </div>
    </section>
  );
}

export default DemoImport;
