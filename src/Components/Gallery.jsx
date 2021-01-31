import React from "react";
import { bandInfo } from "../assets/bandInfo";
import { ImageGrow, Line } from "../styles";
import Footer from "./Footer";

const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <Line />
      <ul style={{ padding: "0" }}>
        {bandInfo.images.map((image) => {
          return (
            <li style={{ "list-style-type": "none" }}>
              <ImageGrow src={image} alt="talking heads" />
              <Line />
            </li>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
};

export default Gallery;
