import React, {useState, useEffect} from 'react'
import NavigationItems from './NavigationItems'
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MobileMenu from './subComponents/MobileMenu';
import AOS from 'aos';
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
    AOS.init({
      duration : 800,
      once: true
    });
  }, []);
  const [open, setOpen] = useState(false)
  let change = () => setOpen(!open)
  let menu = <MobileMenu classProp="mobile-menu" change={change}/>
  if(open) {
    menu = <MobileMenu classProp="mobile-menu-active" change={change}/>
  }
    return (
        <div className="header">
          <span className="logo" data-aos="fade-right">
             <span>Web </span>
             UiExpert
          </span>
          <div className="navigation-items" data-aos="fade-left">
            <ul>
              <NavigationItems destination="HOME"/>
              <NavigationItems destination="PORTFOLIO"/>
              <NavigationItems destination="ABOUT"/>
              <NavigationItems destination="BLOG"/>
              <NavigationItems destination="CONTACT"/>
              <Button variant="contained" color="primary" className="login-button">Login</Button>
            </ul>
          </div>
          <MenuIcon fontSize="large" className="hamburger-icon" onClick={change}></MenuIcon>
          {menu}
        </div>
    )
}

export default Header
