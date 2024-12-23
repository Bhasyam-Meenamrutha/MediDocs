import React from "react";
import './Footer.css'
import footer_logo from  '/home/meenamrutha/MediDocs/MEDITRACK/src/MediTrack_frontend/public/logo_big.png'
import pintester_icon from '/home/meenamrutha/MediDocs/MEDITRACK/src/MediTrack_frontend/public/pintester_icon.png'
import instagram_icon from '/home/meenamrutha/MediDocs/MEDITRACK/src/MediTrack_frontend/public/instagram_icon.png'
import whatsapp_icon from '/home/meenamrutha/MediDocs/MEDITRACK/src/MediTrack_frontend/public/whatsapp_icon.png'
import logo from '/home/meenamrutha/MediDocs/MEDITRACK/src/MediTrack_frontend/public/logo-icon.svg'


const Footer = () => {
    return(
        <div className="footer">
            {/* <div className="footer_logo">
            <img src={logo} alt=" "/>
                <p>HealthTrack</p>
            </div> */}
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="foote-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>

            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2024 - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;


