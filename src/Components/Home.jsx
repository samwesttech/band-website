import React from "react";
import homepageImage from "../assets/homepageImage.jpg";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <img src={homepageImage} alt="homepage band" />
      <hr
        style={{
          height: "2px",
          width: "70%",
          margin: "5% auto",
          // color: "white",
          "background-color": "white",
        }}
      />
    </div>
  );
};

export default Home;
