import React, { useState } from "react";
import "./Discography.css";
import { href } from "react-router-dom";

const releases = [
  {
    artist:"Info at Right",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h40_47-450x289.jpg",
  url:"https://preview.wolfthemes.store/herion/release/live-without-you/"
  },
  {
  
    artist: "Info at Left",
    coverImage: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h42_29-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/release/power-over-me/"
  },
  {
   
    artist: "Wide Width",
    coverImage: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h42_46-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/release/drai-baka/"
  },
  {
  
    artist: "Custom Header",
    coverImage: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h43_05-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/release/sunset-skies/"
  },
  {
   
    artist: "Custom Layout",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h43_40-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/release/release-1/"
  },
  {
  
    artist: "Text Oriented",
    coverImage: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h44_00-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/release/hallow/"
  },
  {
   
    artist: "Compact",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h44_16-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/release/around-the-moon/"
  },
  {
   
    artist: "Minimal ",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h44_32-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/release/xndria/"
  },
  {
    isAndMore: true,
  },
];

const releasesListing = [
  {
    artist: "Standard",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h48_04-450x289.jpg",
    url: "https://preview.wolfthemes.store/herion/release/live-without-you/"
  },
  {
    artist: "Gallery",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h49_28-450x289.jpg",
    url: "https://preview.wolfthemes.store/herion/release/live-without-you/"
  },
  {
    artist: "Label",
    coverImage: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h49_46-450x289.jpg",
    url: "https://preview.wolfthemes.store/herion/release/live-without-you/"
  },
  {
    artist: "Broken Grid",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h50_04-450x289.jpg",
    url: "https://preview.wolfthemes.store/herion/release/live-without-you/"
  },
  {
    artist: "Animated Cover",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h50_04-450x289.jpg",
    url: "https://preview.wolfthemes.store/herion/release/live-without-you/"
  },
  {
    artist: "Metro",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h50_35-450x289.jpg",
    url: "https://preview.wolfthemes.store/herion/release/live-without-you/"
  },
  {
    artist: "Filtered",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_13h02_49-450x289.jpg",
    url: "https://preview.wolfthemes.store/herion/release/live-without-you/"
  },
  {
    artist: "Carousel",
    coverImage: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_13h03_06-450x289.jpg",
    url: "https://preview.wolfthemes.store/herion/release/live-without-you/"
  },
   {
    isAndMore: true,
  },
];

function Discography() {
  const [activeTab, setActiveTab] = useState("singlePages");

  // Chuyển tab
  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="discography-section">
      <h2 className="discography-title">Discography</h2>
      <div className="tabs">
        <button
          className={activeTab === "singlePages" ? "active" : ""}
          onClick={() => changeTab("singlePages")}
        >
          RELEASE SINGLE PAGES
        </button>
        <button
          className={activeTab === "listing" ? "active" : ""}
          onClick={() => changeTab("listing")}
        >
          RELEASE LISTING
        </button>
      </div>

      {(activeTab === "singlePages" || activeTab === "listing") && (
        <div className="discography-grid">
          {(activeTab === "singlePages" ? releases : releasesListing).slice(0, 9).map((release, index) => (
            <div key={index} className="discography-item">
              {release.isAndMore ? (
                <div
                  className="discography-text"
                  style={{
                    fontWeight: "bold",
                    fontSize: "4em",
                    fontStyle: "italic",
                    fontFamily: "'Brush Script MT', cursive",
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  and more...
                </div>
              ) : (
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
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Discography;
