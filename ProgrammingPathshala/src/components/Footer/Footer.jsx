import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./Footer.png" alt="" width={160} />
          <span className="secondaryText">
            Copyright © 2020 Nexcent ltd. <br />
            All rights reserved
          </span>
          <img src="./Social.png" alt="" />
        </div>

        <div className="flexColStart f-right">
          <span className="whtext">Company</span>

          <div className="flexCenter f-menu">
            <span>About Us</span>
            <span>Blog</span>
            <span>Contact Us</span>
            <span>Pricing</span>
            <span>Testimonials</span>
          </div>
        </div>
        <div className="flexColStart f-right">
          <span className="whtext">Support</span>

          <div className="f-menu">
            <span>Help Center</span>
            <span>Terms of service</span>
            <span>Legal</span>
            <span>Privacy Policy</span>
            <span>Status</span>
          </div>
        </div>
        <div className="flexColStart f-right">
          <span className="whtext">Stay Up to Date</span>
          <div class="input-container">
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              required
            />
            <button id="search-button">
              <img src="./Vector.png" alt="search icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
