const currentDate = require("./getCurrentDate.js");
const fetch = require("cross-fetch");
var cache = require("./cache/cache.js");

async function getData(url, type) {
  console.log("fetching " + url);
  cacheCheck = url + currentDate.getCurrentDate();
  console.log(cache.keys());
  if (!cache.get(cacheCheck)) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        console.log("response for " + type + " is " + response.statusText);
        // cache.storage.put(cacheCheck, JSON.stringify(data));
        console.log("adding to cache");
        cache.set(cacheCheck, JSON.stringify(data));
        // console.log(JSON.stringify(data));
        return data;
      }
    } catch (err) {
      console.log("Encountered an error", err);
      return response;
    }
    // try {
    //   fetch(url).then((response) => {
    //     if (response.ok) {
    //       let data = response.json();
    //       console.log(data);
    //       console.log("response for " + type + " is " + response.statusText);
    //       // cache.storage.put(cacheCheck, JSON.stringify(data));
    //       console.log("adding to cache");
    //       cache.set(cacheCheck, JSON.stringify(data));
    //       // console.log(JSON.stringify(data));
    //       console.log(cache.keys());
    //       return data;
    //     }
    //   });
    // } catch (err) {
    //   console.log("Encountered an error", err);
    //   return response;
    // }
  } else {
    console.log("cache hit!");
    // return JSON.parse(cache.storage.get(cacheCheck));
    return JSON.parse(cache.get(cacheCheck));
  }
}

module.exports = { getData };
