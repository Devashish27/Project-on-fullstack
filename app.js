// app.js
const express = require("express");
const app = express();
const weatherRouter = require("./routes/weather");
const sequelize = require("./database");

app.use(express.json());

app.use("/api", weatherRouter);

sequelize.sync({ force: false }).then(() => {
  app.listen(8001, () => {
    console.log("WeatherAnalyzer service is running on port 8001");
  });
});
