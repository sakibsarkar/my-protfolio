import "./SideBar.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sideBarCon">
            <NavLink className={"sideLinks"} to={"/"}>Home</NavLink>
            <NavLink className={"sideLinks"} to={"/projects"}>Projects</NavLink>
            <NavLink className={"sideLinks"} to={"/contact"}>Contact</NavLink>
            <NavLink className={"sideLinks"} to={"/more"}>Know More About me</NavLink>
        </div>
    );
};

export default SideBar;