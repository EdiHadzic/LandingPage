import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import NavigationItems from '../NavigationItems';

function MobileMenu(props) {
    return (
        <div className={props.classProp}>
            <CloseIcon onClick={props.change} className="close-menu"></CloseIcon>
            <div className="mobile-navigation-items">
              <NavigationItems destination="HOME" />
              <NavigationItems destination="PORTFOLIO"/>
              <NavigationItems destination="ABOUT"/>
              <NavigationItems destination="BLOG"/>
              <NavigationItems destination="CONTACT"/>
              <Button variant="contained" color="primary" className="login-button login-button-mobile">Login</Button>
            </div>
        </div>
    )
}

export default MobileMenu
