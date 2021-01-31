import React from "react";

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
          "justify-content": "center",
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
        <button
          style={{
            padding: "0.75%",
            margin: "0",
            width: "40%",
            height: "auto",
            "font-size": "1.75vw",
            "border-radius": "0",
            color: "white",
            "background-color": "black",
          }}
        >
          <h2 style={{ margin: 0 }}>Submit</h2>
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
