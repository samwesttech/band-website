import React from "react";
import Footer from "./Footer";
import { Line } from "../styles";
import MusicPlayer from "./MusicPlayer";

const Music = () => {
  return (
    <div>
      <h1>Music</h1>
      <Line />
      <MusicPlayer />
      <Line />
      <Footer />
    </div>
  );
};

export default Music;
