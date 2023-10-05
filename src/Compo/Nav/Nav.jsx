import "./Nav.css";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

const Nav = () => {
    return (
        <>

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

        </>
    );
};

export default Nav;