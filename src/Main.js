import React from "react";

import Typed from "react-typed";

import { ReactComponent as Freelance } from "./svg/Freelance.svg";

export default function Main() {
  return (
    <div className="mainPage">
      <div className="text">
        <Typed
          strings={["The talent you need.", "The flexibility you want."]}
          typeSpeed={40}
          backSpeed={50}
          loop
          smartBackspace
          backDelay={2000}
        />

        <div className="content">Turn your ideas into reality</div>
        <div className="content">Get started on your project today!</div>
      </div>

      <div className="image">
        <Freelance />
      </div>
    </div>
  );
}
