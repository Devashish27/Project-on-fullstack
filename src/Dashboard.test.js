// // In Dashboard.test.js

// import React from "react";
// import { render, screen } from "@testing-library/react";
// import Dashboard from "./Dashboard";

// test("display weather data", () => {
//   // Simulate receiving data from /api/weather
//   const weatherData = [
//     { city: "Mumbai", temperatureLabel: "30°C", label: "Hot" },
//     // Add more sample data as needed
//   ];

//   // Render the Dashboard component with weatherData as a prop
//   render(<Dashboard weatherData={weatherData} />);

//   // Assert that weather data is displayed correctly
//   const mumbaiRow = screen.getByText("Mumbai");
//   const temperatureLabel = screen.getByText("30°C");
//   const label = screen.getByText("Hot");

//   expect(mumbaiRow).toBeInTheDocument();
//   expect(temperatureLabel).toBeInTheDocument();
//   expect(label).toBeInTheDocument();
// });

import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";
import nock from "nock";

// Mock the API endpoint URL
const apiUrl = "/api/weather";

test("handle network request failure", async () => {
  // Mock a network request failure using nock
  nock("http://localhost").get(apiUrl).reply(500, "Internal Server Error"); // Simulate a server error (HTTP 500)

  // Render the Dashboard component
  render(<Dashboard />);

  // Ensure that an error message is displayed when the network request fails
  const errorMessage = await screen.findByText("Network request failed");
  expect(errorMessage).toBeInTheDocument();
});

test("handle unexpected server response", async () => {
  // Mock an unexpected server response using nock
  nock("http://localhost").get(apiUrl).reply(200, "Invalid JSON Data"); // Simulate an unexpected response data

  // Render the Dashboard component
  render(<Dashboard />);

  // Ensure that an error message is displayed when the server response is unexpected
  const errorMessage = await screen.findByText("Unexpected server response");
  expect(errorMessage).toBeInTheDocument();
});
