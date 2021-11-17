import React from "react";
import logo from "../../logo/logo@2x.png";
import "./TigerSpeed.scss";
import Nav from "../../Components/Nav/NavTiger";
import Footer from "../../Components/Footer";
import Gallery from "../../Components/Gallery";
import EmailNotify from "../../Components/EmailNotify";
import Images from "../../Components/Images";

const TigerSpeed = () => {
    return (
        <div className="main-tigerspeed">
            <Nav logoName="TigerSpeed" />
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
            <Gallery img={[Images.bg9, Images.bg11]}/>
            <EmailNotify />
            <Footer />
        </div>
    )
}

export default TigerSpeed;