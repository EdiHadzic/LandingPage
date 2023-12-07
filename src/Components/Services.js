import React, {useEffect} from 'react'
import Cards from './subComponents/Cards'
import PC from '../Pictures/001-data.png'
import Redising from '../Pictures/redising.png'
import Mobile from '../Pictures/mobile.png'
import App from '../Pictures/004-app.png'
import Web from '../Pictures/web.png'
import Repair from '../Pictures/repair.png'
import AOS from 'aos';
import "aos/dist/aos.css";

function Services() {
    useEffect(() => {
        AOS.init({
          duration : 1500,
          once: true
        });
      }, []);
    return (
        <div className="services">
            <div className="services-text" data-aos="fade-up">
                <span>OUR SERVICES</span>
                <div>We Provide Best Quality Service </div>
                <p>Our commitment to quality ensures that your applications get the best UI design 
                possible. UI/UX design is more than just pixels 
                and animations, but the entire application 
                experience.</p>
            </div>
            <div className="services-cards" >
                <Cards linearGradientS="#FBBA77" linearGradientE="#DFA871" title="Website Ui" picture={PC} tag="pc"></Cards>
                <Cards linearGradientS="#41EAE3" linearGradientE="#2293B7" title="ReDesign" picture={Redising} tag="redisign"></Cards>
                <Cards linearGradientS="#69529F" linearGradientE="#463864" title="Application Ui" picture={Mobile} tag="mobile"></Cards>
                <Cards linearGradientS="#4386D2" linearGradientE="#0962C5" title="Mobile App Ui" picture={App} tag="apps"></Cards>
                <Cards linearGradientS="#A5A2F6" linearGradientE="#564FD6" title="Web App Ui" picture={Web} tag="webS"></Cards>
                <Cards linearGradientS="#FF8088" linearGradientE="#984141" title="Web App Ui" picture={Repair} tag="repairs"></Cards>
               
            </div>
        </div>
    )
}

export default Services
