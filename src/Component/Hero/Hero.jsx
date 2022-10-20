import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        {/* The best ad part */}
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness class in the town</span>
        </div>

        {/* The Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">SHAPE </span>
            <span>YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* The figure section */}
        <div className="figure">
          <div>
            <span>+140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        {/* The Hero  */}
        <div className="hero-buttons">
          <div className="btn">Get Started</div>
          <div className="btn">Learn More</div>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart_rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        {/* The Hero images */}
        <img src={hero_image} alt="" className="hero_image" />
        <img src={hero_image_back} alt="" className="hero_image_back" />

        {/* The Hero calories */}
        <div className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 Kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
