import "./styles/sidebar.css";

function SidebarLink({ rank, name, points, teamID }) {
  return (
    // <span className="sideBarList" key={teamID}>
    <p>
      <td>{rank} </td>
      <td>{name}</td>
      <td>{points}</td>
    </p>
    // </span>
  );
}
export default SidebarLink;
