import React from 'react'
import Facebook from '../../Pictures/facebook.png'
import Twitter from "../../Pictures/twitter.png"
import Google from "../../Pictures/google.png"
import Youtube from "../../Pictures/youtube.png"
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import RoomIcon from '@material-ui/icons/Room';
function FooterItems() {
    return (
        <div className="footer-items">
            <div className="brand-info">
                <span className="logo logo-footer">
                    <span>Web </span>
                    UiExpert
                </span>
            <p>The full-stack design team who focuses on digital products whatever they are.</p>
            <div className="community-logos">
                <img src={Facebook} alt="facebook"/>
                <img src={Twitter} alt="Twitter"/>
                <img src={Google} alt="Google"/>
                <img src={Youtube} alt="Youtube"/>
            </div>
            <div>© 2019 all rights reserved</div>
            </div>
            <div className="about-us">
                <h3>About Us</h3>
                <div>We're Hiring</div>
                <div>Our Customer</div>
                <div>Blog Post</div>
                <div>Help & Support</div>
            </div>

            <div className="community">
                <h3>Community</h3>
                <div>About us</div>
                <div>Our clients</div>
                <div>Legal notic</div>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <div className="phone-contact">
                   <PhoneInTalkOutlinedIcon fontSize="small" style={{margin: "10px 5px 0 0" }}></PhoneInTalkOutlinedIcon>
                    <span>+123 456 789 00</span> 
                </div>
                <div className="map-contact">
                   <RoomIcon fontSize="small" style={{marginRight: "5px"}}></RoomIcon>
                    <span>+123 456 789 00</span> 
                </div>
                
            </div>
        </div>
    )
}

export default FooterItems
