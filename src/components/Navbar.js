import React, { useState } from "react";
import { FaBars, FaTimes, FaReact } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <IconContext.Provider value={{ color: "fff" }}>
      <div className="nav">
        <div className="nav-container">
          <a href="/" className="nav-logo" onClick={closeMobileMenu}>
            <FaReact className="nav-icon" />
            React
          </a>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Product
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Navbar;
