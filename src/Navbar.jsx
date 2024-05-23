import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Navbar() {
  return (
    <nav className="nav--bar">
      <p className="nav--logo">MOODCHEF</p>
      <div className="nav--icons">
        <Link to="/">
          <img src="../images/food-grain-rice-svgrepo-com.svg" className="nav--icon" />
        </Link>
      </div>
    </nav>
  );
}
