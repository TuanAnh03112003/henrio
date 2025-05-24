import React, { useState } from "react";
import "./SellYourMerch.css";

const releases = [
  {
    artist:"Default",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/product-mp3.jpg",
    href:"https://preview.wolfthemes.store/herion/release/live-without-you/",
    url:"https://preview.wolfthemes.store/herion/artist/kristy-singh/"
  },
  {
    artist: "Minimal",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/store-alt.jpg",
    url:"https://preview.wolfthemes.store/herion/artist/fall-of-spice/"
  },
  {
    artist: "Dark",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/stor-sidebar.jpg",
    url:"https://preview.wolfthemes.store/herion/artist/royal-blaze/"
  },
  {
    artist: "Standard Custom Layout",
    coverImage: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/checkout.jpg",
    url:"https://preview.wolfthemes.store/herion/artist/concord/"
  },
  {
    artist: "Discography Oriented",
    coverImage: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/product-gallery.jpg",
    url:"https://preview.wolfthemes.store/herion/artist/barrage-of-obscurity/"
  },
  {
    artist: "Band Oriented",
    coverImage: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/product-mp3.jpg",
    url:"https://preview.wolfthemes.store/herion/artist/residue/"
  },
];

function SellYourMerch() {
  const [showFirstSet, setShowFirstSet] = useState(true);
  const visibleCount = 3;

  const prev = () => {
    setShowFirstSet(true);
  };

  const next = () => {
    setShowFirstSet(false);
  };

  const visibleReleases = showFirstSet ? releases.slice(0, visibleCount) : releases.slice(visibleCount, visibleCount * 2);

  return (
    <section className="discography-section">
      <h2 className="discography-title">Sell Your Merch</h2>
      <h3 className="artist-pages-subtitle" style={{fontWeight: 'normal', fontSize: '2rem', color: '#999', marginTop: '10px'}}>WooCommerce Shop</h3>
      <p className="artist-pages-description" style={{color: '#999', fontSize: '1rem', maxWidth: '600px', margin: '20px auto', lineHeight: '1.5', textAlign: 'center'}}>
        Sell your merch online using the most powerful and secure e-commerce WordPress theme: WooCommerce. Herion is built to integrates WooCommerce smoothly in its design.
      </p>
      <div className="carousel-container">
        <div
          className="carousel-arrow prev-arrow"
          onClick={prev}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') prev(); }}
          aria-label="Previous"
        >
          &#8592;
        </div>
        <div className="carousel-images">
          {visibleReleases.map((release, index) => (
            <a
              key={index}
              href={release.url}
              target="_blank"
              rel="noopener noreferrer"
              className="carousel-image-link"
            >
              <img
                src={release.coverImage}
                alt={release.artist}
                className="carousel-image"
              />
            </a>
          ))}
        </div>
        <div
          className="carousel-arrow next-arrow"
          onClick={next}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') next(); }}
          aria-label="Next"
        >
          &#8594;
        </div>
      </div>
    </section>
  );
}

export default SellYourMerch;
