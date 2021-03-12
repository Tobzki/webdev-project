import React, { Component } from "react";
import "./AboutUs.css";

const method = () => {
  return (
    <div className="body">
      <div className="card">
        <h1>Tobias Andersson</h1>
        <p>Back End Developer</p>
        <img src="images/tobzki.jpg" alt="me"></img>
      </div>

      <div className="cardtwo">
        <h1>Håkan Reinholdsson</h1>
        <p>Front End Developer</p>
        <img src="images/håkzki.jpg" alt="me"></img>
      </div>
    </div>
  );
};

export default method;
