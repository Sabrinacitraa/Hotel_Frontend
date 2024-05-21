// Footer.jsx

import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <div className="footer-section">
          <a href="">News</a>
          <a href="">Careers</a>
          <a href="">Developers</a>
          <a href="">Travel Professionals</a>
          <a href="">Meeting</a>
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-section">
          <a href="">Mariott.com</a>
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Statement</a>
          <div className="social-icons">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#" className="f">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
