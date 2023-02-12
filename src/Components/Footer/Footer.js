import React from "react";

import { BsTelephone } from "react-icons/bs";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div>
        <h1>
          <AiOutlineHome />
          E-Commerce
        </h1>
        <h1>
          <AiOutlineMail />
          sonideepak887@gmail.com
        </h1>
        <h1>
          <BsTelephone />
          9529076013
        </h1>
      </div>
      <div>
        <h1>Company</h1>
        <h3>About Us</h3>
        <h3>Contect Us</h3>
        <h3>Products</h3>
      </div>
      <div>
        {" "}
        <h1>More Info</h1>
        <h3>Privacy Policy</h3>
        <h3>Refund</h3>
        <h3>T&C</h3>
      </div>
    </div>
  );
}

export default Footer;
