import React, { useEffect, useState } from "react";

import anime from "animejs";

import { ReactComponent as Team } from "./svg/Team.svg";

export default function AboutUs() {
  const [animate, setAnimate] = useState(false);

  let timeline = anime.timeline({
    easing: "easeOutExpo",
    duration: "700"
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      setAnimate(true);
    }
  });

  useEffect(() => {
    if (animate === true) {
      timeline
        .add({
          targets: ".auTitle",
          opacity: 1
        })
        .add(
          {
            targets: ".auContent",
            opacity: 1
          },
          "-= 450"
        )
        .add(
          {
            targets: ".auButton",
            opacity: 1
          },
          "-= 350"
        )
        .add(
          {
            targets: ".auImage",
            duration: "1000",
            opacity: 1
          },
          "-=900"
        );
    }
  }, [animate, timeline]);

  return (
    <div className="aboutUsPage">
      <div className="auTitle">About Us</div>
      <div className="auContent">
        Our team of web developers helps your business stand out of the crowd in
        the online marketplace by providing brilliantly designed website.
        Creating pixel perfect and responsive web design for our client’s
        business website,
      </div>

      <div className="auButton">
        <button>Read More</button>
      </div>

      <div className="auImage">
        <Team />
      </div>
    </div>
  );
}
