import "./HomeContent.css";
import Skils from "../Skils/Skils";

const HomeContent = () => {
    return (
       <div>
        <div className="container">
            <div className="graphic">
                <img src="https://i.ibb.co/1dNmgZz/Untitled-design-removebg-preview.png" alt="" />
            </div>

            <div className="tittle">
                <h1>Nice to meet you ! <br /> <span>I'm Sakib</span></h1>
                <p>Born and raised in Dhaka, Bangladesh.<br />  I'm a frontend developer, passionate about building  <br />web apps that user love to use</p>
            </div>

            <div className="myImg">
                <img src="" alt=""/>
            </div>
        </div>
        <Skils></Skils>
        </div>
    );
};

export default HomeContent;