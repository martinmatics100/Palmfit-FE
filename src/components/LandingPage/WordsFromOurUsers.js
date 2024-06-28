import React from "react";
import { wordsFromOurUsers } from "../../utils/LandingPageData";

const WordsFromOurUsers = () => {
  return (
    <div className="Testimonials">
      <h2 className="mb-4">Words from Our Users</h2>
      <div className="testimony-cards-container">
        {wordsFromOurUsers.map((items) => {
          return (
            <WordsFromUsers
              name={items.name}
              userName={items.userName}
              comment={items.comment}
              img={items.img}
            />
          );
        })}
      </div>
    </div>
  );
};

const WordsFromUsers = (props) => {
  return (
    <div className="testimonal-card-component-container">
      <div className=" testimonal-card-component-con">
        <div className="testimonal-card-component-img">
          <img src={props.img} />
        </div>
        <p className="ps-2">
          {props.name}
          <br />
          <span className="pe-4">
            <a href="#" style={{ color: "#1A8D8D" }}>
              {props.userName}
            </a>
          </span>
        </p>
      </div>
      <p className="">{props.comment}</p>
    </div>
  );
};

export default WordsFromOurUsers;
