import React from "react";
import "./WelcomeJumbotron.css";

function WelcomeJumbotron({ children }) {
  return (
    <div
      style={{ height: 100, clear: "both", paddingTop: 20, textAlign: "center" }}
      className="welcomejumbotron"
    > 
    <h1 className="display-3">Welcome to Hearth.</h1>
    </div>
  );
}

export default WelcomeJumbotron;
