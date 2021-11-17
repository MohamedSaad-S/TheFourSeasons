import React from "react";
import logo from "../../logo/logo@2x.png";
import "./FullPower.scss";
import Nav from "../../Components/Nav/NavFull";
import Footer from "../../Components/Footer";
import Gallery from "../../Components/Gallery";
import EmailNotify from "../../Components/EmailNotify";
import Images from "../../Components/Images";

const FullPower = () => {
  return (
    <div className="main-fullpower">
      <Nav logoName="FullPower" />
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
      <Gallery img={[Images.bg14, Images.bg13]}/>
      <EmailNotify />
      <Footer />
    </div>
  );
}

export default FullPower;
