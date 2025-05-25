import React from "react";
import MainHome from "./components/homepages/MainHome";
import Discography from "./components/Discography";
import DemoImport from "./components/DemoImport";
import Discography2 from "./components/discography2";
import EasyToUseSection from "./components/EasyToUseSection";
import SellYourMerch from "./components/SellYourMerch";
import Discography3 from "./components/discography3";
import MusicThemesSince2011 from "./components/MusicThemesSince2011";
import SaveMoneySection from "./components/SaveMoneySection";
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <MainHome />
      <Discography />
      <DemoImport />  
      <Discography2 />
       <EasyToUseSection />
   <SellYourMerch/>
    <Discography3/>
    <MusicThemesSince2011/>
    <SaveMoneySection/>
    <Footer/>
    </>
  );
}

export default App;
