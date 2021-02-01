import React from "react";
import { bandInfo } from "../assets/bandInfo";
import ReactPlayer from "react-player";
import { Line } from "../styles";
import Footer from "./Footer";

const Videos = () => {
  return (
    <div>
      <h1>Videos</h1>
      <Line />
      <ul>
        {bandInfo.videos.map((video) => {
          return (
            <li style={{ "list-style-type": "none" }}>
              <ReactPlayer
                url={video}
                controls={true}
                width="auto"
                style={{ margin: "10% 15%" }}
              />
              <Line />
            </li>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
};

export default Videos;
