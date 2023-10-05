import "./Home.css";
import Cursor from "../Cursor/Cursor";
import Nav from "../Nav/Nav";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Cursor></Cursor>
            <Nav></Nav>
            <SideBar></SideBar>
            <Outlet></Outlet>
        </>
    );
};

export default Home;