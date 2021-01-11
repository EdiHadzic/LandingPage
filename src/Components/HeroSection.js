import React, {useEffect} from 'react'
import HeroDescription from './subComponents/HeroDescription'
import CoupleProgramming from '../Pictures/coupleProgramming.png'
import AOS from 'aos';
import "aos/dist/aos.css";
function HeroSection() {
    useEffect(() => {
        AOS.init({
          duration : 1800,
          once: true,
        });
      }, []);
    return (
        <div className="hero-section">
            <HeroDescription/>
            <div className="picture-container" data-aos="fade" data-aos-delay="200">
                <img src={CoupleProgramming} alt="CoupleProgramming" className="couple-picture"/>
            </div>
        </div>
    )
}

export default HeroSection
