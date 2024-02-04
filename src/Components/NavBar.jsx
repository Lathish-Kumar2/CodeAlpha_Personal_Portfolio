
import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import boy from '../Images/boy_face.svg';

const Navbar = () => {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNavItems = () => {
    setShowNavItems(!showNavItems);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={boy} alt="LOGO" className="logoimage" />
        <a href="http://www.google.com" style={{ fontSize: '3vh' }}><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/lathish-kumar-19308423a" style={{ fontSize: '3vh' }}><FaLinkedin/></a>
        <a href="http://www.google.com" style={{ fontSize: '3vh' }}><FaGithub/></a>
        <a href="http://www.whatsapp.com" style={{ fontSize: '3vh' }}><FaWhatsapp/></a>
        <a href="http://www.google.com" style={{ fontSize: '3vh' }}><FaEnvelope/></a>
      </div>

      <div className="nav-items">
        {/* <TfiArrowCircleRight/> */}
        <ul>
          <li><a href="#Section_two" className="nav-items-each">Skills</a></li>
          <li><a href="#Projects" className="nav-items-each">Projects</a></li>
          <li><a href="#Resume" className="nav-items-each">View Resume</a></li>
          <li><a href="/Images/Lathish.pdf" download="Lathish Resume.pdf" className="dwld"><button className="download">Download Resume</button></a></li>
        </ul> 
        
        {/* <GiHamburgerMenu onClick={toggleNavItems} style={{ fontSize: '3vh' }} /> */}
      </div>

      {/* Toggle nav items based on state */}
      {showNavItems && (
        <div className="mobile-nav-items">
          <a href="#Section_two" className="nav-items-each">Skills</a>
          <a href="#Projects" className="nav-items-each">Projects</a>
          <a href="#Resume" className="nav-items-each">View Resume</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
