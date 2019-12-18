import React from "react";

import { ReactComponent as Mail } from "./svg/Mail.svg";
import { ReactComponent as Address } from "./svg/Address.svg";
import { ReactComponent as Phone } from "./svg/Phone.svg";

export default function Contact() {
  return (
    <div className="contactPage">
      <div className="text">
        <Mail />
        <Address />
        <Phone />
      </div>
    </div>
  );
}
