import React from 'react';
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';
import "./FooterAdv.css";

const FooterAdv = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4 className="footer-title">Company</h4>
                        <ul>
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">Our Services</Link></li>
                            <li><Link href="#">Policy</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-title">Get Help</h4>
                        <ul>
                            <li><Link href="#">FAQ</Link></li>
                            <li><Link href="#">Shipping</Link></li>
                            <li><Link href="#">Return</Link></li>
                            <li><Link href="#">Payment Options</Link></li>
                            <li><Link href="#">Order Status</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-title">Online Shop</h4>
                        <ul>
                            <li><Link href="#">Men</Link></li>
                            <li><Link href="#">Women</Link></li>
                            <li><Link href="#">Kidds</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-title">Follow Us</h4>
                        <div className="social-links">
                            <Link href="#"><Icon.Facebook className="facebook social-icon"/></Link>
                            <Link href="#"><Icon.Whatsapp className="whatsapp social-icon"/></Link>
                            <Link href="#"><Icon.Instagram className="instagram social-icon"/></Link>
                            <Link href="#"><Icon.Twitter className="twitter social-icon"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterAdv