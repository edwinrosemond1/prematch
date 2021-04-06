import { getCurrentDate } from "./getCurrentDate.js";

export async function getSoccerSchedule() {
  let storedData = getCurrentDate() + "Schedule";
  if (localStorage.getItem(storedData)) {
    try {
      return JSON.parse(localStorage.getItem(storedData));
    } catch {
      console.log("Bad format for Schedule");
    }
  } else {
    // build url
    let response;
    response = await getTest();
    let url =
      "/soccer-t3/eu/en/schedules/" + getCurrentDate() + "/schedules.json";
    url += "?api_key=" + process.env.REACT_APP_API_KEY;
    //console.log(url);
    //url = process.env.REACT_APP_TEST_API;
    url =
      "https://api.sportradar.us/soccer-t3/eu/en/schedules/2021-03-21/schedule.json?api_key=bq4g8trvq6grz8zevvcnu27f";

    // const response = await fetch(
    //   "https://api.sportradar.us/soccer-t3/eu/en/schedules/2021-03-21/schedule.json?api_key=bq4g8trvq6grz8zevvcnu27f"
    // );
    //console.log("soccer schedule response");
    //console.log(response);
    if (response.ok) {
      let schedule = await response.json();
      console.log(schedule);
      localStorage.setItem(storedData, JSON.stringify(schedule));

      return await schedule;
    }
    throw response;
  }
}
async function getTest() {
  console.log("get test is running");
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    header: { "Access-Control-Allow-Origin": "*" },
  };

  fetch(
    "https://api.sportradar.us/soccer-t3/eu/en/schedules/2021-03-21/schedule.json?api_key=bq4g8trvq6grz8zevvcnu27f",
    requestOptions
  )
    .then((response) => {
      let r = response.text();
      console.log("schedule data test");
      console.log(r);
    })
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
