import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";

const MainLaout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLaout;