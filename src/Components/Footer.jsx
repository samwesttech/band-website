import React from "react";
import { bandInfo } from "../assets/bandInfo";
import Subscribe from "./Subscribe";
import { Link } from "@reach/router";

const Footer = () => {
  return (
    <div>
      <Subscribe />
      <br />
      <div style={{ margin: "auto" }}>
        <Link to="/cookies" style={{ margin: "auto", "padding-right": "15%" }}>
          COOKIES
        </Link>
        <Link
          to="/privacy_policy"
          style={{ margin: "auto", "padding-left": "15%" }}
        >
          PRIVACY POLICY
        </Link>
      </div>
      <p>Copyright © {bandInfo.name}</p>
      <br />
    </div>
  );
};

export default Footer;
