const fetch = require("cross-fetch");
const currentDate = require("./getCurrentDate.js");
const cache = {};

async function getStandingsService() {
  let storedData = currentDate.getCurrentDate() + "Standings";
  // let tournamentID = "sr:tournament:17";
  let seasonID = "sr:season:83706";
  // sr:season:83706
  let base = "https://api.sportradar.us/soccer/trial/v4/en/seasons/";
  let api_key = "stu58fakwy2gazv4vr3vggqh";
  let url = base + seasonID + "/standings.json";
  url += "?api_key=" + api_key;
  console.log("cache");
  console.log(cache);
  console.log(url);
  const store = url + currentDate.getCurrentDate();
  if (!(store in cache)) {
    try {
      // build url
      // https://api.sportradar.us/soccer/trial/v4/en/seasons
      // url =
      //   "https://api.openweathermap.org/data/2.5/weather?lat=22&lon=22&appid=9a711bafba1b865d7db3a49877196b3b";

      //url = process.env.REACT_APP_TEST_API;
      const response = await fetch(url);
      // console.log("standings response pre json");
      if (response.ok) {
        let data = await response.json();
        console.log("logging our standings data to json");
        console.log(data);
        cache[store] = JSON.stringify(data);

        return data;
      }
    } catch (err) {
      console.log("Encountered an error", err);
    }
  } else {
    return JSON.parse(cache[store]);
  }
}

module.exports = { getStandingsService };
