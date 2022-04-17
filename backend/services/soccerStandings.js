const fetch = require("cross-fetch");
const currentDate = require("./getCurrentDate.js");
const testStandings = require("./testData/testStandings");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const cache = testStandings.testStandings;
const api_key = process.env.api_key;
const base = process.env.sr_url;
const seasonID = process.env.sr_season_id;
const endPointType = "seasons/";

async function getStandingsService() {
  // sr:season:83706
  const url =
    base + endPointType + seasonID + "/standings.json?api_key=" + api_key;

  const store = url + currentDate.getCurrentDate();
  if (!(store in cache)) {
    console.log("not in cache");
    try {
      const response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        // console.log("logging our standings data to json");
        // store data
        console.log("response" + response.statusText);
        cache[store] = JSON.stringify(data);
        return data;
      }
    } catch (err) {
      console.log("Encountered an error", err);
    }
  } else {
    console.log("cache hit!");
    return JSON.parse(cache[store]);
  }
}

// "https://api.openweathermap.org/data/2.5/weather?lat=22&lon=22&appid=9a711bafba1b865d7db3a49877196b3b";

module.exports = { getStandingsService };
