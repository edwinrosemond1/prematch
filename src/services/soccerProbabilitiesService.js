import { matchOdds } from "../SoccerData/MatchOdds.js";

export async function getMatchProbabilityService(matchID) {
  let data = "Probabilities" + matchID;
  if (localStorage.getItem(data)) {
    try {
      return JSON.parse(localStorage.getItem(data));
    } catch (err) {
      console.log(err);
    }
  } else {
    let url = "matches/" + matchID + "/probabilities.json";
    url += "?api_key=" + process.env.REACT_APP_API_KEY;
    // url =
    //   "http://api.openweathermap.org/data/2.5/weather?q=London&appid=9a711bafba1b865d7db3a49877196b3b";
    const response = await fetch(url);
    if (response.ok) {
      let probabilities = await response.json();
      localStorage.setItem(data, JSON.stringify(probabilities));
      return matchOdds;
    }
    throw response;
  }
}
