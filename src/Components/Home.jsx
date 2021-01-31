import React from "react";
import ReactPlayer from "react-player";
import { bandInfo } from "../assets/bandInfo";
import { Line } from "../styles";
import About from "./About";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

const Home = () => {
  return (
    <div>
      <div>
        <h1>{bandInfo.name}</h1>
        <Line />
        <img
          src={bandInfo.homepageImage}
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
      <MusicPlayer />
      <Line />
      <Footer />
    </div>
  );
};

export default Home;
