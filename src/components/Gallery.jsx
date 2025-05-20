import React from "react";
import "./Gallery.css";
import "./GalleryOverride.css";

const galleryItems = [
  {
 
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/2019-12-11_18h55_18-450x289.jpg",
    title: "Main Home",
  },
  {
  
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h26_34-450x289.jpg",
      title: "One-Page",
  },
  {
 
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h15_40-450x289.jpg",
       title: "Band Home",
  },
  {
   
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_11h40_08-450x289.jpg",
     title: "Home Alt",
  },
  {
 
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_11h38_54-450x289.jpg",
     title: "Minimal",
  },
  {
  
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_11h39_28-450x289.jpg",
      title: "DJ/Event",
  },
  {
  
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_11h40_36-450x289.jpg",
      title: "Festival",
  },
   {
  
    img: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h38_24-450x289.jpg",
      title: "Record Studio",
  },
    {
  
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h37_53-450x289.jpg",
      title: "Interactive Links",
  },
   {
  
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_11h34_28-450x289.jpg",
      title: "Artist Slider",
  },
     {
  
    img: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h37_11-450x289.jpg",
      title: "Shop Home",
  },
    {
  
    img: "	https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_11h42_26-450x289.jpg",
      title: "Discography Home",
  },
   {
  
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_11h35_56-450x289.jpg",
      title: "Videos Home",
  },
    {
  
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_11h43_10-450x289.jpg",
      title: "Blog Home",
  },
      {
  
    img: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_11h41_06-450x289.jpg",
      title: "Artist Metro",
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
              <h3 className="gallery-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
