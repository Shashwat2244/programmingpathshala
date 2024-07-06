import React, { useState } from "react";

import "react-accessible-accordion/dist/fancy-example.css";
import "./Footer1.css";
// Demo styles, see 'Styles' section below for some notes on use.

const Footer1 = () => {
  return (
    <section id="value" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColCenter c-right">
          <span className="tec">
            Pellentesque suscipit
            <br /> fringilla libero eu.
          </span>
          <button className="button">
            <img src="./Button.png" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer1;
