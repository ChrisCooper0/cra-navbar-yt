import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [showButton, setShowButton] = useState(true);
  const onScroll = () => {
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;
    document.getElementById("bar").style.width = `${percentage}%`;

    // Scroll to top button logic
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="page">
      <Navbar />
      <div className="progress_wrapper">
        <div className="progress_bar" id="bar"></div>
      </div>
      <FaArrowUp
        className={showButton ? "showButton" : "hidden"}
        onClick={scrollToTop}
      />
    </div>
  );
}

export default App;
