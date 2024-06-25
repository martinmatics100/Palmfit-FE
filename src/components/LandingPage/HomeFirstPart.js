import React, { useRef, useState } from "react";
import HomePageImage from "../../Assets/homepageimg.svg";

const HomeFirstPart = () => {
  return (
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div
          class="col-lg-7 mb-5 mb-lg-0 order-lg-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div class="swiper init-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src={HomePageImage} alt="" className="img-fluid" />
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="col-lg-4 order-lg-1">
          <h1 class="mb-4" data-aos="fade-up">
            Your fitness <span>starts</span> with what you eat
          </h1>
          <p data-aos="fade-up">
            At Palmfit, we offer you the chance to keep tab on what you and when
            you eat. It requires minimal commitment and the journey starts when
            you say it starts. Click below to register!
          </p>
          <p class="mt-5" data-aos="fade-up">
            <a href="#" class="btn btn-get-started">
              Get Started
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFirstPart;
