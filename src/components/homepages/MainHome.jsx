import React from "react";
import "./MainHome.css";
import Header from "../Header";
import Hero from "../Hero";
import Gallery from "../Gallery";
import Events from "../Events";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import SocialIntegration from "../SocialIntegration";

function MainHome() {
  return (
    <>
      <Header />
      <main className="main-home-section">
        <Hero />
        <Gallery />
        <SocialIntegration />
        {/* <Events /> */}
     
      </main>
    
    </>
  );
}

export default MainHome;
