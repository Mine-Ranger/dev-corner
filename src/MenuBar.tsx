import { FcLinux } from "react-icons/fc";
import { GoGraph } from "react-icons/go";
import { FaGamepad, FaCode } from "react-icons/fa";
import GameDev from "./pages/GameDev";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-o h-screen w-20 m-0 flex flex-col bg-cyan-700 text-white shadow-lg">
      <SideBarIcon icon={<FaCode size="28" />} text="Web" Path="/web" />
      <SideBarIcon icon={<FaGamepad size="28" />} text="Game" Path="/game" />
      <SideBarIcon icon={<GoGraph size="28" />} text="ML" Path="/ml" />
      <SideBarIcon icon={<FcLinux size="28" />} text="Linux" Path="/linux" />
    </div>
  );
};

const SideBarIcon = ({ icon = <FcLinux />, text = "tooltip", Path = "/" }) => {
  return (
      <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </div>
  );
};

export default SideBar;
