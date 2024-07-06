import React, { useState } from "react";

import "react-accessible-accordion/dist/fancy-example.css";

import "./Value.css";
import CountUp from "react-countup";
// Demo styles, see 'Styles' section below for some notes on use.

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <img src="./Frame35.png" alt="" />
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="primaryText">
            The unseen of spending three years at Pixelgrade
          </span>

          <span className="secondaryText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </span>
          <button className="button uup">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Value;
