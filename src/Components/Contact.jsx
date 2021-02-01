import React from "react";
import { bandInfo } from "../assets/bandInfo";
import { Line } from "../styles";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Line />
      <h1>⬆ through our social media ⬆</h1>
      <h3>Or alternativly email us at ...</h3>
      <a href={bandInfo.social.email}>{bandInfo.social.email}</a>
      <Line />
      <Footer />
    </div>
  );
};

export default Contact;
