import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedln from "../../assets/linkedin.png";
import Logo from "../../assets/Logo.png";
function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-link">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={Linkedln} alt="" />
        </div>
      </div>
      <div className="logo-f">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default Footer;
