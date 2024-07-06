import React from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { sliderSettings } from "../../utils/common";
import "./Home.css";
const Home = () => {
  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <span className="flexColCenter primaryText">
          Manage your entire community
          <br /> <span>in a single system</span>
        </span>
        <div className="flexColCenter secondaryText flexhero-des">
          <span>Who is Nextcent suitable for?</span>
        </div>

        <Swiper {...sliderSettings}>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColCenter r-card">
                <div className="imgBox">
                  <img src={card.image} alt="home" />
                </div>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
