const fetch = require("cross-fetch");
const currentDate = require("./getCurrentDate.js");

async function getStandingsService() {
  let storedData = currentDate.getCurrentDate() + "Standings";
  // let tournamentID = "sr:tournament:17";
  let seasonID = "sr:season:83706";
  // sr:season:83706
  const cache = {};
  let base = "https://api.sportradar.us/soccer/trial/v4/en/seasons/";
  let api_key = "stu58fakwy2gazv4vr3vggqh";
  let url = base + seasonID + "/standings.json";
  url += "?api_key=" + api_key;
  if (!(url in cache)) {
    try {
      // build url
      // https://api.sportradar.us/soccer/trial/v4/en/seasons

      //url = process.env.REACT_APP_TEST_API;
      const response = await fetch(url);
      // console.log("standings response pre json");
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log("logging our standings data to json");
        console.log(data);
        cache[url] = JSON.stringify(data);

        return data;
      }
    } catch (err) {
      console.log("Encountered an error", err);
    }
  } else {
    return cache[url];
  }
}

module.exports = { getStandingsService };
