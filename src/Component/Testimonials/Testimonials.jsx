import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrows from "../../assets/leftArrow.png";
import rightArrows from "../../assets/rightArrow.png";
import { useState } from "react";
function Testimonials() {
  const [selected, setselected] = useState(0);
  const tlength = testimonialsData.length;

  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className="stroke-text">WHAT THEY </span>
        <span>SAY ABOUT US</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
      </div>
      <div className="arrows">
        <img
          onClick={() => {
            selected === 0
              ? setselected(tlength - 1)
              : setselected((prev) => prev - 1);
          }}
          src={leftArrows}
          alt=""
        />
        <img
          onClick={() => {
            selected === tlength - 1
              ? setselected(0)
              : setselected((prev) => prev + 1);
          }}
          src={rightArrows}
          alt=""
        />
      </div>
    </div>
  );
}

export default Testimonials;
