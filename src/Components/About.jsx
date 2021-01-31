import React from "react";
import { bandInfo } from "../assets/bandInfo";
import { AboutStyled } from "../styles";

const About = () => {
  return (
    <AboutStyled>
      <h1>About</h1>
      <p>{bandInfo.description}</p>
    </AboutStyled>
  );
};

export default About;
