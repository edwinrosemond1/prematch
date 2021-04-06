import react, { useEffect, useState } from "react";
// import { liveStandings } from "../SoccerData/LiveStandings";
import { getStandingsService } from "../services/soccerStandings";

export default function Standings() {
  const [standings, setStandings] = useState();
  useEffect(() => {
    async function init() {
      try {
        const response = await getStandings();
        setStandings(response);
      } catch (e) {
        console.log(e);
      }
    }
    init();
  }, []);
  if (standings) {
    console.log("these are the standings");
    console.log(standings);
    return (
      <div style={{ fontSize: ".8em" }}>
        <table>
          {standings.standings[0].groups[0].team_standings.map((e) => {
            return (
              <tr key={e.team.id}>
                <td>{e.rank}</td>

                <td style={{ padding: ".3em" }}>{e.team.name}</td>
                <td>{e.points}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  } else {
    return <div></div>;
  }
}

async function getStandings() {
  let liveStandings = await getStandingsService();
  return liveStandings;
}
