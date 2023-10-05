import React, { useState, useEffect } from "react";
import axios from "axios";

const DashboardPage = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const apiUrl = "/api/weather";

    axios
      .get(apiUrl)
      .then((response) => {
        const { data } = response;
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature Label</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((data) => (
            <tr key={data.city}>
              <td>{data.city}</td>
              <td>{data.temperatureLabel}</td>
              <td>{data.label}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
