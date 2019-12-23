import React, { useState, useEffect } from "react";

import { ReactComponent as Image } from "./svg/Codes.svg";

import anime from "animejs";

export default function WhyUs() {
  const [animate, setAnimate] = useState(false);

  let timeline = anime.timeline({
    easing: "easeOutExpo",
    duration: "700"
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 1050) {
      setAnimate(true);
    }
  });

  useEffect(() => {
    if (animate === true) {
      timeline
        .add({
          targets: ".wuTitle",
          opacity: 1
        })
        .add(
          {
            targets: ".wuContent",
            opacity: 1
          },
          "-= 450"
        )
        .add(
          {
            targets: ".wuButton",
            opacity: 1
          },
          "-= 350"
        )
        .add(
          {
            targets: ".wuImage",
            duration: "1000",
            opacity: 1
          },
          "-=900"
        );
    }
  }, [animate, timeline]);

  return (
    <div className="whyUsPage">
      <div className="wuTitle">Why Amino?</div>
      <div className="wuContent">
        We a team of young and ambitious people who are bringing the best
        software solution to the digital market. We specializes on software
        solutions with micro service approach that gives the best performance to
        your software.
      </div>
      <div className="wuButton">
        <button>Read more</button>
      </div>

      <div className="wuImage" id='image'>
        <Image />
      </div>
    </div>
  );
}
