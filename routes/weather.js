// routes/weather.js
const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/auth");
const { getCurrentWeather } = require("../services/weatherService");
const TemperatureLabel = require("../models/temperatureLabel");

router.get("/weather", authenticateToken, async (req, res) => {
  const { city } = req.query;

  try {
    const temperature = await getCurrentWeather(city);

    const label = await TemperatureLabel.findOne({
      where: {
        min_temperature: { $lte: temperature },
        max_temperature: { $gt: temperature },
      },
    });

    if (!label) {
      return res
        .status(500)
        .json({ success: false, message: "Temperature label not found" });
    }

    res.status(200).json({ success: true, temperature, label: label.label });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch weather data" });
  }
});

module.exports = router;
