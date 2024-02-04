
import React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import '../Styles/CompleteStyle.css';

const Footer = () => {
  return (
    <footer>
      <div className="sociallinks">
        <a href="http://www.google.com" style={{ fontSize: '3vh', marginLeft:'2vw' }}><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/lathish-kumar-19308423a" style={{ fontSize: '3vh',marginLeft:'2vw' }}><FaLinkedin/></a>
        <a href="http://www.google.com" style={{ fontSize: '3vh',marginLeft:'2vw' }}><FaGithub/></a>
        <a href="http://www.whatsapp.com" style={{ fontSize: '3vh',marginLeft:'2vw' }}><FaWhatsapp/></a>
        <a href="http://www.google.com" style={{ fontSize: '3vh',marginLeft:'2vw' }}><FaEnvelope/></a>
      </div>
      <button className="quickbtn" disabled>
        Quick Links 
      </button>
      <div className="quick">
        <a href="Resume.html" className="nav-items-each">Home</a>
        <a href="#Section_two" className="nav-items-each">Skills</a>
        <a href="#Projects" className="nav-items-each">Projects</a>
      </div>
    </footer>
  );
};

export default Footer;
