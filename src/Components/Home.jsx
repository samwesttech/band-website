import React from "react";
import ReactPlayer from "react-player";
import homepageImage from "../assets/homepageImage.jpg";
import { bandInfo } from "../assets/bandInfo";
import { Line } from "../styles";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div>
        <h1>{bandInfo.name}</h1>
        <img
          src={homepageImage}
          alt="homepage band"
          style={{ height: "auto", width: "70%" }}
        />
      </div>

      <Line />

      <div>
        <h1>Latest Content</h1>
        <ReactPlayer
          url={bandInfo.videos[0]}
          controls="true"
          width="auto"
          style={{ margin: "5% 15%" }}
        />
      </div>

      <Line />
      <About />
      <Line />
      <Footer />
    </div>
  );
};

export default Home;
