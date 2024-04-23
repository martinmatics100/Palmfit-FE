import React, { useState, useContext, memo, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";

function CustomToggle({ children, eventKey, onClick }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, (active) =>
    onClick({ state: !active, eventKey: eventKey })
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Link
      to="#"
      aria-expanded={isCurrentEventKey ? "true" : "false"}
      className="nav-link"
      role="button"
      onClick={(e) => {
        decoratedOnClick(isCurrentEventKey);
      }}
    >
      {children}
    </Link>
  );
}

const VerticalNav = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [active, setActive] = useState("");
  //location
  let location = useLocation();

  return (
    <Fragment>
      <li className="nav-item">
        <a href="" className="nav-link">
          <i className="icon">
            <svg
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 1C2.44772 1 2 1.44772 2 2V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V2C22 1.44772 21.5523 1 21 1H3ZM10 8C10 7.44772 10.4477 7 11 7H13C13.5523 7 14 7.44772 14 8V10C14 10.5523 13.5523 11 13 11H11C10.4477 11 10 10.5523 10 10V8ZM10 13C10 12.4477 10.4477 12 11 12H13C13.5523 12 14 12.4477 14 13V15C14 15.5523 13.5523 16 13 16H11C10.4477 16 10 15.5523 10 15V13ZM15 8C15 7.44772 15.4477 7 16 7H18C18.5523 7 19 7.44772 19 8V15C19 15.5523 18.5523 16 18 16H16C15.4477 16 15 15.5523 15 15V8Z"
                fill="currentColor"
              />
            </svg>
          </i>
          <span className="item-name">Calorie Calculator</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="" className="nav-link">
          <i className="icon">
            <svg
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 1C2.44772 1 2 1.44772 2 2V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V2C22 1.44772 21.5523 1 21 1H3ZM7 6C7.55228 6 8 6.44772 8 7V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17V7C6 6.44772 6.44772 6 7 6ZM16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7C15 6.44772 15.4477 6 16 6Z"
                fill="currentColor"
              />
            </svg>
          </i>
          <span className="item-name">Meal Plans</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="" className="nav-link">
          <i className="icon">
            <svg
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M10.0833 15.958H3.50777C2.67555 15.958 2 16.6217 2 17.4393C2 18.2559 2.67555 18.9207 3.50777 18.9207H10.0833C10.9155 18.9207 11.5911 18.2559 11.5911 17.4393C11.5911 16.6217 10.9155 15.958 10.0833 15.958Z"
                fill="currentColor"
              ></path>
              <path
                opacity="0.4"
                d="M22.0001 6.37867C22.0001 5.56214 21.3246 4.89844 20.4934 4.89844H13.9179C13.0857 4.89844 12.4102 5.56214 12.4102 6.37867C12.4102 7.1963 13.0857 7.86 13.9179 7.86H20.4934C21.3246 7.86 22.0001 7.1963 22.0001 6.37867Z"
                fill="currentColor"
              ></path>
              <path
                d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856Z"
                fill="currentColor"
              ></path>
              <path
                d="M21.9998 17.3992C21.9998 19.2648 20.4609 20.7777 18.5609 20.7777C16.6621 20.7777 15.1221 19.2648 15.1221 17.3992C15.1221 15.5325 16.6621 14.0195 18.5609 14.0195C20.4609 14.0195 21.9998 15.5325 21.9998 17.3992Z"
                fill="currentColor"
              ></path>
            </svg>
          </i>
          <span className="item-name">Meal diary</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="" className="nav-link">
          <i className="icon">
            <svg
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9488 14.54C8.49884 14.54 5.58789 15.1038 5.58789 17.2795C5.58789 19.4562 8.51765 20.0001 11.9488 20.0001C15.3988 20.0001 18.3098 19.4364 18.3098 17.2606C18.3098 15.084 15.38 14.54 11.9488 14.54Z"
                fill="currentColor"
              ></path>
              <path
                opacity="0.4"
                d="M11.949 12.467C14.2851 12.467 16.1583 10.5831 16.1583 8.23351C16.1583 5.88306 14.2851 4 11.949 4C9.61293 4 7.73975 5.88306 7.73975 8.23351C7.73975 10.5831 9.61293 12.467 11.949 12.467Z"
                fill="currentColor"
              ></path>
              <path
                opacity="0.4"
                d="M21.0881 9.21923C21.6925 6.84176 19.9205 4.70654 17.664 4.70654C17.4187 4.70654 17.1841 4.73356 16.9549 4.77949C16.9244 4.78669 16.8904 4.802 16.8725 4.82902C16.8519 4.86324 16.8671 4.90917 16.8895 4.93889C17.5673 5.89528 17.9568 7.0597 17.9568 8.30967C17.9568 9.50741 17.5996 10.6241 16.9728 11.5508C16.9083 11.6462 16.9656 11.775 17.0793 11.7948C17.2369 11.8227 17.3981 11.8371 17.5629 11.8416C19.2059 11.8849 20.6807 10.8213 21.0881 9.21923Z"
                fill="currentColor"
              ></path>
              <path
                d="M22.8094 14.817C22.5086 14.1722 21.7824 13.73 20.6783 13.513C20.1572 13.3851 18.747 13.205 17.4352 13.2293C17.4155 13.232 17.4048 13.2455 17.403 13.2545C17.4003 13.2671 17.4057 13.2887 17.4316 13.3022C18.0378 13.6039 20.3811 14.916 20.0865 17.6834C20.074 17.8032 20.1698 17.9068 20.2888 17.8888C20.8655 17.8059 22.3492 17.4853 22.8094 16.4866C23.0637 15.9589 23.0637 15.3456 22.8094 14.817Z"
                fill="currentColor"
              ></path>
              <path
                opacity="0.4"
                d="M7.04459 4.77973C6.81626 4.7329 6.58077 4.70679 6.33543 4.70679C4.07901 4.70679 2.30701 6.84201 2.9123 9.21947C3.31882 10.8216 4.79355 11.8851 6.43661 11.8419C6.60136 11.8374 6.76343 11.8221 6.92013 11.7951C7.03384 11.7753 7.09115 11.6465 7.02668 11.551C6.3999 10.6234 6.04263 9.50765 6.04263 8.30991C6.04263 7.05904 6.43303 5.89462 7.11085 4.93913C7.13234 4.90941 7.14845 4.86348 7.12696 4.82926C7.10906 4.80135 7.07593 4.78694 7.04459 4.77973Z"
                fill="currentColor"
              ></path>
              <path
                d="M3.32156 13.5127C2.21752 13.7297 1.49225 14.1719 1.19139 14.8167C0.936203 15.3453 0.936203 15.9586 1.19139 16.4872C1.65163 17.4851 3.13531 17.8066 3.71195 17.8885C3.83104 17.9065 3.92595 17.8038 3.91342 17.6832C3.61883 14.9167 5.9621 13.6046 6.56918 13.3029C6.59425 13.2885 6.59962 13.2677 6.59694 13.2542C6.59515 13.2452 6.5853 13.2317 6.5656 13.2299C5.25294 13.2047 3.84358 13.3848 3.32156 13.5127Z"
                fill="currentColor"
              ></path>
            </svg>
          </i>
          <span className="item-name">Profile</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="" className="nav-link">
          <i className="icon">
            <svg
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1C12.5523 1 13 1.44772 13 2V3H21C21.5523 3 22 3.44772 22 4V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V4C2 3.44772 2.44772 3 3 3H11V2C11 1.44772 11.4477 1 12 1ZM4 6V20H20V6H4ZM12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5ZM12 13.5C9.51472 13.5 7.5 15.5147 7.5 18H16.5C16.5 15.5147 14.4853 13.5 12 13.5Z"
                fill="currentColor"
              />
            </svg>
          </i>
          <span className="item-name">Subscription</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="" className="nav-link">
          <i className="icon">
            <svg
              width="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 16C13 15.4477 13.4477 15 14 15H20V9H14C13.4477 9 13 8.55228 13 8C13 7.44772 13.4477 7 14 7H20C21.1046 7 22 7.89543 22 9V15C22 16.1046 21.1046 17 20 17H14C13.4477 17 13 16.5523 13 16ZM12 12H4V4H12V12ZM2 3C2 2.44772 2.44772 2 3 2H11C11.5523 2 12 2.44772 12 3V13H10V4H4V20H10V18H12V20C12 20.5523 11.5523 21 11 21H3C2.44772 21 2 20.5523 2 20V3Z"
                fill="currentColor"
              />
            </svg>
          </i>
          <span className="item-name">LogOut</span>
        </a>
      </li>
    </Fragment> 
  );
};

export default VerticalNav;
