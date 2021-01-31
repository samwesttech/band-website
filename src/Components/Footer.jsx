import React from "react";
import { bandInfo } from "../assets/bandInfo";
import Subscribe from "./Subscribe";
import { Link } from "@reach/router";

const Footer = () => {
  return (
    <div>
      <Subscribe />
      <Link to="/privacy_policy">PRIVACY POLICY</Link>
      <p>Copyright © {bandInfo.name}</p>
    </div>
  );
};

export default Footer;
