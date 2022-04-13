import { useEffect, useState } from "react";
import SidebarLink from "./SidebarLink";

export default function Standings() {
  const [standings, setStandings] = useState();
  useEffect(() => {
    async function init() {
      try {
        // console.log("getting standings");
        const response = await getStandings();
        setStandings(response);
        console.log("standings loaded");
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
      <div style={{ fontSize: ".8em" }} className="sidebar">
        {standings.standings[0].groups[0].standings.map((e) => {
          const obj = e.competitor;
          return (
            <SidebarLink
              rank={e.rank}
              name={obj.name}
              points={e.points}
              key={e.key}
            />
            // <tr key={obj.id}>
            //   <td>{e.rank}</td>
            //   <td style={{ padding: ".3em" }}>{obj.name}</td>
            //   <td>{e.points}</td>
            // </tr>
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
}

async function getStandings() {
  let url = "http://localhost:5000/api/standings";
  let liveStandings = await fetch(url);
  // checking content type to confirm it's json
  // const contentType = liveStandings.headers.get("content-type");
  // console.log(contentType);
  console.log("live standings in function");
  let jsonResult = await liveStandings.json();
  console.log(jsonResult);
  return jsonResult;
}
// async function test() {
//   let url = "http://localhost:5000/api/preMatch";
//   const response = await fetch(url);
//   console.log(response);
// }
