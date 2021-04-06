import React, { useEffect, useState } from "react";
import { getRecentMatches, getRecentRecord } from "./RecentRecord.js";
import { getMatchProbabilityService } from "../services/soccerProbabilitiesService.js";
import { matchOdds2 } from "../SoccerData/MatchOdds";

export function GameAnalysis(props) {
  const [currentFormScore, setCurrentFormScore] = useState(0);
  const [scoreColor, setScoreColor] = useState("gray");
  const [isMounted, setIsMounted] = useState(true);
  useEffect(() => {
    async function form() {
      try {
        const response = await getCurrentFormScore(
          props.teamID,
          props.teamName
        );
        setCurrentFormScore(response);
        if (isMounted) {
          if (parseInt(currentFormScore) < -0.5) {
            setScoreColor("red");
          } else if (
            parseInt(currentFormScore) > -0.5 &&
            currentFormScore < 0.5
          ) {
            setScoreColor("orange");
          } else if (parseInt(currentFormScore) > 0.5) {
            setScoreColor("green");
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
    form();

    return () => {
      setIsMounted(false);
    };
  }, [currentFormScore]);
  return (
    <div style={{ color: scoreColor }}>
      Pts Dropped/Gained: {currentFormScore}
    </div>
  );
}

async function getMatchProbability(teamName, matchID) {
  let matchProbabilities = await getMatchProbabilityService(matchID);
  matchProbabilities = matchOdds2;

  let winProb, lossProb, tieProb, home;
  let found = matchProbabilities.sport_event.competitors.find(
    (e) => e.name == teamName
  );
  if (found) {
    home = found.qualifier == "home" ? "true" : "false";
  }

  try {
    tieProb =
      matchProbabilities.probabilities.markets[0].outcomes[2].probability;
    matchProbabilities.probabilities.markets[0].outcomes.forEach(
      (item, index) => {
        if (home == "true") {
          if (item.name.includes("home")) {
            winProb = item.probability;
          } else if (item.name.includes("away")) {
            lossProb = item.probability;
          }
        } else {
          if (item.name.includes("home")) {
            lossProb = item.probability;
          } else if (item.name.includes("away")) {
            winProb = item.probability;
          }
        }
      }
    );
  } catch (e) {
    console.log("Error with probability JSON with error " + e);
  }

  return [winProb / 100, lossProb / 100, tieProb / 100];
}

async function getCurrentFormScore(teamID, teamName) {
  let recentMatches = await getRecentMatches(teamID);
  let win, loss, draw, expectedPoints, actualPoints;
  expectedPoints = 0;
  actualPoints = 0;
  for (let i = 0; i < recentMatches.length; i++) {
    [win, loss, draw] = await getMatchProbability(
      teamName,
      recentMatches[i].sport_event.id
    );
    expectedPoints += win * 3 + draw;
  }
  let recentRecord = getRecentRecord(recentMatches, teamID);
  recentRecord.forEach((item, index) => {
    if (item == "W") {
      actualPoints += 3;
    }
    if (item == "D") {
      actualPoints += 1;
    }
  });
  return (actualPoints - expectedPoints).toFixed(2);
}
