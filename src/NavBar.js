// import React from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <div className="navbar">
//       <Link to="/">Home</Link>
//       <Link to="/dashboard">Dashboard</Link>
//       <Link to="/logout">Logout</Link>
//     </div>
//   );
// };

// export default NavBar;

// In NavBar.js
import React from "react";
import Logout from "./Logout"; // Import the Logout component

const NavBar = () => {
  localStorage.removeItem("authToken"); // Clear the authentication token
  window.location.href = "/login"; // Redirect to the login page

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
