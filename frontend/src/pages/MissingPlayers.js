import { getMissingPlayersService } from "../services/soccerMissingPlayersService.js";
//import { missingPlayers } from "../SoccerData/MissingPlayer.js";
import { useState, useEffect } from "react";

export function MissingPlayers(props) {
  const [missingPlayers, setMissingPlayers] = useState();
  useEffect(() => {
    async function init() {
      const response = await getMissingPlayers(props.teamID);
      setMissingPlayers(response);
    }
    init();
  }, []);
  return (
    <div style={{ marginLeft: "1.5em", marginRight: "1.5em" }}>
      Injuries: {missingPlayers}
    </div>
  );
}

async function getMissingPlayers(teamID) {
  let missingPlayers = await getMissingPlayersService();
  let teamMissingPlayersR = [];
  let teamMissingPlayers = [];
  teamMissingPlayers = missingPlayers.teams.filter((t) => teamID == t.id);

  if (teamMissingPlayers[0] !== undefined) {
    if (teamMissingPlayers[0].players !== undefined) {
      teamMissingPlayers[0].players.forEach((item, index) => {
        teamMissingPlayersR.push(item.name);
        if (index < teamMissingPlayers[0].players.length - 1) {
          teamMissingPlayersR.push(" | ");
        }
      });
    }
  }

  return teamMissingPlayersR;
}
