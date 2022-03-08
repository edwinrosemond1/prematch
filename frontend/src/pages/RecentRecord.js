import React, { useEffect, useState } from "react";
import { getResults } from "../services/soccerResultsDataServices";
//import { results } from "../SoccerData/Results.js";

export function RecentRecord(props) {
  const [recentRecord, setRecentRecord] = useState();
  useEffect(() => {
    async function init() {
      let recentMatches = await getRecentMatches(props.teamID);
      /* can delete later */
      console.log("these are the recent matches");
      console.log(recentMatches);
      //let recentRecord = getRecentRecord(recentMatches, props.teamID);
    }
    init();
  });

  return <div>blah</div>;
}

export function getRecentRecord(filteredMatches, teamID) {
  let recentRecord = [];
  filteredMatches.forEach(function (item, index) {
    if (item.sport_event_status.winner_id == teamID) {
      recentRecord.unshift("W");
    } else if (item.sport_event_status.winner_id == undefined) {
      recentRecord.unshift("D");
    } else {
      recentRecord.unshift("L");
    }
  });
  return recentRecord;
}

export async function getRecentMatches(teamID) {
  const results = await getResults();
  let matches;
  console.log("results of service");
  console.log(results);

  if (results.results !== undefined) {
    matches = results.results.filter(
      (r) =>
        r.sport_event.competitors[0].id == teamID ||
        r.sport_event.competitors[1].id == teamID
    );
    return matches.slice(matches.length - 5, matches.length);
  }
  return [];
}
