import React, { useState } from "react";
import "./MusicThemesSince2011.css";

const testimonials = [
  {
    text: "Love this theme! I'm still working on it and having some questions here and there, but the Customer Support team answers them in a timely manner and explains it clearly. Very helpful for a beginner like me.",
    author: "MMORITAI (KAYO)",
  },
  {
    text: "Customer support is super fast and super nice. It has been a few years since I touched a website so I am dusting off my cobwebs and I am not feeling bad about asking questions! Thanks guys!",
    author: "luckyyy7 (Firemaster)",
  },
  {
    text: "Haven't even finished my project yet and have already decided that this has to be one of the best themes i've ever had the pleasure of working with. It's delightfully creative and bold in ways no other theme appears to be. Huge kudos for taking the risk and releasing something for a small niche – absolutely amazing work.",
    author: "pduesterdiek (Hyperbent)",
  },
];

function MusicThemesSince2011() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const setTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="music-themes-section">
      <div className="background-text">Making Music Themes Since 2011</div>
      <div className="container">
        <h2 className="sub-title">LATEST MUSIC THEME REVIEWS</h2>
        <div className="testimonial-wrapper">
          <button className="nav-arrow left-arrow" onClick={prevTestimonial} aria-label="Previous testimonial">
            &#8592;
          </button>
          <div className="testimonial-content">
            <p className="testimonial-text">{testimonials[currentIndex].text}</p>
            <p className="testimonial-author">— {testimonials[currentIndex].author}</p>
          </div>
          <button className="nav-arrow right-arrow" onClick={nextTestimonial} aria-label="Next testimonial">
            &#8594;
          </button>
        </div>
        <div className="pagination-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setTestimonial(index);
                }
              }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MusicThemesSince2011;
