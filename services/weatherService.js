// services/weatherService.js
const axios = require("axios");
const { OPENWEATHERMAP_API_KEY } = require("../config");

async function getCurrentWeather(location) {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: location,
          appid: OPENWEATHERMAP_API_KEY,
          units: "metric", // Use Celsius
        },
      }
    );

    return response.data.main.temp;
  } catch (error) {
    throw error;
  }
}

module.exports = { getCurrentWeather };
