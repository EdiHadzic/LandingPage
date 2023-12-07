import React, {useEffect} from 'react'
import { Button } from '@material-ui/core';
import Hand from "../../Pictures/waving-hand.png"
import AOS from 'aos';
import "aos/dist/aos.css";

function HeroDescription() {
    useEffect(() => {
        AOS.init({
          duration : 1800,
          once: true,
        });
      }, []);
    return (
        <div className="hero-description" data-aos="fade" >
           <h1>Provide You best.<br/>
            Best Ui Service</h1>
            <p>Mobile App Design and Development Studio. You can hire us</p>
            <Button variant="contained" color="primary" className="login-button wave-button">
                <img src={Hand} alt="hand" style={{marginRight: "15px"}}/>
                Wave Me
            </Button>
        </div>
    )
}

export default HeroDescription
