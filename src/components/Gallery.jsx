import React from "react";
import "./Gallery.css";

const galleryItems = [
  {
    title: "Main Home",
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/2019-12-11_18h55_18-450x289.jpg",
  },
  {
    title: "One-Page",
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h26_34-450x289.jpg",
  },
  {
    title: "Band Home",
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h15_40-450x289.jpg",
  },
  {
    title: "Home Alt",
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_11h40_08-450x289.jpg",
  },
  {
    title: "Minimal",
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_11h38_54-450x289.jpg",
  },
  {
    title: "DJ/Event",
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_11h39_28-450x289.jpg",
  },
  {
    title: "Festival",
    img: "https://preview.themeforest.net/item/herion-a-wordpress-theme-for-the-music-industry/full_screen_preview/25233409/homepages/artist-slider.jpg",
  },
  {
    title: "Shop Home",
    img: "https://preview.themeforest.net/item/herion-a-wordpress-theme-for-the-music-industry/full_screen_preview/25233409/homepages/shop-home.jpg",
  },
  {
    title: "Discography Home",
    img: "https://preview.themeforest.net/item/herion-a-wordpress-theme-for-the-music-industry/full_screen_preview/25233409/homepages/discography-home.jpg",
  },
];

function Gallery() {
  return (
    <section className="gallery-section">
      <div className="container">
        {/* <h2>Gallery</h2> */}
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-item" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
