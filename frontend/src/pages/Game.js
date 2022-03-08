import React, { useEffect, useState } from "react";
import { liveStandings } from "../SoccerData/LiveStandings.js";
import { RecentRecord } from "./RecentRecord";
import { MissingPlayers } from "./MissingPlayers.js";
import { GameAnalysis } from "./GameAnalysis";

export default function Game(props) {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <section className="col-6 col-12-narrower feature">
            <div style={{ color: "black", textalign: "left" }}>
              <div style={{ fontsize: "3.5em" }}>{props.homeTeam}</div>{" "}
              <RecentRecord teamID={props.homeTeamID} />
              <MissingPlayers teamID={props.homeTeamID} />
              {/* <GameAnalysis
                teamID={props.homeTeamID}
                teamName={props.homeTeamName}
              /> */}
            </div>
          </section>
          <section className="col-6 col-12-narrower feature">
            <div style={{ textalign: "right", color: "black" }}>
              {/* {props.awayTeam} <RecentRecord teamID={props.awayTeamID} /> */}
              <div style={{ fontsize: "2px" }}>
                {" "}
                <MissingPlayers teamID={props.awayTeamID} />
              </div>
              {/* <GameAnalysis
                teamID={props.awayTeamID}
                teamName={props.awayTeamName}
              /> */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function getStandings(teamID) {
  //let liveStandings = getStandingsService();
  let rank;
  let team = liveStandings.standings[0].groups[0].team_standings.find(
    (e) => e.team.id == teamID
  );
  // return points
  rank = team.points;
  return rank;
}
