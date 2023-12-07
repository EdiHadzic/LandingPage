import React, {useEffect} from 'react'
import Tplink from '../../Pictures/logosPics/nestotp.png'
import Excel from '../../Pictures/logosPics/excelBrand.png'
import Logitech from '../../Pictures/logosPics/Logitech.png'
import Vision from '../../Pictures/logosPics/hikvison.png'
import Digital from '../../Pictures/logosPics/digitalLogo.png'
import AOS from 'aos';
import "aos/dist/aos.css";


function Logos() {
    useEffect(() => {
        AOS.init({
          duration : 1800,
          once: true,
        });
      }, []);
    return (
        <div className="logos-container" data-aos="fade-up">
            <img src={Tplink} alt="tplink"/>
            <img src={Digital} alt="digital"/>
            <img src={Excel} alt="excel"/>
            <img src={Logitech} alt="logitech"/>
            <img src={Vision} alt="vision"/>

        </div>
    )
}

export default Logos
