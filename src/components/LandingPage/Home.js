import React from "react";
import Navbar from "./Navbar";
import "../../App.css";
import "./Landing.css";
import HomeFirstPart from "./HomeFirstPart";
import AboutSection from "./AboutSection";
import WhyUs from "./WhyUs";
import WordsFromOurUsers from "./WordsFromOurUsers";
import Footer from "./Footer";

import { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/MoonLoader";

const Home = () => {
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="loader-container">
      {Loading ? (
        <div
          className="loader-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            backgroundColor: "#f2f2f2",
          }}
        >
          <PropagateLoader
            color={"#1A8D8D"}
            loading={Loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
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
