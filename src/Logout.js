// In Logout.js
import React from "react";

const Logout = () => {
  // Implement logout logic here
  localStorage.removeItem("authToken"); // Clear the authentication token
  // You can also redirect the user to the login page
  window.location.href = "/login"; // Redirect to the login page

  return <div>Logging out...</div>;
};

export default Logout;
