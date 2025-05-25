import React, { useState } from "react";
import "./Discography3.css";
import { href } from "react-router-dom";
import FeaturesSection from "./FeaturesSection";


const releases = [
  {
    artist:"About Us",
    coverImage: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h36_33-450x289.jpg",
    href:"https://preview.wolfthemes.store/herion/release/live-without-you/",
    url:"https://preview.wolfthemes.store/herion/pages/about-us/"
  },
  {
    artist: "About the Band",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h37_17-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/pages/about-the-band/"
  },
  {
    artist: "About Me",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h37_29-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/pages/about-me/"
  },
  {
    artist: "Our Team",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h37_54-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/pages/our-team/"
  },
  {
    artist: "What We Do",
    coverImage: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h38_12-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/pages/what-we-do/"
  },
  {
    artist: "Get In Touch",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h39_08-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/pages/get-in-touch/"
  },
   {
    artist: "Contact Us",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h38_52-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/pages/contact-us/"//preview.wolfthemes.store/herion/artist/concord/"
  },
  {
    artist: "Coming Soon",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h39_21-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/coming-soon/"
  },
  {
    artist: "Maintenance",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h40_05-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/maintenance/"
  },
];

function Discography3() {
  const [activeTab, setActiveTab] = useState("singlePages");

  // Chuyển tab
  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className="discography-section">
        <h2 className="discography-title">9 Templates</h2>
          <h3 className="artist-pages-subtitle" style={{fontWeight: 'normal', fontSize: '2rem', color: '#999', marginTop: '10px'}}>Inner Pages</h3>
        <p className="artist-pages-description" style={{color: '#999', fontSize: '1rem', maxWidth: '600px', margin: '20px auto', lineHeight: '1.5', textAlign: 'center'}}>
          We also created pre-made inner page layouts to make your life easier and allows you to put your site online as quickly as possible.uts, automatically generated from the release, videos and events artist category, or create a custom page. It’s all up-to-you!
        </p>
        <div className="tabs">
          <button
            className={activeTab === "singlePages" ? "active" : ""}
            onClick={() => changeTab("singlePages")}
          >
       
          </button>
        </div>

      {activeTab === "singlePages" && (
        <div className="discography-grid">
          {releases.slice(0, 9).map((release, index) => (
            <div key={index} className="discography-item">
              <>
                <div className="discography-image-container">
                  <a href={release.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={release.coverImage}
                      alt={release.title}
                      className="discography-image"
                      style={{ width: "429px", height: "276px", objectFit: "cover" }}
                    />
                  </a>
                </div>
                <div className="discography-text">
                  <h4>{release.title}</h4>
                  <p>{release.artist}</p>
                </div>
              </>
            </div>
          ))}
          <div
            className="discography-text"
            style={{
              fontSize: "2em",
              fontStyle: "italic",
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "auto",
              textAlign: "center",
              width: "100%",
              position: "relative",
              marginTop: "40px",
              marginBottom: "40px",
              marginLeft: "auto",
              marginRight: "auto",
              color: "#333"
            }}
          >
          </div>
        </div>
      )}
      </section>

      <section className="artist-pages-section">
      </section>

      <FeaturesSection />
    
    </>
  );
}

export default Discography3;
