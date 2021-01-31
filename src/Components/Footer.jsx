import React from "react";
import { bandInfo } from "../assets/bandInfo";
import Subscribe from "./Subscribe";
import { Link } from "@reach/router";

const Footer = () => {
  return (
    <div>
      <Subscribe />
      <br />
      <Link to="/privacy_policy">PRIVACY POLICY</Link>
      <p>Copyright © {bandInfo.name}</p>
      <br />
    </div>
  );
};

export default Footer;
