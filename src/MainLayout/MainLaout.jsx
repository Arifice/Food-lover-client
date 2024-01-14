import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLaout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLaout;