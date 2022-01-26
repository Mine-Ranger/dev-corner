import { GoGraph } from "react-icons/go";
import { FaGamepad, FaCode, FaTerminal } from "react-icons/fa";
import {NavLink} from "react-router-dom";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-o h-screen w-20 m-0 flex flex-col bg-cyan-700 text-white shadow-lg">
      <SideBarIcon icon={<FaCode size="28" />} text="Web" Path="/web" />
      <SideBarIcon icon={<FaGamepad size="28" />} text="Game" Path="/game" />
      <SideBarIcon icon={<GoGraph size="28" />} text="ML" Path="/ml" />
      <SideBarIcon icon={<FaTerminal size="28" />} text="Command Line" Path="/cli" />
    </div>
  );
};

const SideBarIcon = ({ icon = <FaCode />, text = "tooltip", Path = "/" }) => {
  return (
      <NavLink to={Path} className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </NavLink>
  );
};

export default SideBar;
