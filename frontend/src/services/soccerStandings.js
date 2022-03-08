import { getCurrentDate } from "./getCurrentDate.js";

export async function getStandingsService() {
  let storedData = getCurrentDate() + "Standings";
  let tournamentID = "sr:tournament:17";

  if (localStorage.getItem(storedData)) {
    try {
      return JSON.parse(localStorage.getItem(storedData));
    } catch {
      console.log("Bad format for Results");
    }
  } else {
    // build url

    let key = process.env.REACT_APP_API_KEY;
    let url = "tournaments/" + tournamentID + "/standings.json";
    url += "?api_key=" + key;
    //url = process.env.REACT_APP_TEST_API;
    const response = await fetch(url);
    console.log("standings response pre json");
    console.log(response);
    if (response.ok) {
      let data = await response.json();
      console.log("logging our standings data to json");
      console.log(data);
      localStorage.setItem(storedData, JSON.stringify(data));

      return await data;
    }
    throw response;
  }
}
