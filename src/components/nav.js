import React, { useState } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBTooltip, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon,
} from "mdbreact";





const Nav = () => {
  // const appContext = useContext('/')
  const [navOpen, toggleOpen] = useState(false)
  const closeNav = () => {
    toggleOpen(false)
  }

  return (
    <MDBNavbar color="black" dark expand="md">
      <MDBNavbarBrand>
      <MDBNavLink className="waves-effect waves-light" to="/">
        <strong className="white-text font-italic">Hi, I'm Julius Markauskas</strong>
        </MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={() => toggleOpen(!navOpen)} />
      <MDBCollapse id="navbarCollapse3" isOpen={navOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem active>
            <MDBNavLink to="aboutme" onClick={closeNav}>About Me</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem >
            <MDBNavLink to="portfolio" onClick={closeNav}>Portfolio</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem >
            <MDBNavLink to="contact" onClick={closeNav}>Contact</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="github">
              <MDBIcon fab icon="github" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
            <MDBIcon fab icon="linkedin" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
            <MDBIcon icon="file-pdf" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBTooltip
                    placement='bottom'
                    domElement
                    style={{ display: 'block' }}
                  >
                    <a
                      className='nav-link Ripple-parent'
                      href='https://github.com/Juliusm9791'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <strong>
                        <MDBIcon far icon='gem' />
                      </strong>
                    </a>
                    <span></span>
                  </MDBTooltip>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>

  );

}

export default Nav;