import React, { useState } from "react";
import "react-accessible-accordion/dist/fancy-example.css";

import "./stats.css";
import CountUp from "react-countup";
// Demo styles, see 'Styles' section below for some notes on use.

const Stats = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container bgg">
        {/* left side */}
        <div className="v-left primaryText">
          Helping a local
          <br />
          <span className="greenCol">business reinvent itself</span>
          <br />
          <span className="secondaryText">
            We reached here with our hard work and dedication
          </span>
        </div>

        {/* right */}
        <div className="statc">
          <div className="flexColCenter">
            <div className="statcon stats">
              <img src="./Ico1.png" alt="" />
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={0} end={2245341} duration={2} />{" "}
                </span>
                <span className="secondaryText">Members</span>
              </div>

              <img src="./Ico2.png" alt="" />
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={0} end={46328} duration={2} />{" "}
                </span>
                <span className="secondaryText">Clubs</span>
              </div>
            </div>
          </div>
          <div className="">
            <div className="statcon stat ">
              <img src="./Ico4.png" alt="" />
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={0} end={828867} duration={2} />{" "}
                </span>
                <span className="secondaryText">Event Bookings</span>
              </div>

              <img src="./Ico3.png" alt="" />
              <div className="flexColCenter stat">
                <span>
                  <CountUp end={1926436} duration={2} />
                </span>
                <span className="secondaryText">Payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
