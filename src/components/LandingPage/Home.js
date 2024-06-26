import React from "react";
import Navbar from "./Navbar";
import "../../App.css";
import "./Landing.css";
import HomeFirstPart from "./HomeFirstPart";
import AboutSection from "./AboutSection";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeFirstPart />
      <AboutSection />
      <WhyUs />
    </div>
  );
};

export default Home;
