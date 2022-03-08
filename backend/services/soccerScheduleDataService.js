const fetch = require("cross-fetch");
const currentDate = require("./getCurrentDate.js");

cache = {};

async function getSoccerSchedule() {
  let storedData = currentDate.getCurrentDate() + "Schedule";
  if (false) {
    try {
      return JSON.parse(localStorage.getItem(storedData));
    } catch {
      console.log("Bad format for Schedule");
    }
  } else {
    //build url
    let base = "https://api.sportradar.us/soccer-t3/eu/en/";
    let api_key = "bq4g8trvq6grz8zevvcnu27f";
    let url =
      base + "schedules/" + currentDate.getCurrentDate() + "/schedule.json";
    url += "?api_key=" + api_key;
    console.log("fetching", url);
    console.log(cache);
    //url = process.env.REACT_APP_TEST_API;
    if (url in cache) {
      console.log("returning what's in cache");
      return cache[url];
    }
    try {
      let response = await fetch.fetch(url);
    } catch {
      console.log("request failed");
      return await { message: "bad request" };
    }

    console.log("soccer schedule response");
    console.log(response);
    if (response.ok) {
      let schedule = await response.json();
      console.log(schedule);
      cache[url] = schedule;

      //return await schedule;
      return await cache[url];
    } else {
      console.log("bad response");
    }
  }
}

module.exports = { getSoccerSchedule };
