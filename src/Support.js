import React, { useState, useEffect } from "react";

import anime from "animejs";

import { ReactComponent as Faq } from "./svg/Faq.svg";

export default function Support() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [y, setY] = useState(0);
  const [y2, setY2] = useState(0);
  const [animate, setAnimate] = useState(false);

  let timeline = anime.timeline({
    easing: "easeOutExpo",
    duration: "600"
  });

  const toggle1 = () => {
    if (show1) {
      setShow1(false);
      setY(y - 170);
      setY2(y2 - 170);
    } else {
      setShow1(true);
      setY(y + 170);
      setY2(y2 + 170);
    }
  };

  const toggle2 = () => {
    if (show2) {
      setShow2(false);
      setY2(y2 - 60);
    } else {
      setShow2(true);
      setY2(y2 + 60);
    }
  };

  const toggle3 = () => {
    if (show3) {
      setShow3(false);
    } else {
      setShow3(true);
    }
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 1850) {
      setAnimate(true);
    }
  });

  useEffect(() => {
    if (animate) {
      timeline.add({
        targets: ".sTitle",
        opacity: 1
      });
      timeline.add(
        {
          targets: ".faqList",
          opacity: 1
        },
        "-=450"
      );
      timeline.add(
        {
          targets: ".sImage",
          opacity: 0.4
        },
        "-=900"
      );
    }
  }, [animate]);

  useEffect(() => {
    timeline
      .add({
        targets: "#q1",
        color: "rgba(0, 0, 0, 0.7)"
      })
      .add(
        {
          targets: "#a1",
          opacity: show1 ? 1 : 0
        },
        "-= 600"
      )
      .add(
        {
          targets: "#q2",
          translateY: y
        },
        "-= 600"
      )
      .add(
        {
          targets: "#a2",
          translateY: y
        },
        "-= 600"
      )
      .add(
        {
          targets: "#q3",
          translateY: y2
        },
        "-= 600"
      )
      .add(
        {
          targets: "#a3",
          translateY: y2
        },
        "-= 600"
      );
  }, [show1]);

  useEffect(() => {
    timeline
      .add({
        targets: "#q2",
        color: "rgba(0, 0, 0, 0.7)"
      })
      .add(
        {
          targets: "#a2",
          opacity: show2 ? 1 : 0
        },
        "-= 600"
      )
      .add(
        {
          targets: "#q3",
          translateY: y2
        },
        "-= 600"
      )
      .add(
        {
          targets: "#a3",
          translateY: y2
        },
        "-= 600"
      );
  }, [show2]);

  useEffect(() => {
    timeline
      .add({
        targets: "#q3",
        color: "rgba(0, 0, 0, 0.7)"
      })
      .add(
        {
          targets: "#a3",
          opacity: show3 ? 1 : 0
        },
        "-= 600"
      );
  }, [show3]);

  return (
    <div className="supportPage">
      <div className="sTitle">FAQs</div>
      <ul className="faqList">
        <li className="listItem" value={1}>
          <div className="question" id="q1" onClick={toggle1}>
            Do you code everything from scratch?
          </div>
          <div className="answer" id="a1">
            Amino teams get incredible leverage from open source tools,
            libraries, frameworks and indeed entire projects or our own
            proprietary libraries. We never reinvent the wheel when there is a
            tool that is suitable for solving a problem. We always program from
            scratch the parts that make your project custom and valuable.
          </div>
        </li>
        <li className="listItem" value={1}>
          <div className="question" id="q2" onClick={toggle2}>
            What is Binary Lab Culture like?
          </div>
          <div className="answer" id="a2">
            Our culture is best described as open, friendly, and fast-paced.
          </div>
        </li>
        <li className="listItem" value={1}>
          <div className="question" id="q3" onClick={toggle3}>
            What’s a typical Team Size?
          </div>
          <div className="answer" id="a3">
            The typical size for each project team is 2-3 developers. Each
            project team is supported by UI/UX designers, software testers,
            managers, and cloud engineers. With each development team sharing
            support resources, we’re able to reduce project costs for clients.
            We’re also able to make developers more efficient by ensuring they
            spend their time writing production-level code, not messing with
            other tasks.
          </div>
        </li>
      </ul>

      <div className="sImage" id="image">
        <Faq />
      </div>
    </div>
  );
}
