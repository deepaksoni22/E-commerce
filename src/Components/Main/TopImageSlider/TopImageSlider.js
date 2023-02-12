import React from "react";
import { useState, useEffect } from "react";
import "./TopImageSlider.css";
import TopImage1 from "./assets/Big Fashion Festival Shout & Earn (1).png";
import TopImage2 from "./assets/Flipkart-Big-Billion-Day-Banner-01-1068x561.webp";
import TopImage3 from "./assets/1540209419.jpg";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function TopImageSlider() {
  const [counter, setCounter] = useState(0);

  let slides = document.querySelectorAll(".slide");

  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });
  useEffect(() => {
    slides.forEach((slide) => {
      if (counter < slides.length) {
        slide.style.transform = `translateX(-${counter * 100}%)`;

        /* for ex there are three images and they are placed 100% 200% 300% from left origin and here if counter is 0 then it will show the first image because 0*100=0 so that first image contain 0 space from left origin and if counter=1 then 1*100=100 then first image left position =-100 and second  image left position=200-100= 100 so the second image will placed on the view port */
      }
    });
  }, [counter]);
  function slideImage() {
    slides.forEach((slide) => {
      if (counter < slides.length) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
      }
    });
  }
  function incre() {
    let increment;
    if (counter == slides.length - 1) {
      increment = 0;
      setCounter((increment = 0));
    } else {
      increment = counter + 1;
      setCounter(increment);
    }
  }
  function decre() {
    let decrement;
    if (counter == 0) {
      decrement = slides.length - 1;
      setCounter(decrement);
    } else {
      decrement = counter - 1;
      setCounter(decrement);
    }
  }

  return (
    <div className="slider-wrapper">
      <div>
        <img src={TopImage1} className="slide" />
        <img src={TopImage2} className="slide" />
        <img src={TopImage3} className="slide" />
      </div>
      <div className="slideButtons">
        <button
          onClick={() => {
            decre();
            slideImage();
          }}
        >
          <SlArrowLeft />
        </button>
        <button
          onClick={() => {
            incre();
            slideImage();
          }}
        >
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
}

export default TopImageSlider;
