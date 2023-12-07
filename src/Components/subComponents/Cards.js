import React, {useEffect} from 'react'
import { Button } from '@material-ui/core';
import AOS from 'aos';
import "aos/dist/aos.css";

function Cards(props) {
    useEffect(() => {
        AOS.init({
          duration : 1800,
          once: true,
        });
      }, []);
    return (
        <div className="cards" style={{background: `linear-gradient(${props.linearGradientS}, ${props.linearGradientE})`}} data-aos="fade-up">
            <img src={props.picture} alt={props.tag}/>
            <div>{props.title}</div>
            <p>Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses</p>
            <Button variant="outlined" color="primary" size="large" className="moreInfo">Read More</Button>
        </div>
    )
}

export default Cards
