import React from "react";
import logo from "../../logo/logo@2x.png";
import "./SkyPoint.scss";
import Nav from "../../Components/Nav/NavSky";
import Footer from "../../Components/Footer";
import Gallery from "../../Components/Gallery";
import EmailNotify from "../../Components/EmailNotify";
import Images from "../../Components/Images";

const Skypoint = () => {
  return (
    <div className="main-skypoint">
      <Nav logoName="SkyPoint" />
      <div className="logo">
        <a href="#top">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="header">
        <p>Our website is almost ready..</p>
        <p>Sivustomme on melkein valmis..</p>
      </div>
      {/* <div className="underline"></div> */}
      <Gallery img={[Images.bg2, Images.bg1]}/>
      <EmailNotify />
      <Footer />
    </div>
  );
}

export default Skypoint;
