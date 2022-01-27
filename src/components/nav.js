import React, { useState } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBTooltip, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon,
} from "mdbreact";

import styles from './pages/card2.css'

const Nav = () => {

  let [active, setSatge] = useState('/aboutme');

  let changeState = () => {
    setSatge(() => {
      return window.location.hash;
    })
  };


  const [navOpen, toggleOpen] = useState(false)
  const closeNav = () => {
    toggleOpen(false)
  }

  return (
    <MDBNavbar color="black" dark expand="md">
      <MDBNavbarBrand onClick={changeState} >
        <MDBNavLink className="waves-effect waves-light" to="/" className='black' >
          <strong className="white-text font-italic">Hi, I'm Julius Markauskas</strong>
        </MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={() => toggleOpen(!navOpen)} />
      <MDBCollapse id="navbarCollapse3" isOpen={navOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem onClick={changeState} active={active === '#/aboutme'} className={styles.active}>
            <MDBNavLink to="aboutme" onClick={closeNav}>About Me</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem onClick={changeState} active={active === '#/portfolio'}>
            <MDBNavLink to="portfolio" onClick={closeNav}>Portfolio</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem onClick={changeState} active={active === '#/contact'}>
            <MDBNavLink to="contact" onClick={closeNav}>Contact</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBTooltip placement='bottom' domElement style={{ display: 'block' }} >
            <a className='nav-link'
              href='https://github.com/Juliusm9791' target='_blank'>
              <strong>
                <MDBIcon fab icon='github' />
              </strong>
            </a><span>GitHub</span>
          </MDBTooltip>
          <MDBTooltip placement='bottom' domElement style={{ display: 'block' }} >
            <a className='nav-link'
              href='https://www.linkedin.com/in/julius-markauskas-795aa0103/' target='_blank'>
              <strong>
                <MDBIcon fab icon='linkedin' />
              </strong>
            </a><span>Linkedin</span>
          </MDBTooltip>
          <MDBTooltip placement='bottom' domElement style={{ display: 'block' }} >
            <a className='nav-link'
              href='https://juliusm9791.github.io/Portfolio/assets/pdf/Julius_Markauskas_resume1.pdf' target='_blank'>
              <strong>
                <MDBIcon icon='file-pdf' />
              </strong>
            </a><span>Resume</span>
          </MDBTooltip>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );

}

export default Nav;