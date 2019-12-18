import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import anime from "animejs"; // animation for preloader //
import "./index.scss";

import Main from "./Main";
import AboutUs from "./AboutUs";
import WhyUs from "./WhyUs";
import Support from "./Support";

import { ReactComponent as Company } from "./svg/CompanyName.svg";
import { ReactComponent as Loading } from "./svg/Loading.svg";

function Container() {
  const [loaded, setLoaded] = useState(false);

  let timeline = anime.timeline({
    easing: "easeOutExpo",
    autoplay: true,
    duration: "600",
    direction: "alternate",
    loop: true
  });

  useEffect(() => {
    timeline
      .add({
        targets: ".heart1",
        translateY: -20
      })
      .add(
        {
          targets: ".heart2",
          translateY: -20
        },
        "-=500"
      )
      .add(
        {
          targets: ".heart3",
          translateY: -20
        },
        "-=500"
      );
  }, [timeline]);

  window.addEventListener("load", () => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  });

  return (
    <div className="Container">
      <div className={loaded ? "preload finished" : "preload"}>
        <Loading />
      </div>

      <ul className="navBar">
        <li className="companyName">
          <Company />
        </li>
        <li className="options" onClick={() => console.log("asdf")}>
          Login
        </li>
        <li className="options">Support</li>
        <li className="options">App</li>
      </ul>

      <Main />
      <AboutUs />
      <WhyUs />
      <Support />
    </div>
  );
}

ReactDOM.render(<Container />, document.getElementById("root"));
