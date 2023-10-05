// In NavBar.js
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-link">
        Home
      </a>
      <a href="/dashboard" className="navbar-link">
        Dashboard
      </a>
      <a href="/logout" className="navbar-link">
        Logout
      </a>
    </nav>
  );
};

export default NavBar;
