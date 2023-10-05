import React from "react";
import "./Dashboard.css";
import { DashboardPage } from "./components/Dashboard/DashboardPage"; // Note the use of curly braces {}

const Dashboard = ({ weatherData }) => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <table className="table">
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

export default Dashboard;
