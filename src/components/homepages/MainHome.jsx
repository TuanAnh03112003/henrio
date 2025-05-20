import React from "react";
import "./MainHome.css";
import Header from "../Header";
import Hero from "../Hero";
import Gallery from "../Gallery";
import Events from "../Events";
import Newsletter from "../Newsletter";
import Footer from "../Footer";

function MainHome() {
  return (
    <>
      <Header />
      <main className="main-home-section">
        <Hero />
        <Gallery />
        <Events />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default MainHome;
