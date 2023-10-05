import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardPage from "./components/Dashboard/DashboardPage";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(console.log);
