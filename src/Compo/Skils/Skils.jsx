import "./Skill.css";
import { BiCodeCurly, BiLogoReact } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { GoFileCode } from "react-icons/go";
import { animation, hideImg } from "./animationsFunc";

const Skils = () => {




    const handleMouseMove = (parent, imgClass) => {
        animation(parent, imgClass)

    }

    return (
        <div className="skillCon">
            <div className="skill HTML" onMouseMove={() => handleMouseMove(".HTML", ".htmlImg")} onMouseLeave={() => hideImg(".htmlImg")}>
                <h1><BsCodeSlash />HTML</h1>
                <p>2 Years of learning experience</p>
                <img className="skillImage htmlImg" src="https://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png" alt="" />

            </div>

            <div className="skill CSS" onMouseMove={() => handleMouseMove(".CSS", ".cssImg")} onMouseLeave={() => hideImg(".cssImg")}>
                <h1><BiCodeCurly />CSS</h1>
                <p>2 Years of learning experience</p>
                <img className="skillImage cssImg" src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" alt="" />

            </div>

            {/* java script */}

            <div className="skill JS" onMouseMove={() => handleMouseMove(".JS", ".jsImg")} onMouseLeave={() => hideImg(".jsImg")}>
                <h1><GoFileCode />JAVA SCRIPT</h1>
                <p>2 Years of learning experience</p>
                <img className="skillImage jsImg" src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />

            </div>

            {/* React */}

            <div className="skill REACT" onMouseMove={() => handleMouseMove(".REACT", ".reactImg")} onMouseLeave={() => hideImg(".reactImg")}>
                <h1><BiLogoReact />REACT </h1>
                <p>Currently at learning stage</p>
                <img className="skillImage reactImg" src="https://static-00.iconduck.com/assets.00/react-icon-1024x911-g24qpic4.png" alt="" />

            </div>
        </div >
    );
};

export default Skils;