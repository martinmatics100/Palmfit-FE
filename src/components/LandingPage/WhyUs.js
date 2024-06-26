import React from "react";
import { whyChooseUs } from "../../utils/LandingPageData";
import { Opacity } from "@mui/icons-material";

let style = {
  marginTop: 45,
  marginBottom: 65,
  backgroundColor: "#F6FBFB",
};

const WhyUs = () => {
  return (
    <div className="container-sm" style={style}>
      <h2
        className="text-center"
        style={{ marginBottom: "40px", paddingTop: "50px" }}
      >
        Why Choose Us?
      </h2>

      <div className="card-container" style={{ marginBottom: 40 }}>
        {whyChooseUs.map((items, index) => {
          return (
            <WhyChooseUsCard
              key={index}
              img={items.img}
              head={items.head}
              paragraph={items.paragraph}
              bg={items.bg}
              headClassName="custom-head-class"
            />
          );
        })}
      </div>
    </div>
  );
};

const WhyChooseUsCard = (props) => {
  return (
    <div
      className="whyChooseUs card mb-sm-2 mx-sm-auto fs-md-6 mb-sm-4 border border-0 custom-body-class"
      style={{
        backgroundColor: props.bg,
        padding: "20px 40px",
        borderRadius: "8px",
      }}
    >
      <img
        className="card-img-top mx-auto"
        src={props.img}
        alt={props.head}
        style={{ width: 40, height: 40, marginTop: 20 }}
      />
      <div class="card-body">
        <h3 className={`text-center ${props.headClassName}`}>{props.head}</h3>
        <p class="card-text">{props.paragraph}</p>
      </div>
    </div>
  );
};

export default WhyUs;
