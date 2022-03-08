import { getCurrentDate } from "./getCurrentDate.js";
import { schedule } from "../SoccerData/ScheduleData.js";

export async function getSoccerSchedule() {
  let storedData = getCurrentDate() + "Schedule";
  if (localStorage.getItem(storedData)) {
    try {
      return JSON.parse(localStorage.getItem(storedData));
    } catch {
      console.log("Bad format for Schedule");
    }
  } else {
    //build url
    let url =
      process.env.REACT_APP_BASE_URL +
      "/schedules/" +
      getCurrentDate() +
      "/schedules.json";
    url += "?api_key=" + process.env.REACT_APP_API_KEY;
    console.log("fetching", url);
    //url = process.env.REACT_APP_TEST_API;

    let response = await fetch(url);
    console.log("soccer schedule response");
    console.log(response);
    if (response.ok) {
      if (1 == 1) {
        let schedule = await response.json();
        console.log(schedule);
        localStorage.setItem(storedData, JSON.stringify(schedule));

        //return await schedule;
        return await schedule;
      }
      throw response;
    }
  }
}
