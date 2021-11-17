import React from "react";
import "./About.css";
import Nav from "../../Components/Nav/NavFull";
import EmailNotify from "../../Components/EmailNotify"
import Footer from "../../Components/Footer"


const AboutFullPower = () => (
    <div className="about-fullpower">
        <Nav logoName="FullPower" />
        
            <div className="about-info">
                <h1>About Us</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, sapiente, enim, modi doloremque quae magnam fugiat perferendis reiciendis obcaecati voluptatum sint praesentium vero tempora corporis aperiam omnis pariatur sequi hic.</p>
            </div>
        
        <EmailNotify />
        <Footer />
    </div>
)

export default AboutFullPower;