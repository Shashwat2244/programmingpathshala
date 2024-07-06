import React, { useState } from "react";

import "react-accessible-accordion/dist/fancy-example.css";

import "./Customers.css";
// Demo styles, see 'Styles' section below for some notes on use.

const Customers = () => {
  return (
    <section id="value" className="cu-wrapper">
      <div className="paddings innerWidth flexCenter cu-container">
        {/* left side */}
        <div className="cu-left">
          <img src="./tesla.png" alt="" />
        </div>

        {/* right */}
        <div className="flexColStart cu-right">
          <span className="secondaryText">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </span>
          <h3 className="greenCol">Tim Smith</h3>
          <span className="secondaryText">
            British Dragon Boat Racing Association
          </span>
          <div class="more">
            <img src="./ts.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
