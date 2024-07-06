import React, { useState } from "react";

import "react-accessible-accordion/dist/fancy-example.css";

import "./Calendra.css";
// Demo styles, see 'Styles' section below for some notes on use.

const Calendar = () => {
  return (
    <section id="value" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="c-left">
          <img src="./pana.png" alt="" />
        </div>

        {/* right */}
        <div className="flexColStart c-right">
          <span className="primaryText">
            How to design your site footer like we did
          </span>

          <span className="secondaryText">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </span>
          <button className="button uup">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
