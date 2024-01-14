import About from "../../Components/About/About";
import Bannar from "../../Components/Bannar/Bannar";

import Services from "../Services/Services";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Bannar></Bannar>
            <About></About>
            <Services></Services>
            
        </div>
    );
};

export default Home;