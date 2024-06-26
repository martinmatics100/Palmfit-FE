import React from "react";
import HomePageImage from "../../Assets/aboutImage.svg";

const AboutSection = () => {
  return (
    <div class="container mt-5">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-4 order-lg-1">
          <div class="swiper init-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src={HomePageImage} alt="" className="img-fluid" />
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="left col-lg-7 mb-5 mb-lg-0 order-lg-2">
          <h1 class="mb-4" data-aos="fade-up">
            About Palmfit
          </h1>
          <p data-aos="fade-up">
            Palmfit is an easy-to-use calorie calculator that helps users
            measure their calorie intake in order to make better healthy food
            intake decisions. We offer you the chance to browse through our
            platform for food calories to make your decisions on what to eat and
            what not to. However this starts by signing up on our platform. The
            most accurate resource for calorie, fat and carbohydrate counts.
            Take it everywhere; look up foods before you eat, when eating
            choices count the most!
          </p>
          <a href="#" class="btn btn-get-started mt-3">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
