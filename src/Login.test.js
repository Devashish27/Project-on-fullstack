// // In Login.test.js
// This is for successful login.

// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import Login from "./Login";

// test("login form submission", () => {
//   render(<Login />);

//   // Get form elements
//   const usernameInput = screen.getByPlaceholderText("Username");
//   const passwordInput = screen.getByPlaceholderText("Password");
//   const loginButton = screen.getByText("Login");

//   // Simulate user input
//   fireEvent.change(usernameInput, { target: { value: "testuser" } });
//   fireEvent.change(passwordInput, { target: { value: "password123" } });

//   // Simulate form submission
//   fireEvent.click(loginButton);

//   // Assert that the form submits correctly
//   // You can assert that a loading indicator is displayed, or the user is redirected after submission
// });

// In Login.test.js
// For unsuccessful login.
// Import necessary libraries and components
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

test("unsuccessful login", () => {
  // Render the Login component
  render(<Login />);

  // Get form elements
  const usernameInput = screen.getByPlaceholderText("Username");
  const passwordInput = screen.getByPlaceholderText("Password");
  const loginButton = screen.getByText("Login");

  // Simulate user entering invalid credentials
  fireEvent.change(usernameInput, { target: { value: "invalidUsername" } });
  fireEvent.change(passwordInput, { target: { value: "invalidPassword" } });

  // Simulate form submission by clicking the login button
  fireEvent.click(loginButton);

  // Assert that an error message is displayed (You need to implement this logic in your Login component)
  const errorMessage = screen.getByText("Invalid credentials"); // Adjust this to match your error message
  expect(errorMessage).toBeInTheDocument();
});
