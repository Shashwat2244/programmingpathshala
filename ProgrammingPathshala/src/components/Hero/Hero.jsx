import React from "react";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import "./Hero.css";

const slidesContent = [
  {
    title: "Lessons and insights",
    subtitle: "from 8 years",
    description:
      "Where to grow your business as a photographer: site or social media?",
    buttonText: "Register",
    image: "./Illustration.png",
  },
  {
    title: "From the best",
    subtitle: "in the industry",
    description: "All the growth advices at your footsteps.",
    buttonText: "Explore",
    image: "./car2.jpg",
  },
  {
    title: "Your dreams",
    subtitle: "will come true",
    description: "Join thousands of others like you and learn insights.",
    buttonText: "Get Started",
    image: "./car1.jpg",
  },
];

const HeroCarousel = () => {
  return (
    <Carousel>
      {slidesContent.map((content, index) => (
        <Carousel.Item key={index}>
          <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
              {/* left side */}
              <div className="flexColStart hero-left">
                <div className="hero-title">
                  <div className="orange-circle" />
                  <motion.h1
                    initial={{ y: "2rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 2,
                      type: "ease-in",
                    }}
                  >
                    {content.title} <br />
                    <span className="greenCol">{content.subtitle}</span>
                    <br />
                  </motion.h1>
                </div>
                <div className="flexColStart secondaryText flexhero-des">
                  <span>{content.description}</span>
                </div>
                <button className="button">{content.buttonText}</button>
              </div>

              {/* right side */}
              <div className="flexCenter hero-right">
                <motion.div
                  initial={{ x: "7rem", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 2,
                    type: "ease-in",
                  }}
                  className="image-container"
                >
                  <img src={content.image} alt="illustration" />
                </motion.div>
              </div>
            </div>
          </section>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
