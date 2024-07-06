import React from "react";
import "./Companies.css";
const Companies = () => {
  return (
    <section className="">
      <span className="flexColCenter primaryText">Our Clients</span>
      <div className="flexColCenter secondaryText flexhero-des">
        <span>We have been working with some Fortune 500+ clients</span>
      </div>
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./Logo1.png" alt="" />
        <img src="./logo2.png" alt="" />
        <img src="./Logo3.png" alt="" />
        <img src="./Logo4.png" alt="" />
        <img src="./Logo5.png" alt="" />
        <img src="./Logo6.png" alt="" />
        <img src="./Logo7.png" alt="" />
      </div>
    </section>
  );
};

export default Companies;
