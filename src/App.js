import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const onScroll = () => {
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;
    document.getElementById("bar").style.width = `${percentage}%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div className="page">
      <Navbar />
      <div className="progress_wrapper">
        <div className="progress_bar" id="bar"></div>
      </div>
    </div>
  );
}

export default App;
