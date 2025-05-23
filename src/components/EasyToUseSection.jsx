import React, { useState, useEffect, useRef } from "react";
import "./EasyToUseSection.css";

function EasyToUseSection() {
  const [demoCount, setDemoCount] = useState(0);
  const [contentCount, setContentCount] = useState(0);

  const demoTarget = 200;
  const contentTarget = 100;

  const demoRef = useRef(0);
  const contentRef = useRef(0);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      if (demoRef.current < demoTarget) {
        demoRef.current += 5;
        if (demoRef.current > demoTarget) demoRef.current = demoTarget;
        setDemoCount(demoRef.current);
      }

      if (contentRef.current < contentTarget) {
        contentRef.current += 3;
        if (contentRef.current > contentTarget) contentRef.current = contentTarget;
        setContentCount(contentRef.current);
      }

      if (demoRef.current < demoTarget || contentRef.current < contentTarget) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="easy-to-use-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="image-wrapper">
            <img
              src="https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/admin-1.png"
              alt="Easy to use"
              className="easy-to-use-image"
            />
          </div>
          <div className="text-content">
            <h2 className="title">Easy To Use</h2>
            <h3 className="subtitle">NO CODING REQUIRED</h3>
            <p className="description">
              Herion comes with an advanced drag and drop page builder to help you create your website easily and quickly.
            </p>
          </div>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">{demoCount}+</span>
              <span className="stat-label">DEMO LAYOUTS</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{contentCount}+</span>
              <span className="stat-label">CONTENT ELEMENTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EasyToUseSection;
