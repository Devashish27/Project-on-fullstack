// // In Navigation.test.js

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Navigation from './Navigation';

// test('navigate to dashboard', () => {
//   // Render the Navigation component within a Router
//   render(
//     <Router>
//       <Navigation />
//     </Router>
//   );

//   // Simulate clicking a navigation link that leads to the dashboard
//   const dashboardLink = screen.getByText('Dashboard');
//   fireEvent.click(dashboardLink);

//   // Assert that the user is on the dashboard page
//   const dashboardHeading = screen.getByText('Dashboard');
//   expect(dashboardHeading).toBeInTheDocument();
// });

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation"; // Import your Navigation component

test("logout", () => {
  // Render the Navigation component within a Router
  render(
    <Router>
      <Navigation /> {/* Replace with your actual Navigation component */}
    </Router>
  );

  // Simulate clicking the "Logout" link
  const logoutLink = screen.getByText("Logout"); // Adjust the text as needed
  fireEvent.click(logoutLink);

  // Assert that the user is logged out (e.g., tokens or session data cleared)
  // You can also check if the user is redirected to the login page
});
