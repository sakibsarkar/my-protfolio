import "./Nav.css";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>

            <div>
                <nav>
                    <img src="https://i.ibb.co/fY1cNxM/Personal-logo.png" alt="" />
                    <ul>
                        <li><a href="/"><AiFillGithub /></a></li>
                        <li><a href="/"><AiFillFacebook /></a></li>
                        <li><a href="/"><AiFillLinkedin /></a></li>
                        <li><a href="/"><AiOutlineInstagram /></a></li>
                    </ul>
                </nav>
            </div>

            <div className="openSideBar">
                <NavLink className={({ isActive }) => isActive ? "current" : "Links"} to={"/"}>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "current" : "Links"} to={"/projects"}>Projects</NavLink>
                <NavLink className={({ isActive }) => isActive ? "current" : "Links"} to={"/contact"}>Contact</NavLink>
            </div>

        </div>
    );
};

export default Nav;