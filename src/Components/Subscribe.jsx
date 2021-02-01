import React from "react";
import { Button } from "../styles";

const Subscribe = () => {
  return (
    <div>
      <h1>Subscribe</h1>
      <p>
        Sign up to receive early access to tickets, news, tour dates, new music
        and more.
      </p>
      <br />
      <div
        style={{
          width: "30%",
          height: "auto",
          display: "flex",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Email"
          style={{
            border: "2px solid lightgrey",
            padding: "0.75%",
            margin: "0",
            width: "60%",
            height: "auto",
          }}
        />
        <Button>
          <h2 style={{ margin: 0 }}>Submit</h2>
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
