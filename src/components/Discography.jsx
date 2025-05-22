import React, { useState } from "react";
import "./Discography.css";

const releases = [
  {
    artist:"Info at Right",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h40_47-450x289.jpg",
  },
  {
  
    artist: "Info at Left",
    coverImage: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h42_29-450x289.jpg",
  },
  {
   
    artist: "Wide Width",
    coverImage: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h42_46-450x289.jpg",
  },
  {
  
    artist: "Noble Chords",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h10_20-450x289.jpg",
  },
  {
   
    artist: "Ricky Singh",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h05_10-450x289.jpg",
  },
  {
  
    artist: "Noble Chords",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h00_00-450x289.jpg",
  },
  {
   
    artist: "Artist 1",
    coverImage: "https://via.placeholder.com/450x289?text=New+Release+1",
  },
  {
    title: "New Release 2",
    artist: "Artist 2",
    coverImage: "https://via.placeholder.com/450x289?text=New+Release+2",
  },
  {
    title: "New Release 3",
    artist: "Artist 3",
    coverImage: "https://via.placeholder.com/450x289?text=New+Release+3",
  },
  {
    title: "New Release 4",
    artist: "Artist 4",
    coverImage: "https://via.placeholder.com/450x289?text=New+Release+4",
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
          {releases.slice(0, 9).map((release, index) => (
            <div key={index} className="discography-item">
              <div className="discography-image-container">
                <img src={release.coverImage} alt={release.title} className="discography-image" />
              </div>
              <div className="discography-text">
                <h4>{release.title}</h4>
                <p>{release.artist}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Discography;
