import React, { useState, useEffect } from "react";

import anime from "animejs";

import { ReactComponent as Faq } from "./svg/Faq.svg";

export default function Support() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  let timeline = anime.timeline({
    easing: "easeOutExpo",
    duration: "600"
  });

  const toggle1 = () => {
    if (show1) {
      setShow1(false);
    } else {
      setShow1(true);
    }
  };

  const toggle2 = () => {
    if (show2) {
      setShow2(false);
    } else {
      setShow2(true);
    }
  };

  const toggle3 = () => {
    if (show3) {
      setShow3(false);
    } else {
      setShow3(true);
    }
  };
  const toggle4 = () => {
    if (show4) {
      setShow4(false);
    } else {
      setShow4(true);
    }
  };

  useEffect(() => {
    timeline
      .add({
        targets: "#q1",
        color: show1 ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.5)"
      })
      .add(
        {
          targets: "#a1",
          opacity: show1 ? 1 : 0,
          color: "rgba(0, 0, 0, 0.7)"
        },
        "-= 600"
      )
      .add(
        {
          targets: "#q2",
          translateY: show1 ? 100 : 0,
          opacity: show1 ? 0.1 : 1,
          color: "rgba(0, 0, 0, 0.5)"
        },
        "-=600"
      )
      .add(
        {
          targets: "#q3",
          translateY: show1 ? 100 : 0,
          opacity: show1 ? 0.1 : 1,
          color: "rgba(0, 0, 0, 0.5)"
        },
        "-=600"
      )
      .add(
        {
          targets: "#q4",
          translateY: show1 ? 100 : 0,
          opacity: show1 ? 0.1 : 1,
          color: "rgba(0, 0, 0, 0.5)"
        },
        "-=600"
      );
  }, [show1]);

  useEffect(() => {
    timeline
      .add(
        {
          targets: "#q1",
          opacity: show2 ? 0.1 : 1,
          color: "rgba(0, 0, 0, 0.5)"
        },
        "-=600"
      )
      .add({
        targets: "#q2",
        color: show2 ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.5)"
      })
      .add(
        {
          targets: "#a2",
          opacity: show2 ? 1 : 0,
          color: "rgba(0, 0, 0, 0.7)"
        },
        "-= 600"
      )
      .add(
        {
          targets: "#q3",
          translateY: show2 ? 50 : 0,
          opacity: show2 ? 0.1 : 1,
          color: "rgba(0, 0, 0, 0.5)"
        },
        "-=600"
      )
      .add(
        {
          targets: "#q4",
          translateY: show2 ? 50 : 0,
          opacity: show2 ? 0.1 : 1,
          color: "rgba(0, 0, 0, 0.5)"
        },
        "-=600"
      );
  }, [show2]);

  useEffect(() => {
    timeline
      .add(
        {
          targets: "#q1",
          opacity: show3 ? 0.1 : 1,
          color: "rgba(0, 0, 0, 0.5)"
        },
        "-=600"
      )
      .add({
        targets: "#q2",
        opacity: show3 ? 0.1 : 1,
        color: "rgba(0, 0, 0, 0.5)"
      })
      .add(
        {
          targets: "#q3",
          color: show3 ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.5)"
        },
        "-=600"
      )
      .add(
        {
          targets: "#q4",
          translateY: show3 ? 150 : 0,
          opacity: show3 ? 0.1 : 1,
          color: "rgba(0, 0, 0, 0.5)"
        },
        "-=600"
      )
      .add(
        {
          targets: "#a3",
          opacity: show3 ? 1 : 0,
          color: "rgba(0, 0, 0, 0.7)"
        },
        "-= 600"
      );
  }, [show3]);

  useEffect(() => {
    timeline
      .add(
        {
          targets: "#q1",
          opacity: show4 ? 0.1 : 1,
          color: "rgba(0, 0, 0, 0.5)"
        },
        "-=600"
      )
      .add({
        targets: "#q2",
        opacity: show4 ? 0.1 : 1,
        color: "rgba(0, 0, 0, 0.5)"
      })
      .add(
        {
          targets: "#q3",
          opacity: show4 ? 0.1 : 1,
          color: "rgba(0, 0, 0, 0.5)"
        },
        "-=600"
      )
      .add(
        {
          targets: "#q4",
          color: show4 ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.5)"
        },
        "-=600"
      )
      .add(
        {
          targets: "#a4",
          opacity: show4 ? 1 : 0,
          color: "rgba(0, 0, 0, 0.7)"
        },
        "-= 600"
      );
  }, [show4]);

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
        <li className="listItem" value={1}>
          <div className="question" id="q4" onClick={toggle4}>
            How much will my project cost?
          </div>
          <div className="answer" id="a4">
            We can’t answer this question until we understand your idea,
            business, users etc. While it’s really hard to know the specific
            costs of the project without going through a discovery phase like
            our Research, Design, and Planning phase, we can usually help you
            set a responsible budget during before you ever hire us. No matter
            how large or small your budget, it’s always our goals for the value
            our clients receive to significantly exceed the fees we charge.
          </div>
        </li>
      </ul>

      <div className="sImage">
        <Faq />
      </div>
    </div>
  );
}
