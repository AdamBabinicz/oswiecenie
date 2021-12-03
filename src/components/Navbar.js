import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import img from "../assets/1.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        <h2>
          <img src={img} alt="..." />
        </h2>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Start</Link>
        </li>
        <li>
          <Link to="/nurty">Nurty</Link>
        </li>
        <li>
          <Link to="/polscy-tworcy">Przedstawiciele</Link>
        </li>
        <li>
          <Link to="/oswiecenie">W Polsce</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
