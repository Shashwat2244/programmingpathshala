import React from "react";
import data from "../../utils/caring.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Community.css";
import { sliderSettings } from "../../utils/common";
const Community = () => {
  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth cr-container">
        <span className="flexColCenter primaryText">
          Caring is the new marketing
        </span>
        <div className="flexColCenter secondaryText flexhero-des">
          <span className="cont">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </span>
        </div>

        <Swiper {...sliderSettings}>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColCenter cr-card">
                <div className="imgBox">
                  <img src={card.image} alt="home" />
                </div>
                <span className="secondaryText">{card.detail}</span>
                <img src="./read.png" alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Community;
