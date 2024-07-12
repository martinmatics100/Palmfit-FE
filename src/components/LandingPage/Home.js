import React from "react";
import Navbar from "./Navbar";
import "./Landing.css";
import HomeFirstPart from "./HomeFirstPart";
import AboutSection from "./AboutSection";
import WhyUs from "./WhyUs";
import WordsFromOurUsers from "./WordsFromOurUsers";
import Footer from "./Footer";

import { useState, useEffect } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="loader-container">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div>
          <Navbar />
          <HomeFirstPart />
          <AboutSection />
          <WhyUs />
          <WordsFromOurUsers />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
