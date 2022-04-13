import "./styles/sidebar.css";

function SidebarLink({ rank, name, points, key }) {
  return (
    <span className="sideBarList" key={key}>
      {rank} {name}
      <div className="right-fixed">
        <div className="rightCol">{points}</div>
      </div>
    </span>
  );
}
export default SidebarLink;
