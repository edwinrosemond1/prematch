import { getCurrentDate } from "./getCurrentDate.js";

export async function getMissingPlayersService() {
  let storedData = getCurrentDate() + "MissingPlayers";
  let tournamentID = "sr:tournament:17";

  if (localStorage.getItem(storedData)) {
    try {
      return JSON.parse(localStorage.getItem(storedData));
    } catch {
      console.log("Bad format for Results");
    }
  } else {
    // build url
    let url = "";
    url += "tournaments/" + tournamentID + "/" + "missing_players.json";
    url += "?api_key=" + process.env.REACT_APP_API_KEY;
    const response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      await console.log("missing players");
      await console.log(data);
      localStorage.setItem(storedData, JSON.stringify(data));

      return await data;
    }
    throw response;
  }
}
