import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useNavigate } from "react-router-dom";




const Services = () => {
    const navigate=useNavigate();    
    const [services,setServices]=useState([]);
    
    useEffect(()=>{
        fetch('https://b8a11-server-side-arifice.vercel.app/home/services')
            .then(res=>res.json())
            .then(result=>{
                setServices(result);
            })
    },[])
    
    const handleShowAll=()=>{
        navigate('/allservices');

    }
    return (
        <div>
            
            <h1 className="text-5xl text-center mt-32 font-bold text-orange-600">Our Services </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    services.slice(0,6).map(servic=><ServiceCard key={servic._id} servic={servic}></ServiceCard>)
                }
            </div>
            <div className="flex justify-center">
            <button onClick={handleShowAll} className="btn btn-secondary text-3xl my-10">Show all</button>
            </div>
        </div>
    );
};

export default Services;