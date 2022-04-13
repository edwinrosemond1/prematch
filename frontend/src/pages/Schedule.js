import React, { useEffect, useState } from "react";
//import { schedule, noGames } from "../SoccerData/ScheduleData.js";
import Game from "./Game.js";
// import { getSoccerSchedule } from "../services/soccerScheduleDataService.js";
import ReactLoading from "react-loading";

const key = process.env.REACT_APP_API_KEY;

export default function Schedule() {
  // change below to schedule when ready
  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function init() {
      // function sleep(ms) {
      //   return new Promise((resolve) => setTimeout(resolve, ms));
      // }
      try {
        const response = await fetch("http://localhost:5000/api/schedule");
        console.log("soccer schedule");
        console.log(response);
        //await sleep(2000);
        setSchedule(response);
      } catch (e) {
        console.log("Error getting schedule" + e);
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);
  if (loading) {
    return (
      <div style={{ margin: "auto", maxWidth: "100px" }}>
        <ReactLoading type="spin" />
      </div>
    );
  }
  if (schedule.message) {
    return <div>No Games Today</div>;
  }
  if (!schedule.sport_events) {
    return <div>Nothing</div>;
  }
  return (
    <div>
      {schedule.sport_events.map((e) => {
        if (e.tournament.name == "Premier League") {
          return (
            <div key={e.competitors[0].id}>
              <Game
                homeTeamID={e.competitors[0].id}
                awayTeamID={e.competitors[1].id}
                homeTeam={e.competitors[0].name}
                awayTeam={e.competitors[1].name}
                matchID={e.id}
                homeTeamName={e.competitors[0].name}
                awayTeamName={e.competitors[1].name}
              />
              -
            </div>
          );
        }
      })}
    </div>
  );
}
