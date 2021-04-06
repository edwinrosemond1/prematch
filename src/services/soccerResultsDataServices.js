import { getCurrentDate } from "./getCurrentDate.js";

export async function getResults() {
  let resultsData = getCurrentDate() + "Results";
  let tournamentID = "sr:tournament:17";

  if (localStorage.getItem(resultsData)) {
    try {
      return JSON.parse(localStorage.getItem(resultsData));
    } catch {
      console.log("Bad format for Results");
    }
  } else {
    // build url
    let url;
    let key = process.env.REACT_APP_API_KEY;
    url +=
      "tournaments/" +
      tournamentID +
      "/" +
      process.env.REACT_APP_RESPONSE_FORMAT;
    url += "?api_key=" + key;
    //url = process.env.REACT_APP_TEST_API;
    const response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      localStorage.setItem(resultsData, JSON.stringify(data));

      return await data;
    }
    throw response;
  }
}
