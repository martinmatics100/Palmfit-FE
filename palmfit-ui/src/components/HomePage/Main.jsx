import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import "../../styles/HomePage.css";
import image1 from "../../images/main-image1.svg";
import image2 from "../../images/About-image.svg";
import image3 from "../../images/WhyChooseUS1.svg";
import image4 from "../../images/WhyChooseUS2.svg";
import image5 from "../../images/WhyChooseUS3.svg";
import { whyChooseUsData, WordsFromOurUsers } from "../utils/HomePageData";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div>
      <Header />
      <div className="container__">
        <section className="first-section">
          <div className="left-first-section">
            <h2 className="mt-sm-4">
              Your fitness <span>starts</span> <br /> with what you eat
            </h2>
            <p className="left-first-section-text">
              At Palmfit, we offer you the chance to keep tab on what you and
              when you eat. It requires minimal commitment and the journey
              starts when you say it starts. CLick below to register!
            </p>

            <p className="nav-items">
              <a href="" className="btns">
                Calculate calories
              </a>
            </p>
          </div>
          <div className="right-first-section">
            <img src={image1} alt="" />
          </div>
        </section>
        {/* --------------------------about (second section) -------------------------- */}
        {/* about */}
        <section className="second-section">
          <div className="left-about-section">
            <div className="photo">
              <img src={image2} alt="about-photo" />
            </div>
          </div>
          <div className="right-about-section">
            <h2 className="mt-sm-4">About Palmfit</h2>
            <p className="right-about-section-text">
              Palmfit is an easy-to-use calorie calculator that helps users
              measure their calorie intake in order to make better healthy food
              intake decisions. <br /> <br /> We offer you the chance to browse
              through our platform for food calories to make your decisions on
              what to eat and what not to. However this starts by signing up on
              our platform. <br /> <br /> The most accurate resource for
              calorie, fat and carbohydrate counts. Take it everywhere; look up
              foods before you eat, when eating choices count the most!
            </p>

            <p className="nav-items">
              <a href="" className="btns">
                Start Exploring
              </a>
            </p>
          </div>
        </section>
        {/* -------------------------third section -------------------------------- */}
        <section className="third-section">
          <h1>Why Choose Us?</h1>
          <div className="third-section-container">
            {whyChooseUsData.map((item, index) => (
              <div className="third-section-container-1" key={index}>
                <div className="thrid-section-container-image">
                  <img src={item.image} alt="" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------fourth section -------------------------- */}
        <section className="fourth-section">
          <h1>Words From Our Users</h1>
          <div className="fourth-section-container">
            {WordsFromOurUsers.map((item, index) => (
              <div className="fourth-section-container-2" key={index}>
                <div className="first-flex">
                  <div className="fourth-section-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="fourth-section-text">
                    <h4>{item.name}</h4>
                    <p>{item.userName}</p>
                  </div>
                </div>
                <p>{item.comment}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
