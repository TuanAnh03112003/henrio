import React, { useState } from "react";
import "./Discography.css";
import { href } from "react-router-dom";

const releases = [
  {
    artist:"Default",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h34_39-450x289.jpg",
    href:"https://preview.wolfthemes.store/herion/release/live-without-you/",
    url:"https://preview.wolfthemes.store/herion/artist/kristy-singh/"
  },
  {
    artist: "Minimal",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h34_58-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/artist/fall-of-spice/"
  },
  {
    artist: "Dark",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h35_33-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/artist/royal-blaze/"
  },
  {
    artist: "Standard Custom Layout",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h35_53-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/artist/concord/"
  },
  {
    artist: "Discography Oriented",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h36_25-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/artist/barrage-of-obscurity/"
  },
  {
    artist: "Band Oriented",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h36_44-450x289.jpg",
    url:"https://preview.wolfthemes.store/herion/artist/residue/"
  },

];
 
const releasesListing = [
  {
    artist: "Standard",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h45_59-450x289.jpg",
   
  },
  {
    artist: "Gallery",
    coverImage: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h46_17-450x289.jpg",
  
  },
  {
    artist: "Label",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h46_37-450x289.jpg",
   
  },
  {
    artist: "Masonry",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h46_57-450x289.jpg",
   
  },
  {
    artist: "Metro",
    coverImage: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h47_24-450x289.jpg",
  
  },
 
  {
    artist: "Carousel",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h47_43-450x289.jpg",
    
  },
 
];
  
function Discography2() {
  const [activeTab, setActiveTab] = useState("singlePages");

  // Chuyển tab
  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className="discography-section">
        <h2 className="discography-title">Artist Pages</h2>
          <h3 className="artist-pages-subtitle" style={{fontWeight: 'normal', fontSize: '2rem', color: '#999', marginTop: '10px'}}>SIMPLE OR CUSTOM LAYOUTS</h3>
        <p className="artist-pages-description" style={{color: '#999', fontSize: '1rem', maxWidth: '600px', margin: '20px auto', lineHeight: '1.5', textAlign: 'center'}}>
          Herion can be used for your record label website. You can create an unlimited number of pages for each artist and choose between simple default layouts, automatically generated from the release, videos and events artist category, or create a custom page. It’s all up-to-you!
        </p>
        <div className="tabs">
          <button
            className={activeTab === "singlePages" ? "active" : ""}
            onClick={() => changeTab("singlePages")}
          >
         Artist Single Pages

          </button>
          <button
            className={activeTab === "listing" ? "active" : ""}
            onClick={() => changeTab("listing")}
          >
            Artist Listing
          </button>
        </div>

      {(activeTab === "singlePages" || activeTab === "listing") && (
        <div className="discography-grid">
          {(activeTab === "singlePages" ? releases : releasesListing).slice(0, 8).map((release, index) => (
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
  marginLeft: "450px",
  marginRight: "auto",
  textAlign: "center",
 color: "#333"
}}

          >
            and more...
          </div>
        </div>
      )}
      </section>

      <section className="artist-pages-section">
       
      
      </section>
    </>
  );
}

export default Discography2;
