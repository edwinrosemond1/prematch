import { useEffect, useState, useMemo } from "react";
import SidebarLink from "./SidebarLink";
import SidebarLinkTable from "./SidebarLinkTable";

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
  const columns = useMemo(() => [
    {
      Header: "Standings",
      columns: [
        {
          Header: "Rank",
          accessor: "rank",
        },
        {
          Header: "Team",
          accessor: "competitor.name",
        },
        {
          Header: "Points",
          accessor: "points",
        },
      ],
    },
  ]);
  if (standings) {
    console.log("these are the standings");
    console.log(standings);
    return (
      <div style={{ fontSize: ".8em" }} className="sidebar">
        <div className="App">
          <SidebarLinkTable
            columns={columns}
            data={standings.standings[0].groups[0].standings}
          />
        </div>
        {/* <tbody>
            {standings.standings[0].groups[0].standings.map((e) => {
              const obj = e.competitor;
              return (
                <tr>
                  <SidebarLink
                    rank={e.rank}
                    name={obj.name}
                    points={e.points}
                    key={obj.id}
                  />
                </tr>
              );
            })}
          </tbody> */}
        <span> As of {standings.generated_at} </span>
      </div>
    );
  } else {
    return <div></div>;
  }
}

async function getStandings() {
  const url = "/api/standings";
  const liveStandings = await fetch(url);
  const jsonResult = await liveStandings.json();
  console.log(liveStandings);
  return jsonResult;
}
